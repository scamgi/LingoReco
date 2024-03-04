import Link from "next/link";

export default function MainLayout({
    children
}: {
    children: React.ReactElement
}) {
    return <div>
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/library">Library</Link>
        <main>{children}</main>
    </div>;
}
