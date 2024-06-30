'use client'
import Image from "next/image";
import Link from "next/link";
import "./navbar.css";
import { useContext } from "react";
import { ContextSource } from "./ContextAPI/ContextAPI";

export default function NavBar() {
    const {user} = useContext(ContextSource)
    console.log(user);
    return (
        <section className="poetsen-one-regular text-white flex justify-around border-b-2 border-black bg-[#65248e]">
            <div>
                <Link href={'/'}><Image src={'https://i.ibb.co/f9g36Zz/exploresphere-high-resolution-logo-transparent-1.png'} width={200} height={10} className=" my-2 "></Image></Link>
            </div>
            <div className=" my-auto">
                <ul className=" flex gap-8  text-xl ">
                    <Link href={'/'}>
                        <li>Home</li>
                    </Link>
                    <Link href={'/all-blogs'}>
                        <li>All Blogs</li>
                    </Link>
                    <Link href={'/add-blog'}>
                        <li>Add Blog</li>
                    </Link>
                    <Link href={'/my-blogs'}>
                        <li>My Blog</li>
                    </Link>
                </ul>
            </div>
            <div className="my-auto">
                {
                    user ?
                    <div className="flex gap-3">
                        <img src={user?.picture} className="w-12 h-12 rounded-full object-cover" alt="" />
                        <Link href={'/'}><button id="button" className=" mt-1 text-base font-semibold">LogOut</button></Link>
                    </div>
                    :
                    <Link href={'/auth'}><button id="button" className=" text-xl font-semibold">Login</button></Link>
                }
            </div>
        </section>
    );
}