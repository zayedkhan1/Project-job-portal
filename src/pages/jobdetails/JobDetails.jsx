import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const JobDetails = () => {
    const job=useLoaderData();
    const {_id,title,company_name,date}=job;
    return (
        <div className='border  rounded-xl text-center p-5 bg-fuchsia-200'>
            <h2 className='text-3xl font-bold mt-5 '> Job Details For : {title} </h2>
            <p className='text-xl mt-3 '>Apply For : {company_name} </p>
            <p className='mt-3 text-red-500 font-bold '>Deadline: {date} </p>
            <Link to={`/jobApply/${_id}`}>
                        <button className='btn btn-primary mt-5 mb-5'> Apply Now</button>
            </Link>
        </div>
    );
};

export default JobDetails;