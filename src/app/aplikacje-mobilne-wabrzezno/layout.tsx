import SiteHeader from "@/app/_components/SiteHeader";
import Footer from "@/app/_components/Footer";
import SimpleForm from "@/app/_components/SimpleForm";
import {Metadata} from "next";
import FAQ from "@/app/_components/FAQ";

export const metadata: Metadata = {
    title: 'Najlepsze aplikacje mobilne Wąbrzeźno',
    description: 'Tworzenie aplikacji mobilnych Wąbrzeźno. W Skylo stworzymy oprogramowanie skrojone pod Ciebie!'
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return <div className={'container container--portfolio'}>
        <SiteHeader menu={-1} />

        {children}

        <FAQ />
        <SimpleForm />
        <Footer />
    </div>
}
