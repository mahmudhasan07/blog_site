'use client'
import useFetch2 from '@/app/Hooks/useFetch2';
import React from 'react';
// import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Keyboard, Mousewheel, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import './Card.css'
import { FcLike } from "react-icons/fc";


const CardDetails = ({ params }) => {
    console.log(params);

    const [data, refetch] = useFetch2("blogs", params?.card, "")
    console.log(data);


    return (
        <section>
            {
                data == "l" ?
                    "loading"
                    :
                    <div id='mainDiv'>
                        <div className='flex justify-around '>
                        <div id='imgDiv' className='w-1/3'>
                            <Swiper
                                // cssMode={true}
                                navigation={true}
                                pagination={true}
                                mousewheel={true}
                                keyboard={true}
                                loop = {true}
                                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                                className="h-[430px]"
                            >
                                {
                                    data?.hostImages?.map((e, idx) => <SwiperSlide key={idx}>
                                        <img className='mx-auto rounded-xl w-full h-[400px]' src={e} alt="" />
                                    </SwiperSlide>)
                                }
                            </Swiper>
                        </div>
                        <div className='border-2 w-1/3 my-auto space-y-2 h-fit'>
                                <h1 id='card_title' className='text-4xl font-bold '>{data?.name}</h1>
                                <h1 id='card_title' className='text-2xl font-semibold'>Location : {data?.location}</h1>
                                <h1 className='text-xl font-semibold flex my-auto gap-3'>Likes:<FcLike className=' rounded-full border-2 text-3xl my-auto'></FcLike></h1>
                                
                                
                            </div>
                        </div>
                    </div>
            }
        </section>
    );
};

export default CardDetails;