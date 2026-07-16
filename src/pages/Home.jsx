import '../styles/Home.css'

import { Link } from "react-router";

const Home = () => {
  return (
    <>
      <main className='mainContent'>
        {/* use this as idea https://swiftstore-nishad.vercel.app */}
        <section className="heroCard">
          <h1>Gear Up, Game On</h1>

          <p>Discover premium PC components, gaming peripherals, and reliable hardware,
            carefully selected to help you build, upgrade, and perform at your best.</p>

          <a className='home-to-shop-btn' href="/shop">
            Browse Shop
          </a>
        </section>
        <section className='hero-subCard'>
          <h2>Why shop with PixelParts?</h2>

          <div className='supportCard'>
            <div className='fastCard'>
              <div className='cardIcon'>
                ⚡
              </div>
              <h3>Fast Delivery</h3>
              <p>Get your components delivered quickly so you can start building
                and gaming sooner.
              </p>
            </div>

            <div className='genuinineCard'>
              <div className='cardIcon'>
                ✅
              </div>
              <h3>Genuine Components</h3>
              <p>We stock authentic PC parts from trusted brands to ensure
                quality and reliability
              </p>
            </div>
              
            <div className='expertCard'>
              <div className='cardIcon'>
                🛠️
              </div>
              <h3>Expert Support</h3>
              <p>Need help choosing parts? Our team is hear to help you
                build your dream PC
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
