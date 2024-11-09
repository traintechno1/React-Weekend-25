import Post from "./Post";

import '../css/Post.css';

const PostContainer = ({posts})=>{
    return(
        <div className="post-container">
            {
                posts.map(post=>{
                return <Post 
                    key={post.id}
                    id = {post.id}
                    title={post.title}
                    body={post.body}
                />;
                })
            }
        </div>
    )
}

export default PostContainer;