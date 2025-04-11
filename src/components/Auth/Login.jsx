import React, {useState } from 'react';

const Login = ({handleLogin}) => {

  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const submitHandler = (e) =>{
    e.preventDefault()
    handleLogin(email, password)
    setEmail('');
    setPassword('');
    
  }

  return (
    <div id='loginPage' className='flex h-screen w-screen items-center justify-center'>
      <div className="border-2 rounded-xl border-emerald-600 p-20">
        <form 
        onSubmit={(e) => {
          submitHandler(e)
        }}
        className='flex flex-col items-center justify-center'>
          <input 
          value={email}
          onChange={ (e) => {
            setEmail(e.target.value)
          }}
          required className='outline-none bg-transparent border-2 border-emerald-600 font-medium text-lg px-6 py-2 rounded-full placeholder:text-gray-400' type="email" placeholder='Enter Your Email'/>
          <input 
          value={password}
          onChange={ (e) => {
            setPassword(e.target.value)
          }}
          required className='mt-3 outline-none bg-transparent border-2 border-emerald-600 font-medium text-lg px-6 py-2 rounded-full placeholder:text-gray-400' type="password" placeholder='Enter password'/>
          <button className='mt-7 text-white border-none outline-none bg-emerald-600 hover:bg-emerald-700 font-semibold text-lg px-8 py-2 w-full rounded-full placeholder:text-white' type='submit'>Log In</button>
        </form>
                
      </div>
    </div>
  );
};

export default Login;