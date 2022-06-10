import React from 'react';
import bhuiyan from '../Image/bhuiyan.png';
import smart from '../Image/smart.png';
import tanjum from '../Image/tanjum.png';
import eng from '../Image/eng.png';
import { Link } from 'react-daisyui';

const Project = () => {
    return (
        <div className='w-11/12 mx-auto' id='project'>
            <h1 className='text-3xl text-center text-gray-300 my-10'>My Project</h1>

            <div className='w-11/12 mx-auto'>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>

                    <div className="card w-full mx-auto bg-accent text-gray-300 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={bhuiyan} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center">
                            <h2 className="card-title">Bhuiyan Tools</h2>
                            <span className='badge badge-outline'>Fullstack</span>
                            <p className='text-left'>It is a manufacturer website. <br />
                                <ul className='list-disc'>
                                    <li>User can see all product</li>
                                    <li>User can update product stock quantity (increase/decrease),Name,price etc</li>
                                    <li>Add new product and delete product to server by an admin</li>
                                </ul>
                            </p>
                            <div className="card-actions flex-col">
                                <p>Use: react.js React Router,DaisyUI, Node.js, Mongodb, Html5,css3</p>

                                <div className='flex gap-28 justify-end'>
                                <a href="https://bhuiyan-tools.web.app/" target="_blank" className="btn btn-primary">Live Site</a>
                                <a href="https://bhuiyan-tools.web.app/" target="_blank" className="btn btn-primary">Details</a>

                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="card w-full bg-accent text-gray-300 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={smart} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Smart Zone</h2>
                            <span className='badge badge-outline'>Full Stack</span>
                            <p className='text-left'>It is E-Commerce website.<br />
                                <ul className='list-disc'>
                                    <li>User can product Reviews</li>
                                    <li>user can buy new phone</li>
                                    <li>user can update his/her phone</li>
                                    <li>Add or delete phone</li>
                                </ul>

                            </p>
                            <div className="card-actions flex-col">
                                <p>Use: react.js React Router, react-bootstrap, Node.js, Mongodb, Html5,css3</p>
                                <div className='flex gap-28'>
                                <a href="https://smart-zone-819.web.app/" className="btn btn-primary">Live Site</a>
                                <a href="https://smart-zone-819.web.app/" className="btn btn-primary">Details</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card w-full bg-accent text-gray-300 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={tanjum} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Tanjum's Shop</h2>
                            <span className='badge badge-outline'>Front-end</span>
                            <p className='text-left'>Wemens product & accessarirs website.<br />
                                <ul className='list-disc'>
                                    <li>User can chooses any product</li>
                                    <li>user can buy product & accessaries</li>
                                    <li>user needs to signin/signup</li>
                                    <li>user can signin/signup using google</li>
                                    <li>Required Auth used for Checkout</li>
                                </ul>
                            </p>
                            <div className="card-actions flex-col">
                                <p>use: reacr.js, bootstrap, html5, css3, Firebase</p>
                                <div className='flex justify-between gap-28'>
                                <a href="https://tanjums-shop.netlify.app/" className="btn btn-primary">Live Site</a>
                                <a href="https://tanjums-shop.netlify.app/" className="btn btn-primary">Details</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card w-full bg-accent text-gray-300 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={eng} alt="" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Engineers Diary</h2>
                            <span className='badge badge-outline'>Front-end</span>
                            <p className='text-left'>Engineers services website.<br />
                                <ul className='list-disc'>
                                    <li>User can booked any services</li>
                                    <li>Checkout users booked services</li>
                                </ul>
                            </p>
                            <div className="card-actions flex-col">
                                <p>use: reacr.js, bootstrap, html5, css3</p>
                                <div className='flex gap-28'>
                                <a href="https://engineer-diary.web.app/" target='_blank' className="btn btn-primary">Live Site</a>
                                <a href="https://engineer-diary.web.app/" target='_blank' className="btn btn-primary">Details</a>
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