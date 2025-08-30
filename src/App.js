import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useParams } from "react-router-dom";

function App() {
  const products = [
    { id: 1, name: "Shampoo", price: "Rs. 250", img: "https://via.placeholder.com/200/3498db/ffffff?text=Shampoo", desc: "High-quality shampoo for silky smooth hair." },
    { id: 2, name: "Biscuit", price: "Rs. 100", img: "https://via.placeholder.com/200/e67e22/ffffff?text=Biscuit", desc: "Crispy and tasty biscuits for your tea time." },
    { id: 3, name: "Cooking Oil", price: "Rs. 500", img: "https://via.placeholder.com/200/2ecc71/ffffff?text=Cooking+Oil", desc: "Healthy cooking oil for daily use." },
    { id: 4, name: "Rice 5kg", price: "Rs. 1200", img: "https://via.placeholder.com/200/f39c12/ffffff?text=Rice+5kg", desc: "Premium quality basmati rice (5kg pack)." },
  ];

  // 🔹 Home Page
  const Home = () => (
    <div>
      {/* Banner */}
      <section
        style={{
          background: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1563013544-824ae1b704d3') center/cover no-repeat",
          color: "white",
          textAlign: "center",
          padding: "80px 20px",
          minHeight: "60vh",
        }}
      >
        <h2 style={{ fontSize: "36px", marginBottom: "15px" }}>
          Welcome to Mashriq Mega Mart
        </h2>
        <p style={{ fontSize: "18px" }}>
          Best products at best prices – Shop Now!
        </p>
      </section>

      {/* Products Preview */}
      <section style={{ padding: "40px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "20px" }}>Featured Products</h2>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "20px",
          }}
        >
          {products.map((product) => (
            <div
              key={product.id}
              style={{
                border: "1px solid #ccc",
                padding: "15px",
                borderRadius: "10px",
                width: "220px",
                backgroundColor: "#fff",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              }}
            >
              <img
                src={product.img}
                alt={product.name}
                style={{ width: "100%", borderRadius: "8px" }}
              />
              <h3 style={{ margin: "10px 0" }}>{product.name}</h3>
              <p style={{ fontWeight: "bold" }}>{product.price}</p>
              <Link
                to={`/products/${product.id}`}
                style={{
                  display: "inline-block",
                  backgroundColor: "#27ae60",
                  color: "white",
                  padding: "8px 12px",
                  borderRadius: "5px",
                  textDecoration: "none",
                  marginTop: "8px",
                }}
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
        <div style={{ marginTop: "20px" }}>
          <Link
            to="/products"
            style={{
              display: "inline-block",
              backgroundColor: "#2980b9",
              color: "white",
              padding: "10px 20px",
              borderRadius: "5px",
              textDecoration: "none",
            }}
          >
            View All Products →
          </Link>
        </div>
      </section>

      {/* Contact section niche */}
      <section
        style={{
          backgroundColor: "#2c3e50",
          color: "white",
          textAlign: "center",
          padding: "40px 20px",
        }}
      >
        <h2>Contact Us</h2>
        <p>📞 0300-1234567</p>
        <p>✉️ info@mashriqmart.com</p>
        <p>📍 Karachi, Pakistan</p>
      </section>
    </div>
  );

  // 🔹 Products Page
  const Products = () => (
    <section style={{ padding: "40px 20px", textAlign: "center" }}>
      <h2 style={{ fontSize: "28px", marginBottom: "20px" }}>Our Products</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ccc",
              padding: "15px",
              borderRadius: "10px",
              width: "220px",
              backgroundColor: "#fff",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            }}
          >
            <img
              src={product.img}
              alt={product.name}
              style={{ width: "100%", borderRadius: "8px" }}
            />
            <h3 style={{ margin: "10px 0" }}>{product.name}</h3>
            <p style={{ fontWeight: "bold" }}>{product.price}</p>
            <Link
              to={`/products/${product.id}`}
              style={{
                display: "inline-block",
                backgroundColor: "#27ae60",
                color: "white",
                padding: "8px 12px",
                borderRadius: "5px",
                textDecoration: "none",
                marginTop: "8px",
              }}
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </section>
  );

  // 🔹 Product Details Page
  const ProductDetail = () => {
    const { id } = useParams();
    const product = products.find((p) => p.id === parseInt(id));

    if (!product) {
      return <h2 style={{ textAlign: "center", marginTop: "50px" }}>Product Not Found</h2>;
    }

    return (
      <div style={{ padding: "40px 20px", textAlign: "center" }}>
        <img
          src={product.img}
          alt={product.name}
          style={{ width: "250px", borderRadius: "10px" }}
        />
        <h2 style={{ margin: "20px 0" }}>{product.name}</h2>
        <p style={{ fontSize: "18px", fontWeight: "bold" }}>{product.price}</p>
        <p style={{ margin: "15px 0", fontSize: "16px" }}>{product.desc}</p>
        <button
          style={{
            backgroundColor: "#27ae60",
            color: "white",
            padding: "10px 20px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Add to Cart
        </button>
      </div>
    );
  };

  // 🔹 Contact Page
  const Contact = () => (
    <footer
      style={{
        backgroundColor: "#2c3e50",
        color: "white",
        textAlign: "center",
        padding: "40px 20px",
        minHeight: "60vh",
      }}
    >
      <h2>Contact Us</h2>
      <p>📞 0300-1234567</p>
      <p>✉️ info@mashriqmart.com</p>
      <p>📍 Karachi, Pakistan</p>
    </footer>
  );

  return (
    <Router>
      <div style={{ fontFamily: "Arial, sans-serif" }}>
        {/* 🔹 Navbar */}
        <header
          style={{
            backgroundColor: "#2c3e50",
            padding: "15px",
            color: "white",
            textAlign: "center",
            position: "sticky",
            top: 0,
            zIndex: 1000,
          }}
        >
          <h1 style={{ margin: "0" }}>Mashriq Mega Mart 🛒</h1>
          <nav style={{ marginTop: "10px" }}>
            <Link to="/" style={{ margin: "0 15px", color: "white", textDecoration: "none" }}>
              Home
            </Link>
            <Link to="/products" style={{ margin: "0 15px", color: "white", textDecoration: "none" }}>
              Products
            </Link>
            <Link to="/contact" style={{ margin: "0 15px", color: "white", textDecoration: "none" }}>
              Contact
            </Link>
          </nav>
        </header>

        {/* 🔹 Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
