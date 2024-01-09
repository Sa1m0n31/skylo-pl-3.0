import SiteHeader from "@/app/_components/SiteHeader";
import Footer from "@/app/_components/Footer";
import SimpleForm from "@/app/_components/SimpleForm";
import OfferSection from "@/app/_components/OfferSection";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Najlepsze strony internetowe Lipno',
    description: 'Tworzenie stron internetowych Lipno. W Skylo stworzymy oprogramowanie skrojone pod Ciebie!'
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return <div className={'container container--portfolio'}>
        <SiteHeader menu={-1} />

        {children}

        <OfferSection page={true} />
        <SimpleForm />
        <Footer />
    </div>
}
