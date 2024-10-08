// HomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import 'animate.css/animate.min.css'; 

const HomePage = () => {
  return (
    <div className="homepage">
      <section className="hero-section text-center animate__animated animate__fadeIn">
        <div className="container">
          <h1 className="display-4 ">Manage Your Finances with Ease</h1>
          <p className="lead">Track your expenses, budget efficiently, and visualize your financial data like never before.</p>
          <Link to="/signup" className="btn btn-primary btn-lg mt-3 animate__animated animate__pulse">Get Started</Link>
        </div>
      </section>

      <section className="features-section text-center py-5">
        <div className="container">
          <h2 className="mb-4">Features</h2>
          <div className="row">
            <div className="col-md-4 mt-3">
              <div className="feature-box animate__animated animate__fadeInUp">
                <i className="fas fa-chart-line fa-3x mb-3"></i>
                <h4>Track Expenses</h4>
                <p>Easily record and monitor your daily spending.</p>
              </div>
            </div>
            <div className="col-md-4 mt-3">
              <div className="feature-box animate__animated animate__fadeInUp animate__delay-1s">
                <i className="fas fa-wallet fa-3x mb-3"></i>
                <h4>Budgeting</h4>
                <p>Create custom budgets and stay in control of your finances.</p>
              </div>
            </div>
            <div className="col-md-4 mt-3">
              <div className="feature-box animate__animated animate__fadeInUp animate__delay-2s">
                <i className="fas fa-chart-pie fa-3x mb-3"></i>
                <h4>Data Visualization</h4>
                <p>Understand your finances with interactive charts and reports.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials-section text-center py-5 bg-light">
        <div className="container">
          <h2 className="mb-4">What Our Users Say</h2>
          <div className="row">
            <div className="col-md-4 mt-3">
              <div className="testimonial animate__animated animate__fadeInLeft">
                <p>"This app completely changed the way I manage my money."</p>
                <h5>- John Doe</h5>
              </div>
            </div>
            <div className="col-md-4 mt-3">
              <div className="testimonial animate__animated animate__fadeInUp">
                <p>"The best financial app I've ever used. Highly recommend!"</p>
                <h5>- Sarah Smith</h5>
              </div>
            </div>
            <div className="col-md-4 mt-3">
              <div className="testimonial animate__animated animate__fadeInRight">
                <p>"The visual charts helped me understand my spending habits better."</p>
                <h5>- Emily Jones</h5>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section text-center py-5">
        <div className="container">
          <h2>Ready to take control of your finances?</h2>
          <Link to="/signup" className="btn btn-success btn-lg mt-3 animate__animated animate__pulse">Join Now</Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
