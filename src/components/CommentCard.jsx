import { Card, Button } from "react-bootstrap";
// import { ArticleComments } from "./ArticleComments";
import { deleteComment } from "../utils/api";

export const CommentCard = ({ comment, currentUser, onDelete }) => {
  const handleDelete = () => {
    deleteComment(comment.comment_id)
      .then(() => {
        onDelete(comment.comment_id);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <Card>
      <Card.Body>
        <Card.Text>{comment.body}</Card.Text>
        <Card.Text>{comment.author}</Card.Text>
        <Card.Text>Votes: {comment.votes}</Card.Text>
        {currentUser && currentUser.username === comment.author && (
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
        )}
      </Card.Body>
    </Card>
  );
};
