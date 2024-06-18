import { getArticles } from "../utils/api";
import { useState, useEffect } from "react";
import { ArticleCard } from "./ArticleCard";

export const Articles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles().then((articles) => {
      setArticles(articles);
    });
  }, []);

  return (
    <section>
      <ul className="itemsGrid">
        {articles.map((article) => {
          return <ArticleCard key={article.article_id} article={article} />;
        })}
      </ul>
    </section>
  );
};
