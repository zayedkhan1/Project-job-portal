import React, { useContext } from 'react';
import AuthContext from '../../context/authcontext/AuthContext';

const SocialLogin = () => {
    const {signInWithGoogle}=useContext(AuthContext);
    
    const handleGoogle=()=>{
        signInWithGoogle()
        .then(result=>{
            console.log(result.user)
        })
        .catch(error=>{
            console.log(error)
        })
    }
    
    return (
        <div>
            <button onClick={handleGoogle} className='btn w-full bg-blue-700 font-bold text-white'> Google</button>
        </div>
    );
};

export default SocialLogin;