import SiteHeader from "@/app/_components/SiteHeader";
import Footer from "@/app/_components/Footer";
import SimpleForm from "@/app/_components/SimpleForm";
import OfferSection from "@/app/_components/OfferSection";

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
