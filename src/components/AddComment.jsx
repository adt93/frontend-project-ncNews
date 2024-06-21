import { postComment } from "../utils/api";
import { UserContext } from "../../context/user";
import { useState, useContext } from "react";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";

export const AddComment = ({ article_id, onAddComment }) => {
  const { user } = useContext(UserContext);
  const [newComment, setNewComment] = useState("");
  const [username, setUsername] = useState(user ? user.username : "");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);

    postComment(newComment, article_id, username)
      .then((newComment) => {
        setNewComment("");
        setIsLoading(false);
        setError("");
        onAddComment(newComment);
      })
      .catch((error) => {
        setError(error.message || "Failed to add comment.");
        setIsLoading(false);
      });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label htmlFor="newComment">Comment:</Form.Label>
        <Form.Control
          as="textarea"
          id="newComment"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Enter your comment here..."
          rows={3}
          required
        />
      </Form.Group>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <Button
        variant="primary"
        type="submit"
        disabled={!newComment.trim() || isLoading}>
        {isLoading ? "Adding Comment..." : "Add Comment"}
      </Button>
    </Form>
  );
};
