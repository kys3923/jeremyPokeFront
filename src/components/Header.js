import { useNavigate } from "react-router-dom";

const Header = (props) => {

  const navigate = useNavigate();

  const logOutHandler = (e) => {
    e.preventDefault();
    sessionStorage.clear();
    navigate('/')
  }

  return (
    <nav>
      <ul className="flex flex-row">
        <li className="mr-2"><a href='/'>Home</a></li>
        { sessionStorage.length !== 0 ?
        <>
          <li className="mr-2"><a href='/poke'>Poke API</a></li>
          <li className="mr-2"><a href='/movie'>Movie</a></li>
          <li className="mr-2"><a href='/account'>My Page</a></li>
          <button onClick={logOutHandler}>Log Out</button>
        </>    
        : 
        <li className="mr-2"><a href='/login'>Login</a></li>
        }
      </ul>
    </nav>
  );
}
export default Header;