import SiteHeader from "@/app/_components/SiteHeader";
import ProjectTimeline from "@/app/_components/ProjectTimeline";
import SimpleForm from "@/app/_components/SimpleForm";
import Footer from "@/app/_components/Footer";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Skylo | Oferta',
    description: 'Zapoznaj się z naszą ofertą. Aplikacje webowe, aplikacje mobilne, ux/ui design, e-commerce i web development.'
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return <div className={'container container--offer'}>
        <SiteHeader menu={1} />

        {children}

        <ProjectTimeline />
        <SimpleForm />
        <Footer />
    </div>
}
