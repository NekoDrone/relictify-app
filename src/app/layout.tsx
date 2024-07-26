"use client";

import "./globals.css";
import React, { useEffect } from "react";
import localFont from "next/font/local";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AssetsProvider } from "@/utilities/providers/AssetsProvider";
import { ManifestProvider } from "@/utilities/providers/ManifestProvider";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const din = localFont({
    src: "../../public/fonts/DIN.ttf",
});

const queryClient = new QueryClient();

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    useEffect(() => {
        if (process.env.NODE_ENV === "development")
            console.log("Relictify running in development mode.");
    }, []);

    return (
        <>
            <title>Relictify</title>
            <html lang="en">
                <body className={din.className}>
                    <QueryClientProvider client={queryClient}>
                        <ReactQueryDevtools />
                        <AssetsProvider>
                            <ManifestProvider>
                                <main>{children}</main>
                            </ManifestProvider>
                        </AssetsProvider>
                    </QueryClientProvider>
                </body>
            </html>
        </>
    );
}
