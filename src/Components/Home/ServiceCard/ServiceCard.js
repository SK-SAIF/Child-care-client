import React, { useState } from 'react';
import { useContext } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { PaymentContext, UserContext } from '../../../App';
import PaymentCard from '../../Payment/PaymentCard/PaymentCard';
import './ServiceCard.css';
const ServiceCard = ({ serviceInfo }) => {
    const [user, setUser] = useContext(UserContext);
    const [buyService, setBuyService] = useState();
    const [modalInfo, setModalInfo] = useState();
    const [paymentInfo, setPaymentInfo] = useContext(PaymentContext);

    let history = useHistory();

    const handleLearnMore = (info) => {
        if (user) {
            const buyServiceData = { name: user.displayName, email: user.email, service: info.name, description: info.description, price: info.price };
            setBuyService(buyServiceData);
            setModalInfo(info);
            handleShow();
        }
        else {
            history.push('/login');
        }
    }
    console.log(buyService);
    const handleConfirm = () => {

        fetch('http://localhost:5000/addOrder', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(buyService)
        })
            .then(res => res.json())
            .then(result => {
                if (result === true) {
                    alert("Your order was confirmed")
                }
            })
        handleClose();
    }

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (

        <div style={{ padding: "20px" }} className="col-md-6 col-sm-12 col-lg-4 justify-content-center text-center service-card-style">
            <div >
                <img style={{ width: "200px", height: "200px" }} src={serviceInfo.image} alt="" />
                <h1>{serviceInfo.name}</h1>
                <p>{serviceInfo.description}</p>
                <div style={{ marginBottom: "10px", marginTop: "10px" }}>
                    <Button onClick={() => handleLearnMore(serviceInfo)} variant="info">Learn More</Button>
                </div>
            </div>


            {modalInfo && <article>
                <Modal show={show} onHide={handleClose} animation={false}>
                    <Modal.Header closeButton>
                        <Modal.Title>{modalInfo.name}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <img style={{ width: "200px", height: "200px" }} src={modalInfo.image} alt="" />
                        <p>{modalInfo.description}</p>
                        <h4>Price:{modalInfo.price}</h4>
                        <PaymentCard></PaymentCard>
                    </Modal.Body>
                    {paymentInfo && <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Go Back
                        </Button>
                        <Button variant="primary" onClick={handleConfirm}>
                            Confirm
                        </Button>
                    </Modal.Footer>}
                </Modal>
            </article>}
        </div>
    );
};

export default ServiceCard;