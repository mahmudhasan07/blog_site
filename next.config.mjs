/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        unoptimized: true
    },
    // experimental: {
    //     serverActions: true,
    // },
    env : {
        poolID : 'us-east-1_XkU6MHRiM',
        client : '3tidmbuitqh027a61iidcbqseg'
    }
};

export default nextConfig;
