import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFire,
  faFilm,
  faTv,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  const data = [
    {
      icon: faFire,
      name: "Trending",
    },
    {
      icon: faFilm,
      name: "Movies",
    },
    {
      icon: faTv,
      name: "TV Series",
    },
    {
      icon: faMagnifyingGlass,
      name: "Search",
    },
  ];
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 text-center bg-dark footer">
            {data.map((val) => {
              return (
                  <button className="col-sm-2 col-md-2 btn btn-dark" key={val.name}>
                    <FontAwesomeIcon icon={val.icon} size="3x" />
                    <br />
                    <h5 className="pt-1 fs-6">{val.name}</h5>
                  </button>
                  
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;