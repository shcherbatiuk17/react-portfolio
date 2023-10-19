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
            Weird
          </NavLink>
        </li>
        <li>
          <NavLink style={uglyStyles.link} className="ugly-link" to="/ugly-portfolio">
            Bizarre
          </NavLink>
        </li>
        <li>
          <NavLink style={uglyStyles.link} className="ugly-link" to="/ugly-resume">
            Strange
          </NavLink>
        </li>
        <li>
          <NavLink style={uglyStyles.link} className="ugly-link" to="/ugly-contact">
            Odd
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
