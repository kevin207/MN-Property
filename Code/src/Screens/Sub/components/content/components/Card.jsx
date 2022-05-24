import React from "react";
import "./card.css";

// Bs Modal Requirements
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";

//React Icons
import { FaBed, FaBath } from "react-icons/fa";

const Card = (data) => {
  //MODAL BS
  const [modalShow, setModalShow] = React.useState(false);
  function MyVerticallyCenteredModal(props) {
    return (
      <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">{data.nama}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal_container">
          <img className="card-img-modal" src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="home img"></img>

          <div className="modal_content">
            <h4>Deskripsi</h4>
            <p>
              Rumah mewah dengan ukuran {data.luas} berlokasi di Way Hui. Memiliki fasilitas {data.kamar} kamar tidur dan {data.toilet} kamar mandi.
            </p>

            <p>Harga mulai dari Rp.{data.harga}</p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  return (
    <>
      <div className="card-container" onClick={() => setModalShow(true)}>
        <div className="card-top">
          <img className="card-img" src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="home img"></img>
          <div className="card-desc">
            <div className="property-title">{data.nama}</div>
            <div className="property-address">{data.alamat}</div>
            <div className="property-price">Rp. {data.harga}</div>
            <div className="facilities">Facilities</div>
            <div className="property-facilities">
              <div className="facilitiy">
                <div>{data.kamar}</div>
                <FaBed className="icon-1" />
              </div>
              <div className="facilitiy">
                <div>{data.toilet}</div>
                <FaBath className="icon-2" />
              </div>
              <div className="facilitiy">
                <div>{data.luas}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="card-bottom">Bottom Item</div>
      </div>

      {/* Bootstrap Modal */}
      <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
};

export default Card;
