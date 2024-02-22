import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const apiKey = "2627f6b555536e68cacc1db9cf1a6793";

function Carte({ img, titre, desc }) {
  return (
    <Card style={{ width: "20rem" }}>
      {/* <Card> */}
      <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w1280${img}`} />
      <Card.Body>
        <Card.Title>{titre}</Card.Title>
        <Card.Text>{desc}</Card.Text>
        <Button style={{ maxWidth: "90%" }} variant="primary">
          {titre}
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Carte;
