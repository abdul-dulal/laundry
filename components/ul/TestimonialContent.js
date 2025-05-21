import { reviews } from "@/utils/data";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";

const TestimonialContent = ({ anim }) => {
  return (
    <div className="flex flex-col overflow-hidden pb-[30px]">
      <div className={`flex items-center justify-center gap-[88px] ${anim}`}>
        <div className="flex gap-[30px]">
          {reviews.map((review, index) => {
            return (
              <div
                key={index}
                className="w-[410px]  border border-solid border-primary/20 shadow-[0px_10px_40px_0px_#14213733] bg-white px-10 pt-10 pb-[75px]"
              >
                <div>
                  <div className="flex gap-1">
                    <FontAwesomeIcon
                      className="size-[14px] text-[#F59E0B]"
                      icon={faStar}
                    />
                    <FontAwesomeIcon
                      className="size-[14px] text-[#F59E0B]"
                      icon={faStar}
                    />
                    <FontAwesomeIcon
                      className="size-[14px] text-[#F59E0B]"
                      icon={faStar}
                    />
                    <FontAwesomeIcon
                      className="size-[14px] text-[#F59E0B]"
                      icon={faStar}
                    />
                    <FontAwesomeIcon
                      className="size-[14px] text-[#F59E0B]"
                      icon={faStar}
                    />
                  </div>
                  <p className="text-[16px] leading-[26px] font-normal text-primary/70 mt-[26px]">
                    Maecenas eget ullamcorper dolor placerat ipsum <br />
                    zliquam dictum massa eu libero ehicula id dapibus <br />
                    ligula vulputate.
                  </p>
                  <div className="flex items-center justify-between mt-[38px]">
                    <div className="flex items-center gap-[14px]">
                      <Image
                        className="rounded-[6px]"
                        src={review.img}
                        width={54}
                        height={54}
                        alt={review.name}
                      />
                      <div>
                        <h5>{review.name}</h5>
                        <p className="text-[16px] font-medium leading-[26px] text-primary/70 uppercase">
                          {review.design}
                        </p>
                      </div>
                    </div>
                    <span>
                      <svg
                        width="48"
                        height="36"
                        viewBox="0 0 48 36"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M28.6963 18.7847L46.3326 34.5144C46.9771 35.0893 47.9982 34.6318 47.9982 33.7682V1C47.9982 0.447715 47.5505 0 46.9982 0H29.3619C28.8096 0 28.3619 0.447714 28.3619 0.999998V18.0384C28.3619 18.3235 28.4835 18.595 28.6963 18.7847Z"
                          fill="#142137"
                          fillOpacity="0.12"
                        />
                        <path
                          d="M0.334209 18.7847L17.9705 34.5144C18.615 35.0893 19.6361 34.6318 19.6361 33.7682V1C19.6361 0.447715 19.1884 0 18.6361 0H0.999826C0.44754 0 -0.000173569 0.447714 -0.000173569 0.999998V18.0384C-0.000173569 18.3235 0.121475 18.595 0.334209 18.7847Z"
                          fill="#142137"
                          fillOpacity="0.12"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TestimonialContent;
