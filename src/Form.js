import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';



export default function FormExample() {
    const [validated, setValidated] = useState(false);
    
    const regexName = '^[a-zA-Z .]{2,40}$';
    const regexEmail = '^[^@]+@[^@]+.[^@]$';
    const regexBookingCode = '^[a-zA-z0-9]{6}';
    const regexPhone = '(([+][(]?[0-9]{1,3}[)]?)|([(]?[0-9]{4}[)]?)) *[)]?[- .]?[(]?[0-9]{1,3}[)]?([- .]?[0-9]{3})([- .]?[0-9]{3,4})'

    const handleSubmit = event => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
    };
  
    return (
        
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Label>First name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="First name"
              pattern={regexName}
            />
            <Form.Control.Feedback type="invalid">
                Please enter a valid name
            </Form.Control.Feedback>
            
            <Form.Label>Last name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Last name"
            />
            <Form.Control.Feedback type="invalid">
                Please enter a valid surname
            </Form.Control.Feedback>
            
            <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Username"
                pattern={regexEmail}
                required
              />
              <Form.Control.Feedback type="invalid">
                Please enter an email.
              </Form.Control.Feedback>
            
            <Form.Label>Booking Code</Form.Label>
            <Form.Control 
                type="text" 
                placeholder="booking code" 
                pattern={regexBookingCode}
                required />
            <Form.Control.Feedback type="invalid">
                Please provide a valid booking code.
            </Form.Control.Feedback>
            
            <Form.Label>Telephone Number</Form.Label>
            <Form.Control 
                type='tel' 
                placeholder="phone" 
                pattern={regexPhone}
                required 
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid state.
            </Form.Control.Feedback>
            
            <Form.Label>Zip</Form.Label>
            <Form.Control type="text" placeholder="Zip" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid zip.
            </Form.Control.Feedback>
            
            <Button type="submit">Submit form</Button>
      </Form>     
    );
  }