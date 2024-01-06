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

    emdrTherapyTitle: string;
    emdrTherapyDescription: string;
    howItWorksTitle: string;
    howItWorksDescription: string;
    benefitsTitle: string;
    benefitsDescription1: string;
    benefitsDescription2: string;
    benefitsDescription3: string;
    benefitsDescription4: string;
    benefitsDescription5: string;
    moreServicesButton: string;
    learnMoreButton: string;

    whyChooseTitle: string;
    meetGianninaTitle: string;
    gianninaDescription: string;
    experienceExpertiseTitle: string;
    diverseClienteleDescription1: string;
    diverseClienteleDescription2: string;
    specializationsDescription1: string;
    specializationsDescription2: string;
    commitmentToChildrenDescription1: string;
    commitmentToChildrenDescription2: string;
    inclusiveCareDescription1: string;
    inclusiveCareDescription2: string;

    advancedTrainingTitle: string;
    certificationsDescription1: string;
    certificationsDescription2: string;
    certificationsDescription3: string;
    certificationsDescription4: string;
    certificationsDescription5: string;
    beyondTherapyTitle: string;
    beyondTherapyDescription: string;
    uniqueExperienceTitle: string;
    uniqueExperienceDescription1: string;
    uniqueExperienceDescription2: string;

    affordableCareTitle: string;
    sessionRatesTitle: string;
    sessionRatesDescription1: string;
    sessionRatesDescription2: string;
    sessionRatesDescription3: string;
    sessionRatesDescription4: string;
    sessionRatesDescription5: string;
    sessionRatesDescription6: string;
    insuranceInformationTitle: string;
    insuranceInformationDescription: string;

    keyQuestionsTitle: string;
    mentalHealthBenefitsTitle: string;
    mentalHealthBenefitsQuestion: string;
    deductiblesTitle: string;
    deductiblesQuestion: string;
    sessionLimitationsTitle: string;
    sessionLimitationsQuestion: string;
    physicianApprovalTitle: string;
    physicianApprovalQuestion: string;
    insuranceAdvice: string;
    insuranceReminder: string;
    contactUsButton: string;

    easyPaymentOptionsTitle: string;
    easyPaymentOptionsDescription: string;
    paymentMethodsDescription1: string;
    paymentMethodsDescription2: string;
    paymentMethodsDescription3: string;
    paymentMethodsDescription4: string;
    paymentMethodsDescription5: string;
    paymentMethodsDescription6: string;
    paymentMethodsDescription7: string;
    paymentMethodsDescription8: string;
    paymentMethodsDescription9: string;
    paymentMethodsDescription10: string;

    flexibleSchedulingTitle: string;
    appointmentPolicyDescription1: string;
    appointmentPolicyDescription2: string;
    appointmentPolicyDescription3: string;
    appointmentPolicyDescription4: string;
    appointmentPolicyDescription5: string;
    appointmentPolicyDescription6: string;
    appointmentPolicyDescription7: string;
    appointmentPolicyDescription8: string;

    faqTitle: string;
    faqQuestions: string[];
    faqAnswers: string[];
    moreFaqsButton: string;

    readyToBeginTitle: string;
    readyToBeginDescription: string;
    bookFreeConsultationButton: string;
    footerPrivacyPolicy: string;
    footerDesignedBy: string;
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

        emdrTherapyTitle: "What is EMDR Therapy?",
        emdrTherapyDescription: "EMDR, or Eye Movement Desensitization and Reprocessing, is a powerful therapeutic technique developed to aid individuals in processing traumatic memories and adverse life experiences. At its core, EMDR is designed to help clients integrate and understand these memories, ultimately reducing their emotional charge.",

        howItWorksTitle: "How Does It Work?",
        howItWorksDescription: "EMDR utilizes structured eight-phase therapy involving bilateral stimulation, often through guided eye movements. This process helps the brain reprocess traumatic memories, transforming them into more manageable, neutral memories.",

        benefitsTitle: "Benefits of EMDR Include:",
        benefitsDescription1: "Rapid processing of traumatic experiences.",
        benefitsDescription2: "Decreased distress from disturbing memories.",
        benefitsDescription3: "Improved self-esteem and self-worth.",
        benefitsDescription4: "Enhanced ability to live in the present without being overshadowed by the past.",
        benefitsDescription5: "At Bonanza, our trained therapists utilize EMDR to help you navigate past traumas, allowing you to move forward with resilience and renewed strength.",
        moreServicesButton: "More Services",
        learnMoreButton: "Learn More",

        whyChooseTitle: "Why Choose Bonanza for Your Healing Journey?",
        meetGianninaTitle: "Meet Giannina Fuentes, LCSW - The Heart of Bonanza",
        gianninaDescription: "Giannina Fuentes is not just another therapist; she's a beacon of hope, a testament to dedication, and the guiding light of Bonanza. With a strong academic foundation from the University of Utah, holding both a Bachelor's Degree in Psychology and a Master's Degree in Social Work, she is a decorated mental health professional.",
        experienceExpertiseTitle: "Experience & Expertise:",
        diverseClienteleDescription1: "Diverse Clientele:",
        diverseClienteleDescription2: "Giannina has aided individuals across all age groups, guiding them through personal and familial challenges.",
        specializationsDescription1: "Specializations:",
        specializationsDescription2: "Her therapeutic prowess spans areas like childhood and adult trauma, domestic violence, anxiety, depression, stress, and relationship struggles.",
        commitmentToChildrenDescription1: "Commitment to Children:",
        commitmentToChildrenDescription2: "Giannina's unwavering dedication shines through her work as a child welfare worker for the Division of Child and Family Services, ensuring the welfare of children and families.",
        inclusiveCareDescription1: "Inclusive Care:",
        inclusiveCareDescription2: "She has a heart for those with disabilities, offering unparalleled support to individuals with conditions such as autism and ADHD.",

        advancedTrainingTitle: "Advanced Training & Certification:",
        certificationsDescription1: "Giannina’s commitment to continued learning and excellence is evident in her numerous certifications:",
        certificationsDescription2: "EMDR for Complex Trauma, Grief & Mourning, and Strategies for Attachment Issues in Children & Adolescents.",
        certificationsDescription3: "Cognitive Behavioral Therapy (CBT) and Trauma Focused-CBT.",
        certificationsDescription4: "Mindfulness Based Stress Reduction.",
        certificationsDescription5: "And she proudly holds registration with Utah Social Work Association (UTAHSWA), EMDR Institute, Inc., and more.",
        beyondTherapyTitle: "Beyond Therapy:",
        beyondTherapyDescription: "Outside her professional life, Giannina enriches her parenting journey through continuous learning and resource exploration. She relishes moments with her family, outdoor adventures with Luna, her therapy Vizsla, and finds joy in dancing.",
        uniqueExperienceTitle: "A Unique Therapy Experience:",
        uniqueExperienceDescription1: "Embrace the warmth and comfort of therapy sessions with Luna, the therapy Vizsla. Her gentle presence can enhance the therapeutic environment, providing an additional layer of relaxation and connection.",
        uniqueExperienceDescription2: "Choose Bonanza, and you're not just choosing therapy; you're choosing a sanctuary of understanding, expertise, and compassionate care. Your journey to healing and renewal begins here.",

        affordableCareTitle: "Affordable Care Tailored to Your Needs",
        sessionRatesTitle: "Our Therapy Session Rates:",
        sessionRatesDescription1: "Initial Intake Session:",
        sessionRatesDescription2: "$160 for a 50-minute session.",
        sessionRatesDescription3: "Regular Therapy Session:",
        sessionRatesDescription4: "$140 for 50 minutes.",
        sessionRatesDescription5: "Special Self-Pay Option:",
        sessionRatesDescription6: "We offer a reduced rate for self-pay. Please get in touch to discuss the details.",
        insuranceInformationTitle: "Insurance Information:",
        insuranceInformationDescription: "Understanding your insurance benefits is crucial. While many insurance providers or employee benefit plans might cover our services either in full or in part, it's essential to confirm the specifics with your provider.",

        keyQuestionsTitle: "Key Questions for Your Insurance Provider",
        mentalHealthBenefitsTitle: "Mental Health Benefits",
        mentalHealthBenefitsQuestion: "Does my health insurance plan include mental health benefits?",
        deductiblesTitle: "Deductibles",
        deductiblesQuestion: "Do I have a deductible? If so, what is it, and have I met it yet?",
        sessionLimitationsTitle: "Session Limitations",
        sessionLimitationsQuestion: "Does my plan limit the number of sessions I can have per calendar year? If so, what's the limit?",
        physicianApprovalTitle: "Primary Care Physician Approval",
        physicianApprovalQuestion: "Do I need a written approval from my primary care physician for services to be covered?",
        insuranceAdvice: "We advise you to reach out to your insurance provider to ensure you're well-informed about your benefits and coverage options.",
        insuranceReminder: "Remember, investing in mental health is invaluable. We aim to make the process as transparent and straightforward as possible for you. If you have any questions or need clarification, please don't hesitate to contact us.",
        contactUsButton: "Contact Us",

        easyPaymentOptionsTitle: "Easy Payment Options",
        easyPaymentOptionsDescription: "We strive to make the payment process as seamless as possible for you. Here's how you can settle your sessions with us:",
        paymentMethodsDescription1: "Cash:",
        paymentMethodsDescription2: "Direct payments can be made during your session.",
        paymentMethodsDescription3: "Check:",
        paymentMethodsDescription4: 'Kindly ensure checks are made payable to "Bonanza Counseling Services".',
        paymentMethodsDescription5: "Credit Cards:",
        paymentMethodsDescription6: "We accept all major credit cards, including HSA. Secure transactions guaranteed.",
        paymentMethodsDescription7: "Online Payments:",
        paymentMethodsDescription8: "For your convenience, we also offer secure online payment options through Simple Practice on our website.",
        paymentMethodsDescription9: "Note:",
        paymentMethodsDescription10: "Please ensure all payments are made promptly to ensure uninterrupted service.",

        flexibleSchedulingTitle: "Flexible Scheduling for Your Convenience",
        appointmentPolicyDescription1: "Your appointment time is reserved just for you.",
        appointmentPolicyDescription2: "We understand that unexpected events can occur, but in order to maintain the integrity of scheduling for all our clients, we adhere to the following policy:",
        appointmentPolicyDescription3: "Cancellation:",
        appointmentPolicyDescription4: "If you need to cancel your appointment, please inform us at least 24 hours in advance. This gives us the opportunity to reallocate the time slot to someone else in need.",
        appointmentPolicyDescription5: "Late Cancellations & No-Shows:",
        appointmentPolicyDescription6: "Appointments cancelled with less than 24 hours notice or missed entirely will be charged the full session rate.",
        appointmentPolicyDescription7: "Rescheduling:",
        appointmentPolicyDescription8: "We value your commitment to therapy and understand that scheduling can sometimes be a challenge. To find available times and dates that are convenient for you, please use our scheduling tool on Simple Practice.",

        faqTitle: "Frequently Asked Questions",
        faqQuestions: [
            "How do I book my first session?",
            "What is Anxiety?",
            "Anxiety questions to ask yourself",
            "What is Depression?",
            "What are the symptoms and signs of depression?",
        ],
        faqAnswers: [
            "IT’S NOT COMPLICATED! We want to make it as easy as possible for you. You can call or email anytime. However, the best way to get started is to click the Get Started Now button to complete and send the form. Email certainly works - but if you include your phone number on the form - it is easier to answer all of your questions, and book your first session. Physician or specialist referral is not required.",
            "Most people experience anxiety to some degree at some point in their lives. In fact, anxiety is within the normal range of human emotions. For example, worrying you might be late for the bus is not a problem. That is normal and in fact is helpful! What makes anxiety problematic is its severity, and how persistent or pervasive it is. To help determine whether your anxiety is a problem to solve, consider your answer to the following questions.",
            "Does your anxiety: Constantly prevent you from performing normal day to day tasks? Often prevent you from obtaining a good night sleep? Rob you of the ability to concentrate, to relax, or to enjoy the moment? Inhibit or paralyze your functioning in important relationships? Stop you from reaching your goals? If you answered yes to one or more of the above, then you may benefit from at least an initial conversation with someone trained to recognize and treat your anxiety.",
            "We have all felt sad or blue, and said something like, “I feel depressed!” Does that mean you are clinically depressed? It is normal to feel sad or low, sometimes. Feeling down is within the normal range of human emotions. During the course of a day, your mood can shift in intensity activation (alarmed/astonished) to deactivation (fatigued/tired); and can shift from pleasant (happy/contented) to unpleasant (distressed/sad). Being in a deactivated and unpleasant mood state does not necessarily qualify as “depression.” However, depression may be present when you stay stuck in this low deactivated unpleasant state. Someone struggling with depression is stuck not just for a few minutes or an hour or two, but is stuck in this mood state for most of day almost everyday, for weeks at a time, being unable to shake it, and being unable to return to the usual range of human emotions, and thus creating problems in relationships, school, and/or work.",
            "In addition to persistent sadness, some symptoms and signs of depression include: feeling useless, hopeless, or excessive guilt being irritable loss of interest or pleasure/withdrawal from activities/people, and resulting loneliness changes in appetite and weight lack of sleep or excessive sleep and fatigue feeling slow or lethargic trouble concentrating or making decisions crying easily or feeling like crying. More acute symptoms to watch for include thoughts of suicide and/or a loss of touch with reality, such as hearing voices or having strange thoughts (delusions). A qualified mental health professional is needed to formally diagnose clinical depression, including clarification of the type of depression you are experiencing.",
        ],
        moreFaqsButton: "More FAQs",

        readyToBeginTitle: "Ready to Begin Your Journey?",
        readyToBeginDescription: "Discover the transformative power of EMDR therapy with Bonanza. Schedule your free 15-minute consultation and take the first step towards healing and renewal.",
        bookFreeConsultationButton: "Book Your Free Consultation",

        footerPrivacyPolicy: "PRIVACY POLICY",
        footerDesignedBy: "DESIGNED BY JAIME MENDIETA",
    },

    es: {
        headerLanguagePrefix: "See in",
        headerLanguage: "English",
        headerHome: "Inicio",
        headerAbout: "Nosotros",
        headerServices: "Servicios",
        headerContact: "Contáctanos",
        headerFAQ: "Preguntas",
        headerSchedule: "RESERVE SU CITA",
        bookAppointment: "Reserve su Cita",
        scheduleAppointment: "Reserve su Cita",
        heroTitle: "Descubra la Sanación y Renovación",
        heroP1: "Viaje con Bonanza, el refugio para la terapia DRMO basada en evidencia, donde traumas y trastornos de estrés se transforman en fortalezas.",
        heroP2: "Cada historia tiene retos. Permítanos ayudarles a convertir el suyo en un testamento de resiliencia y crecimiento. Tu camino hacia un mañana más brillante comienza aquí. Programe su consulta gratuita de 15 minutos hoy.",

        emdrTherapyTitle: "¿Qué es la Terapia DRMO?",
        emdrTherapyDescription: "La DRMO, o Desensibilización y Reprocesamiento por Movimiento Ocular, es una técnica terapéutica poderosa desarrollada para ayudar a las personas a procesar recuerdos traumáticos y experiencias de vida adversas. En su esencia, la EMDR está diseñada para ayudar a los clientes a integrar y comprender estos recuerdos, reduciendo finalmente su carga emocional.",
        howItWorksTitle: "¿Cómo Funciona?",
        howItWorksDescription: "La EMDR utiliza una terapia estructurada de ocho fases que implica estimulación bilateral, a menudo a través de movimientos oculares guiados. Este proceso ayuda al cerebro a reprocesar recuerdos traumáticos, transformándolos en recuerdos más manejables y neutrales.",

        benefitsTitle: "Los Beneficios de la EMDR Incluyen:",
        benefitsDescription1: "Procesamiento rápido de experiencias traumáticas.",
        benefitsDescription2: "Disminución del malestar de recuerdos perturbadores.",
        benefitsDescription3: "Mejora de la autoestima y valía personal.",
        benefitsDescription4: "Mayor capacidad para vivir en el presente sin ser ensombrecido por el pasado.",
        benefitsDescription5: "En Bonanza, nuestros terapeutas entrenados utilizan EMDR para ayudarle a navegar más allá de traumas, lo que le permite avanzar con resistencia y fuerza renovada.",
        moreServicesButton: "Más Servicios",
        learnMoreButton: "Saber Más",

        whyChooseTitle: "¿Por Qué Elegir Bonanza para Tu Viaje de Sanación?",
        meetGianninaTitle: "Conoce a Giannina Fuentes, LCSW - El Corazón de Bonanza",
        gianninaDescription: "Giannina Fuentes no es solo otra terapeuta; es un faro de esperanza, un testimonio de dedicación y la luz guía de Bonanza. Con una sólida formación académica de la Universidad de Utah, posee tanto una Licenciatura en Psicología como una Maestría en Trabajo Social, siendo una profesional de la salud mental condecorada.",
        experienceExpertiseTitle: "Experiencia y Experticia:",
        diverseClienteleDescription1: "Clientela Diversa:",
        diverseClienteleDescription2: "Giannina ha ayudado a individuos de todos los grupos de edad, guiándolos a través de desafíos personales y familiares.",
        specializationsDescription1: "Especializaciones:",
        specializationsDescription2: "Su destreza terapéutica abarca áreas como el trauma infantil y adulto, violencia doméstica, ansiedad, depresión, estrés y problemas de relación.",
        commitmentToChildrenDescription1: "Compromiso con los Niños:",
        commitmentToChildrenDescription2: "La dedicación inquebrantable de Giannina se refleja en su trabajo como trabajadora de bienestar infantil para la División de Servicios para Niños y Familias, asegurando el bienestar de los niños y las familias.",
        inclusiveCareDescription1: "Cuidado Inclusivo:",
        inclusiveCareDescription2: "Tiene un corazón para aquellos con discapacidades, ofreciendo un apoyo inigualable a individuos con condiciones como autismo y TDAH.",

        advancedTrainingTitle: "Formación Avanzada y Certificación:",
        certificationsDescription1: "El compromiso de Giannina con el aprendizaje continuo y la excelencia es evidente en sus numerosas certificaciones:",
        certificationsDescription2: "EMDR para Trauma Complejo, Duelo y Luto, y Estrategias para Problemas de Apego en Niños y Adolescentes.",
        certificationsDescription3: "Terapia Cognitivo Conductual (TCC) y TCC enfocada en Trauma.",
        certificationsDescription4: "Reducción de Estrés Basada en Mindfulness.",
        certificationsDescription5: "Y con orgullo tiene registros con la Asociación de Trabajo Social de Utah (UTAHSWA), Instituto EMDR, Inc., y más.",

        beyondTherapyTitle: "Más Allá de la Terapia:",
        beyondTherapyDescription: "Fuera de su vida profesional, Giannina enriquece su viaje como madre a través del aprendizaje y la exploración continua de recursos. Disfruta de momentos con su familia, aventuras al aire libre con Luna, su Vizsla de terapia, y encuentra alegría en bailar.",
        uniqueExperienceTitle: "Una Experiencia Terapéutica Única:",
        uniqueExperienceDescription1: "Abraza el calor y la comodidad de las sesiones de terapia con Luna, la Vizsla terapéutica. Su presencia gentil puede mejorar el entorno terapéutico, proporcionando una capa adicional de relajación y conexión.",
        uniqueExperienceDescription2: "Elija Bonanza, y usted no sólo está eligiendo terapia; usted está eligiendo un santuario de comprensión, experiencia y cuidado compasivo. Su viaje a la curación y renovación comienza aquí.",

        affordableCareTitle: "Atención Asequible Adaptada a Sus Necesidades",
        sessionRatesTitle: "Nuestras Tarifas de Sesión de Terapia:",
        sessionRatesDescription1: "Sesión Inicial de Admisión:",
        sessionRatesDescription2: "$160 por una sesión de 50 minutos.",
        sessionRatesDescription3: "Sesión Regular de Terapia: $140 por 50 minutos.",
        sessionRatesDescription4: "$140 por 50 minutos.",
        sessionRatesDescription5: "Opción Especial de Pago Directo:",
        sessionRatesDescription6: "Ofrecemos una tarifa reducida para pagos directos. Por favor, póngase en contacto para discutir los detalles.",

        insuranceInformationTitle: "Información de Seguro:",
        insuranceInformationDescription: "Entender los beneficios de su seguro es crucial. Aunque muchos proveedores de seguros o planes de beneficios para empleados pueden cubrir nuestros servicios, ya sea en su totalidad o en parte, es esencial confirmar los detalles específicos con su proveedor.",

        keyQuestionsTitle: "Preguntas Clave para Su Proveedor de Seguro",
        mentalHealthBenefitsTitle: "Beneficios para la salud mental",
        mentalHealthBenefitsQuestion: "¿Mi plan de seguro de salud incluye beneficios de salud mental?",
        deductiblesTitle: "Deductibles",
        deductiblesQuestion: "¿Tengo un deducible? Si es así, ¿cuál es y ya lo he cumplido?",
        sessionLimitationsTitle: "Limitaciones de Sesión",
        sessionLimitationsQuestion: "¿Mi plan limita la cantidad de sesiones que puedo tener por año calendario? Si es así, ¿cuál es el límite?",
        physicianApprovalTitle: "Autorización del Médico de Atención Primaria",
        physicianApprovalQuestion: "¿Necesito una aprobación escrita de mi médico de atención primaria para que los servicios estén cubiertos?",
        insuranceAdvice: "Le aconsejamos que se comunique con su proveedor de seguros para asegurarse de estar bien informado sobre sus beneficios y opciones de cobertura.",
        insuranceReminder: "Recuerde, invertir en salud mental es inestimable. Nuestro objetivo es que el proceso sea lo más transparente y sencillo posible para usted. Si tiene alguna pregunta o necesita aclaraciones, por favor no dude en ponerse en contacto con nosotros.",
        contactUsButton: "Contáctenos",

        easyPaymentOptionsTitle: "Fáciles Opciones de Pago",
        easyPaymentOptionsDescription: "Nos esforzamos por hacer que el proceso de pago sea lo más fácil posible para usted. Aquí está cómo puede arreglar sus sesiones con nosotros:",
        paymentMethodsDescription1: "Efectivo:",
        paymentMethodsDescription2: "Los pagos directos se pueden realizar durante su sesión.",
        paymentMethodsDescription3: "Cheque:",
        paymentMethodsDescription4: 'Asegúrese de que los cheques estén a nombre de "Bonanza Counseling Services".',
        paymentMethodsDescription5: "Tarjetas de Crédito:",
        paymentMethodsDescription6: "Aceptamos todas las tarjetas de crédito principales, incluyendo HSA. Transacciones seguras garantizadas.",
        paymentMethodsDescription7: "Pagos en Línea:",
        paymentMethodsDescription8: "Para su comodidad, también ofrecemos opciones de pago en línea seguras a través de Simple Practice en nuestro sitio web.",
        paymentMethodsDescription9: "Nota:",
        paymentMethodsDescription10: "Por favor, asegúrese de que todos los pagos se efectúen con prontitud para garantizar un servicio ininter",

        flexibleSchedulingTitle: "Horarios Flexibles para Su Comodidad",
        appointmentPolicyDescription1: "Su hora de cita está reservada solo para usted.",
        appointmentPolicyDescription2: "Entendemos que pueden ocurrir eventos inesperados, pero para mantener la integridad de la programación de todos nuestros clientes, nos adherimos a la siguiente política:",
        appointmentPolicyDescription3: "Cancelación:",
        appointmentPolicyDescription4: "Si necesita cancelar su cita, infórmenos al menos con 24 horas de antelación. Esto nos da la oportunidad de reasignar el horario a otra persona que lo necesite.",
        appointmentPolicyDescription5: "Cancelaciones Tardías y Ausencias:",
        appointmentPolicyDescription6: "Las citas canceladas con menos de 24 horas de anticipación o perdidas en su totalidad se cobrarán a la tarifa completa de la sesión.",
        appointmentPolicyDescription7: "Reagendamiento:",
        appointmentPolicyDescription8: "Valoramos su compromiso con la terapia y entendemos que a veces la programación puede ser un desafío. Para encontrar horarios y fechas disponibles que le convengan, utilice nuestra herramienta de programación en Simple Practice.",

        faqTitle: "Preguntas Frecuentes",
        faqQuestions: [
            "¿Cómo puedo reservar mi primera sesión?",
            "¿Qué es la Ansiedad?",
            "Preguntas sobre la ansiedad para preguntarse a sí mismo",
            "¿Qué es la Depresión?",
            "¿Cuáles son los síntomas y señales de la depresión?",
        ],
        faqAnswers: [
            "¡NO ES COMPLICADO! Queremos hacerlo lo más fácil posible para usted. Puedes llamar o enviar un correo electrónico en cualquier momento. Sin embargo, la mejor manera de empezar es hacer clic en el botón Get Started Now para completar y enviar el formulario. El correo electrónico ciertamente funciona - pero si usted incluye su número de teléfono en el formulario - es más fácil responder a todas sus preguntas, y reservar su primera sesión. No es necesario un médico o un especialista en referencia.",
            "La mayoría de las personas experimentan ansiedad en algún grado en algún momento de sus vidas. De hecho, la ansiedad está dentro del rango normal de emociones humanas. Por ejemplo, preocuparse de llegar tarde al autobús no es un problema. ¡Eso es normal y de hecho es útil! Lo que hace que la ansiedad sea problemática es su gravedad, y cuán persistente o generalizada es. Para ayudar a determinar si su ansiedad es un problema que resolver, considere su respuesta a las siguientes preguntas.",
            "¿Tu ansiedad: Te impide constantemente realizar tareas normales del día a día? ¿A menudo le impide obtener un buen sueño nocturno? ¿Te robó la capacidad de concentrarte, relajarte o disfrutar del momento? ¿Inhibir o paralizar su funcionamiento en relaciones importantes? ¿Dejarte de alcanzar tus metas? Si usted respondió sí a uno o más de los anteriores, entonces usted puede beneficiarse por lo menos de una conversación inicial con alguien entrenado para reconocer y tratar su ansiedad.",
            "Todos nos hemos sentido tristes o melancólicos, y hemos dicho algo como, “¡Me siento deprimido!” ¿Eso significa que estás clínicamente deprimido? Es normal sentirse triste o bajo, a veces. Sentirse abajo está dentro del rango normal de emociones humanas. Durante el transcurso de un día, su estado de ánimo puede cambiar en la activación de intensidad (alarmado/estonizado) a la desactivación (fatigiado/cansado); y puede cambiar de agradable (feliz/contento) a desagradable (distraido/sadido). Estar en un estado de ánimo desactivado y desagradable no necesariamente califica como \"depresión\". Sin embargo, la depresión puede estar presente cuando usted permanece atascado en este estado desactivado bajo desagradable. Alguien que lucha con la depresión se atasca no sólo por unos minutos o una hora o dos, sino que se queda atascado en este estado de ánimo casi todos los días, durante semanas a la vez, siendo incapaz de sacudirla, y ser incapaz de regresar a la gama usual de emociones humanas, creando así problemas en las relaciones, la escuela y/o el trabajo.",
            "Además de la tristeza persistente, algunos síntomas y señales de la depresión incluyen: sentirse inútil, sin esperanza o con culpa excesiva siendo irritable pérdida de interés o placer / retiro de actividades / personas, y la soledad resultante cambia en el apetito y la falta de peso del sueño o el sueño excesivo y la fatiga sienten dificultades lentas o letárgicas para concentrarse o tomar decisiones llorando fácilmente o sentir como llorar. Los síntomas más agudos a observar incluyen pensamientos de suicidio y/o pérdida de contacto con la realidad, como escuchar voces o tener pensamientos extraños (ilusiones). Se necesita un profesional de salud mental calificado para diagnosticar formalmente la depresión clínica, incluyendo la clarificación del tipo de depresión que está experimentando.",
        ],
        moreFaqsButton: "Más Preguntas",

        readyToBeginTitle: "¿Listo para Comenzar Tu Viaje?",
        readyToBeginDescription: "Descubre el poder transformador de la terapia EMDR con Bonanza. Programa tu consulta gratuita de 15 minutos y da el primer paso hacia la sanación y la renovación.",
        bookFreeConsultationButton: "Reserve su Consulta Gratuita",

        footerPrivacyPolicy: "POLÍTICA DE PRIVACIDAD",
        footerDesignedBy: "DISEÑADO POR JAIME MENDIETA",
    }
}