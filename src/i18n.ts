import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  ru: {
    translation: {
      nav: {
        about: "О НАС",
        services: "УСЛУГИ",
        partners: "ПАРТНЕРЫ",
        contact: "КОНТАКТЫ"
      },
      hero: {
        badge: "Консалтинг для бизнеса",
        title_main: "Комплексный консалтинг для бизнеса в",
        title_accent: "Кыргызстане",
        desc: "С 2010 года помогаем компаниям Кыргызстана расти и повышать эффективность через стратегический консалтинг, автоматизацию и бизнес-планирование.",
        cta: "Оставить заявку"
      },
      about: {
        title: "О НАС",
        desc: "ELECTROLAB — консалтинговая компания, работающая в Кыргызстане более 15 лет. Мы сопровождаем бизнес на всех этапах развития, помогая владельцам принимать стратегические решения, повышать эффективность и снижать издержки. Наш опыт подтверждён успешными проектами с ведущими компаниями страны.",
        stats: {
          years: "лет экспертизы",
          consultations: "индивидуальных консультаций",
          industries: "отраслей",
          plans: "бизнес планов"
        }
      },
      quiz: {
        title: "Узнайте, что мешает вашему бизнесу расти",
        desc: "Заполните короткий опрос и получите бесплатную консультацию по результатам.",
        step_of: "Шаг {{current}} из {{total}}",
        back: "Назад",
        next: "Далее",
        last_step: "Последний шаг",
        last_step_desc: "Оставьте контакты, чтобы получить персональный расчет и индивидуальную скидку.",
        thanks_title: "Спасибо за ответы!",
        thanks_desc: "Ваша заявка принята. Ожидайте связи от наших экспертов.",
        questions: [
          {
            q: "Какой у вас бизнес?",
            opt: ["Малый (до 50 сотрудников)", "Средний (от 50 до 250 сотрудников)", "Крупный (более 250 сотрудников)"]
          },
          {
            q: "Какая цель для вас сейчас наиболее важна?",
            opt: ["Снизить издержки", "Автоматизировать процессы", "Построить стратегию", "Консультация"]
          },
          {
            q: "Какая основная проблема мешает развитию?",
            opt: ["Высокие расходы", "Низкая эффективность", "Нет стратегии", "Другое"]
          },
          {
            q: "Когда планируете внедрять изменения?",
            opt: ["Ближайший месяц", "3-6 месяцев", "Собираю информацию"]
          }
        ],
        form: {
          name_placeholder: "Ваше имя",
          contact_placeholder: "Ваш телефон или Telegram",
          submit: "Отправить"
        }
      },
      services: {
        badge_title: "Комплексные услуги для сильного бизнеса",
        badge_desc: "От диагностики и оптимизации до разработки стратегий и автоматизации.",
        items: {
          diag: "Диагностика и оптимизация",
          strategy: "Стратегический менеджмент и бизнес планирование",
          auto: "Автоматизация и цифровизация"
        }
      },
      work: {
        badge: "Этапы работы",
        title: "Как мы работаем",
        desc: "Пошаговый процесс сотрудничества, который помогает бизнесу расти.",
        steps: [
          "Заявка и первичная консультация",
          "Диагностика и аудит бизнеса",
          "Разработка стратегий и решений",
          "Внедрение и сопровождение",
          "Контроль результатов и рост бизнеса"
        ]
      },
      audience: {
        title: "Для кого подходят наши решения",
        items: [
          { title: "Малый и средний бизнес", desc: "Для компаний, которые хотят навести порядок в процессах, выстроить систему управления и подготовиться к росту." },
          { title: "Производственные компании", desc: "Для бизнеса, где особенно важны эффективность процессов, снижение потерь и прозрачность управления." },
          { title: "Торговые компании", desc: "Для компаний, которым важно ускорить операционную работу, повышать управляемость и видеть точки роста." }
        ]
      },
      digital: {
        title: "Нужен не только консалтинг, но и digital-продукт?",
        desc: "В некоторых проектах бизнесу недостаточно только стратегии и оптимизации процессов — нужна еще и качественная цифровая реализация. Для таких задач мы подключаем Equus — нашу дочернюю компанию, которая специализируется на разработке сайтов и мобильных приложений.",
        tags: ["промо-лендинги", "интернет-платформы и сервисы", "мобильные приложения"],
        cta: "Обсудить проект"
      },
      partners: {
        title: "Наши партнеры"
      },
      contact: {
        badge: "Контакт",
        title: "Свяжитесь с нами",
        desc: "Заполните форму — и сделаем первый шаг к эффективным решениям",
        info_title: "Контактная информация",
        phone: "Телефон",
        email: "Email",
        form: {
          email: "Email",
          name: "Имя",
          phone: "Телефон",
          comment: "Комментарий",
          submit: "Отправить",
          input_email: "Ваш Email",
          input_name: "Ваше имя",
          input_phone: "+996 (000) 000-000",
          input_comment: "Комментарий"
        }
      },
      footer: {
        copy: "© 2025 ОсОО ELECTROLAB",
        up: "НАВЕРХ"
      }
    }
  },
  ky: {
    translation: {
      nav: {
        about: "БИЗ ЖӨНҮНДӨ",
        services: "КЫЗМАТТАР",
        partners: "ӨНӨКТӨШТӨР",
        contact: "БАЙЛАНЫШТАР"
      },
      hero: {
        badge: "Бизнес үчүн консалтинг",
        title_main: "Кыргызстандагы бизнес үчүн",
        title_accent: "комплекстүү консалтинг",
        desc: "2010-жылдан бери стратегиялык консалтинг, автоматташтыруу жана бизнес-пландоо аркылуу Кыргызстандын ишканаларынын өсүшүнө жана натыйжалуулугун жогорулатууга жардам берип келебиз.",
        cta: "Өтүнмө калтыруу"
      },
      about: {
        title: "БИЗ ЖӨНҮНДӨ",
        desc: "ELECTROLAB — Кыргызстанда 15 жылдан ашык убакыттан бери иштеп жаткан консалтингдик компания. Биз бизнести өнүктүрүүнүн бардык этаптарында коштоп, ээлерине стратегиялык чечимдерди кабыл алууга, натыйжалуулукту жогорулатууга жана чыгымдарды азайтууга жардам беребиз. Биздин тажрыйба өлкөнүн алдыңкы компаниялары менен ийгиликтүү долбоорлор менен тастыкталган.",
        stats: {
          years: "жылдык тажрыйба",
          consultations: "жеке консультациялар",
          industries: "тармак",
          plans: "бизнес пландар"
        }
      },
      quiz: {
        title: "Бизнесиңиздин өсүшүнө эмне тоскоол болуп жатканын билиңиз",
        desc: "Кыска сурамжылоону толтуруңуз жана жыйынтыгы боюнча акысыз консультация алыңыз.",
        step_of: "Кадам {{current}}, жалпы {{total}}",
        back: "Артка",
        next: "Кийинки",
        last_step: "Акыркы кадам",
        last_step_desc: "Жеке эсептөө жана жеке арзандатуу алуу үчүн байланыштарды калтырыңыз.",
        thanks_title: "Жоопторуңуз үчүн рахмат!",
        thanks_desc: "Сиздин өтүнмөңүз кабыл алынды. Биздин эксперттердин байланышын күтүңүз.",
        questions: [
          {
            q: "Сиздин бизнесиңиз кандай?",
            opt: ["Чакан (50 кызматкерге чейин)", "Орто (50дөн 250гө чейин кызматкер)", "Ири (250дөн ашык кызматкер)"]
          },
          {
            q: "Азыр сиз үчүн кайсы максат маанилүү?",
            opt: ["Чыгымдарды азайтуу", "Процесстерди автоматташтыруу", "Стратегия куруу", "Консультация"]
          },
          {
            q: "Өнүгүүгө кандай негизги көйгөй тоскоол болууда?",
            opt: ["Жогорку чыгымдар", "Төмөн натыйжалуулук", "Стратегия жок", "Башка"]
          },
          {
            q: "Өзгөртүүлөрдү качан ишке ашырууну пландап жатасыз?",
            opt: ["Жакынкы айда", "3-6 ай", "Маалымат чогултуудамын"]
          }
        ],
        form: {
          name_placeholder: "Сиздин атыңыз",
          contact_placeholder: "Сиздин телефонуңуз же Telegram",
          submit: "Жөнөтүү"
        }
      },
      services: {
        badge_title: "Күчтүү бизнес үчүн комплекстүү кызматтар",
        badge_desc: "Диагностикадан жана оптималдаштыруудан стратегияны иштеп чыгууга жана автоматташтырууга чейин.",
        items: {
          diag: "Диагностика жана оптималдаштыруу",
          strategy: "Стратегиялык менеджмент жана бизнес-пландоо",
          auto: "Автоматташтыруу жана санариптештирүү"
        }
      },
      work: {
        badge: "Иш этаптары",
        title: "Биз кантип иштейбиз",
        desc: "Бизнести өнүктүрүүгө жардам берген кызматташуунун кадам-кадам процесси.",
        steps: [
          "Өтүнмө жана баштапкы консультация",
          "Бизнес диагностика жана аудит",
          "Стратегияларды жана чечимдерди иштеп чыгуу",
          "Ишке ашыруу жана коштоо",
          "Жыйынтыктарды контролдоо жана бизнестин өсүшү"
        ]
      },
      audience: {
        title: "Биздин чечимдер кимдерге ылайыктуу",
        items: [
          { title: "Чакан жана орто бизнес", desc: "Процесстерди иретке келтирип, башкаруу тутумун куруп, өсүшкө даярданууну каалаган компаниялар үчүн." },
          { title: "Өндүрүш компаниялары", desc: "Процесстердин натыйжалуулугу, чыгымдарды азайтуу жана башкаруунун айкындуулугу өзгөчө маанилүү болгон бизнес үчүн." },
          { title: "Соода компаниялары", desc: "Операциялык ишти тездетүү, башкарууну жогорулатуу жана өсүү пункттарын көрүү маанилүү болгон компаниялар үчүн." }
        ]
      },
      digital: {
        title: "Консалтинг эле эмес, санарип продукт да керекпи?",
        desc: "Кээ бир долбоорлордо бизнеске стратегия жана процесстерди оптималдаштыруу эле жетишсиз — ошондой эле сапаттуу санариптик ишке ашыруу керек. Мындай тапшырмалар үчүн биз Equus компаниясын — сайттарды жана мобилдик тиркемелерди иштеп чыгууга адистешкен туунду компаниябызды бириктиребиз.",
        tags: ["промо-лендингдер", "интернет-платформалар жана кызматтар", "мобилдик тиркемелер"],
        cta: "Долбоорду талкуулоо"
      },
      partners: {
        title: "Биздин өнөктөштөр"
      },
      contact: {
        badge: "Байланыш",
        title: "Биз менен байланышыңыз",
        desc: "Форманы толтуруңуз — жана натыйжалуу чечимдерге биринчи кадам таштайлы",
        info_title: "Байланыш маалыматы",
        phone: "Телефон",
        email: "Email",
        form: {
          email: "Email",
          name: "Аты-жөнү",
          phone: "Телефон",
          comment: "Түшүндүрмө",
          submit: "Жөнөтүү",
          input_email: "Сиздин Email",
          input_name: "Сиздин атыңыз",
          input_phone: "+996 (000) 000-000",
          input_comment: "Түшүндүрмө"
        }
      },
      footer: {
        copy: "© 2025 ОсОО ELECTROLAB",
        up: "ӨЙДӨ"
      }
    }
  },
  en: {
    translation: {
      nav: {
        about: "ABOUT US",
        services: "SERVICES",
        partners: "PARTNERS",
        contact: "CONTACTS"
      },
      hero: {
        badge: "Business Consulting",
        title_main: "Comprehensive business consulting in",
        title_accent: "Kyrgyzstan",
        desc: "Since 2010, we have been helping companies in Kyrgyzstan grow and increase efficiency through strategic consulting, automation, and business planning.",
        cta: "Leave a Request"
      },
      about: {
        title: "ABOUT US",
        desc: "ELECTROLAB is a consulting company operating in Kyrgyzstan for over 15 years. We accompany business at all stages of development, helping owners make strategic decisions, increase efficiency, and reduce costs. Our experience is confirmed by successful projects with the country's leading companies.",
        stats: {
          years: "years of expertise",
          consultations: "individual consultations",
          industries: "industries",
          plans: "business plans"
        }
      },
      quiz: {
        title: "Find out what's stopping your business from growing",
        desc: "Fill out a short survey and get a free consultation based on the results.",
        step_of: "Step {{current}} of {{total}}",
        back: "Back",
        next: "Next",
        last_step: "Last Step",
        last_step_desc: "Leave your contacts to get a personal calculation and an individual discount.",
        thanks_title: "Thanks for your answers!",
        thanks_desc: "Your request has been accepted. Expect our experts to contact you.",
        questions: [
          {
            q: "What kind of business do you have?",
            opt: ["Small (up to 50 employees)", "Medium (50 to 250 employees)", "Large (over 250 employees)"]
          },
          {
            q: "What goal is most important to you right now?",
            opt: ["Reduce costs", "Automate processes", "Build a strategy", "Consultation"]
          },
          {
            q: "What is the main problem hindering development?",
            opt: ["High costs", "Low efficiency", "No strategy", "Other"]
          },
          {
            q: "When do you plan to implement changes?",
            opt: ["Next month", "3-6 months", "Gathering information"]
          }
        ],
        form: {
          name_placeholder: "Your name",
          contact_placeholder: "Your phone or Telegram",
          submit: "Send"
        }
      },
      services: {
        badge_title: "Comprehensive services for strong business",
        badge_desc: "From diagnostics and optimization to strategy development and automation.",
        items: {
          diag: "Diagnostics and Optimization",
          strategy: "Strategic Management and Business Planning",
          auto: "Automation and Digitalization"
        }
      },
      work: {
        badge: "Work Stages",
        title: "How We Work",
        desc: "Step-by-step collaboration process that helps business grow.",
        steps: [
          "Request and primary consultation",
          "Business diagnostics and audit",
          "Strategy and solution development",
          "Implementation and support",
          "Control of results and business growth"
        ]
      },
      audience: {
        title: "Who our solutions are for",
        items: [
          { title: "Small and medium business", desc: "For companies that want to organize processes, build a management system, and prepare for growth." },
          { title: "Manufacturing companies", desc: "For businesses where process efficiency, waste reduction, and management transparency are especially important." },
          { title: "Trading companies", desc: "For companies that need to speed up operations, increase controllability, and see growth points." }
        ]
      },
      digital: {
        title: "Need more than just consulting, but also a digital product?",
        desc: "In some projects, business strategy and process optimization are not enough — high-quality digital implementation is also needed. For such tasks, we involve Equus — our subsidiary specializing in website and mobile app development.",
        tags: ["promo landings", "internet platforms and services", "mobile apps"],
        cta: "Discuss Project"
      },
      partners: {
        title: "Our Partners"
      },
      contact: {
        badge: "Contact",
        title: "Contact Us",
        desc: "Fill out the form — and let's take the first step towards effective solutions",
        info_title: "Contact Information",
        phone: "Phone",
        email: "Email",
        form: {
          email: "Email",
          name: "Name",
          phone: "Phone",
          comment: "Comment",
          submit: "Send",
          input_email: "Your Email",
          input_name: "Your Name",
          input_phone: "+996 (000) 000-000",
          input_comment: "Comment"
        }
      },
      footer: {
        copy: "© 2025 ELECTROLAB Ltd.",
        up: "UP"
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'ru',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
