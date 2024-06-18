import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticlesById } from "../utils/api";
// import { Card } from "react-bootstrap";

export const SingleArticle = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState(null);
  useEffect(() => {
    getArticlesById(article_id).then(({ article }) => {
      setArticle(article);
    });
  }, [article_id]);
  if (!article) {
    return <div>loading..</div>;
  }
  return (
    <div>
      <h1>{article.title}</h1>
      <p>{article.author}</p>
      <p>{article.topic}</p>
      <img src={article.article_img_url} alt={article.title} />
      <p>{article.body}</p>
    </div>
  );
};
