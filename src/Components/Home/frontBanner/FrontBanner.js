import React from 'react';
import { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import pic1 from '../../../images/affectionate-grey-haired-grandmother-hat-embraces-small-female-child-loves-her-granddaughter-drinks-takeaway-coffee-curious-little-kid-with-pocketbook-listens-advice-from-wise-old-woman.jpg';
import pic2 from '../../../images/beautiful-little-blonde-girl-smiles-winking-posing-touching-face-with-her-hands-pink-cute-dress-child-looking-happy-delighted-copy-space.jpg';
import pic3 from '../../../images/happy-playful-cute-freckled-blonde-girl-dressed-white-holding-brush-one-hand-showing-another-hand-which-she-messed-up-with-paint.jpg';

const FrontBanner = () => {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={pic1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={pic2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={pic3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default FrontBanner;