import { useEffect, useState } from "react";
import { getArticlesById, patchArticleById } from "../utils/api";
import { Button } from "react-bootstrap";

export const Votes = ({ article_id }) => {
  const [votes, setVotes] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    getArticlesById(article_id)
      .then(({ article }) => {
        setVotes(article.votes);
      })
      .catch((err) => {
        setError(err);
      });
  }, [article_id]);

  const handleVote = (increment) => {
    setVotes((currArticleVotes) => currArticleVotes + increment);
    patchArticleById(article_id, { inc_votes: increment }).catch((err) => {
      setVotes((currArticleVotes) => currArticleVotes - increment);
      setError("Something went wrong..");
    });
  };

  const handleUpVote = () => {
    handleVote(1);
  };

  const handleDownVote = () => {
    handleVote(-1);
  };

  return (
    <div>
      <Button id="vote-button" onClick={handleUpVote} disabled={error}>
        Up Vote
      </Button>
      <p> Votes: {votes}</p>
      <Button onClick={handleDownVote} disabled={error}>
        Down Vote
      </Button>
    </div>
  );
};
