import React from 'react';
import logo from '../assets/logos/companyLogo.png'
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';

const HotJobsCard = ({job}) => {
    const {_id,location,company_name,title,job_description,requirements}=job
    return (
        <div>
            <div class="card bg-base-100  shadow-sm h-72">
<div className='flex gap-2 m-2'>
      <figure>
    <img className='w-[40px]'
      src={logo}
      alt="logo" />
  </figure>
  <div>
    <h4 className=" font-semibold ml-0.5">{company_name}</h4>
    <p className='flex items-center gap-0.5'> <FaMapMarkerAlt /><small> {location}</small> </p>

  </div>
</div>
  <div class="card-body">
    <h2 class="card-title">{title}
        <div className="badge badge-secondary">NEW</div>

    </h2>
    <p>{job_description}</p>
    <div className='flex gap-2 flex-wrap w-60'>
        {
            requirements.map((skill,idx)=><p key={idx}
            className='border rounded-md text-center bg-slate-200 border-white p-0.5
              hover:text-blue-500 hover:font-bold '
            >{skill}</p> )
        }
    </div>
    <div class="card-actions justify-end">
        <p className='font-bold'>  <small>Salary: 50,000 BDT- 60,000 BDT*</small> </p>
    <Link to={`/jobs/${_id}`}>
          <button class="btn btn-primary">Apply</button>
    </Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default HotJobsCard;