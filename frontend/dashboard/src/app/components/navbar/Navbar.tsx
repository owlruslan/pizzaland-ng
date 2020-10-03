import React, {FC} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.scss';

export const Navbar: FC = () => (
    <nav>
      <ul>
        <li>
          <Link to="/">Dashboard</Link>
        </li>
        <li>
          <Link to="/inbox">Inbox</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
      </ul>
    </nav>
);
