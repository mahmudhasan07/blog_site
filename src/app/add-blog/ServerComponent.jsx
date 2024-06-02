"use client"
import { useParams, usePathname } from 'next/navigation';
import React from 'react';

const ServerComponent = () => {
    const params = useParams()
    const location = usePathname()
    console.log(params);
    console.log(location);
    return (
        <section>
            <h1>Hello there, here you can add your blog</h1>
        </section>
    );
};

export default ServerComponent;