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
        link: '/platformy-internetowe'
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
        link: '/e-commerce'
    },
    {
        icon: {
            src: icon5,
            width: 51,
            height: 51,
            alt: 'ui-ui-ux-design-design'
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

const offerSubmenu = [
    {
        title: 'Dedykowane aplikacje webowe',
        link: '/aplikacje-webowe'
    },
    {
        title: 'Aplikacje mobilne',
        link: '/aplikacje-mobilne'
    },
    {
        title: 'Platformy i serwisy internetowe',
        link: '/platformy-internetowe'
    },
    {
        title: 'Platformy e-commerce',
        link: '/e-commerce'
    },
    {
        title: 'UI/UX Design',
        link: '/ui-ux-design'
    },
    {
        title: 'Web development',
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
        image3: '/draft-mobile.png',
    }
];

const project = [
    {
        title: 'Rozmowy i analiza informacji',
        text: 'W czasie spotkania zbieramy od Ciebie dane, które później analizujemy.'
    },
    {
        title: 'Design i prototypy',
        text: 'Tworzymy design i przedstawiamy go w formie prototypów do akceptacji.'
    },
    {
        title: 'Kodowanie i testy',
        text: 'Projekt wdrażamy na serwer testowy, gdzie zbieramy feedback z użytkowania.'
    },
    {
        title: 'Uruchomienie i finalizacja',
        text: 'Faza deploymentu, w której uruchamiamy Twój projekt na serwerze docelowym.'
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
        question: 'Ile będzie kosztować mój projekt?',
        answer: 'Każdą wycenę przygotowujemy indywidualnie i dostosowujemy ją do możliwości Klienta. Chcemy pomagać naszym Klientom rozwijać ich przedsięwzięcia, dlatego zawsze staramy się znaleźć rozwiązanie skrojone pod Twoje możliwości finansowe.'
    },
    {
        question: 'Czy muszę się znać, żeby rozpocząć współpracę?',
        answer: 'Absolutnie nie! Chcemy wykorzystać naszą wiedzę, doświadczenie i umiejętności, aby sprawnie przeprowadzić Cię przez cały proces tworzenia projektu. Dzięki temu możesz maksymalnie skupić się na swoim biznesie, a my dostarczymy Ci potrzebne instrumenty i rozwiązania.'
    },
    {
        question: 'Jak długo muszę czekać na wykonanie usługi?',
        answer: 'W zależności od poziomu rozbudowania projektu, czas realizacji może się oczywiście wydłużać. Jednak dzięki odpowiedniej organizacji pracy i doświadczeniu dostarczamy nasze projekty na czas. Terminy realizacji są uzgadniane zawsze przed rozpoczęciem prac - dzięki temu zawsze wiesz, na czym stoisz. Umowa zobowiązuje nas do terminowego wykonania usługi.'
    },
    {
        question: 'Co wpływa na wycenę?',
        answer: 'Na wartość realizacji usługi wpływa poziom jej zaawansowania. Stworzenie wydajnej, zaawansowanej technicznie i bezpiecznej aplikacji pochłania zdecydowanie więcej czasu niż zrealizowanie prostej wizytówkowej strony internetowej. Wycenie podlega czas, który trzeba poświęcić na zrealizowanie usługi, a także wiedza i umiejętności, które wykorzystujemy, aby dostarczać Wam rozwiązania najwyższej jakości.'
    },
    {
        question: 'Jak mogę umówić konsultację?',
        answer: 'To bardzo krótka droga - możesz skorzystać z <a href="#darmowa-wycena">formularza kontaktowego</a>, gdzie możesz precyzyjnie wskazać nam, jakiej usługi potrzebujesz. Możesz także napisać do nas bezpośrednio na maila kontakt@skylo.pl, lub po prostu zadzwonić pod nr telefonu 697 099 402. Konsultacja jest całkowicie bezpłatna i niezobowiązująca, a my zawsze odpowiemy na nurtujące Cię pytania.'
    }
]

export { offerSubmenu, offerGridItems, usp, portfolio, project, references, faq }
