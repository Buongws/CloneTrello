"use client";

import { plansList } from "@/lib/data";
import React from "react";
import { Button } from "../ui/button";

const PlansComp = (props: any) => {
  let plansIndex = 0;
  return (
    <div {...props}>
      <div className="px-[10%] grid grid-cols-1 md:md:!grid-cols-2 lg:!grid-cols-4 gap-4 lg:gap-0 mt-6">
        {plansList?.map((item, index) => (
          <div
            key={index}
            className={`p-5 mr-5 bg-white ${
              index == plansIndex
                ? "border-2 border-[#00c7e5]"
                : "border border-gray-200"
            }`}
          >
            <item.icon size={48} />
            <h1 className="text-sm font-semibold uppercase pt-2">
              {item.planName}
            </h1>
            <p className="h-28 mt-4">
              $<span className="text-5xl">{item.price}</span>USD / MO
            </p>
            <p className="h-48">{item.desc}</p>
            <Button
              className={`border border-[#00c7e5] hover:bg-[#e6fafc] mb-5 ${
                index == plansIndex && "bg-[#e6fafc] text-[#00c7e5]"
              }`}
            >
              {item.button}
            </Button>
          </div>
        ))}
      </div>
      <div className="pt-10 px-[10%] flex items-center flex-col">
        <div className="te text-xl">
          Join over 2,000,000 teams worldwide that are using Trello to get more
          done.
        </div>
        <div className="pt-5">
          <img
            src="https://images.ctfassets.net/rz1oowkt5gyp/19rAABnbk8KNNuh3zJzsmr/210fb8ee51dea14595462f844b7c9beb/logos-horizontal-visa-coinbase-john-deere-zoom-grand-hyatt-fender.svg"
            alt="image"
          />
        </div>
      </div>
    </div>
  );
};

export default PlansComp;
