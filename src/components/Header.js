const Header = (props) => {
  return (
    <nav>
      <ul className="flex flex-row">
        <li className="mr-2"><a href='/'>Home</a></li>
        <li className="mr-2"><a href='/login'>Login</a></li>
        <li className="mr-2"><a href='/register'>Register</a></li>
      </ul>
    </nav>
  );
}
export default Header;