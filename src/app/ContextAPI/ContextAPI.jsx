"use client"
import React, { Children, createContext, useEffect, useState } from 'react';
import useAuth from '../auth/useAuth';

export const ContextSource = createContext()
const ContextAPI = ({ children }) => {
    const [user, setUser] = useState([]);
    useEffect(() => {
        const userDetails = useAuth.getCurrentUser()
        if (userDetails) {
            userDetails.getSession((err, res) => {
                if (err) {
                    console.log(err);
                }
                else {
                    setUser([res?.idToken?.payload])
                }
            })
        }
    }, []);
    // console.log(user);
    const data = "hello"
    return <ContextSource.Provider value={data}>
        {children} </ContextSource.Provider>
};

export default ContextAPI;