import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import localFont from "next/font/local";

const din = localFont({
    src: "../../public/fonts/DIN.ttf",
});
export const metadata: Metadata = {
    title: "Relictify",
    description: "A relics simulator for Honkai: Star Rail",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={din.className}>
                <main>{children}</main>
            </body>
        </html>
    );
}
