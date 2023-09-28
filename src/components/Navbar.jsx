import AirbnbLogo from '../assets/airbnb-logo.png';
export default function Navbar() {
  return (
    <nav>
      <img src={AirbnbLogo} className="nav--logo" />
    </nav>
  );
}
