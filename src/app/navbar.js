"use client"

import Image from "next/image";

export default function NavBar() {
    return (
        <section>
            <div>
                <Image src={'https://i.ibb.co/j81mpbn/exploresphere-high-resolution-logo-transparent.png'} width={120} height={1} className="object-cover"></Image>
            </div>
        </section>
    );
}