import React, { Fragment } from 'react';
import Images from '../constant/Images';
import NavLink from './NavLink';
import menuDropDown from './menuDropDown';
import MobileNav from './MobileNav';
import { Menu, Transition } from '@headlessui/react';
// import { Fragment, useEffect, useRef, useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
    return (
        <div className="px-10 flex items-center  justify-between">
            <div className="flex items-center ">
                <a
                    href="#"
                    className=" text-black  font-epilogue  mr-6 text-xl"
                >
                    snap
                </a>
                <div className="w-full flex justify-between">
                    <ul className="flex items-center">
                        <li className="p-4">
                            <Menu
                                as="div"
                                className="relative inline-block text-left"
                            >
                                <Menu.Button className="flex justify-center w-full  rounded-md  bg-white px-4 py-2 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
                                    Features
                                    <div
                                        onClick={() => setOpen((open) => !open)}
                                        className={`${
                                            open ? 'block' : 'rotate-180'
                                        } -mr-1 ml-2 h-5 w-5 p-1`}
                                    >
                                        <img
                                            src={Images.iconArrowDown}
                                            alt=""
                                        />
                                    </div>
                                </Menu.Button>
                                <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95"
                                >
                                    <Menu.Items className="absolute border right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black  ring-opacity-5 focus:outline-none">
                                        <Menu.Item>
                                            {({ active }) => (
                                                <a
                                                    href="#"
                                                    className={classNames(
                                                        active
                                                            ? 'bg-gray-100 text-gray-900'
                                                            : 'text-gray-500',
                                                        'block px-4 py-2 text-sm'
                                                    )}
                                                >
                                                    Todo List
                                                </a>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <a
                                                    href="#"
                                                    className={classNames(
                                                        active
                                                            ? 'bg-gray-100 text-gray-900'
                                                            : 'text-gray-500',
                                                        'block px-4 py-2 text-sm'
                                                    )}
                                                >
                                                    Calendar
                                                </a>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <a
                                                    href="#"
                                                    className={classNames(
                                                        active
                                                            ? 'bg-gray-100 text-gray-900'
                                                            : 'text-gray-500',
                                                        'block px-4 py-2 text-sm'
                                                    )}
                                                >
                                                    Reminder
                                                </a>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <a
                                                    href="#"
                                                    className={classNames(
                                                        active
                                                            ? 'bg-gray-100 text-gray-900'
                                                            : 'text-gray-500',
                                                        'block px-4 py-2 text-sm'
                                                    )}
                                                >
                                                    Planning
                                                </a>
                                            )}
                                        </Menu.Item>
                                    </Menu.Items>
                                </Transition>
                            </Menu>
                        </li>
                        <li className="p-4">
                            <Menu
                                as="div"
                                className="relative inline-block text-left"
                            >
                                <Menu.Button className="inline-flex w-full justify-center rounded-md  bg-white px-4 py-2 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
                                    Company
                                    <ChevronDownIcon
                                        className="-mr-1 ml-2 h-5 w-5"
                                        aria-hidden="true"
                                    />
                                </Menu.Button>
                                <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95"
                                >
                                    <Menu.Items className="absolute border right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black  ring-opacity-5 focus:outline-none">
                                        <Menu.Item>
                                            {({ active }) => (
                                                <a
                                                    href="#"
                                                    className={classNames(
                                                        active
                                                            ? 'bg-gray-100 text-gray-900'
                                                            : 'text-gray-500',
                                                        'block px-4 py-2 text-sm'
                                                    )}
                                                >
                                                    History
                                                </a>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <a
                                                    href="#"
                                                    className={classNames(
                                                        active
                                                            ? 'bg-gray-100 text-gray-900'
                                                            : 'text-gray-500',
                                                        'block px-4 py-2 text-sm'
                                                    )}
                                                >
                                                    Our Team
                                                </a>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <a
                                                    href="#"
                                                    className={classNames(
                                                        active
                                                            ? 'bg-gray-100 text-gray-900'
                                                            : 'text-gray-500',
                                                        'block px-4 py-2 text-sm'
                                                    )}
                                                >
                                                    Blog
                                                </a>
                                            )}
                                        </Menu.Item>
                                    </Menu.Items>
                                </Transition>
                            </Menu>
                        </li>

                        <li className="p-4 text-gray-500 hover:text-gray-900 text-sm font-medium">
                            <Menu>
                                <Menu.Button>Carrer</Menu.Button>
                            </Menu>
                        </li>
                        <li className="p-4 text-gray-500 hover:text-gray-900 text-sm font-medium">
                            <Menu>
                                <Menu.Button>About</Menu.Button>
                            </Menu>
                        </li>
                    </ul>
                </div>
            </div>
            <ul className="px-10 flex items-center gap-x-8 ">
                <li className="text-gray-500 hover:text-gray-900">Login</li>
                <li className="text-gray-500 hover:text-gray-900 border border-gray-400 hover:border-gray-900 rounded-xl px-4 py-2">
                    Register
                </li>
            </ul>
        </div>
    );
}
