import { Link } from 'react-router-dom';
export default function Main(props) {

 return (
<div className="Main">
      <Link to="/Dashboard">
        <div>Dashboard</div>
      </Link>
      <Link to="/data">
        <div>Price</div>
      </Link>
    </div>
  );
}
