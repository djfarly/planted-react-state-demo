import { useEffect, useState, useSyncExternalStore } from "react";

export function AvoidDuplicationInState3Bad() {
  const [trees, setTrees] = useState([
    { id: 0, name: "Oak", height: 7.5 },
    { id: 1, name: "Beech", height: 6 },
    { id: 2, name: "Pine", height: 10 },
  ]);

  const [treeFilterMinHeight, setTreeFilterMinHeight] = useState(() => {
    const url = new URL(window.location.href);
    return url.searchParams.get("minHeight") ?? "10";
  });

  const filteredTrees = trees.filter(
    (tree) => tree.height < Number.parseInt(treeFilterMinHeight, 10)
  );

  useEffect(() => {
    // update the URL Search Param
    const url = new URL(window.location.href);
    url.searchParams.set("minHeight", treeFilterMinHeight.toString());
    window.history.pushState({}, "", url.toString());
  }, [treeFilterMinHeight]);

  return (
    <>
      <div>
        <h1>
          Filtered Trees ({filteredTrees.length} trees shorter than{" "}
          {treeFilterMinHeight})
        </h1>
        {filteredTrees.map((tree) => (
          <div
            key={tree.id}
            style={{
              border: "1px solid black",
              padding: "10px",
              margin: "10px",
            }}
          >
            <p>Name: {tree.name}</p>
            <p>Height: {tree.height}</p>
          </div>
        ))}
      </div>
      <button onClick={() => setTreeFilterMinHeight("7")}>
        only show trees taller than 7
      </button>
      <button
        onClick={() => {
          setTrees((prevTrees) =>
            prevTrees.map((tree) =>
              tree.name === "Beech" ? { ...tree, height: 12 } : tree
            )
          );
        }}
      >
        Change Beech Height to 12
      </button>
    </>
  );
}

export function AvoidDuplicationInState3SomeOtherComponent() {
  return (
    <button
      style={{
        margin: "10px",
        display: "block",
      }}
      onClick={() => {
        const url = new URL(window.location.href);
        url.searchParams.set("minHeight", "10");
        window.history.pushState({}, "", url.toString());
      }}
    >
      only show trees taller than 10
    </button>
  );
}

export function AvoidDuplicationInState3Good() {
  const [trees, setTrees] = useState([
    { id: 0, name: "Oak", height: 7.5 },
    { id: 1, name: "Beech", height: 6 },
    { id: 2, name: "Pine", height: 10 },
  ]);

  const [treeFilterMinHeight, setTreeFilterMinHeight] = useUrlSearchParamState(
    "minHeight",
    "10"
  );

  const filteredTrees = trees.filter(
    (tree) => tree.height < Number.parseInt(treeFilterMinHeight, 10)
  );

  return (
    <>
      <div>
        <h1>
          Filtered Trees ({filteredTrees.length} trees shorter than{" "}
          {treeFilterMinHeight})
        </h1>
        {filteredTrees.map((tree) => (
          <div
            key={tree.id}
            style={{
              border: "1px solid black",
              padding: "10px",
              margin: "10px",
            }}
          >
            <p>Name: {tree.name}</p>
            <p>Height: {tree.height}</p>
          </div>
        ))}
      </div>
      <button onClick={() => setTreeFilterMinHeight("7")}>
        only show trees taller than 7
      </button>
      <button
        onClick={() => {
          setTrees((prevTrees) =>
            prevTrees.map((tree) =>
              tree.name === "Beech" ? { ...tree, height: 12 } : tree
            )
          );
        }}
      >
        Change Beech Height to 12
      </button>
    </>
  );
}

function useUrlSearchParamState(param: string, defaultValue: string) {
  function subscribe(callback: (value: string) => void) {
    function handleNavigate() {
      // console.log("handleNavigate");
      const url = new URL(window.location.href);
      // console.log(url.searchParams.get(param) ?? defaultValue);
      callback(url.searchParams.get(param) ?? defaultValue);
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).navigation.addEventListener(
      "navigatesuccess",
      handleNavigate
    );

    return () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window as any).navigation.removeEventListener(
        "navigatesuccess",
        handleNavigate
      );
    };
  }

  function getSnapshot() {
    const url = new URL(window.location.href);
    return url.searchParams.get(param) ?? defaultValue;
  }

  const value = useSyncExternalStore(subscribe, getSnapshot);
  const setValue = (value: string | undefined) => {
    // update the URL
    const url = new URL(window.location.href);
    url.searchParams.set(param, value ?? "");
    window.history.pushState({}, "", url.toString());
  };
  return [value, setValue] as const;
}
