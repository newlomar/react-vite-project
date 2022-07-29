import logo from './assets/react-logo.png';

export default function Header() {
  return (
    <header>
      <nav className='nav'>
        <img src={logo} className='logo' />
        <ul className='nav-items'>
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}
