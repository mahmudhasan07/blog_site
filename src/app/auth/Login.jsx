'use client'
import React, { useEffect } from 'react';
// import { useForm } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { FcGoogle } from "react-icons/fc";
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';


export const metadata = {
    title : "LogIn"
}

const Login = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    const handleLogin = () => {
        document.getElementById("login-from").style.transform = "rotateY(180deg)"
        document.getElementById("registration-from").style.transform = "rotateY(0deg)"
    }
    useEffect(() => {
        loadCaptchaEnginge(6);
    }, []);
    return (
        <div id='login-from' className='border-2 rounded-2xl backdrop-blur-sm backdrop-brightness-90 w-1/3 h-[510px] p-2 my-auto absolute left-1/3 top-14'>
            <h1 className='text-3xl font-bold text-center my-5'>Please Login in your account</h1>
            <form onSubmit={handleSubmit(onSubmit)} className='space-y-2 '>
                {/* register your input into the hook by invoking the "register" function */}
                <div className=' w-8/12 mx-auto'>
                    <label className='font-semibold text-lg'>Your Email</label> <br />
                    <input className='border-2 w-80 border-black p-1 rounded-xl' defaultValue="" {...register("email")} />
                </div>
                <div className=' w-8/12 mx-auto'>
                    <label className='font-semibold text-lg'>Your Captcha</label> <br />
                    <LoadCanvasTemplate></LoadCanvasTemplate>
                    <input className='border-2 w-80 border-black p-1 rounded-xl' defaultValue="" {...register("code")} />
                </div>

                {/* include validation with required or other standard HTML validation rules */}
                <div className=' w-8/12 mx-auto'>
                    <label className='font-semibold text-lg'>Your Password</label> <br />
                    <input className='border-2 w-80 border-black p-1 rounded-xl' {...register("password", { required: true })} />
                </div>
                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is required</span>}

                <div className='flex justify-end mr-5'>
                    <button onClick={handleLogin} className=' font-bold'>New User ??</button>
                </div>
                <div className='text-center'>
                    <input className='btn' type="submit" />
                </div>
            </form>
            <div className='mx-auto my-2 w-fit'>
                <button className='border text-xl font-semibold backdrop-blur-2xl text-white flex gap-2 p-2 rounded-xl'>LogIn with Google <FcGoogle className='text-2xl my-auto'></FcGoogle></button>
            </div>

        </div>
    );
};

export default Login;