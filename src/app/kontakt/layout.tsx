import type { Metadata } from 'next'
import { Poppins } from "next/font/google";
import SiteHeader from "@/app/_components/SiteHeader";
import ProjectTimeline from "@/app/_components/ProjectTimeline";
import SimpleForm from "@/app/_components/SimpleForm";
import Footer from "@/app/_components/Footer";
import FAQ from "@/app/_components/FAQ";

const poppins = Poppins({
    subsets: ['latin-ext'],
    weight: ['400', '500', '600', '700', '900']
});

export const metadata: Metadata = {
    title: 'Skylo',
    description: 'Dedykowane aplikacje webowe',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={poppins.className}>
        <div className={'container container--contact'}>
            <SiteHeader menu={-1} />
            {children}
            <FAQ />
            <Footer />
        </div>
        </body>
        </html>
    )
}