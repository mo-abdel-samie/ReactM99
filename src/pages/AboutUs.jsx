import MainLayout from "../layouts/MainLayout";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function AboutUs() {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/users")
      .then((res) => res.data)
      .then((data) => setUsers(data.users));
  }, []);

  return (
    <MainLayout>
      <h1>About Us Page</h1>
      <ul>
        {!users && <p>Loading...</p>}
        {users &&
          users.map((user, i) => (
            <li key={i}>
              {`User${user.id} Name: ${user.firstName} ${user.lastName}`}
              <Link to={`/about/${user.id}`}>More details</Link>
            </li>
          ))}
      </ul>
    </MainLayout>
  );
}
