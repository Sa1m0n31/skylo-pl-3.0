import SiteHeader from "@/app/_components/SiteHeader";
import Footer from "@/app/_components/Footer";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Skylo Software House | Polityka prywatności',
    description: 'Skylo Softare House. Aplikacje webowe, aplikacje mobilne, e-commerce i web development.'
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return <div className={'container container--portfolio'}>
        <SiteHeader menu={-1} />

        {children}

        <Footer />
    </div>
}
