import { Link } from 'react-router-dom';


export default function Confirmation() {
  return (
    <div>
      <Link to="/OrderHistory">
      <h1>ORDER HAS BEEN PLACED</h1>
      </Link>
    </div>
  );
}