import logo from '../../assets/reactjs-icon.svg';

export default function NavBar() {
  return (
    <header>
      <nav className='nav'>
        <img className='logo' src={logo} alt='React Library Logo' />
        <h3 className='h3'>ReactFacts</h3>
        <h4 className='h4'>React Course - Project 1</h4>
      </nav>
    </header>
  );
}
