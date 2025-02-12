"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function LinkedInLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav className="fixed top-0 w-full bg-white border-b z-50">
        <div className="max-w-[1128px] mx-auto flex items-center justify-between px-3 py-1">
          {/* Left side - Logo and Search */}
          <div className="flex items-center flex-1 min-w-0">
            <Link href="/" className="shrink-0">
              <Image
                src="/linkedIn.png"
                alt="LinkedIn"
                width={35}
                height={40}
                className="mr-2"
              />
            </Link>
            <div className="relative flex-1 max-w-[280px]">
              <input
                type="text"
                placeholder="Search"
                className="w-full bg-[#eef3f8] border-none rounded-[4px] pl-8 pr-4 py-[6px] text-sm placeholder-gray-600 focus:outline-none"
              />
              <svg
                className="absolute left-2 top-1/2 -translate-y-1/2 w-4 h-4 text-[#666666]"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          {/* Right side - Navigation */}
          <div className="flex items-center gap-1">
            <NavItem href="/linkedin" icon="home" label="Home" isActive />
            <NavItem href="" icon="people" label="My Network" count={1} />
            <NavItem href="" icon="briefcase" label="Jobs" />
            <NavItem href="" icon="chat" label="Messaging" />
            <NavItem href="" icon="bell" label="Notifications" />
            <div className="border-l h-[40px] mx-1"></div>
            <ProfileDropdown />
          </div>
        </div>
      </nav>
      <div className="pt-14">
        {children}
      </div>
    </>
  );
}

interface NavItemProps {
  href: string;
  icon: string;
  label: string;
  isActive?: boolean;
  count?: number;
}

const NavItem: React.FC<NavItemProps> = ({ href, icon, label, isActive, count }) => {
  const iconMap: { [key: string]: React.JSX.Element } = {
    home: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    people: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    briefcase: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    chat: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    bell: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
      </svg>
    ),
  };

  return (
    <Link
      href={href}
      className={`flex flex-col items-center px-2 py-1 hover:text-black ${
        isActive ? "text-black" : "text-gray-500"
      }`}
    >
      <div className="relative">
        {iconMap[icon]}
        {count && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
            {count}
          </span>
        )}
      </div>
      <span className="text-[12px]">{label}</span>
    </Link>
  );
};

const ProfileDropdown: React.FC = () => {
  return (
    <Link
      href="/linkedin/profile"
      className="flex flex-col items-center px-2 py-1 text-gray-500 hover:text-black"
    >
      <Image
        src="/profile.jpeg"
        alt="Profile"
        width={24}
        height={24}
        className="rounded-full"
      />
      <span className="text-[12px] flex items-center">
        Me
        <svg className="w-3 h-3 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 9l-7 7-7-7" />
        </svg>
      </span>
    </Link>
  );
};
