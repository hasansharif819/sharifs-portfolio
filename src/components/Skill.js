import React from 'react';
import { Progress } from 'react-daisyui'; 

const Skill = () => {
    return (
        <div className='w-11/12 mx-auto' id='skill'>
            <h1 className='text-3xl text-center text-white my-10'>My Skills</h1>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                <div className="card w-full mx-auto bg-accent shadow-xl">
                    <div className="card-body text-gray-300">
                        <h2 className="card-title mx-auto mb-3">Front-End</h2>
                        <p className='flex p-1 justify-evenly items-center'>
                            <span className='text-lg'>React.js </span>
                            <Progress className="progress progress-info bg-slate-600 w-56" value={85} max={100} />
                        </p>
                        <p className='flex p-1 justify-evenly items-center'>
                            <span className='text-lg'>Next.js </span>
                            <Progress className="progress progress-info bg-slate-600 w-56" value={85} max={100} />
                        </p>
                        <p className='flex p-1 justify-evenly items-center'>
                            <span className='text-lg'>JavaScript</span>
                            <Progress className="progress progress-info bg-slate-600 w-56" value={85} max={100} />
                        </p>
                        <p className='flex p-1 justify-evenly items-center'>
                            <span className='text-lg'>Tailwind</span>
                            <Progress className="progress progress-info bg-slate-600 w-56" value={93} max={100} />
                        </p>
                        <p className='flex p-1 justify-evenly items-center'>
                            <span className='text-lg'>Bootstrap</span>
                            <Progress className="progress progress-info bg-slate-600 w-56" value={90} max={100} />
                        </p>
                        
                        <p className='flex p-1 justify-evenly items-center'>
                            <span className='text-lg'>HTML5</span>
                            <Progress className="progress progress-info bg-slate-600 w-56" value={95} max={100} />
                        </p>
                        <p className='flex p-1 justify-evenly items-center'>
                            <span className='text-lg'>CSS3</span>
                            <Progress className="progress progress-info bg-slate-600 w-56" value={90} max={100} />
                        </p>


                    </div>
                </div>

                <div className="card w-full mx-auto bg-accent shadow-xl">
                    <div className="card-body text-gray-300">
                        <h2 className="card-title mx-auto mb-3">Back-End</h2>
                        <p className='flex p-1 justify-evenly items-center'>
                            <span className='text-lg'>Node.js</span>
                            <Progress className="progress progress-info bg-slate-600 w-56" value={85} max={100} />
                        </p>
                        <p className='flex p-1 justify-evenly items-center'>
                            <span className='text-lg'>Express.js</span>
                            <Progress className="progress progress-info bg-slate-600 w-56" value={90} max={100} />
                        </p>
                        <p className='flex p-1 justify-evenly items-center'>
                            <span className='text-lg'>MongoDB</span>
                            <Progress className="progress progress-info bg-slate-600 w-56" value={90} max={100} />
                        </p>
                        <p className='flex p-1 justify-evenly items-center'>
                            <span className='text-lg'>MySQL</span>
                            <Progress className="progress progress-info bg-slate-600 w-56" value={60} max={100} />
                        </p>
                        <p className='flex p-1 justify-evenly items-center'>
                            <span className='text-lg'>JWT </span>
                            <Progress className="progress progress-info bg-slate-600 w-56" value={80} max={100} />
                        </p>

                    </div>
                </div>
                <div className="card w-full mx-auto bg-accent shadow-xl">
                    <div className="card-body text-gray-300">
                        <h2 className="card-title mx-auto mb-3">Other</h2>
                        <p className='text-lg'>
                            Firebase, Heroku, DaisyUI, React Router, React Hook form, React Query,
                             Material UI, stripe.js, React-Toastify
                        </p>
                    </div>
                </div>
                <div className="card w-full mx-auto bg-accent shadow-xl">
                    <div className="card-body text-gray-300">
                        <h2 className="card-title mx-auto mb-3">Tools</h2>
                        <p className='text-lg'>
                            VS Code, Chrome Dev-tool, Github, Figma, Jira
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skill;