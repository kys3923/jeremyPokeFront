import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = (props) => {

  const [ formData, setFormData ] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  })

  let navigate = useNavigate();

  let { email, password } = formData;

  const changeHandler = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const loginButtonHandler = async (e) => {
    e.preventDefault();

    if(email === '' || password === '') {
      return 
    }

    let request = await axios.post(`${process.env.REACT_APP_SERVER_URL}/auth/login`, formData)

    if(!!request.data.success) {
      sessionStorage.setItem('authToken', request.data.token)
      sessionStorage.setItem('userId', request.data.user._id)
      navigate('/')
    }

    console.log(request.data)
  }

  useEffect(() => {
    if (!!sessionStorage.authToken) {
      navigate('/')
    }
  },[])

  return (
    <>
      <p>Login page</p>
      <form onSubmit={loginButtonHandler} className='flex flex-col'>
        <label htmlFor='email'>
          email
        </label>
        <input type='email' name='email' onChange={changeHandler} />
        <label htmlFor='password'>
          password
        </label>
        <input type='password' name='password' onChange={changeHandler}  />
        <label htmlFor='password'>
          Confirm password
        </label>
        <input type='password' name='confirmPassword' onChange={changeHandler}  />
        <button type='submit'>login</button>
      </form>
      <p>{email}</p>
      <p>{password}</p>
    </>
  );
}
export default Login;