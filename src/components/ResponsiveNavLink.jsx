import React from 'react';

export default function ResponsiveNavLink({ href, children }) {
    return (
        <a
            href={href}
            className="px-4 py-2 text-sm text-gray-500 hover:bg-gray-200 hover:text-black block"
        >
            {children}
        </a>
    );
}
