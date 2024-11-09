import '../css/Comment.css';

const Comment = ({comment})=>{
    return(
        <>
            <div style={{padding: '0.5rem'}}>
                <h5 className='commnet-heading'>{comment.name}</h5>
                <div className='commnet-body'>{comment.body}</div>
                <div className='user'> - {comment.email}</div>
            </div>
        </>
    )
}

export default Comment;