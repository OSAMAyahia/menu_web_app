import { useState } from "react";

const NAVBAR=({filtersearch})=>{
    const [data,setdata]= useState('')
    const filtersearchs=(e )=>{
        e.preventDefault()
        filtersearch(data);
        setdata('');
    }
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container">
    <a className="navbar-brand" href="#home">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#home">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#home">Link</a>
        </li>
       
         
      </ul>
      <form className="d-flex" role="search" onSubmit={filtersearchs}>
        <input value={data} onChange={(e)=>setdata(e.target.value)} className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-light" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    )
}

export default NAVBAR;