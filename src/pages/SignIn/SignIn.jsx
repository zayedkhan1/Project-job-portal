import React, { useContext } from 'react';
import signIn from '../../assets/LootieAnimation/Singin.json'
import Lottie from 'lottie-react';
import AuthContext from '../../context/authcontext/AuthContext';
import SocialLogin from '../shared/SocialLogin';
import { useLocation, useNavigate } from 'react-router-dom';

const SignIn = () => {

    const {singInUser}=useContext(AuthContext);
    const location=useLocation();
    const navigate=useNavigate();
    const from=location.state || '/';
    console.log(location)
    const handleSingIn=(e)=>{
        e.prevetnDefault()
         const form=e.target;
        const  email=form.email.value;
        const  password=form.password.value;
        console.log(email,password)
          
        singInUser(email,password)
        .then(result=>{
            console.log('sign in',result.user)
            navigate(from)
        })
        .catch(error=>{
            console.log(error)
        })

 

    }
    return (
        <div>
            
            <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">

    <div className="text-center lg:text-left w-1/3">
    <Lottie animationData={signIn} ></Lottie>
    </div>
    
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-5xl font-bold text-center">Login now!</h1>
        <form onSubmit={handleSingIn} className="fieldset">
          <label className="label">Email</label>
          <input type="email" name='email' className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password"  name='password' className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
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

export default SignIn;