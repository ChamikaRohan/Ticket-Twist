import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Spinner } from 'react-bootstrap';
import Layout from '../components/Layout';
import { Toaster, toast } from 'react-hot-toast';

export default function SellPage() {
  const apiURL = import.meta.env.VITE_API_BASE_URL;

  const [ticketId, setTicketId] = useState('');
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [location, setLocation] = useState('');
  const [validityDate, setValidityDate] = useState('');
  const [priceLkr, setPriceLkr] = useState('');
  const [seatNumber, setSeatNumber] = useState('');
  const [section, setSection] = useState('');
  const [ticketType, setTicketType] = useState('');
  const [specialInstructions, setSpecialInstructions] = useState('');
  const [barcode, setBarcode] = useState('');
  const [qrcode, setQrcode] = useState('');
  const [validationcode, setValidationcode] = useState('');
  const [selectedImg, setSelectedImg] = useState('');
  const [imageURL, setImageURL] = useState('');

  const [imgUploadStatus, setImgUploadStatus] = useState(false);
  const [imgLoading, setImgLoading] = useState(false);

  const handlePictureUpload = async (e) => {
    e.preventDefault();
    if (!selectedImg) {
      console.log('No file selected!');
      return;
    }
    setImgLoading(true);
    const formData = new FormData();
    formData.append('file', selectedImg);

    try {
      const response = await fetch(`${apiURL}/main-ticket/create-ticketimg`, {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      console.log(data.message);
      setImageURL(data.downloadURL);
      setImgUploadStatus(true);
      setImgLoading(false);

      toast.success('Ticket image added successfully!', { duration: 1500 });
    } catch (error) {
      toast.error('Failed to add the ticket image!', { duration: 1500 });
      setImgLoading(false);
      console.log(error);
    }
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch(`${apiURL}/main-ticket/create-main-ticket`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ticket_id: ticketId,
          name,
          category,
          location,
          validity_date: validityDate,
          price_lkr: priceLkr,
          seat_number: seatNumber,
          section,
          ticket_type: ticketType,
          special_instructions: specialInstructions,
          image: imageURL,
        }),
      });

      const data = await response.json();
      const secret_id = data.id;
      console.log(data.message);

      const secret_response = await fetch(`${apiURL}/secret-ticket/create-secret-ticket`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          secret_id,
          barcode,
          qrcode,
          validation_code: validationcode
        }),
      });

      const secret_data = await secret_response.json();
      console.log(secret_data.message);

      handleClear();
      toast.success('Ticket added successfully!', { duration: 1500 });
    } catch (error) {
      toast.error('Failed to add the ticket!', { duration: 1500 });
      console.log(error.message);
    }
  };

  const handleClear = () => {
    setTicketId('');
    setName('');
    setCategory('');
    setLocation('');
    setValidityDate('');
    setPriceLkr('');
    setSeatNumber('');
    setSection('');
    setTicketType('');
    setSpecialInstructions('');
    setSelectedImg('');
    setImageURL('');
    setBarcode('');
    setQrcode('');
    setValidationcode('');
  };

  return (
    <Layout>
      <section className="d-flex justify-content-center align-items-center text-center text-white">
        <div className="container" style={{ margin: '20px', maxWidth: '1200px' }}>
          <h2 className="fw-bolder display-5" style={{ color: '#f3a42f' }}>Explore Tickets</h2>
          <div className="ticket-container">
            <Form>
              <Form.Group as={Row} className="mb-3" controlId="formTicketId">
                <Form.Label column sm={2}>
                  Ticket ID
                </Form.Label>
                <Col sm={10}>
                  <Form.Control
                    type="text"
                    placeholder="Enter ticket ID"
                    value={ticketId}
                    onChange={(e) => setTicketId(e.target.value)}
                    required
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="formName">
                <Form.Label column sm={2}>
                  Name
                </Form.Label>
                <Col sm={10}>
                  <Form.Control
                    type="text"
                    placeholder="Enter name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="formCategory">
                <Form.Label column sm={2}>
                  Category
                </Form.Label>
                <Col sm={10}>
                  <Form.Control
                    type="text"
                    placeholder="Enter category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    required
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="formLocation">
                <Form.Label column sm={2}>
                  Location
                </Form.Label>
                <Col sm={10}>
                  <Form.Control
                    type="text"
                    placeholder="Enter location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    required
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="formValidityDate">
                <Form.Label column sm={2}>
                  Valid Date
                </Form.Label>
                <Col sm={10}>
                  <Form.Control
                    type="date"
                    placeholder="Enter validity date"
                    value={validityDate}
                    onChange={(e) => setValidityDate(e.target.value)}
                    required
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="formPriceLkr">
                <Form.Label column sm={2}>
                  Price (LKR)
                </Form.Label>
                <Col sm={10}>
                  <Form.Control
                    type="text"
                    placeholder="Enter price"
                    value={priceLkr}
                    onChange={(e) => setPriceLkr(e.target.value)}
                    required
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="formSeatNumber">
                <Form.Label column sm={2}>
                  Seat No.
                </Form.Label>
                <Col sm={10}>
                  <Form.Control
                    type="text"
                    placeholder="Enter seat number"
                    value={seatNumber}
                    onChange={(e) => setSeatNumber(e.target.value)}
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="formSection">
                <Form.Label column sm={2}>
                  Section
                </Form.Label>
                <Col sm={10}>
                  <Form.Control
                    type="text"
                    placeholder="Enter section"
                    value={section}
                    onChange={(e) => setSection(e.target.value)}
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="formTicketType">
                <Form.Label column sm={2}>
                  Ticket Type
                </Form.Label>
                <Col sm={10}>
                  <Form.Control
                    type="text"
                    placeholder="Enter ticket type"
                    value={ticketType}
                    onChange={(e) => setTicketType(e.target.value)}
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="formSpecialInstructions">
                <Form.Label column sm={2}>
                  Special Instructions
                </Form.Label>
                <Col sm={10}>
                  <Form.Control
                    type="text"
                    placeholder="Enter special instructions"
                    value={specialInstructions}
                    onChange={(e) => setSpecialInstructions(e.target.value)}
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="formBarcode">
                <Form.Label column sm={2}>
                  Barcode
                </Form.Label>
                <Col sm={10}>
                  <Form.Control
                    type="text"
                    placeholder="Enter Barcode ID"
                    value={barcode}
                    onChange={(e) => setBarcode(e.target.value)}
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="formQrcode">
                <Form.Label column sm={2}>
                  QR code
                </Form.Label>
                <Col sm={10}>
                  <Form.Control
                    type="text"
                    placeholder="Enter QR code ID"
                    value={qrcode}
                    onChange={(e) => setQrcode(e.target.value)}
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="formValidationcode">
                <Form.Label column sm={2}>
                    Validation code
                </Form.Label>
                <Col sm={10}>
                  <Form.Control
                    type="text"
                    placeholder="Enter ticket validation code"
                    value={validationcode}
                    onChange={(e) => setValidationcode(e.target.value)}
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="formImageUpload">
                <Form.Label column sm={2}>
                  Ticket/Event Image
                </Form.Label>
                <Col sm={10}>
                  <div className="d-flex">
                    <Form.Control
                      type="file"
                      accept="image/*"
                      onChange={(e) => setSelectedImg(e.target.files[0])}
                      className="me-2"
                    />
                    <Button variant="primary" onClick={handlePictureUpload} disabled={imgLoading}>
                      {imgLoading ? <Spinner animation="border" size="sm" /> : 'Upload'}
                    </Button>
                  </div>
                </Col>
              </Form.Group>

              <div className="text-center mt-4">
                <Button variant="primary" onClick={handleClear}>
                  Clear
                </Button>

                <Button variant="primary" onClick={handleSubmit} disabled={!imgUploadStatus}>
                  Submit
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </section>
        <Toaster position="top-center" reverseOrder={false} />
    </Layout>
  );
};

