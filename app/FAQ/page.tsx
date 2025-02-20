"use client"; // Add this directive at the top of the file

import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa6";
import { RiCheckboxCircleLine } from "react-icons/ri";

const faqData = [
  {
    question: "How to Hire a Man and Van in Guildford?",
    answer:
      "Have you got something that needs moving in the Guildford area? If so, you might find that hiring a man and a van is your best bet for getting things done. When we cannot complete a task for ourselves, for whatever reason, it is sensible to hire a professional to complete the task for us.",
  },
  {
    question: "Do you offer a renewals discount?",
    answer:
      "Man and Van Guildford deal with all types of house and waste clearance, both domestic and commercial, from big clearance projects to smaller clear-outs.",
  },
  {
    question: "Do you offer a renewals discount?",
    answer:
      "Man and Van Guildford deal with all types of house and waste clearance, both domestic and commercial, from big clearance projects to smaller clear-outs.",
  },
  {
    question: "Do you offer a renewals discount?",
    answer:
      "Man and Van Guildford deal with all types of house and waste clearance, both domestic and commercial, from big clearance projects to smaller clear-outs.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white opacity-70 mt-10">
      <div className="max-w-2xl mx-auto py-10">
        <h2 className="text-4xl font-bold text-center mb-6">Man and Van</h2>
        <p className="text-center text-black mb-8 text-xl">
          Man and Van Guildford deal with all types of house and waste
          clearance, both domestic and commercial, from big clearance projects
          to smaller clear-outs.
        </p>

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="bg-green-100 rounded-lg shadow-md overflow-hidden hover:border-[#A4DC54] focus:outline-none   transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-4 text-left font-semibold text-gray-800"
              >
                <div className="flex items-center gap-2">
                  <span className="text-xl">
                    {/* Icon with color #A4DC54 */}
                    <RiCheckboxCircleLine className="size-6 text-[#A4DC54]" />
                  </span>
                  {item.question}
                </div>
                <span className="text-xl">
                  {openIndex === index ? (
                    <FaMinus className="text-[#A4DC54]" />
                  ) : (
                    <FaPlus className="text-[#A4DC54]" />
                  )}
                </span>
              </button>
              {openIndex === index && (
                <div className="p-4 text-gray-700 bg-white">{item.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
