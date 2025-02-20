import React from "react";
import Image from "next/image";
import FAQ from "../FAQ/page";

const Home = () => {
  return (
    <div>
      {/* Hero Background Image */}
      <div className="mt-5 clas">
        <Image
          src="/man-and-van-services-1-1024x325.jpg"
          alt="Man and Van  Services"
          className="w-full"
          width={300}
          height={300}
        />
      </div>

      <div className="container mx-auto px-4 clas">
        {/* Title */}
        <div className="my-6">
          <h1 className="text-3xl font-bold text-gray-800">
            Man and Van Bracknell Guaranteed Best Prices Call{" "}
            <span className="text-green-600">
              <a href="tel:07969868115" target="_blank">
                07969868115
              </a>
            </span>
          </h1>
        </div>

        {/* Image & Text Section */}
        <div className="flex flex-col md:flex-row gap-6 items-center">
          {/* Left - Image */}
          <div className="w-80">
            <Image
              src="/man-van.jpg"
              alt="Man and Van"
              className="w-full rounded-lg shadow-md"
              width={300}
              height={300}
            />
          </div>

          {/* Right - Text */}
          <div className="w-full md:-wfull text-xl test-semibold text-gray-700">
            <p>
              Welcome to Man and Van Bracknell. We are the reliable man and van
              team offering cheap man and van services plus transportation for
              customers all over Bracknell and the surrounding areas.
            </p>
            <p className="mt-4">
              If you’re moving house or need goods transporting from Ikea or
              eBay, contact our professional man and van staff today.
            </p>
          </div>
        </div>

        {/* Paragraph Content */}
        <div className="mt-8 text-xl text-semibold text-gray-800 leading-relaxed">
          <p>
            Man and Van Bracknell takes the stress out of all types of house
            moves. Whether you’re moving from a six-bedroom house or a flat and
            need light man and van services, we can help. We pride ourselves on
            offering a reliable, affordable service.
          </p>
          <p className="mt-4">
            Our man and van staff are fully trained and offer a friendly,
            professional service to customers around Bracknell. We can usually
            come out within 24 hours, so give our team a call today.
          </p>
          <p className="mt-4">
            Our service is the affordable way to shift a full house of furniture
            or just a few of the heavy goods you can’t handle yourself. We offer
            a cheap service from as little as £12 per hour, giving our customers
            flexibility.
          </p>
          <p className="mt-4">
            We are here to take the pain out of moving. We don’t mix your
            belongings with other customers, so there’ll be no mix-up. We handle
            fragile goods with care and our staff are punctual and reliable.
            Call Man and Van Bracknell today!
          </p>
        </div>
      </div>
      <FAQ />
    </div>
  );
};

export default Home;
