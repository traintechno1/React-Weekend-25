
import Comment from "./Comment";

const CommentContainer = ({id, comments})=>{
    return(
        <div className="accordion accordion-flush" id={id}>
        <div className="accordion-item">
            <h2 className="accordion-header" id={`${id}head`}>
            <button className="accordion-button collapsed" 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target={`#${id}collapse`} 
                aria-expanded="false" 
                aria-controls="flush-collapseOne">
                Comments
            </button>
            </h2>
            <div id={`${id}collapse`} 
                className="accordion-collapse collapse" 
                aria-labelledby={`${id}head`} 
                data-bs-parent={id}>
                <div className="accordion-body">
                    {
                        comments.map(comment=>{
                            return <Comment key={comment.id} comment={comment} />
                        })
                    }
                </div>
            </div>
        </div>
    </div>
    )
}

export default CommentContainer;