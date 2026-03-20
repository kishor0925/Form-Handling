import React, { useEffect, useState } from "react";

const Update = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    //get data
    fetch("http://localhost:5666/getdata")
      .then((data) => data.json())
      .then((res) => setUsers(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container">
      <table className="table table-primary">
          
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Age</th>
                <th scope="col">Email</th>
                <th scope="col">Tel</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index}>
                  <td scope="row">{user.name}</td>
                  <td scope="row">{user.age}</td>
                  <td scope="row">{user.email}</td>
                  <td scope="row">{user.tel}</td>
                </tr>
              ))}
            </tbody>
          
      </table>
    </div>
  );
};

export default Update;
