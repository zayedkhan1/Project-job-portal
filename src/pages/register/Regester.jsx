import Lottie from 'lottie-react';
import React, { useContext } from 'react';
import RegisterLootie from '../../assets/LootieAnimation/Register.json';
import AuthContext from '../../context/authcontext/AuthContext';
import SocialLogin from '../shared/SocialLogin';
const Regester = () => {

  const {createUser}=useContext(AuthContext)

    const handleRegister=(e)=>{
        e.preventDefault()
        const form=e.target 
        const email=form.email.value;
        const password=form.password.value;
        //checking password validation
        // const regex = /^(?=.*[A-Z])(?=.*\d).{6,}$/;
        // if(regex.test(password)){
        //     alert('valid password')
        // }
        // else{
        //     alert('invalid password')
        // }
        
        console.log(email,password)
        createUser(email,password)
        .then(result=>{
          console.log(result.user)
        })
        .catch(error=>{
          console.log(error.message)
        })




    }


    return (
        <div>

            <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">

    <div className="text-center lg:text-left">
     <Lottie animationData={RegisterLootie} ></Lottie>
    </div>
    
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-5xl font-bold">Register now!</h1>
        <form onSubmit={handleRegister} className="fieldset">
          <label className="label">Email</label>
          <input type="email" name='email' className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password"  name='password' className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Register</button>
        </form>
          <div class="divider">OR</div>
          <div className='m-4'>
            <SocialLogin></SocialLogin>
          </div>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Regester;