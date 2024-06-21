import { getCommentsByArticleId } from "../utils/api";
import { useState, useEffect } from "react";
import { CommentCard } from "./CommentCard";

export const ArticleComments = ({ article_id, currentUser }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getCommentsByArticleId(article_id).then((comments) => {
      setComments(comments);
    });
  }, [article_id, comments]);

  const handleDeleteComment = (comment_id) => {
    setComments((oldComments) =>
      oldComments.filter((comment) => comment.comment_id !== comment_id)
    );
  };

  return (
    <div>
      {comments.map((comment) => (
        <CommentCard
          key={comment.comment_id}
          comment={comment}
          currentUser={currentUser}
          onDelete={handleDeleteComment}
        />
      ))}
    </div>
  );
};
