"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function MobileWelcomeScreen({ onContinue }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const isMobile = window.innerWidth < 640;
    setShow(isMobile);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-[#007A33] text-white flex flex-col justify-between px-4 pt-10 pb-10">
        {/* Munchies */}
        <div className="relative w-50 flex justify-start px-4 pt-6
                                    sm:flex sm:w-100  sm:left-[40px] sm:p-10">
            <Image 
            src="/Munchies.png"
            className="invert"
            width={273.42}
            height={40}
            alt=""
            />
        </div>

        <div className="mt-24">
            <h1 className="text-[48px] leading-[44px] font-extrabold">Treat<br />yourself.</h1>
            <p className="mt-4 text-base leading-relaxed text-white">
            Find the best restaurants in your city<br />
            and get it delivered to your place!
            </p>
        </div>

        <button
            onClick={onContinue}
            className="w-full py-4 mt-20 border border-white rounded-xl text-base font-semibold"
        >
            Continue
        </button>
    </div>
  );
}
