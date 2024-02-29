import Carousel from "react-bootstrap/Carousel";
import store from "../store";

const Carroussel = () => {
  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      const { popular } = store.getState().carouselStore;
    });
    return () => unsubscribe();
  }, []);

  return (
    <Carousel style={{ width: "100%", height: "20%" }}>
      {popular.map((movie) => (
        <Carousel.Item>
          <img src={`url${movie.img}`} />
          <Carousel.Caption>
            <h3>{props.title}</h3>
            <p>{props.overlay}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Carroussel;
