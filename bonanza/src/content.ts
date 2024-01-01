interface DictionaryEntry {
    headerLanguagePrefix: string
    headerLanguage: string
    headerHome: string
    headerAbout: string
    headerServices: string
    headerContact: string
    headerFAQ: string
    headerSchedule: string
    bookAppointment: string
    scheduleAppointment: string
    heroTitle: string
    heroP1: string
    heroP2: string
}

export const dictionary: Record<string, DictionaryEntry> = {
    en: {
        headerLanguagePrefix: "Ver en",
        headerLanguage: "Español",
        headerHome: "Home",
        headerAbout: "About",
        headerServices: "Services",
        headerContact: "Contact",
        headerFAQ: "FAQ",
        headerSchedule: "SCHEDULE APPOINTMENT",
        bookAppointment: "Book Appointment",
        scheduleAppointment: "Schedule Appointment",
        heroTitle: "Discover Healing & Renewal",
        heroP1: "Journey with Bonanza, the haven for evidence-based EMDR therapy, where traumas and stress disorders are transformed into strengths.",
        heroP2: "Every story holds challenges. Let us help you turn yours into a testament of resilience and growth. Your path to a brighter tomorrow starts here. Schedule your free 15-minute consultation today.",
    },
    es: {
        headerLanguagePrefix: "See in",
        headerLanguage: "English",
        headerHome: "Inicio",
        headerAbout: "Acerca de",
        headerServices: "Servicios",
        headerContact: "Contacto",
        headerFAQ: "Preguntas Frecuentes",
        headerSchedule: "RESERVAR UNA CITA",
        bookAppointment: "Reserva tu Cita",
        scheduleAppointment: "Reservar Una Cita",
        heroTitle: "Descubra la Sanación y Renovación",
        heroP1: "Viaje con Bonanza, el refugio para la terapia DRMO basada en evidencia, donde traumas y trastornos de estrés se transforman en fortalezas.",
        heroP2: "Cada historia tiene retos. Permítanos ayudarles a convertir el suyo en un testamento de resiliencia y crecimiento. Tu camino hacia un mañana más brillante comienza aquí. Programe su consulta gratuita de 15 minutos hoy.",
    }
}