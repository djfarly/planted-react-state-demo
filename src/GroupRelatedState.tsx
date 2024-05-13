import { useState } from "react";

export function GroupRelatedStateMeh() {
  const [userName, setUserName] = useState("Alex");
  const [userAge, setUserAge] = useState(28);
  const [userAddress, setUserAddress] = useState("123 Main St");
  const [userCity, setUserCity] = useState("Anytown");
  const [userState, setUserState] = useState("CA");
  const [userZip, setUserZip] = useState("12345");
  const [userPhone, setUserPhone] = useState("555-555-5555");
  const [userEmail, setUserEmail] = useState("alex@example.com");

  return (
    <>
      <div>
        <h1>User Info</h1>
        <p>Name: {userName}</p>
        <p>Age: {userAge}</p>
        <p>Address: {userAddress}</p>
        <p>City: {userCity}</p>
        <p>State: {userState}</p>
        <p>Zip: {userZip}</p>
        <p>Phone: {userPhone}</p>
        <p>Email: {userEmail}</p>
      </div>
      <button onClick={() => setUserName("John")}>Change Name</button>
      <button onClick={() => setUserAge(30)}>Change Age</button>
      <button onClick={() => setUserAddress("456 Elm St")}>
        Change Address
      </button>
      <button onClick={() => setUserCity("Othertown")}>Change City</button>
      <button onClick={() => setUserState("NY")}>Change State</button>
      <button onClick={() => setUserZip("54321")}>Change Zip</button>
      <button onClick={() => setUserPhone("555-555-1234")}>Change Phone</button>
      <button onClick={() => setUserEmail("john@example.com")}>
        Change Email
      </button>
    </>
  );
}

export function GroupRelatedStateBetter() {
  const [user, setUser] = useState({
    name: "Alex",
    age: 28,
    address: "123 Main St",
    city: "Anytown",
    state: "CA",
    zip: "12345",
    phone: "555-555-5555",
    email: "alex@example.com",
  });

  return (
    <>
      <div>
        <h1>User Info</h1>
        <p>Name: {user.name}</p>
        <p>Age: {user.age}</p>
        <p>Address: {user.address}</p>
        <p>City: {user.city}</p>
        <p>State: {user.state}</p>
        <p>Zip: {user.zip}</p>
        <p>Phone: {user.phone}</p>
        <p>Email: {user.email}</p>
      </div>
      <button onClick={() => setUser({ ...user, name: "John" })}>
        Change Name
      </button>
      <button onClick={() => setUser({ ...user, age: 30 })}>Change Age</button>
      <button onClick={() => setUser({ ...user, address: "456 Elm St" })}>
        Change Address
      </button>
      <button onClick={() => setUser({ ...user, city: "Othertown" })}>
        Change City
      </button>
      <button onClick={() => setUser({ ...user, state: "NY" })}>
        Change State
      </button>
      <button onClick={() => setUser({ ...user, zip: "54321" })}>
        Change Zip
      </button>
      <button onClick={() => setUser({ ...user, phone: "555-555-1234" })}>
        Change Phone
      </button>
      <button onClick={() => setUser({ ...user, email: "john@example.com" })}>
        Change Email
      </button>
    </>
  );
}
