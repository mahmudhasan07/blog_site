"use client"
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { } from "./register.css";
import { FcGoogle } from 'react-icons/fc';

const Registration = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    const handleRegister = () => {

        document.getElementById("login-from").style.transform = "rotateY(0deg)"
        document.getElementById("registration-from").style.transform = "rotateY(180deg)"
    }
    return (
        <div id='registration-from' className='border-2 bg-gray-400 w-1/3 p-2  my-auto absolute left-1/3 top-10'>
            <h1 className='text-3xl font-bold text-center my-5'>Please Registration for account</h1>
            <form onSubmit={handleSubmit(onSubmit)} className='space-y-2 '>
                {/* register your input into the hook by invoking the "register" function */}
                <div className='w-8/12 mx-auto'>
                    <label className='font-semibold text-lg'>Your Name</label> <br />
                    <input className='border-2 w-80 border-black p-1 rounded-xl' defaultValue="" {...register("name")} />
                </div>
                <div className=' w-8/12 mx-auto'>
                    <label className='font-semibold text-lg'>Your Email</label> <br />
                    <input className='border-2 w-80 border-black p-1 rounded-xl' defaultValue="" {...register("email")} />
                </div>
                <div className=' w-8/12 mx-auto'>
                    <label className='font-semibold text-lg'>Upload Your Image</label> <br />
                    <input className='border-2 w-80 border-black p-1 rounded-xl' type='file' defaultValue="" {...register("image")} />
                </div>

                {/* include validation with required or other standard HTML validation rules */}
                <div className=' w-8/12 mx-auto'>
                    <label className='font-semibold text-lg'>Your Password</label> <br />
                    <input className='border-2 w-80 border-black p-1 rounded-xl' {...register("password", { required: true })} />
                </div>
                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is required</span>}
                <div className='flex justify-end mr-5'>
                    <button onClick={handleRegister} className=' font-bold'>New User ??</button>
                </div>
                <div className='text-center'>
                    <input className='btn' type="submit" />
                </div>
            </form>

        </div>
    );
};

export default Registration;