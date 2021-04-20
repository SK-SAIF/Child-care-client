import React from 'react';
import tutor1 from '../../images/tutor1.jfif';
import tutor2 from '../../images/tutor2.jpg';
import tutor3 from '../../images/tutor3.jfif';
import './Teacher.css';
const Teachers = () => {
    return (
        <section className="teacher-container container mt-5 mb-5">
            <h1 style={{color:"white"}} className="text-center">OUR TEACHERS</h1>
            <div className="row justify-content-md-center mt-5 mb-5">
                    <div className="col-md-6 col-sm-12 col-lg-4 text-center">
                        <div>
                        <img style={{width:"300px",height:"300px",borderRadius:"10px"}} src={tutor1}  alt=""/>
                        </div>
                        <div>
                            <h3>Alissa</h3>
                            <p>Teacher</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12 col-lg-4  text-center">
                        <div>
                        <img style={{width:"300px",height:"300px",borderRadius:"10px"}} src={tutor2}  alt=""/>
                        </div>
                        <div>
                            <h3>MArry</h3>
                            <p>Social Worker</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12 col-lg-4 text-center">
                        <div>
                        <img style={{width:"300px",height:"300px",borderRadius:"10px"}} src={tutor3}  alt=""/>
                        </div>
                        <div>
                            <h3>Victor</h3>
                            <p>Social Worker</p>
                        </div>
                    </div>
                </div>    
        </section>
    );
};

export default Teachers;