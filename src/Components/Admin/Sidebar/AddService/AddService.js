import React, { useState } from 'react';
import axios from 'axios';
import { Button, Form } from 'react-bootstrap';

const AddService = () => {
  const [addServiceForm, setAddServiceForm] = useState({
    name: '',
    description: '',
    price: '',
    image: ''
  });
  const handleSubmitButton = () => {
    fetch('http://localhost:5000/addService',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify(addServiceForm)
    })
    .then(res=>res.json())
    .then(result=>{
      if(result === true){
        alert("Added Services successfully");
      }
      console.log(result);
    })
  }
  const handleHostingImage = (event) => {
    console.log(event.target.files[0]);
    const imageData = new FormData();
    imageData.set("key", "33f668f9150f47eb063aa1fef5fb391d")
    imageData.append('image', event.target.files[0])

    axios.post('https://api.imgbb.com/1/upload', imageData)
      .then(function (response) {
        console.log(response.data.data.display_url);
        const newData = { ...addServiceForm };
        newData.image = response.data.data.display_url;
        setAddServiceForm(newData);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const handleServiceName = event => {
    const newData = { ...addServiceForm };
    newData.name = event.target.value;
    setAddServiceForm(newData);
  }
  const handleServiceDescription = event => {
    const newData = { ...addServiceForm };
    newData.description = event.target.value;
    setAddServiceForm(newData);
  }
  const handleServicePrice = event => {
    const newData = { ...addServiceForm };
    newData.price = event.target.value;
    setAddServiceForm(newData);
  }

  console.log(addServiceForm);
  return (
    <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Name of the service</Form.Label>
        <Form.Control type="text" onBlur={handleServiceName} name="serviceName" placeholder="Service name" required />
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" onBlur={handleServiceDescription} name="serviceDescription" placeholder="Description" required />
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Price</Form.Label>
        <Form.Control type="text" onBlur={handleServicePrice} name="servicePrice" placeholder="Price" required />
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Upload Image</Form.Label>
        <Form.Control onChange={handleHostingImage} type="file" required />
      </Form.Group>
      <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button onClick={handleSubmitButton} variant="primary">
        Submit
        </Button>
    </Form>
  );
};

export default AddService;