import React from 'react';

const AddJob = () => {
 
  const handleAddJob=e=>{
    e.preventDefault();
    const formData=new FormData(e.target)
    // console.log(formData.entries())
    const initialData=Object.fromEntries(formData.entries())
    console.log(initialData)
    const {min,max,currency, ...newJob}=initialData;
    console.log(newJob)
    newJob.salaryRange={min,max,currency}
    console.log(newJob)
  }


    return (
        <div>
            <h2 className='text-3xl font-bold text-center mt-5 text-blue-500'>Post A new Job</h2>

  
    <div className="card bg-base-100 w-full  shadow-2xl p-5 mt-5">
      <div className="card-body">
        <form onSubmit={handleAddJob} className="fieldset">
          {/* job title */}
          <label className="label">Job Title</label>
          <input type="text" className="input w-full " name='title' placeholder="Job title" />
          {/* job location */}
          <label className="label">Job Location</label>
          <input type="text" className="input w-full" name='location' placeholder="Job Location" />
          {/* select */}
          <label className="label">Job Type</label>
            <select  defaultValue="Pick a Framework" className="select select-info w-full">
              <option disabled={true}>Pick a Job type</option>
              <option>Full-time</option>
              <option>Intern</option>
              <option>Part-time</option>
            </select>          
          {/* select */}
          <label className="label">Job Type</label>
            <select  defaultValue="Pick a Framework" className="select select-info w-full">
              <option disabled={true}>Pick a Job Catagory</option>
              <option>Engineering</option>
              <option>marketing</option>
              <option>Finance</option>
            </select>     
            {/*salary Rnage  */}

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-2'>

              <div>
                    <label className="label">Min</label>
              <input type="text" className="input w-full" name='min' placeholder="Min salary" />
              </div>
              <div>
              <label className="label">Max</label>
              <input type="text" className="input w-full" name='max' placeholder="Max salary" />
              </div>
              <div>
            <label className="label">CUrrency</label>
            <select  defaultValue="Pick a currency" name='currency' className="select select-info w-full">
              <option disabled={true}>pick a Currency</option>
              <option>BDT</option>
              <option>USD</option>
              <option>INR</option>
            </select> 
              </div>
            
            </div>
            {/* job description */}
             <label className="label">Job Description</label>

            <textarea className="textarea w-full" name='description' placeholder="JOb description"></textarea>
          {/* company name */}
          <label className="label">Company Name</label>
              <input type="text" className="input w-full" name='company_name' placeholder="Company Name" />
            {/* requerments */}
              <label className="label">Requirments</label>

            <textarea className="textarea w-full" name='requerments' placeholder="write each requerments in a new line"></textarea>
{/* Responsiblities */}
          <label className="label">Resonsiblities</label>

            <textarea className="textarea w-full" name='responsiblities' placeholder="write each responsiblities in a new line"></textarea>
{/* HR name */}
               <label className="label">HR Name</label>
              <input type="text" className="input w-full" name='hr_name' placeholder="HR Name" />
{/* HR email */}
            <label className="label">HR Email</label>
              <input type="email" className="input w-full" name='hr_email' placeholder="HR Email" />
        {/* COmpany logo */}
  <label className="label">Logo URL</label>
              <input type="url" className="input w-full" name='logo' placeholder="Company logo URL" />

        
          <button className="btn btn-neutral mt-4">Submit</button>
        </form>
      </div>
    </div>
  </div>

    );
};

export default AddJob;