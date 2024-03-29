import React, { useState } from 'react';
import  Logo  from '../assets/Spotify_Logo.png';
import { Link } from 'react-router-dom';

export default function SidebarComponent({setResults}) {

    let headers = new Headers({
        // sets the headers
        'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
        'X-RapidAPI-Key': '9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0',
      })

    const [search, setSearch ] = useState("Metallica");
    

    function searchFetch(){
        fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${search}`, {
            method: 'GET',
            headers,
          })
        .then(response => response.json())
        .then(json => {
            console.log(json.data);
            setResults(json.data);
        })
        .catch(console.error)
    }

    //fare il search con 'Enter'
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
          searchFetch();
        }
      };



  return (
    <>
     <div className="col-2">
      <nav className="navbar navbar-expand-md navbar-white bg-navbar fixed-left justify-content-between" id="sidebar">
        <div className="nav-container">
        <Link to="/" > 
          <a className="navbar-brand" href="index.html">
            <img src={Logo} alt="Spotify_Logo" width="131" height="40" />
          </a>
        </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <ul>
                <li>
                <Link to="/" > 
                  <a className="nav-item nav-link" href="index.html">
                    <i className="fas fa-home fa-lg"></i>&nbsp; Home
                  </a>
                </Link>
                </li>
                <li>
                  <a className="nav-item nav-link" href="#">
                    <i className="fas fa-book-open fa-lg"></i>&nbsp; Your Library
                  </a>
                </li>
                <li>
                  <div className="input-group mt-3">
                    <input
                      type="text"
                      className="form-control mb-2"
                      id="searchField"
                      placeholder="Search"
                      aria-label="Search"
                      aria-describedby="basic-addon2"
                      value={search}
                      onChange={(e)=>setSearch(e.target.value)}
                      onKeyDown={handleKeyPress}
                    />
                    <div className="input-group-append" style={{ marginBottom: '4%' }}>
                      <Link to="/">
                      <button
                        className="btn btn-outline-secondary btn-sm"
                        type="button"
                        id="button-addon1"
                         onClick={() => searchFetch()}
                      >
                        GO
                      </button>
                      </Link>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="nav-btn">
          <button className="btn signup-btn" type="button">Sign Up</button>
          <button className="btn login-btn" type="button">Login</button>
          <a href="#">Cookie Policy</a> |
          <a href="#"> Privacy</a>
        </div>
      </nav>
    </div>
    
    </>
  )
}
