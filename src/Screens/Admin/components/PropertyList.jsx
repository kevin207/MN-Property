import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Property_List = () => {
  const [properties, setProperties] = useState([]);

  //Get Property from database every load
  useEffect(() => {
    getProperty();
  }, []);

  //Fucntion to fetch data from database using axios
  function getProperty() {
    axios.get("http://localhost:80/api/users/").then(function (response) {
      console.log(response.data);
      setProperties(response.data);
    });
  }

  //Function to delete database data with axios
  const deleteProperty = (id) => {
    axios.delete(`http://localhost:80/api/user/${id}/delete`).then(function (response) {
      console.log(response.data);
      getProperty();
    });
  };

  return (
    <div>
      <div className="list_title">
        <h4>Property list</h4>
      </div>

      <div className="list_table">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Nama</th>
              <th>Alamat</th>
              <th>Harga</th>
              <th>Kamar</th>
              <th>Toilet</th>
              <th>Luas</th>
              <th>Aksi</th>
            </tr>
          </thead>

          <tbody>
            {properties.map((property, key) => (
              <tr key={key}>
                <td>{property.id}</td>
                <td>{property.nama}</td>
                <td>{property.alamat}</td>
                <td>{property.harga}</td>
                <td>{property.kamar}</td>
                <td>{property.toilet}</td>
                <td>{property.luas}</td>
                <td>
                  <Link to={`${property.id}/edit/`}>Edit</Link>
                  <button className="dlt-btn" onClick={() => deleteProperty(property.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Property_List;
