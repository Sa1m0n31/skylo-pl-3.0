import SiteHeader from "@/app/_components/SiteHeader";
import Footer from "@/app/_components/Footer";
import SimpleForm from "@/app/_components/SimpleForm";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Najlepsze strony internetowe Rypin',
    description: 'Tworzenie stron internetowych Rypin. W Skylo stworzymy oprogramowanie skrojone pod Ciebie!'
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return <div className={'container container--portfolio'}>
        <SiteHeader menu={-1} />

        {children}

        <SimpleForm />
        <Footer />
    </div>
}
