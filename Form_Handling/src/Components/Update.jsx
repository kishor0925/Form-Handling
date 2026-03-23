import React, { useEffect, useState } from "react";

const Update = () => {
  const [userdata, setUserDatas] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5222/getdata")
      .then((res) => res.json())
      .then((data) => setUserDatas(data))
      .catch((err) => console.log(err.message));
  }, []);

  
  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Update Page</h1>

      <table className="table table-striped table-hover table-bordered shadow">
        <thead className="table-dark">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Email</th>
            <th scope="col">Tel</th>
            {/* <th scope="col">Actions</th> */}
          </tr>
        </thead>

        <tbody>
          {userdata.map((user, index) => (
            <tr key={index}>
              <th scope="row">{user.name}</th>
              <td>{user.age}</td>
              <td>{user.email}</td>
              <td>{user.tel}</td>
              {/* <td>
                <button className="btn btn-info m-2">Update</button>
                <button className="btn btn-danger m-2" onClick={handleDelete}>Remove</button>
              </td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Update;
