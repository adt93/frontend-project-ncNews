import Card from "react-bootstrap/Card";

export const ArticleCard = ({ article }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Text>{article.author}</Card.Text>
        <Card.Title>{article.title}</Card.Title>
        <Card.Text>{article.topic}</Card.Text>
        <Card.Img src={article.article_img_url} />
      </Card.Body>
    </Card>
  );
};
