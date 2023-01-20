import React, { useState } from 'react';
import ResponsiveNavLink from './ResponsiveNavLink';
import { Menu, Transition } from '@headlessui/react';

export default function MobileNav() {
    const [open, setOpen] = useState(false);
    return (
        <div className="flex  md:hidden items-center justify-between  border-gray-700">
            <a href="#" className="text-black font-epilogue ">
                snap
            </a>
            <div
                onClick={() => setOpen(false)}
                className={`${
                    open ? 'block' : 'hidden'
                } bg-transparent absolute w-full h-full inset-0`}
            ></div>
            <button
                onClick={() => setOpen((open) => !open)}
                className="focus:outline-none"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="text-white w-6 h-6"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                    />
                </svg>
            </button>
            <div
                className={`${
                    open ? 'block' : 'hidden'
                } bg-white absolute right-0 mr-10 top-0 mt-4 py-1 rounded-lg w-56 overflow-hidden`}
            >
                <ResponsiveNavLink href="#">Home</ResponsiveNavLink>
                <ResponsiveNavLink href="#">Articles</ResponsiveNavLink>
                <ResponsiveNavLink href="#">Gallery</ResponsiveNavLink>
                <ResponsiveNavLink href="#">About</ResponsiveNavLink>
                <ResponsiveNavLink href="#">Contact</ResponsiveNavLink>
            </div>
        </div>
    );
}
