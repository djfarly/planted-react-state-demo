import { useState } from "react";

export function AvoidDuplicationInStateBad() {
  const [trees, setTrees] = useState([
    { id: 0, name: "Oak", height: 7.5 },
    { id: 1, name: "Beech", height: 6 },
    { id: 2, name: "Pine", height: 10 },
  ]);

  const [selectedTree, setSelectedTree] = useState(
    trees.find((tree) => tree.id === 0)
  );

  return (
    <>
      <div>
        <h1>Tree Info</h1>
        <p>Name: {selectedTree!.name}</p>
        <p>Height: {selectedTree!.height}</p>
      </div>
      <button
        onClick={() => setSelectedTree(trees.find((tree) => tree.id === 0))}
      >
        Select Oak
      </button>
      <button
        onClick={() => setSelectedTree(trees.find((tree) => tree.id === 1))}
      >
        Select Beech
      </button>
      <button
        onClick={() => setSelectedTree(trees.find((tree) => tree.id === 2))}
      >
        Select Pine
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

export function AvoidDuplicationInStateGood() {
  const [trees, setTrees] = useState([
    { id: 0, name: "Oak", height: 7.5 },
    { id: 1, name: "Beech", height: 6 },
    { id: 2, name: "Pine", height: 10 },
  ]);

  const [selectedTreeId, setSelectedTreeId] = useState(0);

  const selectedTree = trees.find((tree) => tree.id === selectedTreeId);

  return (
    <>
      <div>
        <h1>Tree Info</h1>
        <p>Name: {selectedTree!.name}</p>
        <p>Height: {selectedTree!.height}</p>
      </div>
      <button onClick={() => setSelectedTreeId(0)}>Select Oak</button>
      <button onClick={() => setSelectedTreeId(1)}>Select Beech</button>
      <button onClick={() => setSelectedTreeId(2)}>Select Pine</button>
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
