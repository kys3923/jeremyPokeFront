import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = (props) => {
  const [ formData, setFormData ] = useState({
    email: '',
    password: '',
    username: '',
    address: '',
    contact: '',
  })

  let navigate = useNavigate();

  let { email, password, username, address, contact } = formData;

  const changeHandler = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const registerButtonHandler = (e) => {
    e.preventDefault();
    console.log('button clicked')

    // validate
    const validator = (username, email, password) => {
      if (username === '' || email === '' || password === '') {
        return false
      } else {
        return true
      }
    }

    // sending data
    const registerToApi = async (data) => {
      if(validator(username, email, password)) {
        const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/auth/register`, data)

        if(!!response.data.success) {
          sessionStorage.setItem('authToken', response.data.token)
          sessionStorage.setItem('userId', response.data.user._id)
          navigate('/')
        }

        console.log(response)
      }
    }

    registerToApi(formData)
  }

  useEffect(() => {
   if(!!sessionStorage.authToken) {
    navigate('/')
   }
  },[])

  return (
    <>
      <p className='text-2xl'>Register page</p>
      <form onSubmit={registerButtonHandler} className='flex flex-col'>
        <label htmlFor='email'>
          email
        </label>
        <input type='email' name='email' onChange={changeHandler} />
        <label htmlFor='password'>
          password
        </label>
        <input type='password' name='password' onChange={changeHandler}  />
        <label htmlFor='username'>
          username
        </label>
        <input type='text' name='username' onChange={changeHandler}  />
        <label htmlFor='address'>
          address
        </label>
        <input type='text' name='address' onChange={changeHandler}  />
        <label htmlFor='contact'>
          contact
        </label>
        <input type='text' name='contact' onChange={changeHandler}  />
        <button type='submit'>Register</button>
      </form>
      <p>{email}</p>
      <p>{password}</p>
      <p>{username}</p>
      <p>{address}</p>
      <p>{contact}</p>
    </>
  );
}
export default Register;