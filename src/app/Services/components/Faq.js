// components/FaqSection.tsx
"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const faqData = [
  {
    question: "What types of cleaning services do you offer?",
    answer:
      "Consectetur adipiscing eiusmod tempor incididunt labore magna aliquamaet consectetur adipiscing elit nunc faucibus nisl id dapibus finibus enim diam interdum nulla sed laoreet risus lectus feugiat. Our mission is simple: to make laundry day hassle free. With our easy-to-use service, you can enjoy the convenience of professional dry cleaning and laundry.",
  },
  {
    question: "How often should I schedule cleaning services?",
    answer:
      "Consectetur adipiscing eiusmod tempor incididunt labore magna aliquamaet consectetur adipiscing elit nunc faucibus nisl id dapibus finibus enim diam interdum nulla sed laoreet risus lectus feugiat. Our mission is simple: to make laundry day hassle free. With our easy-to-use service, you can enjoy the convenience of professional dry cleaning and laundry.",
  },
  {
    question: "What is included in a standard cleaning service?",
    answer:
      "Consectetur adipiscing eiusmod tempor incididunt labore magna aliquamaet consectetur adipiscing elit nunc faucibus nisl id dapibus finibus enim diam interdum nulla sed laoreet risus lectus feugiat. Our mission is simple: to make laundry day hassle free. With our easy-to-use service, you can enjoy the convenience of professional dry cleaning and laundry.",
  },
  {
    question: "How do I prepare my home for a cleaning service?",
    answer:
      "Consectetur adipiscing eiusmod tempor incididunt labore magna aliquamaet consectetur adipiscing elit nunc faucibus nisl id dapibus finibus enim diam interdum nulla sed laoreet risus lectus feugiat. Our mission is simple: to make laundry day hassle free. With our easy-to-use service, you can enjoy the convenience of professional dry cleaning and laundry.",
  },
  {
    question: "What if I am not satisfied with the cleaning service?",
    answer:
      "Consectetur adipiscing eiusmod tempor incididunt labore magna aliquamaet consectetur adipiscing elit nunc faucibus nisl id dapibus finibus enim diam interdum nulla sed laoreet risus lectus feugiat. Our mission is simple: to make laundry day hassle free. With our easy-to-use service, you can enjoy the convenience of professional dry cleaning and laundry.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(1);

  const toggleIndex = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="lg:py-[150px] md:py-[100px] py-20">
      <div className="container">
        <div className="grid grid-cols-12  lg:gap-[70px]">
          <div className="lg:col-span-4 col-span-12">
            <div className="bg-[#F2F6FF] p-10  rounded">
              <h2 className="text-5xl font-bold text-[#111827] mb-10">FAQ</h2>
              <p className="text-lg font-semibold text-[#111827] mb-4">
                Having Another Question?
              </p>
              <button className="flex items-center bg-[#111827] text-white px-5 py-2 rounded-full text-sm hover:bg-black transition">
                Send A Message
                <span className="ml-2 bg-white text-[#111827] rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  →
                </span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-8 col-span-12">
            <div className=" pb-[50px]">
              {faqData.map((item, index) => {
                const isOpen = openIndex === index;

                return (
                  <div key={index} className="border-b pb-10 overflow-hidden">
                    <div
                      onClick={() => toggleIndex(index)}
                      className="flex justify-between items-center cursor-pointer "
                    >
                      <h5 className="text-xl font-medium leading-[100%] text-primary mt-10">
                        {item.question}
                      </h5>
                      <div className="pr-10">
                        <FontAwesomeIcon
                          icon={isOpen ? faMinus : faPlus}
                          className="text-[12px] text-primary"
                        />
                      </div>
                    </div>

                    <div
                      className={`transition-all duration-500 ease-in-out overflow-hidden ${
                        isOpen
                          ? "max-h-[200px] opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <p className="text-base font-normal leading-[26px] text-primary/70 mt-10">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
