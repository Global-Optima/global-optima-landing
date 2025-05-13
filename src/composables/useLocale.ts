// src/composables/useLocale.ts
import { ref } from 'vue';

export const locale = ref<'en' | 'ru' | 'kk'>('en');

export const translations = {
  en: {
    products: {
        heading: "Our Products",
    },
    navbar: {
      brand: "GoTech",
      aboutUs: "About Us",
      projects: "Products",
      services: "Services",
      careers: "Careers",
      contact: "Contact",
      getInTouch: "Get in Touch",
    },
    hero: {
      part1: "Accelerate Your Business with",
      highlight: "Innovative IT Solutions",
      desc:
        "Global Optima Technologies (GOTech) delivers custom software development, cloud services, and IT consulting to drive your business growth.",
      ctaQuote: "Get a Quote",
      ctaServices: "Our Services",
    },
    benefits: {
      smallHeading: "Services",
      largeHeading: "What We Offer",
      intro:
        "At GOTech, we deliver end-to-end IT solutions designed to accelerate your business growth and efficiency.",
      services: [
        {
          icon: "blocks",
          title: "Custom Software Development",
          description:
            "Tailored software solutions built to your exact specifications—web, mobile, and desktop applications.",
        },
        {
          icon: "cloud",
          title: "Cloud & Infrastructure",
          description:
            "Scalable, secure cloud migrations and DevOps services to optimize your IT environment.",
        },
        {
          icon: "sparkle",
          title: "IT Consulting",
          description:
            "Expert technology strategy and architecture guidance to drive innovation and efficiency.",
        },
        {
          icon: "lineChart",
          title: "Data Analytics & BI",
          description:
            "Actionable insights through data visualization, reporting, and business intelligence solutions.",
        },
      ],
    },
    services: {
      smallHeading: "Services",
      largeHeading: "Grow Your Business with GOTech",
      subheading:
        "From development and cloud to consulting and analytics, we power your success.",
      list: [
        {
          title: "Custom Software Development",
          description:
            "Tailored web, mobile, and desktop applications built to your exact specifications.",
          pro: 0,
        },
        {
          title: "Cloud & Infrastructure",
          description:
            "Scalable, secure cloud migrations and DevOps automation to optimize your environment.",
          pro: 0,
        },
        {
          title: "IT Consulting",
          description:
            "Expert technology strategy and architecture guidance to drive innovation.",
          pro: 0,
        },
        {
          title: "Data Analytics & BI",
          description:
            "Actionable insights through dashboards, reporting, and business intelligence.",
          pro: 1,
        },
      ],
    },
    contact: {
      smallHeading: "Contact",
      largeHeading: "Get in Touch",
      intro:
        "Have questions or ready to start your project? Reach out to our team and we'll get back to you promptly.",
      info: [
        {
          icon: "Building2",
          label: "Headquarters",
          value: "Dostyk 5/2, Astana, Kazakhstan",
        },
        { icon: "Phone", label: "Phone", value: "+7 (707) 434-5251" },
        { icon: "Mail", label: "Email", value: "contact@globaloptimatech.com" },
        {
          icon: "Clock",
          label: "Office Hours",
          value: "Mon – Fri: 9:00 AM – 6:00 PM (UTC+6)",
        },
      ],
      form: {
        cardHeader: "Send Us a Message",
        labelFirstName: "First Name",
        placeholderFirstName: "Your first name",
        labelLastName: "Last Name",
        placeholderLastName: "Your last name",
        labelEmail: "Email",
        placeholderEmail: "you@example.com",
        labelMessage: "Message",
        placeholderMessage: "Tell us about your project...",
        alertTitle: "Error",
        alertDescription:
          "Please fill in all required fields before sending.",
        buttonText: "Send Message",
      },
    },
    features: {
      smallHeading: "Features",
      largeHeading: "What Makes GOTech Different",
      subheading:
        "We combine cutting-edge technology, design excellence, and round-the-clock support to deliver solutions that truly power your business.",
      list: [
        {
          icon: "tabletSmartphone",
          title: "Cross-Platform Apps",
          description:
            "Responsive web and mobile applications that run seamlessly on any device.",
        },
        {
          icon: "paintbrush",
          title: "UI/UX Excellence",
          description:
            "Intuitive, user-centric designs that drive engagement and satisfaction.",
        },
        {
          icon: "goal",
          title: "Agile Methodology",
          description:
            "Iterative development for rapid delivery, continuous feedback, and flexibility.",
        },
        {
          icon: "badgeCheck",
          title: "Quality Assurance",
          description:
            "Rigorous testing and code reviews to ensure reliability and performance.",
        },
        {
          icon: "newspaper",
          title: "Data Analytics & BI",
          description:
            "Actionable insights via dashboards, reporting, and business intelligence solutions.",
        },
        {
          icon: "messageCircle",
          title: "24/7 Support",
          description:
            "Dedicated technical assistance to keep your systems running smoothly around the clock.",
        },
      ],
    },
    footer: {
      brand: "GOTech",
      tagline:
        "Delivering custom software, cloud services, and IT consulting worldwide.",
      company: "Company",
      aboutUs: "About Us",
      careers: "Careers",
      contact: "Contact",
      services: "Services",
      softwareDev: "Software Dev",
      cloudInfra: "Cloud & Infra",
      itConsulting: "IT Consulting",
      analyticsBI: "Analytics & BI",
      resources: "Resources",
      faq: "FAQ",
      blog: "Blog",
      support: "Support",
      followUs: "Follow Us",
      copyright:
        "© 2025 Global Optima Technologies. All rights reserved.",
    },
  },
  ru: {
    products: {
        heading: "Наши продукты",
    },
    navbar: {
      brand: "GoTech",
      aboutUs: "О нас",
      projects: "Проекты",
      services: "Услуги",
      careers: "Карьера",
      contact: "Контакты",
      getInTouch: "Свяжитесь с нами",
    },
    hero: {
      part1: "Ускорьте развитие вашего бизнеса с помощью",
      highlight: "инновационных IT-решений",
      desc:
        "Global Optima Technologies (GOTech) предоставляет услуги по разработке ПО на заказ, облачные сервисы и IT-консалтинг для роста вашего бизнеса.",
      ctaQuote: "Получить предложение",
      ctaServices: "Наши услуги",
    },
    benefits: {
      smallHeading: "Услуги",
      largeHeading: "Что мы предлагаем",
      intro:
        "В GOTech мы предлагаем полный спектр IT-решений, направленных на ускорение роста и повышения эффективности вашего бизнеса.",
      services: [
        {
          icon: "blocks",
          title: "Разработка ПО на заказ",
          description:
            "Индивидуальные программные решения по точным требованиям — веб, мобильные и десктопные приложения.",
        },
        {
          icon: "cloud",
          title: "Облачные решения и инфраструктура",
          description:
            "Масштабируемые и безопасные миграции в облако и DevOps-услуги для оптимизации вашей IT-среды.",
        },
        {
          icon: "sparkle",
          title: "IT-консалтинг",
          description:
            "Экспертные рекомендации по стратегии и архитектуре для стимулирования инноваций и эффективности.",
        },
        {
          icon: "lineChart",
          title: "Аналитика данных и BI",
          description:
            "Практичные инсайты через визуализацию данных, отчеты и BI-решения.",
        },
      ],
    },
    services: {
      smallHeading: "Услуги",
      largeHeading: "Развивайте бизнес с GOTech",
      subheading:
        "От разработки и облака до консалтинга и аналитики — мы обеспечиваем ваш успех.",
      list: [
        {
          title: "Разработка ПО на заказ",
          description:
            "Индивидуальная разработка веб, мобильных и десктопных приложений по вашим точным требованиям.",
          pro: 0,
        },
        {
          title: "Облачные решения и инфраструктура",
          description:
            "Масштабируемые, безопасные миграции в облако и автоматизация DevOps для оптимизации вашей среды.",
          pro: 0,
        },
        {
          title: "IT-консалтинг",
          description:
            "Экспертные рекомендации по стратегии технологий и архитектуре для стимулирования инноваций.",
          pro: 0,
        },
        {
          title: "Аналитика данных и BI",
          description:
            "Практические инсайты через дашборды, отчёты и BI-решения.",
          pro: 1,
        },
      ],
    },
    contact: {
      smallHeading: "Контакты",
      largeHeading: "Свяжитесь с нами",
      intro:
        "Есть вопросы или готовы начать проект? Свяжитесь с нашей командой, и мы скоро ответим.",
      info: [
        {
          icon: "Building2",
          label: "Головной офис",
          value: "Dostyk 5/2, Astana, Kazakhstan",
        },
        { icon: "Phone", label: "Телефон", value: "+7 (707) 434-5251" },
        { icon: "Mail", label: "Email", value: "contact@globaloptimatech.com" },
        {
          icon: "Clock",
          label: "Часы работы",
          value: "Пн – Пт: 9:00 – 18:00 (UTC+6)",
        },
      ],
      form: {
        cardHeader: "Отправьте нам сообщение",
        labelFirstName: "Имя",
        placeholderFirstName: "Ваше имя",
        labelLastName: "Фамилия",
        placeholderLastName: "Ваша фамилия",
        labelEmail: "Email",
        placeholderEmail: "you@example.com",
        labelMessage: "Сообщение",
        placeholderMessage: "Расскажите о вашем проекте...",
        alertTitle: "Ошибка",
        alertDescription:
          "Пожалуйста, заполните все обязательные поля перед отправкой.",
        buttonText: "Отправить",
      },
    },
    features: {
      smallHeading: "Особенности",
      largeHeading: "Что отличает GOTech",
      subheading:
        "Мы объединяем передовые технологии, превосходный дизайн и круглосуточную поддержку для создания решений, которые реально движут ваш бизнес.",
      list: [
        {
          icon: "tabletSmartphone",
          title: "Кроссплатформенные приложения",
          description:
            "Адаптивные веб- и мобильные приложения, работающие безупречно на любом устройстве.",
        },
        {
          icon: "paintbrush",
          title: "UI/UX-дизайн",
          description:
            "Интуитивно понятный, ориентированный на пользователя дизайн, повышающий вовлеченность.",
        },
        {
          icon: "goal",
          title: "Гибкая методология",
          description:
            "Итеративная разработка для быстрой поставки, непрерывной обратной связи и гибкости.",
        },
        {
          icon: "badgeCheck",
          title: "Обеспечение качества",
          description:
            "Строгие тестирования и код-ревью для гарантии надежности и производительности.",
        },
        {
          icon: "newspaper",
          title: "Аналитика и BI",
          description:
            "Практичные инсайты через дашборды, отчеты и решения бизнес-аналитики.",
        },
        {
          icon: "messageCircle",
          title: "Поддержка 24/7",
          description:
            "Круглосуточная техническая помощь для бесперебойной работы ваших систем.",
        },
      ],
    },
    footer: {
      brand: "GOTech",
      tagline:
        "Поставка заказного программного обеспечения, облачных сервисов и ИТ-консалтинга по всему миру.",
      company: "Компания",
      aboutUs: "О нас",
      careers: "Карьера",
      contact: "Контакты",
      services: "Услуги",
      softwareDev: "Разработка ПО",
      cloudInfra: "Облако и инфра-структура",
      itConsulting: "ИТ-консалтинг",
      analyticsBI: "Аналитика и BI",
      resources: "Ресурсы",
      faq: "ЧАВО",
      blog: "Блог",
      support: "Поддержка",
      followUs: "Следите за нами",
      copyright:
        "© 2025 Global Optima Technologies. Все права защищены.",
    },
  },
  kk: {
    products: {
        heading: "Біздің өнімдер",
    },
    navbar: {
      brand: "GoTech",
      aboutUs: "Біз туралы",
      projects: "Жобалар",
      services: "Қызметтер",
      careers: "Карьера",
      contact: "Байланыс",
      getInTouch: "Хабарласыңыз",
    },
    hero: {
      part1: "Бизнесті жеделдетіңіз",
      highlight: "инновациялық IT шешімдермен",
      desc:
        "Global Optima Technologies (GOTech) сіздің бизнесіңіздің өсуі үшін тапсырыспен бағдарлама әзірлеу, бұлттық қызметтер және IT-консалтинг ұсынады.",
      ctaQuote: "Баға алу",
      ctaServices: "Қызметтеріміз",
    },
    benefits: {
      smallHeading: "Қызметтер",
      largeHeading: "Біз не ұсынамыз",
      intro:
        "GOTech компаниясында біз бизнесіңіздің өсуі мен тиімділігін жеделдетуге арналған толық IT шешімдерді ұсынамыз.",
      services: [
        {
          icon: "blocks",
          title: "Тапсырыспен бағдарламалық қамтамасыз ету",
          description:
            "Веб, мобильді және жұмыс үстелі қосымшалары – нақты талаптарға сәйкес жасалады.",
        },
        {
          icon: "cloud",
          title: "Бұлттық шешімдер және инфрақұрылым",
          description:
            "IT ортаңызды оңтайландыруға арналған масштабталатын, қауіпсіз бұлтқа көшу және DevOps қызметтері.",
        },
        {
          icon: "sparkle",
          title: "IT-консалтинг",
          description:
            "Инновация мен тиімділікті арттыру үшін технология стратегиясы мен архитектура бойынша кәсіби кеңес.",
        },
        {
          icon: "lineChart",
          title: "Деректерді талдау және BI",
          description:
            "Деректер визуализациясы, есеп беру және бизнес-аналитика шешімдері арқылы қолдануға болатын инсайттар.",
        },
      ],
    },
    services: {
      smallHeading: "Қызметтер",
      largeHeading: "GOTech-пен бизнесті өсіріңіз",
      subheading:
        "Даму мен бұлттан бастап консалтинг пен аналитикаға дейін — біз сіздің табысыңызды қамтамасыз етеміз.",
      list: [
        {
          title: "Тапсырыспен бағдарлама әзірлеу",
          description:
            "Веб, мобильді және жұмыс үстелі қосымшаларын нақты талаптарыңызға сәйкес әзірлейміз.",
          pro: 0,
        },
        {
          title: "Бұлттық шешімдер және инфрақұрылым",
          description:
            "Сіздің ортаңызды оңтайландыру үшін масштабталатын, қауіпсіз бұлтқа көшіру және DevOps автоматтандыру.",
          pro: 0,
        },
        {
          title: "IT-консалтинг",
          description:
            "Инновацияны ынталандыру үшін технология стратегиясы мен архитектура бойынша кәсіби кеңес.",
          pro: 0,
        },
        {
          title: "Деректерді талдау және BI",
          description:
            "Дашбордтар, есептер және бизнес-аналитика арқылы қолдануға болатын инсайттар.",
          pro: 1,
        },
      ],
    },
    contact: {
      smallHeading: "Байланыс",
      largeHeading: "Хабарласыңыз",
      intro:
        "Сұрақтарыңыз бар ма немесе жобаны бастауға дайынсыз ба? Командамызға жазыңыз, біз тез жауап береміз.",
      info: [
        {
          icon: "Building2",
          label: "Бас офис",
          value: "Dostyk 5/2, Astana, Kazakhstan",
        },
        { icon: "Phone", label: "Телефон", value: "+7 (707) 434-5251" },
        { icon: "Mail", label: "Email", value: "contact@globaloptimatech.com" },
        {
          icon: "Clock",
          label: "Жұмыс уақыты",
          value: "Дс – Жк: 9:00 – 18:00 (UTC+6)",
        },
      ],
      form: {
        cardHeader: "Хабарлама жіберу",
        labelFirstName: "Аты",
        placeholderFirstName: "Атыңыз",
        labelLastName: "Тегі",
        placeholderLastName: "Тегіңіз",
        labelEmail: "Email",
        placeholderEmail: "you@example.com",
        labelMessage: "Хабарлама",
        placeholderMessage: "Жобаңыз туралы айтып беріңіз...",
        alertTitle: "Қате",
        alertDescription:
          "Жібермес бұрын барлық қажетті өрістерді толтырыңыз.",
        buttonText: "Жіберу",
      },
    },
    features: {
      smallHeading: "Ерекшеліктер",
      largeHeading: "GOTech-ті ерекше ететіндері",
      subheading:
        "Біз озық технологиялар, үздік дизайн және тәулік бойы қолдау көрсетуді біріктіріп, сіздің бизнесіңізді шынымен ілгерілететін шешімдер ұсынамыз.",
      list: [
        {
          icon: "tabletSmartphone",
          title: "Көпплатформалы қолданбалар",
          description:
            "Әр құрылғыда мінсіз жұмыс істейтін жауапты веб және мобильді қосымшалар.",
        },
        {
          icon: "paintbrush",
          title: "UI/UX үздіксіздігі",
          description:
            "Қолданушыға ыңғайлы, интуитивті дизайндар, пайдаланушы тартылуын арттырады.",
        },
        {
          icon: "goal",
          title: "Агиль методологиясы",
          description:
            "Жылдам жеткізу, үздіксіз кері байланыс және икемділік үшін итеративті даму.",
        },
        {
          icon: "badgeCheck",
          title: "Сапаны қамтамасыз ету",
          description:
            "Сенімділік пен өнімділікті қамтамасыз ету үшін қатаң тестілеу және код-шолу.",
        },
        {
          icon: "newspaper",
          title: "Аналитика және BI",
          description:
            "Дашбордтар, есептер және бизнес-аналитика шешімдері арқылы нақты инсайттар.",
        },
        {
          icon: "messageCircle",
          title: "24/7 қолдау",
          description:
            "Сіздің жүйелеріңіздің үздіксіз жұмысын қамтамасыз ету үшін тәулік бойы техникалық көмек.",
        },
      ],
    },
    footer: {
      brand: "GOTech",
      tagline:
        "Әлем бойынша тапсырыс бойынша бағдарлама, бұлттық қызметтер және IT-консалтинг ұсыну.",
      company: "Компания",
      aboutUs: "Біз туралы",
      careers: "Карьера",
      contact: "Байланыс",
      services: "Қызметтер",
      softwareDev: "Бағдарламалық қамтамасыз етуді әзірлеу",
      cloudInfra: "Бұлт және инфрақұрылым",
      itConsulting: "IT-консалтинг",
      analyticsBI: "Аналитика және BI",
      resources: "Ресурстар",
      faq: "Жиі Қойылатын Сұрақтар",
      blog: "Блог",
      support: "Қолдау",
      followUs: "Бізді қадағалаңыз",
      copyright:
        "© 2025 Global Optima Technologies. Барлық құқықтар қорғалған.",
    },
  },
} as const;

export type Locale = keyof typeof translations;
export type Translations = typeof translations;
