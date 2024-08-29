"use client";

import "./globals.css";
import React, { useEffect } from "react";
import localFont from "next/font/local";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AssetsProvider } from "@/utilities/providers/AssetsProvider";
import { ManifestProvider } from "@/utilities/providers/ManifestProvider";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { DebugProvider, useDebug } from "@/utilities/providers/DebugProvider";

const din = localFont({
    src: "../../public/fonts/DIN.ttf",
});

const queryClient = new QueryClient();

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const { debugMode } = useDebug();

    useEffect(() => {
        if (debugMode)
            console.log("Relictify is running in DEBUG/DEVELOPMENT mode");
    }, [debugMode]);

    return (
        <>
            <title>Relictify</title>
            <html lang="en">
                <body className={din.className}>
                    <QueryClientProvider client={queryClient}>
                        <ReactQueryDevtools />
                        <DebugProvider>
                            <AssetsProvider>
                                <ManifestProvider>
                                    <main>{children}</main>
                                </ManifestProvider>
                            </AssetsProvider>
                        </DebugProvider>
                    </QueryClientProvider>
                </body>
            </html>
        </>
    );
}
