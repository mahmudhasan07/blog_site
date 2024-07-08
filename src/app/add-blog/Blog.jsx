"use client"
import React, { useContext, useState } from 'react';
import { } from "./Blog.css"
import axios from 'axios';
import { ContextSource } from '../ContextAPI/ContextAPI';

const Blog = () => {
    const {user} = useContext(ContextSource)
    console.log(user);
    const [previewImage, setPreviewImage] = useState([]);
    const [hostImages, sethostImages] = useState([]);

    const handleImage = (e) => {
        e.preventDefault()
        const file = e.target.files
        const ImageArray = Array.from(file)
        const preview = ImageArray.map(element => URL.createObjectURL(element))
        ImageArray.map(e => {
            const fromData = new FormData()
            fromData.append("file", e)
            fromData.append("upload_preset", 'blog_images')
            axios.post('https://api.cloudinary.com/v1_1/daudgshta/upload', fromData)
                .then(res => {
                    console.log(res.data.url);
                    sethostImages(e => e.concat(res.data.url))
                    
                })
                .catch(err => {
                    console.log(err);
                })
        })
        setPreviewImage(data => data.concat(preview))
        

    }
    const handleFrom = (e)=>{
        e.preventDefault()
        const data = e.target
        const name = data.name.value
        const location = data.location.value
        const details = data.details.value
        const email = user?.email
        const blogDetails = {name,location,details, email, hostImages}
        console.log(blogDetails);

    }
    return (
        <form onSubmit={handleFrom} className="border-2 p-5 space-y-3 bg-white rounded-2xl w-1/3 mx-auto">
            <div>
                <label className="text-lg font-semibold">Blog Name</label> <br />
                <input name='name' className="border-2 w-full border-black p-2 rounded-2xl "></input>
            </div>
            <div>
                <label className="text-lg font-semibold">Blog Location</label> <br />
                <input name='location' className="border-2 w-full border-black p-2 rounded-2xl "></input>
            </div>
            <div>
                <label className="text-lg font-semibold">Upload Your Photos</label>
                <input onChange={handleImage} type="file" multiple></input>
            </div>
            <div>
                <label className="text-lg font-semibold">Preview Your Photos</label>
                <div className='flex gap-3'>
                    {
                        previewImage.length > 0 ?
                            previewImage.map((element, idx) => <img key={idx} src={element} className='w-20 h-20 object-cover'></img>)
                            :
                            <p className="text-[#6f53d6] font-semibold">No Image Preview</p>
                    }
                </div>
            </div>
            <div>
                <label className="text-lg font-semibold">Blog Description</label>
                <textarea name='details' className="border-2 w-full border-black p-2 rounded-2xl " rows={'7'}></textarea>
            </div>
            <div className='mx-auto w-fit'>
                <button id='button_Submit' className=' border-2 p-2 text-white mt-3 border-white text-lg rounded-2xl font-semibold'>Submit Your Blog</button>
            </div>
        </form>
    );
};

export default Blog;