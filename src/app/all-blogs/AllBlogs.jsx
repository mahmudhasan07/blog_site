"use client"
import React, { useState } from 'react';
import useFetch1 from '../Hooks/useFetch1';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';

const AllBlogs = () => {

    const [data] = useFetch1("blogs")
    const [hoveredIndex, setHoveredIndex] = useState()
    console.log(data);
    return (
        <section className='grid grid-cols-1 md:grid-cols-2 mx-2 lg:grid-cols-3'>
            {
                data == "l"?
                "loading"
                :
                data?.map((item, idx) => (
                    <Link
                    href={`/${idx}`}
                      key={idx}
                      className="relative group  block p-2 h-full w-full"
                      onMouseEnter={() => setHoveredIndex(idx)}
                      onMouseLeave={() => setHoveredIndex(null)}
                    >
                      <AnimatePresence>
                        {hoveredIndex === idx && (
                          <motion.span
                            className="absolute inset-0 h-full w-full bg-[#e466a7] block  rounded-3xl"
                            layoutId="hoverBackground"
                            initial={{ opacity: 0 }}
                            animate={{
                              opacity: 1,
                              transition: { duration: 0.15 },
                            }}
                            exit={{
                              opacity: 0,
                              transition: { duration: 0.15, delay: 0.2 },
                            }}
                          />
                        )}
                      </AnimatePresence>
                      <div className='z-50 relative m-2'>
                        <img src={item?.hostImages[0]} className='h-72 object-cover w-full' alt="" />
                        <h1 className={hoveredIndex === idx ? "text-white" : "text-black"}>{item?.name}</h1>
                        
                      </div>
                    </Link>
                  ))
            }
        </section>
    );
};

export default AllBlogs;