import React from 'react';
import tutor1 from '../../images/tutor1.jfif';
import tutor2 from '../../images/tutor2.jpg';
import tutor3 from '../../images/tutor3.jfif';
import './Teacher.css';
const Teachers = () => {
    return (
        <section className="teacher-container row">
            <div className="text-center">
                <h1>OUR TEACHERS</h1>
            </div>
            <div className="card-group ">
            <div className="card col-md-4">
                <img src={tutor1} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Maria Hudson</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
            <div className="card col-md-4">
                <img src={tutor2} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Andre Cus</h5>
                    <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
            <div className="card col-md-4">
                <img src={tutor3} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Julio Harry</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
        </div>
        </section>
    );
};

export default Teachers;