import SiteHeader from "@/app/_components/SiteHeader";
import Footer from "@/app/_components/Footer";

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
