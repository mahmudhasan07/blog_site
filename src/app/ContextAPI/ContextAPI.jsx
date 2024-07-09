"use client"
import React, { createContext, useEffect, useState } from 'react';
import useAuth from '../auth/useAuth';

export const ContextSource = createContext()
const ContextAPI = ({ children }) => {
    const [user, setUser] = useState();
setInterval(() => {
    const userDetails = useAuth?.getCurrentUser()
        if (userDetails) {
            userDetails?.getSession((err, res) => {
                if (err) {
                    console.log(err);
                    setUser(err)
                }
                else {
                    setUser(res?.idToken?.payload)
                    // console.log(res?.idToken?.payload);
                }
            })
        }
        else {
            setUser([])
        }
}, 800);
    // console.log(user);
    const data = { user }
    return <ContextSource.Provider value={data}> {children} </ContextSource.Provider>
};

export default ContextAPI;