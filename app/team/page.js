import React from "react";
import teamData from "./team-data";
import TeamCard from "./components/TeamCard";
const Team = () => {
  return (
    <div className="mx-12 pt-20">
      <h1 className="text-3xl md:text-5xl py-6">Get to know us</h1>
      <p className="text-lg w-5/6">
        Saarthi AI Pvt Ltd is more than just a company; we&apos;re a
        community-driven platform dedicated to transforming local commerce. With
        a focus on innovation, integrity, and inclusivity, we&apos;re committed
        to empowering businesses and connecting communities across India.
        Through our cutting-edge technology solutions and unwavering dedication
        to customer satisfaction, we&apos;re reshaping the way people shop,
        businesses thrive, and communities flourish. Join us on our journey as
        we redefine the future of commerce, one connection at a time
      </p>

      <h1 className="text-3xl md:text-5xl my-6">Our team</h1>

      <div className="flex flex-col md:flex-row p-4 md:p-8">
        <div className="grid w-full grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {teamData.map((member) => (
            <TeamCard key={member.name} {...member} />
          ))}
        </div>
      </div>

      <div className="md:flex">
        <div className="w-1/2 p-4 md:p-8">
          <h1 className="text-2xl md:text-4xl py-4">Our mission</h1>
          <p>
            Our mission at Saarthi AI Pvt Ltd is to empower local businesses,
            transform the shopping experience, and drive economic growth in
            communities across India. We are dedicated to providing businesses
            of all sizes with innovative technology solutions to expand their
            reach, streamline their operations, and succeed in an increasingly
            digital marketplace. By fostering connections between businesses and
            consumers, promoting sustainability, and embracing diversity, we aim
            to create lasting value for our stakeholders and make a positive
            impact on society. Together, we are building a future where local
            commerce thrives, communities prosper, and opportunities abound for
            all.
          </p>
        </div>
        <div className="w-1/2 p-4 md:p-8">
          <h1 className="text-2xl md:text-4xl py-4">Our vision</h1>
          <p>
            At Saarthi AI Pvt Ltd, our vision is to revolutionize the future of
            local commerce by leveraging technology to empower businesses and
            connect communities. We envision a world where every local business
            has the tools and support they need to thrive in the digital
            economy, while consumers enjoy seamless access to the products and
            services they love. Through innovation, collaboration, and a
            commitment to local empowerment, we strive to shape a more
            inclusive, sustainable, and connected world.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Team;
