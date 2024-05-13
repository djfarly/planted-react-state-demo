import { useState } from "react";

export function AvoidRedundantStateBad() {
  const [user, setUser] = useState({ name: "Alex", age: 28 });
  const [isAdult, setIsAdult] = useState(user.age >= 18);

  return (
    <>
      <div>
        <h1>User Info</h1>
        <p>Name: {user.name}</p>
        <p>Age: {user.age}</p>
        <p>Adult: {isAdult ? "Yes" : "No"}</p>
      </div>
      <button onClick={() => setUser({ ...user, name: "John" })}>
        Change Name
      </button>
      <button onClick={() => setUser({ ...user, age: 15 })}>
        Change Age to 15
      </button>
      <button onClick={() => setIsAdult(user.age >= 18)}>Re-Check Adult</button>
    </>
  );
}

export function AvoidRedundantStateGood() {
  const [user, setUser] = useState({ name: "Alex", age: 28 });
  const isAdult = user.age >= 18;

  return (
    <>
      <div>
        <h1>User Info</h1>
        <p>Name: {user.name}</p>
        <p>Age: {user.age}</p>
        <p>Adult: {isAdult ? "Yes" : "No"}</p>
      </div>
      <button onClick={() => setUser({ ...user, name: "John" })}>
        Change Name
      </button>
      <button onClick={() => setUser({ ...user, age: 15 })}>
        Change Age to 15
      </button>
    </>
  );
}
