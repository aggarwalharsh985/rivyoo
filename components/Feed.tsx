import React from 'react'
import PostInput from './PostInput'
import Posts from './Posts'
import { getAllPosts } from '@/lib/serveractions';
import { User } from '@clerk/nextjs/server';

const Feed = async ({user}:{user: User | null}) => {
    // Handle case where user is null
    if (!user) {
        return (
            <div className='flex-1'>
                <div className='p-4 text-center text-gray-500'>
                    Please sign in to view the feed.
                </div>
            </div>
        );
    }

    const userData = JSON.parse(JSON.stringify(user));
    const posts = await getAllPosts();
    
    return (
        <div className='flex-1'>
            <PostInput user={userData}/>
            <Posts posts = {posts || []}/>
        </div>
    )
}

export default Feed