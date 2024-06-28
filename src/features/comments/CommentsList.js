import { Col } from 'reactstrap';
import Comment from './Comment';
import { selectCommentsByCampsiteId } from './commentsSlice';

//we're gonna select an array of Comments [selectCommentsByCampsiteId] with the campsiteId property that matches the one
//that was passed into this component. By passing that campsiteID to the selectCommentsByCampsiteId selector function. 
const CommentsList = ({ campsiteId }) => {
    const comments = selectCommentsByCampsiteId(campsiteId);

    //we want to check for a valid, non-empty comments
    if(comments && comments.length > 0) {
        return (
            <Col md='5' className='m-1'>
                <h4>Comments</h4>
                {comments.map((comment) => {
                    return <Comment key={comment.id} comment={comment}/>;
                })}
            </Col>
        );
    }
    return (
        <Col md='5' className='m-1'>
            There are no comments for this campsite yet. 
        </Col>
    );
};

export default CommentsList;
