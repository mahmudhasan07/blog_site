'use client'
import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
    return (
        <section className="flex justify-around border-b-2 border-black">
            <div>
                <Link href={'/'}><Image src={'https://i.ibb.co/f9g36Zz/exploresphere-high-resolution-logo-transparent-1.png'} width={200} height={10} className=" my-2"></Image></Link>
            </div>
            <div className=" my-auto">
                <ul className="flex gap-8 text-lg font-semibold">
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
                <Link href={'/auth'}><button className="btn">Login</button></Link>
            </div>
        </section>
    );
}