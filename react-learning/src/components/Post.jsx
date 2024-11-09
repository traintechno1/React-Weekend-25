
import { useEffect, useState } from 'react';
import '../css/Post.css';
import axios from 'axios';
import Comment from './Comment';
import CommentContainer from './CommentContainer';

const Post = ({id, title, body})=>{

    const [comments, setComments] = useState([]);
    
    useEffect(()=>{
        // get the comments per post
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`).then(comments=>{
            setComments(comments.data);
        })
    }, [])

    return(
        <>
            <div className='post-card'>
                <h5>{title}</h5>
                <div>
                    {body}
                </div>
                <CommentContainer id={id} comments={comments} />
            </div>
        </>
    )
}

export default Post;
