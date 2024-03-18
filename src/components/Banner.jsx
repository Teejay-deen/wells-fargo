import React from "react";

const Banner = () => {
  return (
    <div>
      <div className=" bg-slate-100 h-full w-full">
        <div className=" px-5 mt-4 ">
          <div className="shadow-lg px-6 py-7 w-96 h-96 bg-white mt-2  rounded-lg ">
            <h1 className="font-semibold ">Good afternoon</h1>
            <span className="w-full">Sign on to manage your accounts.</span>
            <form action="">
              <input
                className="w-full hover:border-violet-500 mt-2 mb-5 px-2 h-10"
                type="text"
                placeholder="username"
              />

              <input
                className="w-full hover:border-violet-500 mt-2 mb-5 px-2 h-10"
                type="text"
                placeholder="password"
              />

              <div className="flex gap-3 items-center">
                <input
                  type="checkbox"
                  className="w-5 h-11 bg-slate-800"
                  placeholder=""
                />
                <span className=" "> Save username</span>
              </div>
              <div className="flex justify-between mt-4">
                <button className="font-semibold  rounded-full px-10 gap-6 py-2  bg-red-600 text-center text-white ">
                  Sign On
                </button>
                <span className="font-semibold items-center">Enroll</span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
