import React from "react";
import Model from "./Model";
import Nav from "./Nav";
const PageExperience = () => {
    return (
        <>
            <Nav />
            <section className="w-full relative bg-black text-white ">


                <div className="fixed inset-0 z-10">
                    <Model />
                </div>


                <div className="size-full absolute inset-0 flex justify-evenly pointer-events-none">
                    <div className="h-full shrink-0 w-px bg-white/10"></div>
                    <div className="h-full shrink-0 w-px bg-white/10"></div>
                    <div className="h-full shrink-0 w-px bg-white/10"></div>
                    <div className="h-full shrink-0 w-px bg-white/10"></div>
                    <div className="h-full shrink-0 w-px bg-white/10"></div>
                </div>

                <div className="h-screen w-full flex items-end p-12">
                    <h1 className="text-[12vw] tracking-tight  leading-none uppercase">
                        Timeless Legacy
                    </h1>
                </div>

                <div className=" w-full py-24 space-y-24">
                    <div className="flex p-12">
                        <div className="max-w-sm">
                            <h2 className="text-4xl font-light tracking-tight  mb-4">
                                Sculpted in Time
                            </h2>
                            <p className="text-lg ">
                                Explore ancient stone forms brought to life through immersive
                                3D design, where history and digital craftsmanship merge.
                            </p>
                        </div>
                    </div>

                    <div className="flex p-12 justify-end">
                        <div className="max-w-sm">
                            <h2 className="text-4xl font-light tracking-tight ">
                                Digital Antiquity
                            </h2>
                            <p className="text-lg ">
                                Experience Greek sculptures reimagined in three dimensions,
                                revealing every detail through motion and scroll interaction.
                            </p>
                        </div>
                    </div>

                    <div className="flex p-12">
                        <div className="max-w-sm">
                            <h2 className="text-4xl font-light tracking-tight  mb-4">
                                Crafted in Stone
                            </h2>
                            <p className="text-lg ">
                                Each statue reflects the precision and elegance of ancient
                                artistry, elevated through modern visual storytelling.
                            </p>
                        </div>
                    </div>

                    <div className="flex p-12 justify-end">
                        <div className="max-w-sm">
                            <h2 className="text-4xl font-light tracking-tight mb-4">
                                Eternal Form
                            </h2>
                            <p className="text-lg">
                                A curated collection of classical Greek figures designed to
                                showcase exclusivity, balance, and timeless beauty.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default PageExperience;