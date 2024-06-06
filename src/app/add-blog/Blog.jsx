"use client"
import React, { useState } from 'react';
import {} from "./Blog.css"

const Blog = () => {
    const [previewImage, setpreviewImage] = useState([]);

    const handleImage = (e) => {
        e.preventDefault()
        const file = e.target.files
        const ImageArray = Array.from(file)
        const preview = ImageArray.map(element => URL.createObjectURL(element))
        // console.log(preview);
        setpreviewImage(data => data.concat(preview))

    }
    // console.log(previewImage);
    return (
        <form className="border-2 p-2 space-y-3 rounded-2xl w-1/3 my-5 mx-auto">
            <div>
                <label className="text-lg font-semibold">Blog Name</label> <br />
                <input className="border-2 w-full border-black p-2 rounded-2xl "></input>
            </div>
            <div>
                <label className="text-lg font-semibold">Blog Location</label> <br />
                <input className="border-2 w-full border-black p-2 rounded-2xl "></input>
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
                        previewImage.map((element, idx) => <img key={idx} src={element} className='w-20'></img>)
                        :
                        <p className="text-[#6f53d6] font-semibold">No Image Preview</p>
                }
                </div>
            </div>
            <div>
                <label className="text-lg font-semibold">Blog Description</label>
                <textarea className="border-2 w-full border-black p-2 rounded-2xl " rows={'7'}></textarea>
            </div>
            <div className='mx-auto w-fit'>
                <button  id='button_Submit' className=' border-2 p-2 text-white mt-3 border-white text-lg rounded-2xl font-semibold'>Submit Your Blog</button>
            </div>
        </form>
    );
};

export default Blog;