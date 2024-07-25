"use client";

import type { Metadata } from "next";
import "./globals.css";
import React, { Suspense } from "react";
import localFont from "next/font/local";
import { PomPomLoading } from "@/components/Loading/PomPomLoading";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AssetsProvider } from "@/utilities/providers/AssetsProvider";
import { ManifestProvider } from "@/utilities/providers/ManifestProvider";

const din = localFont({
    src: "../../public/fonts/DIN.ttf",
});

const queryClient = new QueryClient();

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <QueryClientProvider client={queryClient}>
            <html lang="en">
                <body className={din.className}>
                    <AssetsProvider>
                        <ManifestProvider>
                            <main>{children}</main>
                        </ManifestProvider>
                    </AssetsProvider>
                </body>
            </html>
        </QueryClientProvider>
    );
}
