import React, { useState, Fragment } from 'react';
import ResponsiveNavLink from './ResponsiveNavLink';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import Images from '../constant/Images';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

export default function MobileNav() {
    const [open, setOpen] = useState(false);
    return (
        <div className="flex md:hidden items-center justify-between py-2 px-4  ">
            <a href="#" className="text-3xl font-epilogue ">
                snap
            </a>

            <div
                onClick={() => setOpen(false)}
                className={`${
                    open ? 'block' : 'hidden'
                } bg-transparent absolute w-full h-full inset-0 `}
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
                    className="text-black w-6 h-6"
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
                } bg-white h-full absolute justify-center font-epilogue right-0 mr-0 top-0  py-4 rounded-lg w-56 overflow-hidden`}
            >
                {/* button untuk close */}
                <div className="flex justify-end">
                    <button onClick={() => setOpen(!open)} className=" mx-4">
                        <svg
                            width="26"
                            height="26"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g fill="#151515" fill-rule="evenodd">
                                <path d="m2.393.98 22.628 22.628-1.414 1.414L.979 2.395z" />
                                <path d="M.98 23.607 23.609.979l1.414 1.414L2.395 25.021z" />
                            </g>
                        </svg>
                    </button>
                </div>

                <Menu as="div" className=" inline-block text-left">
                    <Menu.Button className="inline-flex w-full justify-start   px-4 py-2 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50 ">
                        Features
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
                        <Menu.Items className="relative right-0 ml-8 z-10 mt-2 w-56 origin-top-right   bg-white   focus:outline-none">
                            <div className="flex items-center">
                                <img
                                    src={Images.iconTodo}
                                    alt=""
                                    className="h-full"
                                />
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
                            </div>
                            <div className="flex items-center">
                                <img src={Images.iconCalendar} alt="" />

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
                            </div>
                            <div className="flex items-center">
                                <img src={Images.iconReminders} alt="" />
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
                            </div>
                            <div className="flex items-center">
                                <img src={Images.iconPlanning} alt="" />
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
                            </div>
                        </Menu.Items>
                    </Transition>
                </Menu>
                <Menu as="div" className=" inline-block text-left">
                    <Menu.Button className="inline-flex w-full justify-start   px-4 py-2 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50 ">
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
                        <Menu.Items className="relative  right-0 ml-4 z-10 mt-2 w-full origin-top-right   bg-white   focus:outline-none">
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

                <ResponsiveNavLink href="#">Careers</ResponsiveNavLink>
                <ResponsiveNavLink href="#">About</ResponsiveNavLink>
                <a
                    className="text-sm flex justify-center py-2 text-gray-500"
                    href="#"
                >
                    Login
                </a>
                <a
                    className="text-sm flex justify-center py-2 text-gray-500 border rounded-full m-1 "
                    href="#"
                >
                    Register
                </a>
            </div>
        </div>
    );
}
