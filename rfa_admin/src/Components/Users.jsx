import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Users() {
  const [users, setUsers] = useState([]);
  let i = 1;
  useEffect(() => {
    getUsers();
  }, []);
  const getUsers = async () => {
    const res = await axios.get("http://localhost:1122/rfa/user");
    setUsers(res.data);
    console.log(res.data);
  };
  const deleteUsers = async (id) => {
    let ans = window.confirm("are you sure?");
    if (ans) {
      const res = await axios.delete("http://localhost:1122/rfa/user/" + id);
      console.log(res.data);
      alert(res.data);
      getUsers();
    }
  };
  return (
    <div>
      <main id="main" class="main">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">users</h5>

            <button class="button-39" role="button">
              <Link to={`/Add_users/`}>Add users</Link>
            </button>

            <table class="table table-borderless">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Seller Name</th>
                  <th scope="col">Contact</th>
                  <th scope="col">Email</th>
                  <th scope="col">Address</th>
                </tr>
              </thead>
              <tbody>
                {users.map((users) => (
                  <tr>
                    <th scope="row">{i++}</th>
                    <td>{users.user_name}</td>
                    <td>{users.phone1}</td>
                    <td>{users.user_email}</td>
                    {/* <td>{users.users_address}</td> */}
                    <td>
                      <button class="button-39" role="button">
                        <Link to={`/Add_users/` + users.user_id}>Edit</Link>
                      </button>
                      &nbsp; &nbsp; &nbsp;
                      <button
                        onClick={() => deleteUsers(users.user_id)}
                        class="button-40"
                        role="button"
                      >
                        DELETE
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
