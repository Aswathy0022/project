import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';



export default function App() {
  return (
    <div class="p-3 mb-2 bg-warning-subtle text-emphasis-warning">
      <div className="container" style={{ padding: '20px' }}>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
            <h1 class="kream-title"><strong>Kream</strong></h1>
          </div>
        </nav>

        <h1>About Us</h1>
        <p>
          Welcome to <strong><em>Kream</em></strong>, your go-to destination for a delightful coffee experience. We take pride in serving the finest quality coffee and baked goods in a cozy and inviting atmosphere. Our team of passionate baristas is dedicated to crafting the perfect cup, using locally sourced beans and precise brewing techniques. Indulge in our wide selection of espresso-based drinks, iced coffees, and handcrafted teas. Pair your beverage with our delectable pastries, sandwiches, and breakfast items made with love and attention to detail. We strive to provide exceptional service and create a warm ambiance where you can relax and enjoy quality time with friends and family. Visit us today and discover the joy of <strong><em>Kream</em></strong>!
        </p>
        <h2>Our Story</h2>
        <p>
          Since our establishment in 2023, <strong><em>Kream</em></strong> has been serving the finest coffee and baked goods in town. Our passion for great flavors and exceptional service has made us a beloved destination for coffee enthusiasts and food lovers alike.
        </p>
        <h2>Our Commitment</h2>
        <p>
          At <strong><em>Kream</em></strong>, we are committed to sourcing the freshest and highest quality ingredients for our menu. From locally roasted coffee beans to organic produce, we strive to provide a memorable culinary experience that satisfies both your taste buds and your conscience.
        </p>
        <h2>Our Menu</h2>
        <p>
          Indulge in a wide variety of beverages, including our signature espresso-based drinks, refreshing iced coffees, and handcrafted teas. Pair your drink with our delectable pastries, sandwiches, and breakfast items made with love and attention to detail.
        </p>
        <h2>Visit Us</h2>
        <p>
          We would love to welcome you to our cafe! Come and experience the cozy ambiance, friendly service, and delightful flavors that <strong><em>Kream</em></strong> has to offer. We're located at 123 Main Street, Cityville.
        </p>
        <p>
          For any inquiries or reservations, please call us at (555) 123-4567 or email us at info@cafedelight.com. We can't wait to serve you!
        </p>
      </div>
      <style>
        {`
        .kream-title {
          color: brown;
        }
        `}
      </style>
    </div>
  );
}