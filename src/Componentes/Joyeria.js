// Joyeria.js
import React, { useState } from "react";
import {
  Navbar,
  Nav,
  Container,
  Row,
  Col,
  Carousel,
  Card,
  Button
} from "react-bootstrap";
// import "../Css/Joyeria.css"; // Tus estilos personalizados + Bootstrap

// Importar imágenes
import carusel1 from "../Img/Caruel11.jpg";
import carusel2 from "../Img/Carusel12.jpg";
import carusel3 from "../Img/Carusel1.png";

import prod1 from "../Img/producto11.jpg";
import prod2 from "../Img/produc2.jpg";
import prod3 from "../Img/produc3.jpg";

import prod4 from "../Img/bebe5.jpg";
import prod5 from "../Img/proudc5.jpg";
import prod6 from "../Img/product6.jpg";

const Joyeria = () => {
  const carouselItems = [
    { id: 1, name: "Pulsera de Oro Blanco", price: "$299.99", image: carusel1 },
    { id: 2, name: "Collar de Diamantes", price: "$499.99", image: carusel2 },
    { id: 3, name: "Aretes de Perlas", price: "$199.99", image: carusel3 },
  ];

  const productItems = [
    { id: 1, name: "Pulsera de Rubíes", price: "$149.99", image: prod1 },
    { id: 2, name: "Anillo de Esmeraldas", price: "$349.99", image: prod2 },
    { id: 3, name: "Collar de Zafiros", price: "$249.99", image: prod3 },
  ];

  const kidsItems = [prod4, prod5, prod6];

  // Estado del carrusel
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => setIndex(selectedIndex);

  // Función para hacer scroll al footer
  const scrollToFooter = (e) => {
    e.preventDefault();
    document.getElementById("footer").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="joyeria">
      {/* Encabezado con Navbar de Bootstrap */}
      <Navbar
        expand="lg"
        fixed="top"
        className="navbar-custom"  /* Clase personalizada para color de fondo, sombra, etc. */
      >
        <Container fluid>
          <Navbar.Brand href="#" className="logo-text">
            Joyería Exclusiva
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto nav-links">
              <Nav.Link href="#about" onClick={scrollToFooter}>
                Sobre Nosotros
              </Nav.Link>
              <Nav.Link href="#location" onClick={scrollToFooter}>
                Ubicación
              </Nav.Link>
              <Nav.Link href="#contact" onClick={scrollToFooter}>
                Contacto
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Sección de Carrusel */}
      <Container className="my-5 text-center">
        <h2 className="section-title">Descubre nuestras joyas exclusivas</h2>
        <Carousel
          activeIndex={index}
          onSelect={handleSelect}
          className="custom-carousel"
          interval={3000} // Cambia cada 3 segundos
          controls
          indicators
          pause="hover"
        >
          {carouselItems.map((item) => (
            <Carousel.Item key={item.id}>
              <img src={item.image} alt={item.name} className="carousel-image d-block w-100" />
              <Carousel.Caption>
                
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>

      {/* Sección de Productos */}
      <Container className="my-5">
        <h2 className="section-title">Nuestras Joyas</h2>
        <Row>
          {productItems.map((product) => (
            <Col md={4} key={product.id} className="mb-4">
              <Card className="card-custom">
                <Card.Img
                  variant="top"
                  src={product.image}
                  alt={product.name}
                  className="card-img-top-custom"
                />
                <Card.Body>
                  <Card.Title className="product-name">{product.name}</Card.Title>
                  <Card.Text className="product-price">{product.price}</Card.Text>
                  <Button variant="dark" className="add-to-cart-btn">
                    Añadir al Carrito
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Sección de Ofertas */}
      <Container className="my-5">
        <h2 className="section-title">Para los más chicos - 50% OFF</h2>
        <Row>
          {kidsItems.map((image, idx) => (
            <Col md={4} key={idx} className="mb-4">
              <Card className="card-custom">
                <Card.Img
                  variant="top"
                  src={image}
                  alt={`Producto para niños ${idx + 1}`}
                  className="card-img-top-custom"
                />
                <Card.Body>
                  <Card.Title className="product-name">Juguete {idx + 1}</Card.Title>
                  <Card.Text className="product-price">
                    Antes: $49.99 Ahora: $24.99
                  </Card.Text>
                  <Button variant="dark" className="add-to-cart-btn">
                    Añadir al Carrito
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Footer */}
      <footer id="footer" className="footer-container">
        <Container>
          <div className="footer-content">
            <Row className="gy-4">
              {/* Logo y Nombre */}
              <Col xs={12} md={3} className="footer-logo">
                Joyería Exclusiva
              </Col>

              {/* Información de Contacto */}
              <Col xs={12} md={3} className="footer-info">
                <p>📍 Av. Principal 123, Ciudad XYZ</p>
                <p>📞 Teléfono: (000) 111-2222</p>
                <p>✉️ Email: contacto@joyeriaexclusiva.com</p>
              </Col>

              {/* Horarios de Atención */}
              <Col xs={12} md={3} className="footer-hours">
                <h5>Horario de Atención</h5>
                <p>Lunes a Viernes: 9:00am - 6:00pm</p>
                <p>Sábado: 10:00am - 4:00pm</p>
                <p>Domingos y Feriados: Cerrado</p>
              </Col>

              {/* Redes Sociales */}
              <Col xs={12} md={3} className="footer-socials">
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
              </Col>
            </Row>
          </div>

          <div className="footer-bottom mt-4">
            &copy; {new Date().getFullYear()} Joyería Exclusiva. Todos los derechos reservados.
          </div>
        </Container>
      </footer>
    </div>
  );
};

export default Joyeria;
