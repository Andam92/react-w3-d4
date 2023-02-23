import { Container, Row, Col, ListGroup } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

interface Articles {
  id: number;
  title: string;
  url: string;
  imageUrl: string;
  newsSite: string;
  summary: string;
  publishedAt: Date;
  updatedAt: Date;
  featured: boolean;
  launches: any[];
  events: any[];
}

const ArticleDetails = () => {
  const [details, setDetails] = useState<null | Articles>(null);
  console.log("CORRI SCAPPA E' STEFANO", useParams());
  const selectedArticle = useParams();
  const mainAPI = "https://api.spaceflightnewsapi.net/v3/articles/";

  const fetchDetails = () => {
    fetch(mainAPI + selectedArticle.pippo)
      .then((response) => {
        if (response.ok) return response.json();
      })
      .then((data) => {
        setDetails(data);
        console.log(data);
      });
  };

  useEffect(() => {
    fetchDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Row className="mt-5">
        <Col xs={12} md={6} style={{ overflow: "hidden" }}>
          <img src={details?.imageUrl} alt="" style={{ height: "350px" }} />
        </Col>
        <Col xs={12} md={6}>
          <ListGroup>
            <ListGroup.Item>
              <h1>{details?.title}</h1>
            </ListGroup.Item>
            <ListGroup.Item>
              <p>{details?.summary}</p>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default ArticleDetails;
