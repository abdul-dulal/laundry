"use client";
import FadeUpAnimationProvider from "@/components/ul/FadeUpAnimationProvider ";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const FaqContent = () => {
  const [openIndex, setOpenIndex] = useState(1);

  const toggleIndex = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };
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
  return (
    <div>
      {faqData.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div key={index}>
            <FadeUpAnimationProvider>
              <div className="border-b pb-10 overflow-hidden">
                <div
                  onClick={() => toggleIndex(index)}
                  className="flex justify-between items-center cursor-pointer"
                >
                  <h5 className="sm:text-xl text-lg font-medium leading-[100%] text-primary mt-10">
                    {item.question}
                  </h5>
                  <div className="sm:pr-10 pr-5">
                    <FontAwesomeIcon
                      icon={isOpen ? faMinus : faPlus}
                      className="text-[12px] text-primary"
                    />
                  </div>
                </div>

                <div
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${
                    isOpen ? "max-h-[200px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-base font-normal 2xl:pr-16 sm:pr-12 pr-6 leading-[26px] text-primary/70 mt-10">
                    {item.answer}
                  </p>
                </div>
              </div>
            </FadeUpAnimationProvider>
          </div>
        );
      })}
    </div>
  );
};

export default FaqContent;
