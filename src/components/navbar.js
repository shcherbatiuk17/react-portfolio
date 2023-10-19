import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const uglyStyles = {
  navbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    backgroundColor: 'pink',
    padding: '10px',
  },
  list: {
    listStyle: 'none',
    display: 'flex',
    gap: '2rem',
    fontSize: '24px',
    color: 'lime',
  },
  link: {
    borderColor: 'transparent',
    padding: '.6rem',
    color: 'purple',
  },
};

export default function Navbar() {
  return (
    <nav style={uglyStyles.navbar} className="ugly-container">
      <ul style={uglyStyles.list}>
        <li>
          <NavLink style={uglyStyles.link} className="ugly-link" to="/">
            Not your Home
          </NavLink>
        </li>
        <li>
          <NavLink style={uglyStyles.link} className="ugly-link" to="/portfolio">
             I have no Portfolio 
          </NavLink>
        </li>
        <li>
          <NavLink style={uglyStyles.link} className="ugly-link" to="/resume">
            My amazing resume
          </NavLink>
        </li>
        <li>
          <NavLink style={uglyStyles.link} className="ugly-link" to="/contact">
            Do not connect me ever
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

// Placeholder for NavLink
function NavLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "ugly-active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
