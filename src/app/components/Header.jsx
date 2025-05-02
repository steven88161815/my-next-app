"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
    {
        id: 1,
        href: "/posts",
        name: "Posts",
    },
    {
        id: 2,
        href: "/about",
        name: "About",
    },
];

const Header = () => {
    const pathname = usePathname();
    console.log("[Header] path =", pathname);
    return (
        <div>
            {navLinks.map((link) => {
                const isActive = pathname.startsWith(link.href);

                return (
                    <Link
                        className={
                            isActive ? "text-yellow-400" : "text-blue-400"
                        }
                        href={link.href}
                        key={link.id}
                    >
                        {link.name}
                    </Link>
                );
            })}
        </div>
    );
};

export default Header;
