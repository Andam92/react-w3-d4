import { Card, Button, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

interface MyArticlesProps {
  imageURL: string;
  publishedAt: Date;
  summary: string;
  title: string;
  url: string;
  key: number;
  id: number;
}

const MyArticles = (props: MyArticlesProps) => {
  const navigate = useNavigate();

  return (
    <Row className="justify-content-center">
      <Col xs={12} md={8} className="my-3">
        <Card>
          <Card.Img variant="top" src={props.imageURL} />
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>{props.summary}</Card.Text>
            <Button
              onClick={() => {
                navigate("/details/" + props.id);
              }}
              variant="primary"
            >
              Read this article
            </Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default MyArticles;
