import { getCommentsByArticleId } from "../utils/api";
import { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import { CommentCard } from "./CommentCard";

export const Comments = ({ article_id }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getCommentsByArticleId(article_id).then((comments) => {
      setComments(comments);
    });
  }, [article_id]);

  return (
    <section>
      <ul className="comments-list">
        {comments.map((comment) => {
          return <CommentCard key={comment.comment_id} comments={comment} />;
        })}
      </ul>
    </section>
  );
};
