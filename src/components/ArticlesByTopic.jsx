import { useState, useEffect } from "react";
import { getArticlesByTopic } from "../utils/api";
import { ArticleCard } from "./ArticleCard";
import { useParams } from "react-router-dom";

export const ArticlesByTopic = () => {
  const [articles, setArticles] = useState([]);
  const { topic } = useParams();

  useEffect(() => {
    getArticlesByTopic(topic)
      .then((articles) => {
        setArticles(articles);
      })
      .catch((error) => {
        console.error("Something went wrong..", error);
      });
  }, [topic]);

  return (
    <section>
      <h2>Articles on {topic}</h2>
      <ul className="itemsGrid">
        {articles.map((article) => (
          <ArticleCard key={article.article_id} article={article} />
        ))}
      </ul>
    </section>
  );
};
