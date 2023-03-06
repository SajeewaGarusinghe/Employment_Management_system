import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Dashboard</Link>
        </li>
        <li>
          <Link to="/form">Form</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
