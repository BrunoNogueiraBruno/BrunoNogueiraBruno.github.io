import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  render() {
    return (
      <section className="nav" data-testid="nav-bar">
        <Link to="/contact" className="nav-links"><div>CONTATO</div></Link>
        <div className="separator"></div>
        <Link to="/projects" className="nav-links"><div>PROJETOS</div></Link>
      </section>
    )
  }
}

export default NavBar;
