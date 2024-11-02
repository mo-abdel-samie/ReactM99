import MainLayout from "../layouts/MainLayout";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function AboutUser() {
  const [user, setUser] = useState(null);
  const { userId } = useParams();

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/users/${userId}`)
      .then((res) => res.data)
      .then((data) => setUser(data));
  }, []);

  return (
    <MainLayout>
      {user && (
        <div>
          <img src={user.image} />
          <h1>
            User Name: {user.firstName} {user.maidenName} {user.lastName}
          </h1>
          <p>Age: {user.age}</p>
          <p>Gender: {user.gender}</p>
        </div>
      )}
    </MainLayout>
  );
}
