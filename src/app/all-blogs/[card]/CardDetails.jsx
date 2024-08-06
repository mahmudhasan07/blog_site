'use client'
import useFetch2 from '@/app/Hooks/useFetch2';
import React, { useEffect, useState } from 'react';
// import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Keyboard, Mousewheel, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import './Card.css'
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import useAxios, { AxiosSource } from '@/app/Hooks/useAxios';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const CardDetails = ({ params }) => {
    
    const [like, setLike] = useState(true);
    const [count, setCount] = useState(10)
    const [data, refetch] = useFetch2("blogs", params?.card)
    const axiosLink = useAxios(AxiosSource)
    
    const handlebutton = ()=>{
        setLike(!like)
        console.log(like);
        
        if(like == true){
            setCount(count + 1)
        axiosLink.patch(`/blogs/${params.card}`, {count})
        .then(res=>{
            console.log();
            
        })
        .catch(err=>{
            console.log(err);
            
        })

        }
        if(like == false){
            setCount(count-1)
        }
    }

console.log(count);

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
                                <h1 className='text-xl font-bold'>Reviews: </h1>
                                <h1 className='text-xl font-bold flex gap-3'>Likes: <button onClick={handlebutton}>{like == false ? <p className='h-full text-2xl -mt-3 -ml-1'>❤️</p> : <FontAwesomeIcon className='font-extrabold text-2xl' icon={faHeart} size='fa-solid'  /> }</button> {count}</h1>
                                
                                
                                
                            </div>
                        </div>
                    </div>
            }
        </section>
    );
};

export default CardDetails;