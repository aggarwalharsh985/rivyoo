import { IPostDocument } from '@/models/post.model'
import { ICommentDocument } from '@/models/comment.model'
import React from 'react'
import Comment from './Comment' 
import { Types } from 'mongoose'

const Comments = ({post}:{post:IPostDocument}) => {
  return (
    <div> 
        {
            post?.comments?.map((comment: Types.ObjectId | ICommentDocument, index: number)=>{
                // Check if comment is populated (has textMessage property)
                if (comment && typeof comment === 'object' && 'textMessage' in comment) {
                    const populatedComment = comment as ICommentDocument;
                    return (
                        <Comment key={String(populatedComment._id) || index.toString()} comment={populatedComment}/>
                    )
                }
                return null;
            })
        } 
    </div>
  )
}

export default Comments