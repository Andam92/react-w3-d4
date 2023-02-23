import { Card, Button, Col, Row } from "react-bootstrap";

interface MyArticlesProps {
  imageURL: string;
  publishedAt: Date;
  summary: string;
  title: string;
  url: string;
  key: number;
}

const MyArticles = (props: MyArticlesProps) => {
  return (
    <Row className="justify-content-center">
      <Col xs={12} md={8} className="my-3">
        <Card>
          <Card.Img variant="top" src={props.imageURL} />
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>{props.summary}</Card.Text>
            <Button variant="primary">Read this article</Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default MyArticles;
