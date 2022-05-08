import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";

const Edit = () => {
  const [inputs, setInputs] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getProperty();
  }, []);

  function getProperty() {
    axios.get(`http://localhost:80/api/user/${id}`).then(function (response) {
      //console.log(response.data);
      setInputs(response.data);
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.put(`http://localhost:80/api/user/${id}/edit`, inputs).then(function (response) {
      //console.log(response.data);
      navigate("/properties");
    });
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  return (
    <div>
      <div className="form_input">
        <h2 className="menu_title">Edit Property</h2>
        <Link className="admin_link" to="/properties">
          Back
        </Link>
      </div>

      <form onSubmit={handleSubmit} className="form_admin">
        <label>Nama: </label>
        <input value={inputs.nama} type="text" name="nama" onChange={handleChange}></input>

        <label>Alamat: </label>
        <input value={inputs.alamat} type="text" name="alamat" onChange={handleChange}></input>

        <label>Harga: </label>
        <input value={inputs.harga} type="text" name="harga" onChange={handleChange}></input>

        <label>Kamar: </label>
        <input value={inputs.kamar} type="text" name="kamar" onChange={handleChange}></input>

        <label>Toilet: </label>
        <input value={inputs.toilet} type="text" name="toilet" onChange={handleChange}></input>

        <label>Luas: </label>
        <input value={inputs.luas} type="text" name="luas" onChange={handleChange}></input>

        <button>Update</button>
      </form>
    </div>
  );
};

export default Edit;
