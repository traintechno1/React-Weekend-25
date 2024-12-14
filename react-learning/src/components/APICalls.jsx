
import axios from 'axios';
import { useEffect, useState } from 'react';
import PostContainer from './PostContainer';

const APICalls = () =>{

    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((posts)=>{
            setPosts(posts.data);
        })
    }, [])   

    return(
        <>  
            <h4 className='m-0 pb-3'>User Posts</h4>
            <PostContainer posts={posts}/>
        </>
    )
}

export default APICalls;