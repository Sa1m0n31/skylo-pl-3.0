import SiteHeader from "@/app/_components/SiteHeader";
import Footer from "@/app/_components/Footer";
import FAQ from "@/app/_components/FAQ";

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return <div className={'container container--contact'}>
        <SiteHeader menu={-1} />
        {children}
        <FAQ />
        <Footer />
    </div>
}
