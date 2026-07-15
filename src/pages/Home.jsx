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
      </main>
    </>
  );
};

export default Home;
