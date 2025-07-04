import React from 'react';
import {  easeOut,motion } from 'motion/react';
import one from '../assets/Images/one.jpg/'
import two from '../assets/Images/two.jpg'
const Banner = () => {
    return (
        <div>
            <div className="hero bg-base-200 min-h-96">
  <div className="hero-content flex-col lg:flex-row-reverse">
   <div className='flex-1'>
     <motion.img
      src={two}
      animate={{y:[0,50,0]}}
      transition={{duration:10 , repeat:Infinity}}

      className="max-w-sm w-64 rounded-t-[40px] rounded-br-[40px] border-blue-400 border-l-4 border-b-4 shadow-2xl"
    />
     <motion.img
      src={one}
      animate={{x:[100,150,100]}}
      transition={{duration:10,delay:5, repeat:Infinity}}

      className="max-w-sm w-64 rounded-t-[40px] rounded-br-[40px] border-blue-400 border-l-4 border-b-4 shadow-2xl"
    />

    
   </div>
    <div className='flex-1'>
      {/* <h1 className="text-5xl font-bold">Letes't Job News!</h1> */}
      <motion.h1
      animate={{x:[0,50,0],color:['blue']}}
      transition={{duration: 6, delay:1, ease:easeOut,repeat:Infinity}}
      className="text-5xl font-bold">Letes't <motion.span animate={{color:[' #ff7b33 ','  #335cff ']}} transition={{duration:1.5,repeat:Infinity}} >Job</motion.span> News!</motion.h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;