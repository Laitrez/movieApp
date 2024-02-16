import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const apiKey = "2627f6b555536e68cacc1db9cf1a6793";

function Carte(img, titre, desc) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w200${img}`} />
      <Card.Body>
        <Card.Title>{titre}</Card.Title>
        <Card.Text>{desc}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default Carte;
