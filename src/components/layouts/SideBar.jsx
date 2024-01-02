import { Link } from 'react-router-dom';

const SideBar = () => (
  <div className="side-bar">
    <h2>SideBar</h2>
    <Link to="/professionals">professionals</Link>
    {/* <Link>professionals</Link>
    <Link>professionals</Link> */}
  </div>
);

export default SideBar;
