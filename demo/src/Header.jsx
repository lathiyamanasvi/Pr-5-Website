import React from 'react'
import { IoSearch } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";

function Header() {
  return (
<nav className="navbar navbar-expand-lg navbar-light" style={{zIndex:"5",position: 'absolute', top:'0',display:"block",width:"100%"}}>
  <div className="container">
    <a className="navbar-brand" href="#"><img src='https://htmldemo.net/bakerfresh/bakerfresh/assets/images/logo-white.svg'/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active text-white fw-bold px-4" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active  text-white fw-bold" aria-current="page" href="#">Shop</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active  text-white fw-bold px-4" aria-current="page" href="#">Pages</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active  text-white fw-bold" aria-current="page" href="#">Blog</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active text-white fw-bold px-4" aria-current="page" href="#">Contact</a>
        </li>
      </ul>
      <div className='text-white fs-5 d-flex justify-content-between'>
      <IoSearch />
      <i class="fa-solid fa-cart-shopping px-3"></i>
      <FaRegUser />
      </div>
    </div>
  </div>
</nav>

  )
}

export default Header;