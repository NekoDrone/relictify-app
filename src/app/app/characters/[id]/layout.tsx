export default function IdLayout({
    children,
    params,
}: Readonly<{
    children: React.ReactNode;
    params: { id: string }
}>) {
    return <>{children}</>;
}
