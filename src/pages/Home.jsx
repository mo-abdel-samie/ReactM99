import axios from "axios";
import Navbar from "../components/Navbar";
import MainLayout from "../layouts/MainLayout";
import { useEffect, useState } from "react";

export default function Home() {
  // let userName = "Mohamed";
  const [userName, setUserName] = useState("Mohamed");

  useEffect(() => {
    axios
      .get("https://dummyjson.com/users")
      .then((res) => res.data)
      .then((data) => console.log(data.users[0].firstName));
  }, [userName]);

  const changeName = () => {
    // userName = "Mossaab";
    setUserName("Mossaab");
    console.log(userName);
  };

  return (
    <MainLayout>
      <h1>Home Page {userName}</h1>
      <input
        onKeyDown={(e) => {
          setUserName(e.target.value);
        }}
      />
      <button onClick={changeName}>Change name</button>
    </MainLayout>
  );
}
