import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Create = () => {
  const [inputs, setInputs] = useState({});
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post("http://localhost:80/api/user/save", inputs).then(function (response) {
      console.log(response.data);
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
        <h2 className="menu_title">Create Property</h2>
        <Link className="admin_link" to="/properties">
          Back
        </Link>
      </div>

      <form onSubmit={handleSubmit} className="form_admin">
        <label>Nama: </label>
        <input type="text" name="nama" onChange={handleChange}></input>

        <label>Alamat: </label>
        <input type="text" name="alamat" onChange={handleChange}></input>

        <label>Harga: </label>
        <input type="text" name="harga" onChange={handleChange}></input>

        <label>Kamar: </label>
        <input type="text" name="kamar" onChange={handleChange}></input>

        <label>Toilet: </label>
        <input type="text" name="toilet" onChange={handleChange}></input>

        <label>Luas: </label>
        <input type="text" name="luas" onChange={handleChange}></input>

        <button>Create</button>
      </form>
    </div>
  );
};

export default Create;
