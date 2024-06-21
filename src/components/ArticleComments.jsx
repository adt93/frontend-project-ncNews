import { getCommentsByArticleId } from "../utils/api";
import { useState, useEffect } from "react";
import { CommentCard } from "./CommentCard";
import { AddComment } from "./AddComment";

export const ArticleComments = ({ article_id, currentUser }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getCommentsByArticleId(article_id).then((comments) => {
      setComments(comments);
    });
  }, [article_id]);

  const handleDeleteComment = (comment_id) => {
    setComments((oldComments) =>
      oldComments.filter((comment) => comment.comment_id !== comment_id)
    );
  };
  const handleAddComment = (newComment) => {
    setComments((oldComments) => [newComment, ...oldComments]);
  };

  return (
    <div>
      <AddComment article_id={article_id} onAddComment={handleAddComment} />
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
