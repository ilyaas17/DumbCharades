import React, { useRef, useState } from "react";
import style from "./Home.module.css";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
export default function Home() {
  const [name, setName] = useState("");
  const inputRef = useRef();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) {
      inputRef.current.focus();
      return;
    }
    localStorage.setItem("name", name);
    setName("");
    navigate("/game");
  };
  return (
    <div className={style.main}>
    <div className={style.heading}>Dumcharads....</div>
    <div className={style.home}>
      <div className={style.card}>
        <form>
          <div className={style.usernameLabel}>Username</div>
          <input
            type="text"
            value={name}
            className={style.usernameInput}
            onChange={(e) => setName(e.target.value)}
            ref={inputRef}
          />
          <Button name={"Let's Go"} handler={handleSubmit} />
        </form>
      </div>
    </div>
    </div>
    
  );
}