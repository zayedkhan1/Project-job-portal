import React, { useEffect, useState } from 'react';
import HotJobsCard from './HotJobsCard';

const HotJobs = () => {
 
    const [jobs,setJobs]=useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/jobs')
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setJobs(data)
        })
    },[])

    return (
        <div>
            <div className='grid grid-cols-1 sm:frid-cols-2 md:grid-cols-3  gap-4'>
                {
                    jobs.map(job=><HotJobsCard 
                        key={job.id}
                         job={job}
                          ></HotJobsCard> )
                }
            </div>
        </div>
    );
};

export default HotJobs;