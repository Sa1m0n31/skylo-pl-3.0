import icon1 from "@/app/_img/aplikacje-webowe.svg";
import icon2 from "@/app/_img/aplikacje-mobilne.svg";
import icon3 from "@/app/_img/platformy-i-serwisy-internetowe.svg";
import icon4 from "@/app/_img/platformy-e-commerce.svg";
import icon5 from "@/app/_img/ui.svg";
import icon6 from "@/app/_img/web-development.svg";

const offerGridItems = [
    {
        icon: {
            src: icon1,
            width: 72,
            height: 51,
            alt: 'dedykowane-aplikacje-webowe'
        },
        title: 'Dedykowane aplikacje webowe',
        text: 'Tworzymy spersonalizowane aplikacje internetowe, dopasowane do Twoich potrzeb biznesowych.',
        link: '/aplikacje-webowe'
    },
    {
        icon: {
            src: icon2,
            width: 29,
            height: 51,
            alt: 'aplikacje-mobilne'
        },
        title: 'Aplikacje mobilne',
        text: 'Innowacyjne aplikacje mobilne, które angażują użytkowników i przyspieszają rozwój Twojego biznesu.',
        link: '/aplikacje-mobilne'
    },
    {
        icon: {
            src: icon3,
            width: 53,
            height: 51,
            alt: 'platformy-i-serwisy-internetowe'
        },
        title: 'Platformy i serwisy internetowe',
        text: 'Skutecznie docieraj do swoich odbiorców i dziel się informacjami za pomocą portali i serwisów internetowych.',
        link: '/platformy-i-serwisy-internetowe'
    },
    {
        icon: {
            src: icon4,
            width: 54,
            height: 51,
            alt: 'platformy-e-commerce'
        },
        title: 'Platformy e-commerce',
        text: 'Profesjonalne platformy sprzedażowe, stworzone w oparciu o WordPress lub dedykowane oprogramowanie (CMS).',
        link: '/platformy-e-commerce'
    },
    {
        icon: {
            src: icon5,
            width: 51,
            height: 51,
            alt: 'ui-ux-design'
        },
        title: 'UI/UX Design',
        text: 'Tworzymy intuicyjne interfejsy użytkownika, które podnoszą jakość Twojej aplikacji lub strony internetowej.',
        link: '/ui-ux-design'
    },
    {
        icon: {
            src: icon6,
            width: 62,
            height: 51,
            alt: 'web-development'
        },
        title: 'Web development',
        text: 'Kompleksowe rozwiązania w zakresie projektowania, tworzenia i utrzymywania stron internetowych dla Twojego biznesu.',
        link: '/web-development'
    }
];

const usp = [
    {
        title: 'Nie pozwolimy, żeby budżet Cię ograniczał',
        text: 'Masz pomysł na aplikację, ale obawiasz się ogromnych kosztów?Porozmawiajmy i poszukajmy rozwiązania spełniającego Twoje wymagania i mieszczącego się w Twoim budżecie.'
    },
    {
        title: 'Gramy razem do jednej bramki',
        text: 'Na każdym etapie współpracy informujemy Cię na bieżąco o postępach oraz konsultujemy z Tobą każdą zmianę. Jesteśmy dla Ciebie zawsze, gdy czegoś potrzebujesz.'
    },
    {
        title: 'Skup się na biznesie, a my zajmiemy się resztą',
        text: 'Integracja z zewnętrznym oprogramowaniem, płatności online, wybór najlepszego hostingu. Nie musisz o tym myśleć. Przeprowadzimy Cię przez cały proces, proponując najbardziej optymalne rozwiązania.'
    },
    {
        title: 'Twoje cele - nasza wiedza i doświadczenie',
        text: 'Na swoim konice mamy już dziesiątki projektów i zero niezadowolonych klientów. Jeden krok dzieli Cię od dołączenia do nich i rozwijania swojego biznesu w Internecie.'
    }
];

const portfolio = [
    {
        textBefore: 'Jooob.eu - portal pracy',
        title: 'Efektywny proces wyszukiwania ofert na portalu pracy',
        text: 'Stworzyliśmy design oraz wdrożyliśmy platformę umożliwiającą wyszukiwanie kandydatów oraz ofert pracy na rynkach zagranicznych.',
        link: '/jooob-eu',
        image1: '/job-portal-1.png',
        image2: '/job-portal-2.png',
        image3: '/job-portal-3.png',
    },{
        textBefore: 'Brunchbox - katering online',
        title: 'Wygodny sposób do zamawiania przekąsek online',
        text: 'Intuicyjny i prosty proces zamówienia oraz customowe opcje zarządzania ofertą w panelu administratora w aplikacji webowej do zamawiania online jedzenia typu finger food.',
        link: '/brunchbox',
        image1: '/brunchbox-1.png',
        image2: '/brunchbox-2.png',
        image3: '/brunchbox-3.png'
    },
    {
        textBefore: 'Draft4u - platforma z branży sportowej',
        title: `Draft online dla zawodników i klubów siatkarskich`,
        text: 'Użyliśmy najbardziej wydajnych i skutecznych technologii, aby zaprogramować aplikację webową z branży sportowej.',
        link: '/draft4u',
        image1: '/draft-1.png',
        image2: '/draft-2.png',
        image3: '/job-portal-3.png',
    }
];

const references = [
    {
        title: 'Paweł z BrunchBox.pl',
        logo: '/logo-brunchbox.png',
        content: [
            'Agencja Skylo zbudowała mi stronę od 0 za pomocą języka HTML. Każdy mój pomysł został zrealizowany- bez ograniczeń i dodatkowych płatności jak w przypadku budowania strony na szablonach.',
            'Chłopaki znają się na robocie. Szybko i profesjonalnie. Świetny kontakt.',
            'Polecam serdecznie.'
        ]
    },
    {
        title: 'Krzysztof z Hotic Polska',
        logo: '/logo-hotic.png',
        content: [
            'Jestem bardzo zadowolony. Strona w 100% spełniła moje oczekiwania. ',
            'Kontakt idealny, pełne zrozumienie tematu, wysoka kreatywność! ',
            'Czas i cena wykonania projektu to dodatkowo bardzo duży plus. Z czystym sumieniem polecam.'
        ]
    },
    {
        title: 'Anna z AnnaVinbotti',
        logo: '/logo-annavinbotti.png',
        content: [
            'Świetna agencja. Przemiła współpraca, rzetelna.',
            'Panowie są w stanie sprostać nawet najbardziej skomplikowanemu zleceniu :)',
            'Jedna z najlepszych współprac, jakie mieliśmy.'
        ]
    }
];

const faq = [
    {
        question: '',
        answer: ''
    }
]

export { offerGridItems, usp, portfolio, references, faq }
