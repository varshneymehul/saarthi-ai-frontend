"use client";
import Image from "next/image";
import image1 from "../public/carousel-hero/image1.jpg";
import image2 from "../public/carousel-hero/image2.webp";
import image3 from "../public/carousel-hero/image3.jpg";
import image4 from "../public/carousel-hero/image4.jpg";

import cartImg from "../public/images/cart.jpeg";
import marketplaceImg from "../public/images/localmarketplace.jpeg";
import mobileAppImg from "../public/images/mobileapp.jpeg";
import ondcImg from "../public/images/ondc.jpeg";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import ServicesCard from "@/components/ServicesCard";
import ReviewCard from "@/components/ReviewCard";
import FAQCard from "@/components/FAQCard";
import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");

  return (
    <main>
      <div className="bg-amber-500 w-full md:rounded-b-[40px] text-center rounded-b-3xl h-[85vh] flex flex-col justify-center">
        <div className="md:w-2/4 mx-auto">
          <h3 className="text-sm md:text-md ">empowering local businesses</h3>
          <h1 className="text-3xl md:text-5xl">
            The one stop solution for <br />
            small retail stores
          </h1>
          <h2 className="text-2xl md:text-4xl">
            Discover the power of{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-purple-800">
              Saarthi Sewa
            </span>
          </h2>

          <button className="bg-black w-fit mx-auto text-white px-4 py-2 rounded-3xl mt-4">
            Get Started
          </button>
        </div>

        <Splide
          extensions={{ AutoScroll }}
          options={{
            width: "100%",
            rewind: true,
            height: "18rem",
            type: "loop",
            padding: "2rem",
            focus: "center",
            arrows: false,
            pagination: false,
            drag: "free",
            perPage: 3,
            breakpoints: {
              640: {
                perPage: 1,
              },
              1024: {
                perPage: 2,
              },
            },
            autoScroll: {
              speed: 1,
            },
          }}
          aria-label="kirana images"
        >
          <SplideSlide>
            <Image
              className="rounded-3xl h-full w-auto p-4"
              src={image1}
              height={600}
              width={500}
              alt="Image 1"
            />
          </SplideSlide>
          <SplideSlide>
            <Image
              className="rounded-3xl h-full w-auto  p-4"
              src={image2}
              height={600}
              width={500}
              alt="Image 1"
            />
          </SplideSlide>
          <SplideSlide>
            <Image
              className="rounded-3xl h-full w-auto   p-4"
              src={image3}
              height={600}
              width={500}
              alt="Image 1"
            />
          </SplideSlide>
          <SplideSlide>
            <Image
              className="rounded-3xl h-full w-auto  p-4"
              src={image4}
              height={600}
              width={500}
              alt="Image 1"
            />
          </SplideSlide>
        </Splide>

        {/* Services */}
      </div>
      <section className="flex flex-col items-center p-6 md:p-12">
        <h1 className="text-3xl md:text-5xl p-4 text-stone-800">
          Services we offer
        </h1>
        <div className="relative flex py-5 items-center">
          <div className="flex-grow border-t border-gray-800"></div>
          <span className="flex-shrink mx-4 ">
            <h2 className="text-2xl">
              to our{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-700 to-lime-800">
                customers
              </span>{" "}
            </h2>
          </span>
          <div className="flex-grow border-t border-gray-800"></div>
        </div>

        <div className="md:flex mx-6 md:mx-12">
          <ServicesCard
            id={1}
            img={cartImg}
            alt="cart"
            title="Smart Shopping Cart"
            desc="Revolutionize your shopping experience with our AI-powered smart shopping carts. Enjoy a seamless, hassle-free, and personalized shopping journey with real-time assistance and effortless checkout."
          />
          <ServicesCard
            id={2}
            img={marketplaceImg}
            alt="Local Marketplace"
            title="Saarthi Local Marketplace"
            desc="Discover and shop from local businesses with ease. Our platform connects you to a wide range of local products and services, promoting sustainable and community-focused shopping."
          />
          <ServicesCard
            id={3}
            img={mobileAppImg}
            alt="Mobile App"
            title="Mobile App"
            desc="Stay connected on the go with our intuitive mobile app. Find local stores, track your orders, and get exclusive deals right at your fingertips."
          />
        </div>
        <h2 className="text-2xl">
          to our{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-yellow-600">
            partner businesses
          </span>{" "}
        </h2>
        <div className="md:flex mx-6 md:mx-12">
          <ServicesCard
            id={4}
            img={ondcImg}
            alt="ONDC"
            title="ONDC Integration and Advanced POS Systems"
            desc="Digitize your business and expand your reach with our ONDC integration. Manage your business efficiently with our cutting-edge POS systems, featuring inventory management, order tracking, customer analytics, and seamless online platform integration."
          />
          <ServicesCard
            id={5}
            img={marketplaceImg}
            alt="Local Marketplace"
            title="Saarthi Local Marketplace"
            desc="Discover and shop from local businesses with ease. Our platform connects you to a wide range of local products and services, promoting sustainable and community-focused shopping."
          />
          <ServicesCard
            id={6}
            img={mobileAppImg}
            alt="Mobile App"
            title="Mobile App"
            desc="Stay connected on the go with our intuitive mobile app. Find local stores, track your orders, and get exclusive deals right at your fingertips."
          />
        </div>
      </section>

      <section className="my-6 md:my-12 p-6 md:p-12 bg-teal-600 md:flex md:justify-between">
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl md:text-5xl leading-6 p-4 text-stone-100">
            Hear from our{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-amber-300">
              customers
            </span>
          </h1>
          <button className="ml-4 bg-white p-3 rounded-2xl text-black transition-all w-fit  font-bold">
            See more
          </button>
        </div>
        <div className="md:flex md:w-3/4 md:justify-end">
          <ReviewCard
            img={image1}
            review="Saarthi AI has transformed the way we do business. The ONDC integration and advanced POS systems have streamlined our operations and helped us reach more customers. Our sales have increased, and managing inventory is now a breeze!"
            name="Amit Verma"
            desc="Owner of Verma Groceries"
          />
          <ReviewCard
            img={image1}
            review="Shopping with Saarthi AI's smart shopping cart was an amazing experience. It made my shopping trip so much easier and faster. I love the personalized recommendations and the smooth checkout process. Highly recommend!"
            name="Priya Sharma"
            desc="Customer"
          />
          <ReviewCard
            img={image1}
            review="Saarthi AI has taken our business to the next level. The integration with ONDC and the seamless inventory management have allowed us to serve more customers efficiently. The analytics insights are a game changer for our growth!"
            name="Ravi Patel"
            desc="Owner of Patel Supermarket"
          />
        </div>
      </section>

      <section className="my-6 md:my-12 p-6 md:p-12">
        <h1 className="text-3xl md:text-5xl font-bold py-4">
          Frequently Asked Questions
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
          <FAQCard
            question="What is Saarthi AI Pvt Ltd?"
            answer="Saarthi AI Pvt Ltd is a technology-based platform that connects customers with local businesses, offering a curated selection of products and services that promote healthy living, sustainability, and cultural authenticity."
          />
          <FAQCard
            question="How does Saarthi AI work?"
            answer="Saarthi AI utilizes artificial intelligence algorithms to personalize the shopping experience, providing users with tailored product recommendations, content, and user interfaces based on their preferences and behavior."
          />
          <FAQCard
            question="What kinds of products are available on Saarthi AI?"
            answer="Saarthi AI offers a wide range of products, including locally-made handicrafts, eco-friendly goods, organic foods, wellness supplements, and cultural experiences from different regions of India."
          />
          <FAQCard
            question="Are the products on Saarthi AI sustainable and eco-friendly?"
            answer="Yes, Saarthi AI prioritizes sustainability and eco-friendliness, showcasing products that are made using environmentally-conscious practices, sustainable materials, and ethical production methods."
          />
          <FAQCard
            question="How can I shop on Saarthi AI?"
            answer="To shop on Saarthi AI, simply browse through the platform's offerings, add desired items to your cart, and proceed to checkout. You can also use the AI-powered search and recommendation features to discover new products based on your preferences."
          />
          <FAQCard
            question="Does Saarthi AI offer delivery services?"
            answer="Yes, Saarthi AI provides convenient delivery options, including same-day delivery, scheduled delivery slots, and contactless delivery, to ensure that your orders are delivered to your doorstep in a timely and efficient manner."
          />
          <FAQCard
            question="Can I return or exchange products purchased on Saarthi AI?"
            answer="Yes, Saarthi AI offers a hassle-free return and exchange policy. If you are not satisfied with your purchase for any reason, you can return the item(s) within a specified period for a refund or exchange."
          />
          <FAQCard
            question="How does Saarthi AI support local businesses?"
            answer="Saarthi AI partners with local artisans, craftsmen, and businesses to promote their products and services on the platform, helping them reach a wider audience and grow their customer base."
          />
        </div>
      </section>

      <section className="m-6 md:m-12 rounded-3xl p-12 bg-rose-500">
        <div className="md:flex">
          <div className="md:w-2/3">
            <h1 className="text-3xl md:text-5xl font-bold text-white">
              Subscribe to our newsletter
            </h1>
            <h2 className="text-rose-100">
              Enjoy exclusive offers for subscribers only
            </h2>
          </div>
          <div>
            <input
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              placeholder="Enter your email address"
              className="w-full p-2 bg-white placeholder:text-gray-400 rounded-lg"
            />
            <button className="bg-white text-rose-500 p-2 my-2 rounded-md hover:bg-rose-100 hover:text-rose-600 transition-all">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
