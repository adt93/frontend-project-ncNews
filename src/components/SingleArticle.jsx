import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { getArticlesById } from "../utils/api";
import { Card } from "react-bootstrap";
import { ArticleComments } from "./ArticleComments";
import { Votes } from "./HandleVotes";
import { AddComment } from "./AddComment";
import { UserContext } from "../../context/user";

export const SingleArticle = () => {
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { article_id } = useParams();
  const { user } = useContext(UserContext);

  useEffect(() => {
    setIsLoading(true);
    getArticlesById(article_id).then(({ article }) => {
      setArticle(article);
      setIsLoading(false);
    });
  }, [article_id]);

  if (isLoading) {
    return <div>loading..</div>;
  }

  return (
    <Card>
      <Card.Body>
        <Card.Title>{article.title}</Card.Title>
        <Card.Text>{article.author}</Card.Text>
        <Card.Text>{article.topic}</Card.Text>
        <Card.Img src={article.article_img_url} alt={article.title} />
        <Card.Text>{article.body}</Card.Text>
        <Votes article_id={article_id} />
        <ArticleComments article_id={article_id} currentUser={user} />
      </Card.Body>
    </Card>
  );
};
