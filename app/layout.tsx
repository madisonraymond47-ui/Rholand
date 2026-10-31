import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "Roland Megbontowon | GoHighLevel Automation", description: "GoHighLevel CRM systems, workflows, pipelines and automation by Roland Megbontowon." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
