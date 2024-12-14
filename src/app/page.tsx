"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [rating, setRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  return (
    <main className="h-screen flex justify-center items-center bg-neutral-veryDarkBlue">
      <section
        className={`${
          submitted ? "animate-up" : ""
        } w-[400px] flex flex-col transition   rounded-3xl bg-gradient-to-b from-gray-800 to-gray-800/40 p-8 gap-6`}
      >
        {submitted ? (
          <>
            <div className="flex flex-col items-center gap-6 ">
              <div>
                <Image
                  src={"/images/illustration-thank-you.svg"}
                  alt="Thank you illustration"
                  width={162}
                  height={108}
                />
              </div>
              <div className="flex p-1 px-4 items-start justify-center rounded-full bg-primary-orange/5 mb-2">
                <h1 className="text-primary-orange text-sm">
                  You selected {rating} out of 5
                </h1>
              </div>
              <div className="flex flex-col items-center gap-2">
                <h1 className="text-2xl">Thank You!</h1>
                <h1 className="text-neutral-lightGrey text-center">
                  We appreciate you taking the time to give rating. If you ever
                  need more support, don't hesitate to get in touch!
                </h1>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="w-10 flex justify-center items-center rounded-full p-3 bg-neutral-darkBlue">
              <Image
                src={"/images/icon-star.svg"}
                alt="Star icon"
                width={17}
                height={16}
              />
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="text-2xl">How did we do?</h1>
              <h1 className="text-neutral-lightGrey">
                Please let us know how we did with your support request. All
                feedback is appreciated to help us improve our offering.
              </h1>
            </div>
            <div className="flex justify-between gap-2">
              {Array.from({ length: 5 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setRating(index + 1)}
                  className={`w-12 h-12 flex justify-center items-center transition duration-100 rounded-full bg-neutral-darkBlue ${
                    rating === index + 1
                      ? "bg-primary-orange"
                      : "hover:bg-opacity-60"
                  }`}
                >
                  <h1
                    className={`font-semibold ${
                      rating === index + 1
                        ? "text-neutral-white"
                        : "text-neutral-lightGrey"
                    }`}
                  >
                    {index + 1}
                  </h1>
                </button>
              ))}
            </div>
            <div className="flex w-full items-center">
              <button
                className="w-full bg-primary-orange rounded-full p-2 text-neutral-veryDarkBlue font-semibold text-sm "
                onClick={() => {
                  if (rating === 0) {
                    alert("Please select a rating");
                    return;
                  }
                  setSubmitted(true);
                }}
              >
                SUBMIT
              </button>
            </div>
          </>
        )}
      </section>
    </main>
  );
}
