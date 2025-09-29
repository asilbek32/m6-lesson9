import axios from "axios";
import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
function Register() {
  const nameRef = useRef();
  const usernameRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    const register = {
      name: nameRef.current.value,
      username: usernameRef.current.value,
      password: passwordRef.current.value,
      createdAt: Date.now,
    };

    axios({
      url: `https://68d91c8f90a75154f0d99101.mockapi.io/users`,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: register,
    })
      .then((res) => console.log(res.data))
      .catch((error) => console.log(error));

    nameRef.current.value = "";
    usernameRef.current.value = "";
    passwordRef.current.value = "";
    navigate("/login");
  };

  return (
    <div className="flex flex-col gap-6 shadow max-w-[70%] m-auto mt-[100px] p-3">
      <form onSubmit={submit} className="flex flex-col  items-center gap-4">
        <input
          ref={nameRef}
          type="text"
          placeholder="Name"
          name="name"
          className="outline-none border-1 border-gray-300 rounded p-1 w-[70%]"
        />
        <input
          ref={usernameRef}
          type="text"
          placeholder="Username"
          name="username"
          className="outline-none border-1 border-gray-300 rounded p-1 w-[70%]"
        />
        <input
          ref={passwordRef}
          type="text"
          placeholder="Name"
          name="password"
          className="outline-none border-1 border-gray-300 rounded p-1 w-[70%]"
        />
        <button className="bg-blue-500 text-white  rounded-[10px] w-[30%] h-[30px] cursor-pointer">
          Ruyhatdan utish
        </button>
      </form>
      <div className="flex justify-center gap-3">
        <p className="text-[18px] text-gray-600">Agar profilingiz bulsa </p>
        <p className="font-bold hover:text-blue-700">
          <Link to={"/login"}>Kirsih</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
