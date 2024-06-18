import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const ArticleCard = ({ article }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/articles/${article.article_id}`);
  };

  return (
    <Card>
      <Card.Body>
        <Card.Text>{article.author}</Card.Text>
        <Card.Title>{article.title}</Card.Title>
        <Card.Text>{article.topic}</Card.Text>
        <Card.Img src={article.article_img_url} />
        <Card.Text>{article.created_at}</Card.Text>
      </Card.Body>
      <Button onClick={handleClick}>Read more..</Button>
    </Card>
  );
};
