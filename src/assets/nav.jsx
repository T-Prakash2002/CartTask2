import React from "react"

const Nav=({count})=>{
    return(
    <nav className="navbar navbar-expand-lg bg-danger-subtle fixed-top">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">
        <strong>
          SHOPPING
        </strong></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">About</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Shop
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">All Products</a></li><hr className="dropdown-divider"/>
              <li><a className="dropdown-item" href="#">Popular Items</a></li>
              <li></li>
              <li><a className="dropdown-item" href="#">New Arrivals</a></li>
            </ul>
          </li>
          
        </ul>


          <button className="btn btn-outline-dark" type="submit"><i className="bi bi-cart-fill"></i>  Cart  {count}</button>

      </div>
      
    </div>
  </nav>
    )
}

export default Nav;