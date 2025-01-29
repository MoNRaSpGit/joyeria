import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Css/Joyeria.css";



// Importar imágenes
import carusel1 from "../Img/Caruel3.jpg";
import carusel2 from "../Img/Caruel10.jpg";
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

  return (
    <div className="joyeria">
      {/* Encabezado */}
      <header className="header-bar d-flex justify-content-between align-items-center p-3">
        <h1 className="logo-text">Joyería Exclusiva</h1>
        <nav className="nav-links">
          <a href="#about" onClick={(e) => {
            e.preventDefault();
            document.getElementById("footer").scrollIntoView({ behavior: "smooth" });
          }}>Sobre Nosotros</a>

          <a href="#location" onClick={(e) => {
            e.preventDefault();
            document.getElementById("footer").scrollIntoView({ behavior: "smooth" });
          }}>Ubicación</a>

          <a href="#contact" onClick={(e) => {
            e.preventDefault();
            document.getElementById("footer").scrollIntoView({ behavior: "smooth" });
          }}>Contacto</a>
        </nav>
      </header>



      {/* Sección de Carrusel */}
      <div className="container my-4 text-center">
        <h2 className="section-title">Descubre nuestras joyas exclusivas</h2>
        <Carousel className="custom-carousel">
          {carouselItems.map((item) => (
            <Carousel.Item key={item.id}>
              <img src={item.image} alt={item.name} className="carousel-image" />
              <Carousel.Caption>
                <h3 className="carousel-name">{item.name}</h3>

              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>

      {/* Sección de Productos */}
      <div className="container my-5">
        <h2 className="section-title">Nuestras Joyas</h2>
        <div className="row">
          {productItems.map((product) => (
            <div key={product.id} className="col-md-4">
              <div className="product-card">
                <img src={product.image} alt={product.name} className="product-image" />
                <div className="product-details">
                  <h5 className="product-name">{product.name}</h5> {/* ✅ Nombre ahora visible */}
                  <p className="product-price">{product.price}</p>
                  <button className="add-to-cart-btn">Añadir al Carrito</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>


      {/* Sección de Ofertas */}
      <div className="container my-5">
        <h2 className="section-title">Para los más chicos - 50% OFF</h2>
        <div className="row">
          {kidsItems.map((image, index) => (
            <div key={index} className="col-md-4">
              <div className="product-card">
                <img src={image} alt={`Producto para niños ${index + 1}`} className="product-image" />
                <div className="product-details">
                  <h5 className="product-name">Juguete {index + 1}</h5>
                  <p className="product-price">Antes: $49.99 Ahora: $24.99</p>
                  <button className="add-to-cart-btn">Añadir al Carrito</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer id="footer" className="footer-container">
        <div className="footer-content">
          {/* Logo y Nombre */}
          <div className="footer-logo">Joyería Exclusiva</div>

          {/* Información de Contacto */}
          <div className="footer-info">
            <p>📍 Av. Principal 123, Ciudad XYZ</p>
            <p>📞 Teléfono: (000) 111-2222</p>
            <p>✉️ Email: contacto@joyeriaexclusiva.com</p>
          </div>

          {/* Horarios de Atención */}
          <div className="footer-hours">
            <h5>Horario de Atención</h5>
            <p>Lunes a Viernes: 9:00am - 6:00pm</p>
            <p>Sábado: 10:00am - 4:00pm</p>
            <p>Domingos y Feriados: Cerrado</p>
          </div>

          {/* Redes Sociales */}
          <div className="footer-socials">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
          </div>
        </div>

        {/* Línea inferior y copyright */}
        <div className="footer-bottom">
          &copy; {new Date().getFullYear()} Joyería Exclusiva. Todos los derechos reservados.
        </div>
      </footer>


    </div>
  );
};

export default Joyeria;
