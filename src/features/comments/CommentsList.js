import { useSelector } from 'react-redux';
import { Col } from 'reactstrap';
import Comment from './Comment';
import { selectCommentsByCampsiteId } from './commentsSlice';
import CommentForm from './CommentForm';

//we'll pass the useSelector hook as a callback
//we'll invoke the function in the argument list. 
//this function will have access to both campsiteID and application state from the redux store. 
const CommentsList = ({ campsiteId }) => {
    const comments = useSelector(selectCommentsByCampsiteId(campsiteId));
    
    if(comments && comments.length > 0) {
        return (
            <Col md='5' className='m-1'>
                <h4>Comments</h4>
                {comments.map((comment) => {
                    return <Comment key={comment.id} comment={comment}/>;
                })}  
                <CommentForm>campsiteId: {campsiteId}</CommentForm>              
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
