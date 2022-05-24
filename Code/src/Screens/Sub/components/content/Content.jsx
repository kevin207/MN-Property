import React from "react";
import "./content.css";

import axios from "axios";
import { useState, useEffect } from "react";

// Card Component
import Card from "./components/Card";
import { Fade } from "react-awesome-reveal";

const Content = () => {
  // GET DATA FROM DATABASE USING AXIOS
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    getProperty();
  }, []);

  function getProperty() {
    axios.get("https://www.tubespemweb.xyz/api/").then(function (response) {
      setProperties(response.data);
    });
  }

  return (
    <div className="content-container">
      <div className="content-wrap">
        <div className="card-wrap">
          <Fade cascade triggerOnce>
            {properties.map((property, key) => (
              <Card key={key} nama={property.nama} alamat={property.alamat} harga={property.harga} kamar={property.kamar} toilet={property.toilet} luas={property.luas}></Card>
            ))}
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Content;
