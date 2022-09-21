import React from 'react';
import './Project.css';
import hello from '../Image/hello.png';
import spice from '../Image/spice.png';
import lib from '../Image/lib.png';
import bhuiyan from '../Image/bhuiyan.png';
import smart from '../Image/smart.png';
import tanjum from '../Image/tanjum.png';
import eng from '../Image/eng.png';

const Project = () => {
    return (
        <div className='w-11/12 mx-auto' id='project'>
            <h1 className='text-3xl text-center text-gray-300 my-10'>My Project</h1>

            <div className='w-11/12 mx-auto'>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>

                    <div className="w-full bg-accent text-gray-300 shadow-xl cardBody">
                        <figure>
                            <img src={hello} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Hello Tools <span className='badge badge-outline'>Fullstack</span></h2>
                            
                            <p className='text-left'>
                                <ul className='list-disc'>
                                    <li>Admin & User</li>
                                    <li>Tools, blogs, comment</li>
                                    <li>Add to cart, Buy & Payment</li>
                                </ul>
                            </p>
                            <div className="card-actions text-start flex-col">
                                <small className='text-start'>Technologies: React.js, Stripe, DaisyUI, Node.js, Mongodb</small>
                                <div className='flex gap-28 justify-end'>
                                <a href="https://hello-tools-4fde3.web.app" target="_blank" className="btn btn-xs btn-primary">Live Site</a>
                                <a href="https://github.com/hasansharif819/machine-machinery-client
" target="_blank" className="btn btn-xs btn-primary">GitHub</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full bg-accent text-gray-300 shadow-xl cardBody">
                        <figure>
                            <img src={spice} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Spice Taste <span className='badge badge-outline'>Fullstack</span></h2>
                            
                            <p className='text-left'>
                                <ul className='list-disc'>
                                    <li>User can see all product</li>
                                    <li>Admin can update product</li>
                                    <li>Add & Remove product</li>
                                </ul>
                            </p>
                            <div className="card-actions text-start flex-col">
                                <small className='text-start'>Technologies: React.js,DaisyUI, Node.js, Mongodb</small>
                                <div className='flex gap-28 justify-end'>
                                <a href="https://spice-taste.web.app/" target="_blank" className="btn btn-xs btn-primary">Live Site</a>
                                <a href="https://github.com/hasansharif819/Spice-Taste
" target="_blank" className="btn btn-xs btn-primary">GitHub</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full bg-accent text-gray-300 shadow-xl cardBody">
                        <figure>
                            <img src={lib} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">IST Library<span className='badge badge-outline'>Webapp</span></h2>
                            
                            <p className='text-left'>
                                <ul className='list-disc'>
                                    <li>Students can Issue books</li>
                                    <li>Update issue books form</li>
                                    <li>Add & Remove Books</li>
                                </ul>
                            </p>
                            <div className="card-actions text-start flex-col">
                                <small className='text-start'>Technologies: React.js,Bootstrap, Node.js, Mongodb</small>
                                <div className='flex gap-28 justify-end'>
                                <a href="https://library-management-syste-54ce8.web.app" target="_blank" className="btn btn-xs btn-primary">Live Site</a>
                                <a href="https://github.com/hasansharif819/Library-Management-System-Client
" target="_blank" className="btn btn-xs btn-primary">GitHub</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full bg-accent text-gray-300 shadow-xl cardBody">
                        <figure>
                            <img src={bhuiyan} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Bhuiyan Tools <span className='badge badge-outline'>Fullstack</span></h2>
                            
                            <p className='text-left'>
                                <ul className='list-disc'>
                                    <li>User can see all product</li>
                                    <li>Admin can update product</li>
                                    <li>Add & Remove product</li>
                                </ul>
                            </p>
                            <div className="card-actions text-start flex-col">
                                <small className='text-start'>Technologies: react.js React Router,DaisyUI, Node.js, Mongodb, Html5,css3</small>
                                <div className='flex gap-28 justify-end'>
                                <a href="https://bhuiyan-tools.web.app/" target="_blank" className="btn btn-xs btn-primary">Live Site</a>
                                <a href="https://portfolio-details-bhuiyan-sharif819.netlify.app/
" target="_blank" className="btn btn-xs btn-primary">Details</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card w-full bg-accent text-gray-300 shadow-xl cardBody">
                        <figure>
                            <img src={smart} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Smart Zone <span className='badge badge-outline'>Full Stack</span></h2>
                            
                            <p className='text-left'>
                                <ul className='list-disc'>
                                    <li>User can product Reviews</li>
                                    <li>user can buy new phone</li>
                                    <li>user can update his/her phone</li>
                                </ul>

                            </p>
                            <div className="card-actions flex-col">
                                <small>Technologies: react.js React Router, react-bootstrap, Node.js, Mongodb, Html5,css3</small>
                                <div className='flex gap-28'>
                                <a href="https://smart-zone-819.web.app/" className="btn btn-xs btn-primary">Live Site</a>
                                <a href="https://portfolio-details-smart-sharif819.netlify.app/
" className="btn btn-xs btn-primary">Details</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card w-full bg-accent text-gray-300 shadow-xl cardBody">
                        <figure>
                            <img src={tanjum} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Tanjum's Shop <span className='badge badge-outline'>Front-end</span></h2>
                            
                            <p className='text-left'>
                                <ul className='list-disc'>
                                    <li>User can chooses any product</li>
                                    <li>user can buy product & accessaries</li>
                                    <li>user needs to signin/signup</li>
                                </ul>
                            </p>
                            <div className="card-actions flex-col">
                                <small>Technologies: reacr.js, bootstrap, html5, css3, Firebase</small>
                                <div className='flex justify-between gap-28'>
                                <a href="https://tanjums-shop.netlify.app/" className="btn btn-xs btn-primary">Live Site</a>
                                <a href="https://portfolio-details-tanjumshop-sharif819.netlify.app/" className="btn btn-xs btn-primary">Details</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card w-full bg-accent text-gray-300 shadow-xl cardBody">
                        <figure>
                            <img src={eng} alt="" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Engineers Diary <span className='badge badge-outline'>Front-end</span></h2>
                            
                            <p className='text-left'>
                                <ul className='list-disc'>
                                    <li>User can booked any services</li>
                                    <li>Checkout users booked services</li>
                                    <li>Added new services</li>
                                </ul>
                            </p>
                            <div className="card-actions flex-col">
                                <p>Technologies: reacr.js, bootstrap, html5, css3</p>
                                <div className='flex gap-28'>
                                <a href="https://engineer-diary.web.app/" target='_blank' className="btn btn-xs btn-primary">Live Site</a>
                                <a href="https://portfolio-details-engineersdiary-sharif819.netlify.app/" target='_blank' className="btn btn-xs btn-primary">Details</a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Project;