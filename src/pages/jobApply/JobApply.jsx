import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import UseAuth from '../../hooks/UseAuth';
import Swal from 'sweetalert2';

const JobApply = () => {
    const {id}=useParams();
    const {user}=UseAuth();
    console.log(id,user)
    const navigate=useNavigate();

    
    
    const SubmitJobApplication=(e)=>{
        e.preventDefault()
        const form=e.target;
        const linkdin=form.Linkdin.value;
        const github=form.Github.value;
        const resume=form.Resume.value;
        console.log(linkdin,github,resume)

        const jobApplication={
            job_id: id ,
            applicant_email:user.email,
            linkdin,
            github,
            resume,

        }
        fetch('http://localhost:5000/job-applications',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(jobApplication)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.insertedId){
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your work has been saved",
                showConfirmButton: false,
                timer: 1500
                });
                navigate('/myApplication')
            }
        })

    }


    return (
        <div>
         
    
    <div className="card bg-base-100 w-full  shadow-2xl">
      <div className="card-body ">
              <h1 className="text-5xl font-bold text-center mb-5">Apply Job and Good Luck!</h1>
        <form onSubmit={SubmitJobApplication} className="fieldset ">
          <label className="label">LinkedIn URL</label>
          <input type='url' className="input  w-full " name='Linkdin' placeholder="LinkedIn URL" />
          <label className="label">Github URL</label>
          <input type="url" className="input  w-full" name='Github' placeholder="Github URL" />
          <label className="label">Resume URL</label>
          <input type="url" className="input  w-full" name='Resume' placeholder="Resume URL" />
          <button className="btn bg-blue-500 mt-4">Apply</button>
        </form>
      </div>
    </div>
  </div>

    );
};

export default JobApply;