import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import profilePic from '../images/profile-pic.jpeg';

class Home extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="header">
          <div className="header-container">
            <img
              className="profile-pic"
              alt="Author's profile picture"
              data-testid="profile-pic"
              src={profilePic}
            />
            <Link to="/about" className="profile-name">
              <h1>Bruno Nogueira</h1>
            </Link>
          </div>
        </header>
  
        <>
          <NavBar />
        </>
      </div>
    )
  }
}

export default Home;
