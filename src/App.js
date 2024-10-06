import React from 'react';
import './App.css';

import RegisterForm from './Register/RegisterForm';


const App = () => {
  return (
    <div className="app">
      {/* Navbar Section */}
      <nav className="navbar">
        <div className="logo">📷 Snapverse</div>
        <ul className="nav-links">
          <li><a href="#">Features</a></li>
          <li><a href="#">Pricing</a></li>
          <li><a href="#">Community</a></li>
          <li><a href="#">Support</a></li>
        </ul>
        <div className="nav-buttons">
          <button className="login-btn">Login</button>
          <button className="register-btn">Register</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>The largest community of photo enthusiasts</h1>
          <button className="join-btn">Join Today</button>
        </div>
      </section>

      {/* Feature Section */}
      <section className="features">
        <h2>Snap photos and share like never before</h2>
        <div className="feature-grid">
          {/* Feature Card 1 */}
          <div className="feature-card">
            <h3>Snap, Share, and Shine!</h3>
            <p>
            Unleash your creativity and bring your stories to life with our innovative platform.
            </p>
            <button className="learn-btn">Learn more</button>
          </div>

          {/* Feature Card 2 */}
          <div className="feature-card">
            <h3>From Lens to Life: Share Your Story</h3>
            <p>
            Transform the way you share your life with our cutting-edge photo-sharing platform.
            </p>
            <button className="learn-btn">Learn more</button>
          </div>

          {/* Feature Card 3 */}
          <div className="feature-card">
            <h3>Your Moments, Your Memories, Your Community</h3>
            <p>
            Step into a world where your photos matter! Our platform is designed for those who cherish capturing life's moments.
            </p>
            <button className="learn-btn">Learn more</button>
          </div>

          {/* Feature Card 4 */}
          <div className="feature-card">
            <h3>Capture Moments, Share Memories</h3>
            <p>
              In a world where every moment counts, our platform empowers you to snap photos and share them like never before.
            </p>
            <button className="learn-btn">Learn more</button>
          </div>
        </div>
      </section>

       {/* New Stylish Section */}
       <section className="stylish-photos">
        <h2>Make your photos more stylish</h2>
        <p>Transform your snapshots into stunning visual narratives by infusing style and creativity into every frame. With just a few thoughtful adjustments, you can enhance colors, play with lighting, and incorporate unique perspectives that bring your images to life.</p>
        <div className="stylish-grid">
          <div className="stylish-card">
            <img src="https://images.pexels.com/photos/28217963/pexels-photo-28217963/free-photo-of-a-mountain-range-with-a-road-running-through-it.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Card 1" />
            <h3>Mountain Peak in the Dolomites at Sunset</h3>
            <p>As the sun dips below the jagged peaks of the Dolomites, the sky transforms into a breathtaking canvas of fiery oranges, deep purples, and soft pinks.</p>
          </div>
          <div className="stylish-card">
            <img src="https://images.pexels.com/photos/7616132/pexels-photo-7616132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Card 2" />
            <h3>Clouds Covering Tre Cime in Italy
            </h3>
            <p>Nestled in the heart of the Dolomites, Tre Cime di Lavaredo stands as a breathtaking testament to nature's grandeur.</p>
          </div>
          <div className="stylish-card">
            <img src="https://images.pexels.com/photos/3996434/pexels-photo-3996434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Card 3" />
            <h3>Rocky Mountain Under Blue Sky
            </h3>
            <p>The Rocky Mountains rise majestically against a backdrop of endless blue skies, creating a breathtaking panorama that captures the essence of natural beauty.</p>
          </div>
        </div>
      </section>

      {/* Register Section */}
      <RegisterForm/>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-logo">
          <img src="logo.png" alt="Snapverse Logo" className="footer-logo" />
          </div>
          <div className="footer-columns">
            <div className="footer-column">
              <h4>Mobile App</h4>
              <ul>
                <li><a href="#">Features</a></li>
                <li><a href="#">Live Share</a></li>
                <li><a href="#">Video Record</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Community</h4>
              <ul>
                <li><a href="#">Featured Artists</a></li>
                <li><a href="#">The Portal</a></li>
                <li><a href="#">Live Events</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Company</h4>
              <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">History</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-buttons">
            <button className="register-btn">Register</button>
            <button className="login-btn">Log In</button>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; Snapverse, Inc. 2024. We love our users!</p>
          <div className="social-icons">
            <a href="#"><i className="icon-facebook"></i></a>
            <a href="#"><i className="icon-twitter"></i></a>
            <a href="#"><i className="icon-linkedin"></i></a>
            <a href="#"><i className="icon-instagram"></i></a>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default App;
