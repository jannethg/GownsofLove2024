import { COMMENTS } from '../../app/shared/COMMENTS';

//we convert campsiteId string into an integer.
//we user Filter: because we want to return an array of comments, not just the  first matching comment matched by ID
export const selectCommentsByCampsiteId = (campsiteId) => {
    return COMMENTS.filter((comment) => comment.campsiteId === parseInt(campsiteId));
}