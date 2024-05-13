import { useState } from "react";

export function AvoidDuplicationInState2Bad() {
  const [trees, setTrees] = useState([
    { id: 0, name: "Oak", height: 7.5 },
    { id: 1, name: "Beech", height: 6 },
    { id: 2, name: "Pine", height: 10 },
  ]);

  const [filteredTrees, setFilteredTrees] = useState(
    trees.filter((tree) => tree.height < 10)
  );

  return (
    <>
      <div>
        <h1>Filtered Trees</h1>
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
      <button
        onClick={() =>
          setFilteredTrees(trees.filter((tree) => tree.height < 7))
        }
      >
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

export function AvoidDuplicationInState2Good() {
  const [trees, setTrees] = useState([
    { id: 0, name: "Oak", height: 7.5 },
    { id: 1, name: "Beech", height: 6 },
    { id: 2, name: "Pine", height: 10 },
  ]);

  const [treeFilterMinHeight, setTreeFilterMinHeight] = useState(10);

  const filteredTrees = trees.filter(
    (tree) => tree.height < treeFilterMinHeight
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
      <button onClick={() => setTreeFilterMinHeight(7)}>
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
