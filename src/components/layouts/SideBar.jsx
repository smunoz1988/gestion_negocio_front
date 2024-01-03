import { Link } from 'react-router-dom';

const SideBar = () => (
  <div className="side-bar-container">
    <ul>
      <li>
        <Link to="/">Calendar</Link>
      </li>
      <li>
        <Link to="/services">Services</Link>
      </li>
      <li>
        <Link to="/clients">Clients</Link>
      </li>
      <li>
        <Link to="/team">Professionals</Link>
      </li>
    </ul>

    {/* <Link>professionals</Link>
    <Link>professionals</Link> */}
  </div>
);

export default SideBar;
