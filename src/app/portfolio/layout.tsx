import SiteHeader from "@/app/_components/SiteHeader";
import SimpleForm from "@/app/_components/SimpleForm";
import Footer from "@/app/_components/Footer";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Skylo | Portfolio',
    description: 'Zapoznaj się z naszymi realizacjami. Aplikacje webowe, aplikacje mobilne, e-commerce i web development.'
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return <div className={'container container--portfolio'}>
        <SiteHeader menu={2} />

        {children}

        <SimpleForm />
        <Footer />
    </div>
}
