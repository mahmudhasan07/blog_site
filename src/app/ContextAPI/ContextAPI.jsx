"use client"
import React, { createContext, useEffect, useState } from 'react';
import useAuth from '../auth/useAuth';

export const ContextSource = createContext()
const ContextAPI = ({ children }) => {
    const [user, setUser] = useState();
    useEffect(() => {
        // setInterval(() => {

        // }, 800);
        // const userDetails = useAuth?.getCurrentUser()
        //         if (userDetails) {
        //             userDetails?.getSession((err, res) => {
        //                 if (err) {
        //                     console.log(err);
        //                     setUser(err)
        //                 }
        //                 else {
        //                     setUser(res?.idToken?.payload)
        //                     // console.log(res?.idToken?.payload);
        //                 }
        //             })
        //         }
        //         else {
        //             setUser([])
        //         }
       const findUser = setInterval(() => {
            const userDetails = useAuth?.getCurrentUser()
            if (userDetails) {
                userDetails?.getSession((err, res) => {
                    if (res) {
                        setUser(res?.idToken?.payload)
                        clearInterval(findUser)
                        

                    }
                })}
                else{
                    return
                }
                }, 1000);

    }, []);
    // console.log(user);
    const data = { user }
    return <ContextSource.Provider value={data}>
        {children} </ContextSource.Provider>
};

export default ContextAPI;