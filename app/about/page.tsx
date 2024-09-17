import { offers } from "@/lib/constants";
import { off } from "process";
import React from "react";

const About = () => {
    return (
        <div className="min-h-screen p-10 w-full bg-gradient-to-br from-gray-900 via-gray-800 to-orange-900">
            <section className=" w-3/5 items-center justify-center mx-auto">
                <h2 className="text-white mb-3 text-3xl text-center font-extrabold">About Us</h2>
                <p className="text-lg text-gray-300">
                    Welcome to ServiPal, your ultimate solution for connecting with local
                    service providers across a range of essential everyday needs. Our
                    platform is designed to offer a seamless experience, bringing together
                    multiple vendours to provide top-quality item delivery, food ordering,
                    laundry services, and a secure e-commerce marketplace.
                </p>
                <p className="text-lg text-gray-300 mt-3">
                    At ServiPal, we don't just offer services — we connect you to the
                    vendours that meet your unique needs. While we facilitate the
                    platform, the actual services are delivered by trusted local
                    providers. Our goal is to empower both customers and vendours through
                    a secure, convenient, and efficient platform that simplifies everyday
                    tasks.
                </p>
            </section>
            <section className="  w-3/5 items-center justify-center mx-auto">
                <h2 className="text-white my-3 text-2xl text-center font-semibold">Our Mission</h2>
                <p className="text-lg text-gray-300">
                    Our mission is to provide a reliable and versatile
                    platform that bridges the gap between customers and vendours, ensuring
                    a high level of convenience, transparency, and security in all
                    transactions. We are committed to supporting local businesses while
                    giving users access to essential services from the comfort of their
                    homes.
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
