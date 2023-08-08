import React,{useState} from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { AiFillCode } from "react-icons/ai";
import { BiMenuAltRight } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";
// import { useState } from 'react'

const Navbar = () => {
    const [ Click,SetClick]=useState(false)
    const [color ,Setcolor]=useState(false)
    const changeColor =()=>{
      if(window.scrollY >=100){
        Setcolor(true)
      }else{
        Setcolor(false)
      }
    };
    window.addEventListener("scroll",changeColor)
    const handleClick =()=>SetClick(!Click)
  return (
    <div className={color ? "header header-bg":"header"}>
      <Link to="/">  <AiFillCode size={40} />
      <span>
        <b>Project</b>Ninja
      </span></Link>
      <ul className={Click ? "nav-menu active":"nav-menu"}>
      <li>
      <Link to='/'>Home</Link>
      </li>
      <li>
      <Link to='/'>Project</Link>
      </li>
      <li>
      <Link to='/'>About us</Link>
      </li>
      <li>
      <Link to='/'>Contact us</Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link loginButton" to="/login">
        Login
      </Link>
      </li>
      </ul>
      <div 
       className={Click ?"menubar rotate":"menubar"} onClick={handleClick }>
       {Click ?  <IoMdClose size={40}  /> : <BiMenuAltRight size={40} />}
      </div>
    </div>
  )
}

export default Navbar