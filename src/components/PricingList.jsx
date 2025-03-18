import React from "react";
import Button from "./Button";
import { pricing } from "../constants";
import { check } from "../assets";

const PricingList = () => {
  return (
    <div className="flex gap-[1rem] max-lg:flex-wrap">
      {pricing.map((item) => (
        <div
          key={item.id}
          className="w-[19rem] max-lg:w-full h-full px-6 bg-n-8 border border-n-6 rounded-[2rem] lg:w-auto even:py-14 odd:py-8 odd:my-4 even:bg-conic-gradient even:opacity-9 even:text-n-7 [&>h4]:last:bg-conic-gradient [&>h4]:last:inline-block [&>h4]:last:text-transparent [&>h4]:last:bg-clip-text"
        >
          <h4 className="h3 mb-4 font-bold">{item.title}</h4>
          <p className="body-2 min-h-[4rem] mb-3">{item.description}</p>
          <div className="flex items-center h-[5.5rem] mb-6">
            {item.price && (
              <>
                <div className="h3">$</div>
                <div className="text-[5.5rem] leading-none font-bold">
                  {item.price}
                </div>
              </>
            )}
          </div>
          <Button
            className="w-full mb-6"
            href={item.price ? "/pricing" : "mailto:contact@urdev.com"}
            white={item.id === "0" || item.id === "1"}
          >
            {item.price === "~20" ? "Contact Us" : "Get Started"}
          </Button>
          <ul>
            {item.features.map((feature, index) => (
              <li
                key={index}
                className="flex items-start py-5 border-t border-n-6"
              >
                <img src={check} width={24} height={24} alt="check" />
                <p className="body-2 ml-4">{feature}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default PricingList;
