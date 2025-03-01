import Image from "next/image";
import Form from "../Form/page"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Wellcome About Page",
};


const Contact: React.FC = () => {
 
  return (
    <div>

      <div className="relative h-40 sm:h-60 md:h-96 lg:h-70">
        <Image
          src="/bracknellmanandvan.jpg"
          alt="Man and Van Services"
          className="w-full h-full object-cover"
          width={300}
          height={300}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-80 flex items-center justify-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center">
            Contact
          </h1>
        </div>
      </div>

<Form/>
    </div>
  );
};

export default Contact;
