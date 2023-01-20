import React from 'react';
import Navbar from './Navbar';
import Images from '../constant/Images';
import MobileNav from './MobileNav';

export default function Hero() {
    return (
        <div>
            <div className="hidden md:block">
                <Navbar />
            </div>
            <div>
                <MobileNav />
            </div>
            <div className="md:pt-10 lg:pt-10 ">
                <div className="mb-6 md:hidden lg:hidden">
                    <img
                        src={Images.heroMobile}
                        alt="Hero Mobile"
                        className="p-2 max-h-screen"
                    />
                </div>
                <div className="flex justify-center">
                    {/* bagian kiri */}
                    <div className="mb-2 ml-10 md:w-1/2 lg:w-1/2 lg:px-20 flex flex-col justify-between">
                        <div className="flex flex-col items-center md:items-start">
                            <div className="mb-4 flex flex-col ">
                                <h1 className="mb-4 text-5xl flex md:flex-col justify-between">
                                    <p className="font-epilogue space">Make</p>

                                    <p className="font-epilogue ">
                                        remote work
                                    </p>
                                </h1>
                                <span className="text-sm font-epilogue">
                                    <p className="text-md">
                                        Get your team in sync, no matter your
                                        location.
                                    </p>
                                    <p className="text-md">
                                        Streamline proccesses, create team
                                        rituals, and
                                    </p>
                                    <p className="text-md">
                                        watch productivity soar.
                                    </p>
                                </span>
                            </div>

                            <div className="mt-4 mb-8">
                                <button className="border  border-black rounded-xl px-4 py-2 items-center text-white bg-black hover:text-black hover:bg-white">
                                    Learn More
                                </button>
                            </div>
                        </div>

                        <div className=" flex gap-x-6">
                            <img
                                src={Images.databiz}
                                alt="databiz"
                                className="h-4"
                            />
                            <img
                                src={Images.audioPhile}
                                alt="audioPhile"
                                className="h-4"
                            />
                            <img src={Images.meet} alt="meet" className="h-4" />
                            <img
                                src={Images.maker}
                                alt="maker"
                                className="h-4"
                            />
                        </div>
                    </div>

                    {/* bagian kanan */}

                    <div className="hidden md:flex md:w-1/2 lg:flex lg:w-1/2 justify-center ">
                        <img
                            src={Images.heroDesktop}
                            alt=""
                            className="p-2 max-w-xs"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
