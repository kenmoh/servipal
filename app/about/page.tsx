import { mission, offers, serviPal, welcome } from "@/lib/constants";
import { off } from "process";
import React from "react";

const About = () => {
    return (
        <div className="min-h-screen p-10 w-full bg-gradient-to-br from-gray-900 via-gray-800 to-orange-900">
            <section className=" w-3/5 items-center justify-center mx-auto">
                <h2 className="text-white mb-3 text-3xl text-center font-extrabold">About Us</h2>
                <p className="text-lg text-gray-300">
                    {welcome}
                </p>
                <p className="text-lg text-gray-300 mt-3">
                    {serviPal}
                </p>
            </section>
            <section className="  w-3/5 items-center justify-center mx-auto">
                <h2 className="text-white my-3 text-2xl text-center font-semibold">Our Mission</h2>
                <p className="text-lg text-gray-300">
                    {mission}
                </p>

            </section>

            <section className=" w-3/5 items-center justify-center mx-auto">
                <h2 className="text-white my-3 text-2xl text-center font-semibold">What we offer</h2>
                {offers.map(offer => (
                    <div key={offer.label} className="my-3">
                        <h2 className="text-white mb-1 text-xl">{offer.label}</h2>
                        <p className="text-lg text-gray-300" >
                            {offer.decription}
                        </p>
                    </div>
                ))}

            </section>
        </div>
    );
};

export default About;
