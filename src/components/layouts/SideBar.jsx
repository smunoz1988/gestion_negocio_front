import { Link } from 'react-router-dom';

const SideBar = () => (
  <div className="side-bar">
    <h2>SideBar</h2>
    <ul>
      <li>
        <Link to="/team">professionals</Link>
      </li>
      <li>
        <Link to="/test">test</Link>
      </li>
      <li>
        <Link to="/">calendar</Link>
      </li>

    </ul>

    {/* <Link>professionals</Link>
    <Link>professionals</Link> */}
  </div>
);

export default SideBar;
