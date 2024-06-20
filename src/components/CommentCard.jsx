import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Comments } from "./ArticleComments";

export const CommentCard = ({ comments }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Text>{comments.body}</Card.Text>
        <Card.Text>{comments.author}</Card.Text>
        <Card.Text>Votes: {comments.votes}</Card.Text>
      </Card.Body>
    </Card>
  );
};
