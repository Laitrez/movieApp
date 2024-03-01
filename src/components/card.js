import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Modal } from "react-bootstrap";
import { useState } from "react";

const apiKey = "2627f6b555536e68cacc1db9cf1a6793";

function Carte({ img, titre, desc }) {
  const [visible, setvisible] = useState();

  const afficheModal = () => {
    setvisible(true);
  };
  const cacheModal = () => {
    setvisible(false);
  };

  return (
    <>
      <Card style={{ width: "20rem" }}>
        {/* <Card> */}
        <Card.Img
          variant="top"
          src={`https://image.tmdb.org/t/p/w1280${img}`}
        />
        <Card.Body>
          <Card.Title>{titre}</Card.Title>
          <Card.Text>{desc}</Card.Text>
          <Button
            onClick={afficheModal}
            style={{ maxWidth: "90%" }}
            variant="primary"
          >
            {titre}
          </Button>
        </Card.Body>
      </Card>
      <Modal show={visible} onHide={cacheModal}>
        <img src={`https://image.tmdb.org/t/p/w1280${img}`} alt="" />
      </Modal>
    </>
  );
}

export default Carte;
