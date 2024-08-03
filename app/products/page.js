import React from "react";

const Products = () => {
  return (
    <main className="p-4 md:px-12 ">
      <section>
        <h1 className="text-3xl md:text-5xl my-6">Our Mission</h1>
        <p className="text-lg w-5/6">
          At Saarthi Tech, we are dedicated to revolutionizing local commerce in
          India by leveraging advanced technologies such as the Open Network for
          Digital Commerce (ONDC), state-of-the-art Point of Sale (POS) systems,
          and innovative smart carts. By integrating with the government-backed
          ONDC platform, we democratize digital commerce, providing small and
          local businesses with broader market access and reducing their
          reliance on major e-commerce giants. Our mission is to empower local
          businesses with smart, AI-powered solutions for inventory and shipping
          management, marketing and promotions, customer loyalty programs, and
          data analytics, ensuring they thrive in a competitive digital
          marketplace.
        </p>
      </section>

      <section className="p-6 md:p-12 m-4">
        <h1 className="font-bold text-3xl md:text-5xl">Explore our products</h1>
      </section>
    </main>
  );
};

export default Products;
