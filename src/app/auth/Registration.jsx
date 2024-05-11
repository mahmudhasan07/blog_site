"use client"
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';

const Registration = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    useEffect(() => {
        document.getElementById("login-from").style.rotate = "180deg"
        document.getElementById("registration-from").style.rotate = "0deg"
    }, []);
    return (
        <div id='login-from' className='border-2 w-1/3 p-3 h-96 my-auto absolute left-1/3 top-10'>
            <h1 className='text-3xl font-bold text-center my-5'>Please Login in your account</h1>
            <form onSubmit={handleSubmit(onSubmit)} className='space-y-3 '>
                {/* register your input into the hook by invoking the "register" function */}
                <div className='border-2 w-9/12 mx-auto'>
                    <label className='font-semibold text-lg'>Your Email</label> <br />
                    <input className='border-2 w-80 border-black p-1 rounded-xl' defaultValue="" {...register("email")} />
                </div>

                {/* include validation with required or other standard HTML validation rules */}
                <div className='border-2 w-9/12 mx-auto'>
                    <label className='font-semibold text-lg'>Your Password</label> <br />
                    <input className='border-2 w-80 border-black p-1 rounded-xl' {...register("password", { required: true })} />
                </div>
                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is required</span>}

                <div className='text-center'>
                    <p className='text-lg font-bold text-end'>New User ??</p>
                    <input className='btn' type="submit" />
                </div>
            </form>
            <div>
                <button className='border-2 text-xl font-semibold'>LogIn with Google <FcGoogle className='text-2xl'></FcGoogle></button>
            </div>

        </div>
    );
};

export default Registration;