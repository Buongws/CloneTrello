"use client";
import React from "react";

const GetStarted = (props: any) => {
  return (
    <div className="pt-10 w-full h-full">
      <div
        {...props}
        className="relative flex justify-between items-center w-full min-h-[400px] bg-gradient-to-tr from-[#5243aa] to-[#ed50b4] max-lg:center"
      >
        <div className="max-lg:hidden">
          <img
            src="https://images.ctfassets.net/rz1oowkt5gyp/6Q4l8SJeMZGSu1m6W9vAjL/1021a10f6940ce44c50d0ffaefec223e/BigSwingFooterHeroGraphic__Left.svg"
            alt="imageLeft"
          />
        </div>
        <div className="getStartedForm flex flex-col items-center">
          <div className="text-white mb-4 text-3xl font-bold">
            Get started with Trello today
          </div>
          <input
            type="email"
            placeholder="Email"
            className="text-gray-700 p-2 rounded border border-gray-300 w-[90%] mb-4"
          />
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Sign up - it’s free!
          </button>
        </div>
        <div className="max-lg:hidden">
          <img
            src="https://images.ctfassets.net/rz1oowkt5gyp/7KsuX6srvRqJVzeAIdIzIb/da1a3319c278d251ecbd078fcffdcd23/BigSwingFooterHeroGraphic__Right.svg"
            alt="imageRight"
          />
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
