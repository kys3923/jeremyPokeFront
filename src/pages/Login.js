import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { RedButton } from '../components/Buttons';

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
      <div className='flex flex-col w-screen justify-center items-center bg-red-300 h-screen'>
        <p className='text-3xl font-bold mb-8'>Login</p>
        <form onSubmit={loginButtonHandler} className='w-60'>

          <div className='flex flex-col mb-2'>
            <label htmlFor='email' className='flex justify-start'>
              email:
            </label>
            <input type='email' name='email' onChange={changeHandler} className='rounded-md border-2 border-red-300 py-1 px-4' />
          </div>

          <div className='flex flex-col mb-2'>
            <label htmlFor='password' className='flex justify-start'>
              password:
            </label>
            <input type='password' name='password' onChange={changeHandler} className='rounded-md border-2 border-red-300 py-1 px-4' />
          </div>

          <div className='flex flex-col mb-2'>
            <label htmlFor='password' className='flex justify-start'>
              Confirm password:
            </label>
            <input type='password' name='confirmPassword' onChange={changeHandler} className='rounded-md border-2 border-red-300 py-1 px-4' />
          </div>

          <div className='flex justify-center mb-4'>
            <RedButton type='submit' text='login' />
          </div>

          <div>
            <p className='text-xs'>Don't have an account?: <a href='/register' className='font-bold hover:text-red-800'>register account</a></p>
          </div>

        </form>
      </div>
    </>
  );
}
export default Login;