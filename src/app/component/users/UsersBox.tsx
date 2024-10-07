import {
  faArrowDown,
  faArrowUp,
  faCircleInfo,
  faPlus,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import "./usersStyle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";

export default function UsersBox() {
  const [users, setUsers]: any = useState([]);
  const { data } = useSession();

  console.log("data session nihh => ", data);

  useEffect(() => {
    // if (!session?.token) {
    //   console.log("No session token available");
    //   return; // Keluar lebih awal jika tidak ada token
    // }
    const fetchUsers = async () => {
      console.log("Token bosz => ", data);
      // const token = session?.
      // const users = await axios.get("/api/users", { headers: {
      //   Authorization: `Bearer ${}`
      // } });
      try {
        console.log("masuk jihh users => ", users.data);
        setUsers(users.data);
      } catch (error) {
        console.log("error when fetch users");
        return null;
      }
    };

    fetchUsers();
  }, [setUsers]);

  console.log("users nihh bosz => ", users);

  return (
    <main className="container-users">
      <h1>Users</h1>
      <p>This is data of Users</p>
      <div className="container-table">
        <section className="add-user">
          <FontAwesomeIcon icon={faPlus} className="icon-plus" />
          <p>Add</p>
        </section>
        <section className="table">
          <div className="table-wrapper">
            <div className="input-data">
              <p>Show</p>
              <input title="show-data" type="number" name="show-data" id="" />
              <p>entries</p>
            </div>
            <div className="input-search">
              <p>Search: </p>
              <input title="search" type="text" name="search" id="" />
            </div>
          </div>
          <table>
            <tr>
              <th>
                <h3>User ID</h3>
                <div className="icon-thead">
                  <FontAwesomeIcon icon={faArrowUp} />
                  <FontAwesomeIcon icon={faArrowDown} />
                </div>
              </th>
              <th>
                <h3>Email</h3>
                <div className="icon-thead">
                  <FontAwesomeIcon icon={faArrowUp} />
                  <FontAwesomeIcon icon={faArrowDown} />
                </div>
              </th>
              <th>
                <h3>Name</h3>
                <div className="icon-thead">
                  <FontAwesomeIcon icon={faArrowUp} />
                  <FontAwesomeIcon icon={faArrowDown} />
                </div>
              </th>
              <th>
                <h3>Role</h3>
                <div className="icon-thead">
                  <FontAwesomeIcon icon={faArrowUp} />
                  <FontAwesomeIcon icon={faArrowDown} />
                </div>
              </th>
              <th>
                <h3>Actions</h3>
              </th>
            </tr>
            {/* {users.map((user: any, index: any) => (
              <tr key={user.id}>
                <td>{index + 1}</td>
                <td>{user.email}</td>
                <td>{user.name}</td>
                <td>{user.role}</td>
                <td>
                  <div className="logo">
                    <FontAwesomeIcon icon={faCircleInfo} />
                    <FontAwesomeIcon icon={faTrash} />
                  </div>
                </td>
              </tr>
            ))} */}
            <tr>
              <th>
                <h3>User ID</h3>
              </th>
              <th>
                <h3>Email</h3>
              </th>
              <th>
                <h3>Name</h3>
              </th>
              <th>
                <h3>Role</h3>
              </th>
              <th>
                <h3>Actions</h3>
              </th>
            </tr>
          </table>
          <div className="info-end">
            <p>showing NUMBER to NUMBER of NUMBER entries</p>
          </div>
        </section>
      </div>
    </main>
  );
}
