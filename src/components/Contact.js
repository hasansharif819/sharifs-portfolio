import React from 'react';
import emailjs from "@emailjs/browser";
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const Contact = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    // const onSubmit = async data => {
    //     fetch('/contact', {
    //         method: 'POST',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(data)
    //     })
    //         .then(res => res.json())
    //         .then(result => {
    //             toast.success('Your message send  successfully')
    //             reset();
    //         })

    // }

    const handleContact = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm(
            "service_fvcdu7y",
            "template_d83u48a",
            e.target,
            "fu_TJAw2cXaFV7loR"
          )
          .then((res) => {
            if (res.status === 200) {
              toast.success("Received your mail, I'll reply you later");
              e.target.reset();
            }
          })
          .catch((errors) => {
            toast.error(errors.text);
          });
      };

    return (
        <div id='contact'>
            <h2 className="text-gray-300 text-3xl py-5 text-center">My Contact</h2>

            <div className='flex flex-col lg:flex-row justify-center items-center gap-5'>
                <div className="card rounded lg:rounded-md flex-shrink-0 bg-accent w-full max-w-md shadow-2xl">
                    <div className="card-body text-left">
                        <h1 className='text-left text-gray-300'>Contact Info</h1>
                        <p className='text-left text-gray-300'>Feel free to contact me!</p>

                        <div className='flex items-center text-gray-300'>
                            <svg className='w-8 h-8 fill-indigo-500' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z" /></svg>
                            <div className='p-2'>
                                <h1>Name</h1>
                                <p>Sharif Hasan</p>
                            </div>
                        </div>


                        <div className='flex items-center text-gray-300'>
                            <svg className='w-8 h-8 fill-indigo-500' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M168.3 499.2C116.1 435 0 279.4 0 192C0 85.96 85.96 0 192 0C298 0 384 85.96 384 192C384 279.4 267 435 215.7 499.2C203.4 514.5 180.6 514.5 168.3 499.2H168.3zM192 256C227.3 256 256 227.3 256 192C256 156.7 227.3 128 192 128C156.7 128 128 156.7 128 192C128 227.3 156.7 256 192 256z" /></svg>
                            <div className='p-2'>
                                <h1>Location</h1>
                                <p>Dhaka, bangladesh</p>
                            </div>
                        </div>

                        <div className='flex items-center text-gray-300'>
                            <svg className='w-8 h-8 fill-indigo-500' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M18.92 351.2l108.5-46.52c12.78-5.531 27.77-1.801 36.45 8.98l44.09 53.82c69.25-34 125.5-90.31 159.5-159.5l-53.81-44.04c-10.75-8.781-14.41-23.69-8.974-36.47l46.51-108.5c6.094-13.91 21.1-21.52 35.79-18.11l100.8 23.25c14.25 3.25 24.22 15.8 24.22 30.46c0 252.3-205.2 457.5-457.5 457.5c-14.67 0-27.18-9.968-30.45-24.22l-23.25-100.8C-2.571 372.4 5.018 357.2 18.92 351.2z" /></svg>
                            <div className='p-2'>
                                <h1>Call Me</h1>
                                <p>+8801640911511</p>
                            </div>
                        </div>

                        <div className='flex items-center mb-5 text-gray-300'>
                            <svg className='w-8 h-8 fill-indigo-500' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M207.8 20.73c-93.45 18.32-168.7 93.66-187 187.1c-27.64 140.9 68.65 266.2 199.1 285.1c19.01 2.888 36.17-12.26 36.17-31.49l.0001-.6631c0-15.74-11.44-28.88-26.84-31.24c-84.35-12.98-149.2-86.13-149.2-174.2c0-102.9 88.61-185.5 193.4-175.4c91.54 8.869 158.6 91.25 158.6 183.2l0 16.16c0 22.09-17.94 40.05-40 40.05s-40.01-17.96-40.01-40.05v-120.1c0-8.847-7.161-16.02-16.01-16.02l-31.98 .0036c-7.299 0-13.2 4.992-15.12 11.68c-24.85-12.15-54.24-16.38-86.06-5.106c-38.75 13.73-68.12 48.91-73.72 89.64c-9.483 69.01 43.81 128 110.9 128c26.44 0 50.43-9.544 69.59-24.88c24 31.3 65.23 48.69 109.4 37.49C465.2 369.3 496 324.1 495.1 277.2V256.3C495.1 107.1 361.2-9.332 207.8 20.73zM239.1 304.3c-26.47 0-48-21.56-48-48.05s21.53-48.05 48-48.05s48 21.56 48 48.05S266.5 304.3 239.1 304.3z" /></svg>

                            <div className='p-2'>
                                <h1>Email Me</h1>
                                <p>hs.sharif819@gmail.com</p>
                            </div>
                        </div>
                        <div className='flex justify-evenly'>
                            <a href="https://www.facebook.com/profile.php?id=100012993934707" target='_blank'>
                                <svg className='w-8 h-8 fill-indigo-500 hover:fill-primary' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" /></svg>
                            </a>
                            <a href="https://github.com/hasansharif819" target='_blank'>
                                <svg className='w-8 h-8 fill-indigo-500 hover:fill-primary' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" /></svg>
                            </a>
                            <a href="https://www.linkedin.com/in/sharif-hasan-073a58218/" target='_blank'>
                                <svg className='w-8 h-8 fill-indigo-500 hover:fill-primary' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" /></svg>
                            </a>
                        </div>

                    </div>
                </div>

                <div className="card rounded bg-accent lg:rounded-md flex-shrink-0 w-full max-w-md shadow-2xl">
                    <div className="card-body">
                        <h1 className='text-left text-gray-300'>Contact me</h1>
                        <form onSubmit={handleContact}>
                            <div className='flex flex-col lg:flex-row gap-2 justify-between'>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-gray-300">Name</span>
                                    </label>
                                    <input type="text" placeholder="Your Name here" className="input input-bordered bg-white"
                                        {...register("name", {
                                            required: {
                                                value: true,
                                                message: 'name is Required'
                                            }
                                        })} />
                                    <label className="label">
                                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                                    </label>
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-gray-300">Subject</span>
                                    </label>
                                    <input type="text" placeholder="Your Subject" className="input input-bordered bg-white"  {...register("subject", {
                                        required: {
                                            value: true,
                                            message: 'Subject is Required'
                                        }
                                    })} />
                                    <label className="label">
                                        {errors.subject?.type === 'required' && <span className="label-text-alt text-red-500">{errors.subject.message}</span>}
                                    </label>
                                </div>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-gray-300">Email</span>
                                </label>
                                <input type="email" placeholder="Your email" className="input input-bordered bg-white"
                                    {...register("email", {
                                        required: {
                                            value: true,
                                            message: 'email is Required'
                                        }
                                    })} />
                                <label className="label">
                                    {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-gray-300">Message</span>
                                </label>
                                <textarea className="textarea textarea-bordered bg-white" placeholder="Your message"
                                    {...register("message", {
                                        required: {
                                            value: true,
                                            message: 'message is Required'
                                        },
                                        maxLength: {
                                            value: 250,
                                            message: 'You use maximum 250 characters'
                                        }
                                    })}
                                ></textarea>
                                <label className="label">
                                    {errors.message?.type === 'required' && <span className="label-text-alt text-red-500">{errors.message.message}</span>}

                                    {errors.message?.type === 'maxLength' && <span className="label-text-alt text-red-500">{errors.message.message}</span>}
                                </label>
                            </div>

                            <div className="form-control">
                                <button type='submit' className="btn block mx-auto btn-primary">Send message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;