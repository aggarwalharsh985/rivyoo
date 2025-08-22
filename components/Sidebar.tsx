import Image from 'next/image'
import React from 'react'
import ProfilePhoto from './shared/ProfilePhoto'
import { getAllPosts } from '@/lib/serveractions'

const Sidebar = async ({ user }: { user: any }) => {

    const posts = await getAllPosts();
    return (
        <div className='hidden md:block w-[20%] h-fit border bordergray-300 bg-white rounded-lg'>
            <div className='flex relative flex-col items-center'>
                <div className='border-b border-b-gray-300'>
                    <div className='p-2 mt-5 text-center'>
                        <h1 className='font-bold hover:underline cursor-pointer'>{user ? `${user?.firstName} ${user?.lastName}` : "Harsh Aggarwal"}</h1>
                        <p className='text-xs'>@{user ? `${user?.username}` : 'username'}</p>
                    </div>
                </div>
            </div>
            <div className='text-xs'>
                <div className='w-full flex justify-between items-center px-3 py-2 hover:bg-gray-200 cursor-pointer'>
                    <p>Post Impression</p>
                    <p className='text-blue-500 font-bold'>88</p>
                </div>
                <div className='w-full flex justify-between items-center px-3 py-2 hover:bg-gray-200 cursor-pointer'>
                    <p>Posts</p>
                    <p className='text-blue-500 font-bold'>{posts.length}</p>
                </div>
            </div>
        </div>
    )
}

export default Sidebar