import React from 'react';

export async function generateMetadata() {
    return {
        title: "Add Your Blog",
        description: "Generated by create next app",
    }
}
const Metadata = ({ htitle }) => {
    console.log(htitle);
    return generateMetadata()
};

export default Metadata;