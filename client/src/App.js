import React, { useEffect, useState } from "react";
import Background from "./components/background";

const App = () => {
  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/users`);
        const data = await response.json();
        setBackendData(data);
      } catch (error) {
        console.error("Error: ", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <Background />
      {/* {backendData.map((user) => (
        <div key={user.id}>
          <p>{user.name}</p>
          <p>{user.id}</p>
          <p>{user.email}</p>
          <p>{user.age}</p>
          <p>{user.isActive === true ? "Active" : "Inactive"}</p>
        </div> 
      ))}*/}
    </div>
  );
};

export default App;
