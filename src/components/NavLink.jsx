import React from 'react';

export default function NavLink({ href, children }) {
    return (
        <a
            href={href}
            className="px-4 py-2 text-black hover:text-white hover:bg-gray-700/40 rounded-lg"
        >
            {children}
        </a>
    );
}
