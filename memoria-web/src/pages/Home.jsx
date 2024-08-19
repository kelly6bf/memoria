import React from "react";
import {Link} from "react-router-dom";

export default function Home() {
  return (
    <>
      <h1>
        This is Home Page! 🥰
      </h1>
      <div>
        <Link to={"/"}>Home</Link>
        <Link to={"/diaries/new"}>New Diary</Link>
      </div>
    </>
  );
}
