"use client";
import { Toaster } from "react-hot-toast";
import Sidebar from "@/components/Sidebar";

export default function GithubLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex github-bg">
      <Sidebar />
      <div className="flex-1">
        {children}
      </div>
      <Toaster />
    </div>
  );
}