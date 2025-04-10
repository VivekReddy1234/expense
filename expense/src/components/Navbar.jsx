import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ detail }) => {
  const navigate= useNavigate();
  console.log(detail);
  return (
    <div className="m-0 p-0 h-[50px] flex flex-col pt-3 border text-white bg-gray-900">
      <ul className="flex gap-[30px]">
        <li> Expense Tracker</li>
        <li onClick={()=>{
          navigate("/");
        }}>Home</li>
        {detail ? (
          <>
            <li><Link to='/addExpense'>Add Expense  </Link></li>
            <DropDown userName={detail.name} />
            
          </>
        ) : (<>
            <li><Link to='/signup'>Create Account</Link></li>
          <li><Link to="/login">Sign In</Link> </li>
          </>
        )}
      </ul>
    </div>
  );
};

const DropDown = ({ userName }) => {
  const [open, setOpen] = useState(false);
  const navigate= useNavigate();

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleLogout = async () => {
    console.log("function approached");
    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/user/logout`, {
        method: "GET",
        credentials: "include", // Ensure cookies are sent with the request
      });
  
      console.log(response);
  
      if (response.ok) {
        navigate('/');
        window.location.reload(); // Refresh page after logout
      }
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };
  

  return (
    <div>
      <button onClick={handleClick}>{userName}</button>
      {open && (
        <div>
          <ul>
            <li className="text-black"><button onClick={handleLogout}>LogOut</button></li>
            <li>Some button</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
