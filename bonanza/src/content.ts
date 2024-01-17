import ServiceA from "../public/ServiceA.png";
import ServiceB from "../public/ServiceB.png";
import ServiceC from "../public/ServiceC.png";
import ServiceD from "../public/ServiceD.png";
import ServiceE from "../public/ServiceE.jpg";
import ServiceF from "../public/ServiceF.png";
import ServiceG from "../public/ServiceG.png";
import ServiceH from "../public/Luna.jpg";

import {StaticImageData} from "next/image";

interface ServiceData {
    id: number;
    title: string;
    subtitle: string;
    helpsWith: string[];
    details: string[];
    image: StaticImageData;
}

interface FaqData {
    question: string;
    answer: string;
}

interface DictionaryEntry {
    cookieNotice: string
    cookieConsentMessage1: string
    cookieConsentMessage2: string
    cookieConsentAccept: string
    cookieConsentDeny: string
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

    // #########################################################################################################
    // ABOUT PAGE
    aboutBonanzaTitle: string;
    aboutBonanzaDescription: string;
    founderTitle: string;
    founderName: string;
    founderQualification: string;
    founderDescription: string;
    founderExperience1: string;
    founderExperience2: string;
    founderExperience3: string;
    founderExperience4: string;
    founderExperience5: string;
    founderExperience6: string;
    // advancedTrainingTitle above
    trainingDetails1: string;
    trainingDetails2: string;
    trainingDetails3: string;
    trainingDetails4: string;
    trainingDetails5: string;
    trainingDetails6: string;
    trainingDetails7: string;
    trainingDetails8: string;
    educationTitle: string;
    educationDetails: string;
    academicAwardsTitle: string;
    academicAwardsDetails1: string;
    academicAwardsDetails2: string;
    academicAwardsDetails3: string;
    academicAwardsDetails4: string;
    academicAwardsDetails5: string;
    academicAwardsDetails6: string;
    certificationAwardsTitle: string;
    certificationAwardsDetails1: string;
    certificationAwardsDetails2: string;
    certificationAwardsDetails3: string;

    // #######################################################################################################
    // SERVICES PAGE
    canHelpWith: string;
    detailsTitle: string;
    services: ServiceData[];

    // #######################################################################################################
    // CONTACT PAGE
    alertMessage1: string;
    alertMessage2: string;
    alertMessage3: string;
    alertMessage4: string;
    modalSuccess: string;
    modalFailure: string;
    modalError: string;

    contactTitle: string;
    contactSubtitle: string;
    contactFormLegend: string;
    nameFieldPlaceholder: string;
    emailFieldPlaceholder: string;
    subjectFieldDefaultOption: string;
    subjectFieldOption1: string;
    subjectFieldOption2: string;
    subjectFieldOption3: string;
    subjectFieldOption4: string;
    messageFieldPlaceholder: string;
    submitButtonDefault: string;
    submitButtonLoading: string;

    // #######################################################################################################
    // FAQ PAGE
    faqPageTitle: string;
    faqPageSubtitle: string;
    faqs: FaqData[];

    footerPrivacyPolicy: string;
    footerDesignedBy: string;
}

export const dictionary: Record<string, DictionaryEntry> = {
    en: {
        cookieNotice: "Cookies Notice/Aviso de Cookies",
        cookieConsentMessage1: "Our site automatically adjusts to your language. To manually switch languages, we use a cookie that only tracks your language choice, without storing personal data. Your access to content remains the same, whether you accept or not.",
        cookieConsentMessage2: "Nuestra página se ajusta automáticamente a su idioma. Para cambiar de idioma manualmente, utilizamos una cookie que solo registra su elección de idioma, sin almacenar datos personales. Su acceso al contenido permanece igual, acepte o no.",
        cookieConsentAccept: "Accept/Acceptar",
        cookieConsentDeny: "Deny/Rechazar",
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
        experienceExpertiseTitle: "Professional Experience:",
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
        paymentMethodsDescription6: "We accept most major credit cards, including HSA and/or FSA. Secure transactions guaranteed.",
        paymentMethodsDescription7: "Online Payments:",
        paymentMethodsDescription8: "For your convenience, we also offer secure online payment options through Simple Practice on our website.",
        paymentMethodsDescription9: "Note:",
        paymentMethodsDescription10: "Please ensure all payments are made promptly to ensure uninterrupted service.",

        flexibleSchedulingTitle: "Flexible Scheduling for Your Convenience",
        appointmentPolicyDescription1: "Your appointment time is reserved just for you.",
        appointmentPolicyDescription2: "We understand that unexpected events can occur, but in order to maintain the integrity of scheduling for all our clients, we adhere to the following policy:",
        appointmentPolicyDescription3: "Cancellation:",
        appointmentPolicyDescription4: "If you need to cancel your appointment, please inform us at least 24 hours in advance. This gives us the opportunity to reallocate the time slot to someone else in need.",
        appointmentPolicyDescription5: "Late Cancellations or No-Shows:",
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
            "In addition to persistent sadness, some symptoms and signs of depression include: feeling useless, hopeless, or excessive guilt being irritable loss of interest or pleasure, withdrawal from activities, people, and resulting loneliness changes in appetite and weight lack of sleep or excessive sleep and fatigue feeling slow or lethargic trouble concentrating or making decisions crying easily or feeling like crying. More acute symptoms to watch for include thoughts of suicide and/or a loss of touch with reality, such as hearing voices or having strange thoughts (delusions). A qualified mental health professional is needed to formally diagnose clinical depression, including clarification of the type of depression you are experiencing.",
        ],
        moreFaqsButton: "More FAQs",

        readyToBeginTitle: "Ready to Begin Your Journey?",
        readyToBeginDescription: "Discover the transformative power of EMDR therapy with Bonanza. Schedule your free 15-minute consultation and take the first step towards healing and renewal.",
        bookFreeConsultationButton: "Book Your Free Consultation",

        // ##################################################################################################
        // ABOUT PAGE
        aboutBonanzaTitle: "What is Bonanza?",
        aboutBonanzaDescription: "Bonanza is a counseling company specialized in EMDR therapy. Our mission is to promote mental well-being and advocate for the importance of mental health. We strive to provide accessible and comprehensive resources, support, and education to individuals, families, and communities. Through collaboration, innovation, and compassion, we aim to break down stigmas, raise awareness, and inspire positive change in the field of mental health. Together, we can create a society that embraces and nurtures the mental well-being of its members, fostering resilience, happiness and a sense of belonging.",
        founderTitle: "The Founder",
        founderName: "Giannina Fuentes",
        founderQualification: "Licensed Clinical Social Worker (LCSW)",
        founderDescription: "Giannina Fuentes stands out as a dedicated mental health professional, holding a bachelor's degree in Psychology and a master's degree in Social Work from the prestigious University of Utah.",
        founderExperience1: "With a rich tapestry of experience:",
        founderExperience2: "She has served a diverse clientele ranging from children to adults, helping them navigate a myriad of personal and family challenges.",
        founderExperience3: "Her areas of expertise encompass childhood and adult trauma, domestic violence, anxiety, depression, stress, and relationship challenges.",
        founderExperience4: "Beyond her primary therapy roles, Giannina has shown her dedication to the welfare of children and families through her extensive work as a child welfare worker for the Division of Child and Family Services.",
        founderExperience5: "She has provided invaluable support to individuals with autism, ADHD, and other disabilities, underlining her commitment to inclusive care.",
        founderExperience6: "Notably, Giannina is TF-CBT and EMDR certified, underscoring her proficiency in delivering impactful therapeutic interventions.",
        // advancedTrainingTitle above
        trainingDetails1: "Eye Movement Desensitization and Reprocessing (EMDR) for Complex Trauma.",
        trainingDetails2: "EMDR & Practical strategies for Problems of Attachment and Dissociation in children and Adolescents.",
        trainingDetails3: "EMDR for Grief and Mourning",
        trainingDetails4: "Cognitive Behavioral Therapy (CBT)",
        trainingDetails5: "Trauma Focused-Cognitive Behavioral Therapy",
        trainingDetails6: "Mindfulness Based Stress Reduction",
        trainingDetails7: "Notably, Giannina is TF-CBT and EMDR certified, underscoring her proficiency in delivering impactful therapeutic interventions.",
        trainingDetails8: "Giannina holds registration with Utah Social Work Association (UTAHSWA), EMDR Certification with EMDR Institute, Inc., AmeriCorps and PSI CHI, the international Honor Society in Psychology.",
        educationTitle: "Education",
        educationDetails: "Giannina earned a Master’s Degree in Social Work from the University of Utah. She was nominated Outstanding Student of the Year while cursing her first graduate year. She obtained a Bachelor’s Degree in Psychology from University of Utah in 2010. As part of her graduating school training, Giannina focuses on providing community engagement and psychosocial support for vulnerable children and youth.",
        academicAwardsTitle: "Academic Awards",
        academicAwardsDetails1: "Salt Lake Community College, President Honor Roll Award for Outstanding Achievement GPA of 4.0 in 2005",
        academicAwardsDetails2: "Salt Lake Community College, Dean’s Honor List Award for outstanding Achievement GPA of 3.9 in 2006",
        academicAwardsDetails3: "Salt Lake Community College, Pillar of Excellence Award for outstanding performance and dedication to the highest standard of excellence in 2007",
        academicAwardsDetails4: "Salt Lake Community College, Pillar of Excellence Award for outstanding performance and dedication to the highest standard of excellence in 2008",
        academicAwardsDetails5: "Salt Lake Community College, Pillar of Excellence Award for outstanding performance and dedication to the highest standard of excellence in 2009",
        academicAwardsDetails6: "University of Utah, Nominee Certificate for Outstanding First Year M.S.W. Student of the Year Award in 2016",
        certificationAwardsTitle: "Certification Awards",
        certificationAwardsDetails1: "Parenting with love and logic at Davis Behavioral Health in 2016",
        certificationAwardsDetails2: "Platinum Star Award for valuable contributions to the DCFS FIAT team in 2015",
        certificationAwardsDetails3: "Gold Star Award for valuable contributions to the DCFS FIAT team in 2014",

        // #######################################################################################################
        // SERVICE PAGE
        canHelpWith: "Can help with",
        detailsTitle: "Details",
        services: [
            {
                id: 1,
                title: "EMDR",
                subtitle: "Eye Movement Desensitization & Reprocessing",
                helpsWith: ["Trauma", "PTSD", "Anxiety", "Panic Disorders", "Depression", "Addictions"],
                details: [
                    "EMDR is an effective, and extensively research-proven, psychotherapy treatment that supports individuals that have experienced traumatic events or other distressing situations, including depression, anxiety, and PTSD.",
                    "During EMDR sessions, clients can expect to help the brain to reprocess and resolve outstanding traumatic memories that keep reappearing in forms of sensations, thoughts, and emotions. EMDR therapists lead the individual through eight phases. EMDR starts with establishing grounds of history, creating safeness in the body through somatic resources, and later moving on to phases that pay more attention to negative beliefs and images, along with emotions and sensations around the body which are associated with the traumatic or unprocessed memories."
                ],
                image: ServiceA,
            },
            {
                id: 2,
                title: "CBT",
                subtitle: "Cognitive Behavioral Therapy",
                helpsWith: ["Depression", "Anxiety", "Phobias", "PTSD", "Sleep Disorders", "OCD", "Substance Use Disorders"],
                details: [
                    "Cognitive Behavioral Therapy (CBT) is a short-term, structured form of psychotherapy that focuses on the client's present. In this model of therapy, the clinician and the client work as a team to identify the client's dysfunctional and distorted thoughts and beliefs, to both challenge and modify those thoughts and attitudes.",
                    "During CBT, the therapist will identify and challenge the client's negative thought patterns. The therapist will also help the client understand the impact those thoughts have on their behavior and feelings. By doing this, the therapist and the client will be able to come up with alternative thoughts that lead to more positive feelings.",
                ],
                image: ServiceB,
            },
            {
                id: 3,
                title: "TF-CBT",
                subtitle: "Trauma-Focused Cognitive Behavioral Therapy",
                helpsWith: ["Trauma"],
                details: [
                    "TF-CBT an evidence-based treatment approach for children and adolescents who have experience trauma. TF-CBT focuses on understanding the  impact of trauma on children’s emotional and behavioral well-being, as well as the specific techniques and strategies used to address trauma-related symptoms.",
                    "TF-CBT covers various components such as psychoeducation, relaxation techniques, affective expression and regulation, cognitive coping, trauma narrative development, and enhancing safety and future development. Clients will learn how to adapt these components to meet the unique needs of each child or adolescent they work with, taking into consideration cultural factors and developmental considerations.  By the end of therapy, clients would have gained the confidence and competence to implement TF-CBT effectively, promoting healing and resilience in children and adolescents who have experience trauma.",
                ],
                image: ServiceC,
            },
            {
                id: 4,
                title: "MBCT",
                subtitle: "Mindfulness Based Cognitive Therapy",
                helpsWith: ["Depression and Anxiety", "Food and Eating Issues", "Low Mood and Negative Thoughts", "Body Sensations Such as Pain, Panic, and Chronic Conditions"],
                details: [
                    "Mindfulness-based approaches such as Mindfulness Based Cognitive Therapy, or MBCT, are designed for people who suffer from repeated bouts of depression or chronic unhappiness. It combines elements from cognitive therapy with meditative practices and attitudes based on the cultivation of mindfulness.",
                    "Recent research has shown that people who have been clinically depressed three or more times in their life find that learning mindfulness-based skills help to considerably reduce their chances of depression returning.",
                ],
                image: ServiceD,
            },
            {
                id: 5,
                title: "Play Therapy",
                subtitle: "",
                helpsWith: ["Communication", "Emotional Regulation", "Self Esteem", "Trauma", "Anxiety", "Grief", "Behavioral Issues"],
                details: [
                    "Play therapy is an innovative and evidence-based therapeutic approach designed to support children’s emotional, social, and behavioral well-being. Play therapy offers a safe and nurturing environment for children to express themselves, process their emotions, and develop healthy coping mechanisms through play. Play therapy covers a range of therapy techniques, including expressive arts, sand tray therapy, puppetry, storytelling, and therapeutic games.  These techniques facilitate communication, promote emotional regulation, enhance  self-esteem, and foster resilience in children facing various challenges such as trauma, anxiety, grief, and behavioral issues.",
                ],
                image: ServiceE,
            },
            {
                id: 6,
                title: "Humanistic Therapy",
                subtitle: "",
                helpsWith: ["Self-Awareness", "Self-Acceptance"],
                details: [
                    "Humanistic therapy is an in-depth exploration of the person-centered approach to psychological healing. The therapeutic process emphasizes the importance of creating a safe and non-judgmental environment that fosters self-exploration and personal-growth. The therapist uses various therapeutic techniques such as active listening, reflection, and open-ended questioning.  Also, explore the use of expressive arts, mindfulness, and other experiential approaches to facilitate client self-awareness and self-acceptance.",
                ],
                image: ServiceF,
            },
            {
                id: 7,
                title: "Telehealth",
                subtitle: "",
                helpsWith: ["Most of everything listed in the other services above except for Play Therapy"],
                details: [
                    "Telehealth allows us to provide counseling and therapy to our clients via live video conferencing. This can be done anywhere you have a computer or smartphone.",
                    "Telehealth appointments can be very beneficial if getting to a traditional in-person appointment is not convenient, or you simply just don’t want to.",
                    "Our telehealth solution allows you to schedule an appointment directly online and have the entire therapy session take place digitally.",
                ],
                image: ServiceG,
            },
            {
                id: 8,
                title: "Certified Therapy Dog",
                subtitle: "",
                helpsWith: ["Stress", "Note: Luna can accompany you in any of the services listed above."],
                details: [
                    "Luna is a certified therapy dog whose presence brings comfort and joy to those around her. With her beautiful and gentle nature, Luna is a sweet and soft companion who has a calming effect on everyone she meets. She loves to snuggle up in your lap and be petted, providing a soothing experience. Luna’s heart is filled with love and compassion, making her the perfect furry friend to brighten your day.",
                ],
                image: ServiceH,
            },
        ],

        // #######################################################################################################
        // CONTACT PAGE
        alertMessage1: "Please enter a valid email address.",
        alertMessage2: "Please enter your name.",
        alertMessage3: "Please select a subject.",
        alertMessage4: "Please enter a message.",
        modalSuccess: "Message sent successfully.",
        modalFailure: "Failed to send message. Please try again.",
        modalError: "Failed to send message. Please refresh page and try again.",

        contactTitle: "I'm available! Let's talk",
        contactSubtitle: "Reach out and I'll get back to you within 3 days.",
        contactFormLegend: "Contact Form",
        nameFieldPlaceholder: "What's your name?",
        emailFieldPlaceholder: "Your email address?",
        subjectFieldDefaultOption: "What is this about?",
        subjectFieldOption1: "General Question",
        subjectFieldOption2: "Insurance",
        subjectFieldOption3: "Personalized Payments",
        subjectFieldOption4: "Other",
        messageFieldPlaceholder: "Feel free to message me any questions, or thoughts.",
        submitButtonDefault: "Submit",
        submitButtonLoading: "Sending...",

        // #######################################################################################################
        // FAQ PAGE
        faqPageTitle: "Find answers to your questions here",
        faqPageSubtitle: "This is the place where you can find the most common questions quickly answered, if for some reason your question is not here, feel free to contact us.",
        faqs: [
            {
                question: "How do I book my first session?",
                answer: "IT’S NOT COMPLICATED! " +
                    "We want to make it as easy as possible for you. You can call or email " +
                    "anytime. However, the best way to get started is to click the Get Started " +
                    "Now button to complete and send the form. Email certainly works - but if " +
                    "you include your phone number on the form - it is easier to answer all of " +
                    "your questions, and book your first session. Physician or specialist " +
                    "referral is not required."
            },
            {
                question: "What is Anxiety?",
                answer: "Most people experience anxiety to some degree at some point in their " +
                    "lives. In fact, anxiety is within the normal range of human emotions. " +
                    "For example, worrying you might be late for the bus is not a problem. " +
                    "That is normal and in fact is helpful! What makes anxiety problematic is " +
                    "its severity, and how persistent or pervasive it is. To help determine " +
                    "whether your anxiety is a problem to solve, consider your answer to the " +
                    "following questions."
            },
            {
                question: "Anxiety questions to ask yourself",
                answer: "Does your anxiety: "+
                    "Constantly prevent you from performing normal day to day tasks? " +
                    "Often prevent you from obtaining a good night sleep? " +
                    "Rob you of the ability to concentrate, to relax, or to enjoy the moment? " +
                    "Inhibit or paralyze your functioning in important relationships? " +
                    "Stop you from reaching your goals? " +
                    "If you answered yes to one or more of the above, then you may benefit from at least an initial conversation with someone trained to recognize and treat your anxiety."
            },
            {
                question: "What exactly is anxiety?",
                answer: "I’m glad you asked. I have spent years studying and treating people who struggle with anxiety. In short, anxiety is an emotional response to a perceived threat. Fear, in contrast, is the emotional response to an actual threat. Anxious thoughts and responses are future-focused: \"What if I fail this exam?\" \"What if I have another panic attack today?\" \"What if I look stupid?\" \"What if my mother gets into a car accident?\" The anxious response to these thoughts, whether we are conscious of that response or not, is something like \"I couldn’t handle it.\" Which gives rise to the perceived threat. The anxiety one feels is the emotional response to that threat."
            },
            {
                question: "What exactly is anxiety? continued",
                answer: "At moderate or severe levels, anxiety can manifest as any one of or a combination of the following: " +
                    "chronic worry, " +
                    "physical tension, " +
                    "panic attacks, or " +
                    "obsessive-compulsive patterns. " +
                    "Anxious thoughts can manifest in any number of different themes in different people, such as worrying about your health or becoming ill, how one is perceived by others, having another panic attack, or harm coming to oneself or loved one if a compulsion is not completed. Anxiety can result in concentration difficulties, low energy, changes in appetite, and poor sleep. It can result in an avoidant behavior, that is, avoiding situations that trigger the anxious response; or in safety behaviors – a behavior that in the short term quells the anxiety but in the long term only maintains it. When anxiety is negatively impacting your job, relationships, or your personal quality of life, it has become problematic. " +
                    "I am an experienced therapist with expertise treating different kinds of anxiety. Please contact me to ask a question about anxiety, or to book a consultation."
            },
            {
                question: "What is Depression?",
                answer: "We have all felt sad or blue, and said something like, \"I feel depressed!\" Does that mean you are clinically depressed? " +
                    "It is normal to feel sad or low, sometimes. Feeling down is within the normal range of human emotions. " +
                    "During the course of a day, your mood can shift in intensity activation (alarmed/astonished) to " +
                    "deactivation (fatigued/tired); and can shift from pleasant (happy/contented) to unpleasant " +
                    "(distressed/sad). Being in a deactivated and unpleasant mood state does not necessarily qualify as " +
                    "\"depression.\" However, depression may be present when you stay stuck in this low deactivated unpleasant " +
                    "state. Someone struggling with depression is stuck not just for a few minutes or an hour or two, but is " +
                    "stuck in this mood state for most of day almost everyday, for weeks at a time, being unable to shake it, " +
                    "and being unable to return to the usual range of human emotions, and thus creating problems in " +
                    "relationships, school, and/or work."
            },
            {
                question: "What are the symptoms and signs of depression?",
                answer: "In addition to persistent sadness, some symptoms and signs of depression include: " +
                    "feeling useless, hopeless, or excessive guilt, " +
                    "being irritable, " +
                    "loss of interest or pleasure/withdrawal from activities/people, and resulting loneliness, " +
                    "changes in appetite and weight, " +
                    "lack of sleep or excessive sleep and fatigue, " +
                    "feeling slow or lethargic, " +
                    "trouble concentrating or making decisions, " +
                    "crying easily or feeling like crying. " +
                    "More acute symptoms to watch for include thoughts of suicide and/or a loss of touch with reality, such as hearing voices or having strange thoughts (delusions). " +
                    "A qualified mental health professional is needed to formally diagnose clinical depression, including clarification of the type of depression you are experiencing."
            },
            {
                question: "What are the common types of depression?",
                answer: "Depressive disorders, also known as mood disorders, are commonly described or diagnosed as:\n" +
                    "Major Depressive Disorder, " +
                    "Bipolar Disorder (sometimes referred to as manic depression), " +
                    "Postpartum Depression, " +
                    "Seasonal Affective Disorder (or seasonal depression), " +
                    "Dysthymia (a persistent low-grade depression persisting over years), " +
                    "Adjustment Disorder with Depressed Mood (depressive symptoms may be a more pronounced reaction to an external stressor)"
            },
            {
                question: "Is depression associated with impairment?",
                answer: "Unfortunately, persistent depression can negatively affect your work and/or school, your relationships, and pursuit of your life goals, and robs you of your ability to enjoy life. Practically, you should seek help if you are stuck in this place and it is stopping you from getting to do the things you want to do in your life."
            },
            {
                question: "What are the causes of depression?",
                answer: "There is no simple answer to this question. You may hear people state that depression is caused by a “chemical imbalance” in the brain. However, this is an insufficient answer when it comes to considering potential causes. There is usually no one clear cause and there are many suspected causes. These are referred to as risk factors. The following factors are believed to play a role in depression:\n" +
                    "Genetic/biological causes (does it “run in the family”?)\n" +
                    "Personality (your “style” of interacting with the world around you)\n" +
                    "Stressful life events (e.g., childhood abuse or adult trauma, job loss, end of a close relationship, death of a loved one - not just grief)\n" +
                    "Medical conditions (e.g., diabetes, thyroid condition, chronic pain, weight issues, cardiac problems, and others)\n" +
                    "These are common risk factors for depression. Even knowing these risk factors, it is difficult to know which causes which. For example, does pain cause depression, or depression cause pain? Or do they simply exacerbate one another, and there is an underlying third “cause”? Remarkably, there are many people with these risk factors who don’t suffer from depression. And for those that do struggle with depression, it is challenging to identify the causal factor.\n" +
                    "The good news, regardless of cause, there are effective treatment options for depression."
            },
            {
                question: "What are protective factors?",
                answer: "Some people are less likely to struggle with depression than others. We don’t know exactly why. However, research has identified several protective factors. The following are some of the factors associated with less depression:\n" +
                    "A Healthy Diet, Reduced Alcohol, and Regular Aerobic Exercise\n" +
                    "Coping and Decision Making Skills\n" +
                    "Social Support From Family and Friends\n" +
                    "Self-Esteem and Resilience (ability to adapt to stressful circumstances)\n" +
                    "Existential/Spiritual Orientation (adhering to values, sense of purpose, future-oriented)\n" +
                    "These protective factors are associated with daily habits, lifestyle, and perspective. Focusing on these factors can lead to practical steps you can take to reduce your risk of depression.\n"
            },
            {
                question: "How do you treat depression?",
                answer: "You may ask, how to cure depression? Here are the two most common approaches to treating depression:\n" +
                    "Psychotherapy (also called talk therapy) – There are more than 50 types of psychotherapy or approaches to therapy. These types can be grouped into four major areas: 1: Psychodynamic Therapies, 2: Client-Centered (Humanistic) Therapies, 3: Cognitive-Behavioral Therapies, and 4: Integrative/Holistic Approaches. An effective therapist will use a therapeutic approach that has empirical support (backed by scientific research). A therapist may use more than one particular approach and often tailor the type treatment to the kind of issue being presented and to the most effective approach for a particular client.\n" +
                    "Antidepressant Medication – needs to be prescribed by a psychiatrist or by a general physician (family doctor) with knowledge/experience in prescribing psychotropics.\n" +
                    "This is a very brief overview and is not an exhaustive list. Of course, at Bonanza Counseling Services, we focus on providing effective psychotherapy."
            }
        ],
        // FOOTER
        footerPrivacyPolicy: "PRIVACY POLICY",
        footerDesignedBy: "DESIGNED BY JAIME MENDIETA",
    },

    es: {
        cookieNotice: "Aviso de Cookies/Cookies Notice",
        cookieConsentMessage1: "Nuestra página se ajusta automáticamente a su idioma. Para cambiar de idioma manualmente, utilizamos una cookie que solo registra su elección de idioma, sin almacenar datos personales. Su acceso al contenido permanece igual, acepte o no.",
        cookieConsentMessage2: "Our site automatically adjusts to your language. To manually switch languages, we use a cookie that only tracks your language choice, without storing personal data. Your access to content remains the same, whether you accept or not.",
        cookieConsentAccept: "Acceptar/Accept",
        cookieConsentDeny: "Rechazar/Deny",
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
        heroTitle: "Encuentra tu Camino hacia la Recuperación y el Renacer",
        heroP1: "Únete a Bonanza, el refugio para la terapia EMDR basada en evidencia clínica, donde traumas y trastornos de estrés se transforman en fortalezas.",
        heroP2: "Cada historia tiene retos. Permítanos ayudarles a convertir el suyo en un testamento de resiliencia y crecimiento. Tu camino hacia un mañana más brillante comienza aquí. Programe su consulta gratuita de 15 minutos hoy.",

        emdrTherapyTitle: "¿Qué es la Terapia EMDR?",
        emdrTherapyDescription: "EMDR, (Desensibilización y Reprocesamiento por Movimiento Ocular), es una técnica terapéutica poderosa desarrollada para ayudar a las personas a procesar recuerdos traumáticos y experiencias de vida adversas. En su esencia, EMDR está diseñada para ayudar a los clientes a integrar y comprender estos recuerdos, reduciendo finalmente su carga emocional.",
        howItWorksTitle: "¿Cómo Funciona?",
        howItWorksDescription: "EMDR utiliza una terapia estructurada de ocho fases que implica estimulación bilateral, a menudo a través de movimientos oculares guiados. Este proceso ayuda al cerebro a reprocesar recuerdos traumáticos, transformándolos en recuerdos más manejables y neutrales.",

        benefitsTitle: "Los Beneficios de EMDR Incluyen:",
        benefitsDescription1: "Procesamiento rápido de experiencias traumáticas.",
        benefitsDescription2: "Disminución del malestar de recuerdos perturbadores.",
        benefitsDescription3: "Mejora el autoestima.",
        benefitsDescription4: "Da capacidad para vivir en el presente sin ser ensombrecido por el pasado.",
        benefitsDescription5: "En Bonanza, nuestros terapeutas capacitados utilizan la terapia EMDR para ayudarte a superar traumas pasados, permitiéndote avanzar con resiliencia y una fuerza renovada.",
        moreServicesButton: "Más Servicios",
        learnMoreButton: "Saber Más",

        whyChooseTitle: "¿Por qué elegir Bonanza para tu camino de recuperación emocional?",
        meetGianninaTitle: "Conoce más sobre Giannina Fuentes, LCSW - El Corazón de Bonanza",
        gianninaDescription: "Giannina Fuentes es más que una terapeuta; es un símbolo de esperanza, un ejemplo de dedicación y la luz orientadora de Bonanza. Con una sólida formación académica de la Universidad de Utah, donde obtuvo tanto su Licenciatura en Psicología como una Maestría en Trabajo Social, se destaca como una profesional altamente condecorada en el campo de la salud mental.",
        experienceExpertiseTitle: "Experiencia Profesional:",
        diverseClienteleDescription1: "Clientela Diversa:",
        diverseClienteleDescription2: "Giannina ha ayudado a individuos de todos los grupos de edad, guiándolos a través de desafíos personales y familiares.",
        specializationsDescription1: "Especializaciones:",
        specializationsDescription2: "Su destreza terapéutica abarca áreas en el trauma infantil, violencia doméstica, ansiedad, depresión, estrés y problemas de parejas.",
        commitmentToChildrenDescription1: "Enfoque en el Bienestar Infantil:",
        commitmentToChildrenDescription2: "La dedicación inquebrantable de Giannina se refleja en su trabajo como trabajadora de bienestar infantil para la División de Servicios para Niños y Familias, enfocándose en el bienestar de los más necesitados.",
        inclusiveCareDescription1: "Atención Especializada e Inclusiva:",
        inclusiveCareDescription2: "Tiene un corazón para aquellos con discapacidades, ofreciendo un apoyo inigualable a individuos con condiciones como autismo y TDAH (Trastorno por Déficit de Atención e Hiperactividad).",

        advancedTrainingTitle: "Capacitación Especializada y Certificaciones:",
        certificationsDescription1: "El compromiso de Giannina con la continuación del aprendizaje y la excelencia es evidente en sus numerosas certificaciones:",
        certificationsDescription2: "EMDR para Trauma Complejo, Duelo y Luto, y Estrategias para Problemas de Apego en Niños y Adolescentes.",
        certificationsDescription3: "Terapia Cognitivo-Conductual (TCC) y TCC enfocada en Trauma.",
        certificationsDescription4: "Reducción de Estrés Basada en Mindfulness.",
        certificationsDescription5: "Además, posee con orgullo afiliaciones profesionales con la Asociación de Trabajo Social de Utah (UTAHSWA), el Instituto EMDR, Inc., entre otros.",

        beyondTherapyTitle: "Más Allá de la Terapia:",
        beyondTherapyDescription: "Fuera de su vida profesional, Giannina enriquece su vida personal como madre a través del aprendizaje y la educación continua. Disfruta de momentos con su familia, paseos al aire libre con su querida Luna, y disfruta del baile.",
        uniqueExperienceTitle: "Una Experiencia Terapéutica Única:",
        uniqueExperienceDescription1: "Disfruta del calor y la ternura de Luna, una perrita terapeuta durante las sesiones de terapia. Su presencia gentil puede mejorar el ambiente terapéutico, proporcionando una capa adicional de relajación y conexión.",
        uniqueExperienceDescription2: "Cuando elija Bonanza, estará eligiendo más que una terapia; estará eligiendo un santuario de comprensión, experiencia y cuidado compasivo. Aquí es donde comienza su viaje hacia la curación y la renovación.",

        affordableCareTitle: "Atención Accesible y Personalizada a Sus Necesidades",
        sessionRatesTitle: "Nuestras Tarifas de Sesión de Terapia:",
        sessionRatesDescription1: "Sesión Inicial:",
        sessionRatesDescription2: "$160 por un asesoramiento de 50 minutos.",
        sessionRatesDescription3: "Sesión Regular:",
        sessionRatesDescription4: "$140 por psicoterapia de 50 minutos.",
        sessionRatesDescription5: "Opción Especial de Pago en Efectivo:",
        sessionRatesDescription6: "Ofrecemos una tarifa reducida para pagos en efectivo. Por favor, póngase en contacto para discutir los detalles.",

        insuranceInformationTitle: "Información de Aseguranza Medica:",
        insuranceInformationDescription: "Es crucial entender los beneficios de su aseguranza médica. Aunque muchos proveedores de seguros o planes de beneficios para empleados pueden cubrir nuestros servicios, ya sea en su totalidad o parcialmente, es importante obtener los detalles específicos con su proveedor.",

        keyQuestionsTitle: "Preguntas Clave para Su Proveedor de Seguro",
        mentalHealthBenefitsTitle: "Beneficios para la salud mental",
        mentalHealthBenefitsQuestion: "¿Mi plan de seguro de salud incluye beneficios de salud mental?",
        deductiblesTitle: "Deductibles",
        deductiblesQuestion: "¿Tengo un deducible? Si es así, ¿cuál es y ya lo he cumplido?",
        sessionLimitationsTitle: "Limitaciones de Sesión",
        sessionLimitationsQuestion: "¿Mi plan limita la cantidad de sesiones que puedo tener por año calendario? Si es así, ¿cuál es el límite?",
        physicianApprovalTitle: "Autorización del Médico de Atención Primaria",
        physicianApprovalQuestion: "¿Necesito una aprobación escrita de mi médico de atención primaria para que los servicios estén cubiertos?",
        insuranceAdvice: "Le aconsejamos que se comunique con su proveedor de aseguranza médica para acesorarse sobre sus beneficios y opciones de cobertura.",
        insuranceReminder: "Recuerde, invertir en salud mental es incalculable. Nuestro objetivo es que el proceso sea lo más transparente y sencillo posible para usted. Si tiene alguna pregunta o necesita aclaraciones, por favor no dude en ponerse en contacto con nosotros.",
        contactUsButton: "Contáctenos",

        easyPaymentOptionsTitle: "Fáciles Opciones de Pago",
        easyPaymentOptionsDescription: "Nos esforzamos por hacer que el proceso de pago sea lo más fácil posible para usted. Aquí está cómo puede saldar sus sesiones con nosotros:",
        paymentMethodsDescription1: "Efectivo:",
        paymentMethodsDescription2: "Los pagos en efectivo se pueden realizar antes o después de su sesión.",
        paymentMethodsDescription3: "Cheque:",
        paymentMethodsDescription4: 'Asegúrese de que los cheques estén a nombre de "Bonanza Counseling Services".',
        paymentMethodsDescription5: "Tarjetas de Crédito:",
        paymentMethodsDescription6: "Aceptamos la mayoría de las tarjetas de crédito principales, incluyendo HSA y/o FSA. Garantizamos la seguridad de las transacciones.",
        paymentMethodsDescription7: "Pagos en Línea:",
        paymentMethodsDescription8: "Para su comodidad, también ofrecemos opciones de pago en línea seguras a través de Simple Practice en nuestro sitio web.",
        paymentMethodsDescription9: "Nota:",
        paymentMethodsDescription10: "Por favor, asegúrese de que todos los pagos se efectúen con prontitud para garantizar un servicio ininterrumpido.",

        flexibleSchedulingTitle: "Horarios Flexibles para Su Comodidad",
        appointmentPolicyDescription1: "Su cita está reservada solo para usted.",
        appointmentPolicyDescription2: "Entendemos que pueden ocurrir eventos inesperados, pero para mantener la integridad de la programación de todos nuestros clientes, nos adherimos a la siguiente política:",
        appointmentPolicyDescription3: "Cancelación:",
        appointmentPolicyDescription4: "Si necesita cancelar su cita, infórmenos al menos con 24 horas de anticipación. Esto nos da la oportunidad de asignar el horario a otra persona que lo necesite.",
        appointmentPolicyDescription5: "Cancelaciones Tardías o Ausencias:",
        appointmentPolicyDescription6: "Las citas canceladas con menos de 24 horas de anticipación o ausencias, seran cobradas en su totalidad.",
        appointmentPolicyDescription7: "Reprogramar:",
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
            "¡NO ES COMPLICADO! Queremos hacerlo lo más fácil posible para usted. Puedes llamar o enviar un correo electrónico en cualquier momento. Sin embargo, la mejor manera de empezar es hacer clic en el botón Get Started Now para completar y enviar el formulario. El correo electrónico ciertamente funciona - pero si usted incluye su número de teléfono en el formulario - es más fácil responder a todas sus preguntas, y reservar su primera sesión. No es necesario que un médico o un especialista los este refiriendo.",
            "La mayoría de las personas experimentan ansiedad en algún grado en algún momento de sus vidas. De hecho, la ansiedad está dentro del rango normal de emociones humanas. Por ejemplo, preocuparse de llegar tarde al autobús no es un problema. ¡Eso es normal y de hecho es útil! Lo que hace que la ansiedad sea problemática es su gravedad, y cuán persistente o generalizada es. Para ayudar a determinar si su ansiedad es un problema que necesita ser resolvido, responde a las siguientes preguntas.",
            "¿Tu ansiedad: Te impide constantemente realizar tareas normales del día a día? ¿A menudo le impide obtener un buen sueño nocturno? ¿Te robó la capacidad de concentrarte, relajarte o disfrutar del momento? ¿Inhibe o paraliza llevarse bien con personas importantes en su entorno? ¿Te deja alcanzar tus metas? Si usted respondió sí a uno o más de las preguntas anteriores, entonces usted puede beneficiarse por lo menos de una conversación inicial con alguien entrenado para reconocer y tratar su ansiedad.",
            "Todos nos hemos sentido tristes o melancólicos, y hemos dicho algo como, \"¡Me siento deprimido!\" ¿Eso significa que estás clínicamente deprimido? Es normal sentirse triste o decaido, a veces. Sentirse abajo está dentro del rango normal de emociones humanas. Durante el transcurso de un día, su estado de ánimo puede cambiar en la activación de intensidad (alarmado/estonizado) a la desactivación (fatigiado/cansado); y puede cambiar de agradable (feliz/contento) a desagradable (distraido/triste). Estar en un estado de ánimo desactivado y desagradable no necesariamente califica como \"depresión\". Sin embargo, la depresión puede estar presente cuando usted permanece atascado en este estado desactivado decaido desagradable. Alguien que lucha con la depresión se atasca no sólo por unos minutos o una hora o dos, sino que se queda atascado en este estado de ánimo casi todos los días, durante semanas a la vez, siendo incapaz de sacudirla, y de regresar a la gama usual de emociones humanas, creando así problemas en las relaciones personales, y de la escuela y/o el trabajo.",
            "Además de la tristeza persistente, algunos síntomas y señales de la depresión incluyen: sentirse inútil, sin esperanza o con culpa excesiva siendo irritable, la pérdida de interés o placer, retiro de actividades, personas, y la soledad resultante cambia en el apetito y la falta de peso del sueño o el sueño excesivo y la fatiga sienten dificultades lentas o letárgicas para concentrarse o tomar decisiones llorando fácilmente o sentir como llorar. Los síntomas más agudos a observar incluyen pensamientos de suicidio y/o pérdida de contacto con la realidad, como escuchar voces o tener pensamientos extraños (ilusiones). Se necesita un profesional de salud mental calificado para diagnosticar formalmente la depresión clínica, incluyendo la clarificación del tipo de depresión que está experimentando.",
        ],
        moreFaqsButton: "Más Preguntas",

        readyToBeginTitle: "¿Listo para Emprender Tu Camino Hacia la Recuperación?",
        readyToBeginDescription: "Descubre el poder transformador de la terapia EMDR con Bonanza. Programa tu consulta gratuita de 15 minutos y comienza tu recorrido hacia la sanación y el renacer.",
        bookFreeConsultationButton: "Reserve su Consulta Gratuita",

        // #####################################################################################################
        // ABOUT PAGE
        aboutBonanzaTitle: "¿Qué es Bonanza?",
        aboutBonanzaDescription: "Bonanza es una empresa de asesoramiento especializada en terapia EMDR. Nuestra misión es promover el bienestar mental y promover la importancia de la salud mental. Nos esforzamos por proporcionar recursos accesibles y amplios, apoyo y educación a individuos, familias y comunidades. Mediante la colaboración, la innovación y la compasión, nos proponemos romper los estigmas, aumentar la concienciación e inspirar cambios positivos en el campo de la salud mental. Juntos, podemos crear una sociedad que abrace y nutra el bienestar mental de sus miembros, fomentando la resiliencia, la felicidad y el sentido de pertenencia.",
        founderTitle: "La Fundadora",
        founderName: "Giannina Fuentes",
        founderQualification: "Licenciada Trabajadora Social de Clínica (LCSW)",
        founderDescription: "Giannina Fuentes se destaca como una profesional de la salud mental dedicada a la salud mental, posee una licenciatura en Psicología y una maestría en Trabajo Social de la prestigiosa Universidad de Utah.",
        founderExperience1: "Con una rica tapicería de experiencia:",
        founderExperience2: "Ha servido a una clientela diversa que va desde niños hasta adultos, ayudándoles a navegar una miríada de desafíos personales y familiares.",
        founderExperience3: "Sus áreas de experiencia abarcan traumas infantiles y adultos, violencia doméstica, ansiedad, depresión, estrés y problemas de relación.",
        founderExperience4: "Más allá de sus funciones de terapia primaria, Giannina ha demostrado su dedicación al bienestar de los niños y las familias a través de su extensa labor como trabajadora del bienestar infantil para la División de Servicios Infantiles y Familiares.",
        founderExperience5: "Ha prestado un apoyo inestimable a las personas con autismo, TDA/H y otras discapacidades, subrayando su compromiso con la atención inclusiva.",
        founderExperience6: "Cabe destacar que Giannina está certificada con TF-CBT y EMDR, subrayando su competencia en la realización de intervenciones terapéuticas repercusionales.",
        // advancedTrainingTitle above
        trainingDetails1: "Desensibilización y Reprocesamiento por Movimiento Ocular (EMDR) para Trauma Complejo.",
        trainingDetails2: "EMDR y estrategias prácticas para los problemas de apego y disociación en niños y adolescentes.",
        trainingDetails3: "EMDR para el dolor y el duelo",
        trainingDetails4: "Terapia Cognitiva de Conducta (TCC)",
        trainingDetails5: "Comportamental Terapia Cognitivamente-Centrada en el Trauma",
        trainingDetails6: "Reducción del Estrés Basado en la Sensibilidad",
        trainingDetails7: "Cabe destacar que Giannina está certificada con TF-CBT y EMDR, subrayando su competencia en la realización de intervenciones terapéuticas repercusionales.",
        trainingDetails8: "Giannina tiene registro en Utah Social Work Association (UTAHSWA), EMDR Certification en EMDR Institute, Inc., AmeriCorps y PSI CHI, la Sociedad Internacional de Honor en Psicología.",
        educationTitle: "Educación",
        educationDetails: "Giannina obtuvo una Maestría en Trabajo Social de la Universidad de Utah. Fue nominada al Estudiante Mejor del Año mientras maldijo su primer año de graduación. Obtuvo una licenciatura en Psicología de la Universidad de Utah en 2010. Como parte de su formación escolar de graduación, Giannina se centra en proporcionar compromiso comunitario y apoyo psicosocial a los niños y jóvenes vulnerables.",
        academicAwardsTitle: "Premios Académicos",
        academicAwardsDetails1: "Salt Lake Community College, Premio al Honor Presidencial por Logro Sobresaliente con GPA de 4.0 en 2005",
        academicAwardsDetails2: "Salt Lake Community College, Premio de Honor de Dean por Logro Sobresaliente con GPA de 3.9 en 2006",
        academicAwardsDetails3: "Salt Lake Community College, Pillar of Excellence Award por su excelente desempeño y dedicación al más alto nivel de excelencia en 2007",
        academicAwardsDetails4: "Salt Lake Community College, Pillar of Excellence Award por su excelente desempeño y dedicación al más alto nivel de excelencia en 2008",
        academicAwardsDetails5: "Salt Lake Community College, Pillar of Excellence Award por su excelente desempeño y dedicación al más alto nivel de excelencia en 2009",
        academicAwardsDetails6: "University of Utah, Certificado de Nomominación por Sobresaliente de Primer Año de M.S.W. Premio Estudiante del Año en 2016",
        certificationAwardsTitle: "Premios de Certificación",
        certificationAwardsDetails1: "Crianza con amor y lógica en Davis Behavioral Health en 2016",
        certificationAwardsDetails2: "Premio Platinum Star por contribuciones valiosas al equipo DCFS FIAT en 2015",
        certificationAwardsDetails3: "Premio Gold Star por contribuciones valiosas al equipo de DCFS FIAT en 2014",

        // #######################################################################################################
        // SERVICE PAGE
        canHelpWith: "Puede ayudar con",
        detailsTitle: "Detalles",
        services: [
            {
                "id": 1,
                "title": "EMDR",
                "subtitle": "Desensibilización y Reprocesamiento por Movimiento Ocular",
                "helpsWith": ["Trauma", "TEPT", "Ansiedad", "Trastornos de Pánico", "Depresión", "Adicciones"],
                "details": [
                    "El EMDR es un tratamiento de psicoterapia efectivo y ampliamente probado por la investigación que apoya a individuos que han experimentado eventos traumáticos u otras situaciones angustiantes, incluyendo depresión, ansiedad y TEPT.",
                    "Durante las sesiones de EMDR, los clientes pueden esperar ayudar al cerebro a reprocesar y resolver recuerdos traumáticos pendientes que siguen reapareciendo en formas de sensaciones, pensamientos y emociones. Los terapeutas de EMDR guían al individuo a través de ocho fases. EMDR comienza estableciendo bases de historia, creando seguridad en el cuerpo a través de recursos somáticos, y luego pasando a fases que prestan más atención a creencias e imágenes negativas, junto con emociones y sensaciones alrededor del cuerpo que están asociadas con los recuerdos traumáticos o no procesados."
                ],
                "image": ServiceA
            },
            {
                "id": 2,
                "title": "TCC",
                "subtitle": "Terapia Cognitivo Conductual",
                "helpsWith": ["Depresión", "Ansiedad", "Fobias", "TEPT", "Trastornos del Sueño", "TOC", "Trastornos del Uso de Sustancias"],
                "details": [
                    "La Terapia Cognitivo Conductual (TCC) es una forma de psicoterapia estructurada y a corto plazo que se centra en el presente del cliente. En este modelo de terapia, el clínico y el cliente trabajan en equipo para identificar los pensamientos y creencias disfuncionales y distorsionados del cliente, para desafiar y modificar esos pensamientos y actitudes.",
                    "Durante la TCC, el terapeuta identificará y desafiará los patrones de pensamiento negativos del cliente. El terapeuta también ayudará al cliente a comprender el impacto que esos pensamientos tienen en su comportamiento y sentimientos. Al hacer esto, el terapeuta y el cliente podrán generar pensamientos alternativos que lleven a sentimientos más positivos."
                ],
                "image": ServiceB
            },
            {
                "id": 3,
                "title": "TCC-TF",
                "subtitle": "Terapia Cognitivo Conductual enfocada en Trauma",
                "helpsWith": ["Trauma"],
                "details": [
                    "La TCC-TF es un enfoque de tratamiento basado en la evidencia para niños y adolescentes que han experimentado trauma. Se enfoca en comprender el impacto del trauma en el bienestar emocional y conductual de los niños, así como en las técnicas y estrategias específicas utilizadas para abordar los síntomas relacionados con el trauma.",
                    "La TCC-TF cubre varios componentes como la psicoeducación, técnicas de relajación, expresión afectiva y regulación, afrontamiento cognitivo, desarrollo de la narrativa del trauma y mejora de la seguridad y el desarrollo futuro. Los clientes aprenderán cómo adaptar estos componentes para satisfacer las necesidades únicas de cada niño o adolescente con el que trabajan, teniendo en cuenta factores culturales y consideraciones de desarrollo. Al final de la terapia, los clientes habrán ganado la confianza y competencia para implementar la TCC-TF de manera efectiva, promoviendo la curación y resiliencia en niños y adolescentes que han experimentado trauma."
                ],
                "image": ServiceC
            },
            {
                "id": 4,
                "title": "MBCT",
                "subtitle": "Terapia Cognitiva Basada en Mindfulness",
                "helpsWith": ["Depresión y Ansiedad", "Problemas Alimentarios", "Estado de Ánimo Bajo y Pensamientos Negativos", "Sensaciones Corporales como Dolor, Pánico y Condiciones Crónicas"],
                "details": [
                    "Los enfoques basados en mindfulness, como la Terapia Cognitiva Basada en Mindfulness o MBCT, están diseñados para personas que sufren de episodios repetidos de depresión o infelicidad crónica. Combina elementos de la terapia cognitiva con prácticas meditativas y actitudes basadas en el cultivo de la atención plena.",
                    "Investigaciones recientes han demostrado que las personas que han estado clínicamente deprimidas tres o más veces en su vida encuentran que aprender habilidades basadas en mindfulness ayuda a reducir considerablemente sus probabilidades de que la depresión regrese."
                ],
                "image": ServiceD
            },
            {
                "id": 5,
                "title": "Terapia de Juego",
                "subtitle": "",
                "helpsWith": ["Comunicación", "Regulación Emocional", "Autoestima", "Trauma", "Ansiedad", "Duelo", "Problemas de Comportamiento"],
                "details": [
                    "La terapia de juego es un enfoque terapéutico innovador y basado en la evidencia diseñado para apoyar el bienestar emocional, social y conductual de los niños. La terapia de juego ofrece un entorno seguro y acogedor para que los niños se expresen, procesen sus emociones y desarrollen mecanismos de afrontamiento saludables a través del juego. La terapia de juego abarca una variedad de técnicas terapéuticas, incluyendo artes expresivas, terapia de arena, títeres, narración de cuentos y juegos terapéuticos. Estas técnicas facilitan la comunicación, promueven la regulación emocional, mejoran la autoestima y fomentan la resiliencia en niños que enfrentan diversos desafíos como trauma, ansiedad, duelo y problemas de comportamiento."
                ],
                "image": ServiceE
            },
            {
                "id": 6,
                "title": "Terapia Humanista",
                "subtitle": "",
                "helpsWith": ["Autoconciencia", "Autoaceptación"],
                "details": [
                    "La terapia humanista es una exploración profunda del enfoque centrado en la persona para la curación psicológica. El proceso terapéutico enfatiza la importancia de crear un ambiente seguro y sin juicios que fomente la autoexploración y el crecimiento personal. El terapeuta utiliza diversas técnicas terapéuticas, como la escucha activa, la reflexión y las preguntas abiertas. También explora el uso de artes expresivas, mindfulness y otros enfoques experienciales para facilitar la autoconciencia y autoaceptación del cliente."
                ],
                "image": ServiceF
            },
            {
                "id": 7,
                "title": "Telesalud",
                "subtitle": "",
                "helpsWith": ["La mayoría de todo lo listado en los otros servicios, excepto la Terapia de Juego"],
                "details": [
                    "La telesalud nos permite brindar asesoramiento y terapia a nuestros clientes a través de videoconferencias en vivo. Esto se puede hacer desde cualquier lugar donde tenga una computadora o un teléfono inteligente.",
                    "Las citas de telesalud pueden ser muy beneficiosas si acudir a una cita en persona tradicional no es conveniente, o simplemente no lo desea.",
                    "Nuestra solución de telesalud le permite programar una cita directamente en línea y realizar toda la sesión de terapia de manera digital."
                ],
                "image": ServiceG
            },
            {
                "id": 8,
                "title": "Perro de Terapia Certificado",
                "subtitle": "",
                "helpsWith": ["Estrés", "Nota: Luna puede acompañarte en cualquiera de los servicios listados arriba."],
                "details": [
                    "Luna es una perra de terapia certificada cuya presencia brinda consuelo y alegría a quienes la rodean. Con su bella y suave naturaleza, Luna es una compañera dulce y tierna que tiene un efecto calmante en todos los que conoce. Le encanta acurrucarse en tu regazo y ser acariciada, proporcionando una experiencia relajante. El corazón de Luna está lleno de amor y compasión, lo que la convierte en la amiga peluda perfecta para alegrar tu día."
                ],
                "image": ServiceH
            },
        ],

        // #######################################################################################################
        // CONTACT PAGE
        alertMessage1: "Por favor escriba un correo electrónico válido.",
        alertMessage2: "Por favor escriba su nombre.",
        alertMessage3: "Por favor, seleccione un tema.",
        alertMessage4: "Por favor escriba un mensaje.",
        modalSuccess: "El mensaje fue enviado.",
        modalFailure: "No se ha enviado su mensaje. Por favor, inténtelo de nuevo.",
        modalError: "No se ha enviado su mensaje. Por favor actualice la página y vuelva a intentarlo.",

        contactTitle: "¡Estoy disponible! Hablemos",
        contactSubtitle: "Contactate conmigo y te responderé en 3 días.",
        contactFormLegend: "Formulario de Contacto",
        nameFieldPlaceholder: "¿Cuál es tu nombre?",
        emailFieldPlaceholder: "¿Tu correo electrónico?",
        subjectFieldDefaultOption: "¿De qué se trata?",
        subjectFieldOption1: "Pregunta General",
        subjectFieldOption2: "Seguro",
        subjectFieldOption3: "Pagos Personalizados",
        subjectFieldOption4: "Otro",
        messageFieldPlaceholder: "Siéntete libre de enviarme cualquier pregunta o pensamiento.",
        submitButtonDefault: "Enviar",
        submitButtonLoading: "Enviando...",

        // #######################################################################################################
        // FAQ PAGE
        faqPageTitle: "Encuentre respuestas a tus preguntas aquí",
        faqPageSubtitle: "Este es el lugar donde usted puede encontrar las preguntas más comunes contestadas rápidamente, si por alguna razón su pregunta no está aquí, no dude en ponerse en contacto con nosotros.",
        faqs: [
            {
                question: "¿Cómo reservo mi primera sesión?",
                answer: "¡NO ES COMPLICADO! Queremos hacerlo lo más fácil posible para usted. Puede llamar o enviar un correo electrónico en cualquier momento. Sin embargo, la mejor manera de comenzar es hacer clic en el botón Reserve su Cita para completar y enviar el formulario. El correo electrónico ciertamente funciona, pero si incluye su número de teléfono en el formulario, es más fácil responder todas sus preguntas y reservar su primera sesión. No se requiere derivación de un médico o especialista."
            },
            {
                question: "¿Qué es la Ansiedad?",
                answer: "La mayoría de las personas experimentan ansiedad en algún grado en algún momento de sus vidas. De hecho, la ansiedad está dentro del rango normal de emociones humanas. Por ejemplo, preocuparse por llegar tarde al autobús no es un problema. ¡Eso es normal y de hecho es útil! Lo que hace problemática a la ansiedad es su severidad, y cuán persistente o invasiva es. Para ayudar a determinar si su ansiedad es un problema a resolver, considere su respuesta a las siguientes preguntas."
            },
            {
                question: "Preguntas sobre la Ansiedad para hacerte a ti mismo",
                answer: "¿Tu ansiedad: Te impide constantemente realizar tareas normales del día a día? A menudo te impide obtener una buena noche de sueño? Te roba la capacidad de concentrarte, relajarte o disfrutar del momento? Inhibe o paraliza tu funcionamiento en relaciones importantes? Te impide alcanzar tus metas? Si respondiste sí a una o más de las anteriores, entonces podrías beneficiarte de al menos una conversación inicial con alguien capacitado para reconocer y tratar tu ansiedad."
            },
            {
                question: "¿Qué es exactamente la ansiedad?",
                answer: "Me alegra que lo preguntes. He pasado años estudiando y tratando a personas que luchan con la ansiedad. En resumen, la ansiedad es una respuesta emocional a una amenaza percibida. El miedo, en contraste, es la respuesta emocional a una amenaza real. Los pensamientos y respuestas ansiosos están enfocados en el futuro: \"¿Y si repruebo este examen?\" \"¿Y si tengo otro ataque de pánico hoy?\" \"¿Y si parezco estúpido?\" \"¿Y si mi madre tiene un accidente automovilístico?\" La respuesta ansiosa a estos pensamientos, ya sea que seamos conscientes de esa respuesta o no, es algo así como \"No podría manejarlo\". Lo que da lugar a la amenaza percibida. La ansiedad que uno siente es la respuesta emocional a esa amenaza."
            },
            {
                question: "¿Qué es exactamente la ansiedad? continuación",
                answer: "A niveles moderados o severos, la ansiedad puede manifestarse como cualquiera de los siguientes o una combinación de estos: Preocupación crónica, Tensión física, Ataques de pánico, o Patrones obsesivo-compulsivos.Los pensamientos ansiosos pueden manifestarse en cualquier número de temas diferentes en diferentes personas, como preocuparse por su salud o enfermarse, cómo uno es percibido por los demás, tener otro ataque de pánico o que le ocurra un daño a uno mismo o a un ser querido si no se completa una compulsión. La ansiedad puede resultar en dificultades de concentración, baja energía, cambios en el apetito y sueño deficiente. Puede resultar en un comportamiento evitativo, es decir, evitar situaciones que desencadenan la respuesta ansiosa; o en comportamientos de seguridad, un comportamiento que a corto plazo calma la ansiedad pero a largo plazo solo la mantiene. Cuando la ansiedad está impactando negativamente en su trabajo, relaciones o calidad de vida personal, se ha vuelto problemática.Soy un terapeuta experimentado con experiencia en el tratamiento de diferentes tipos de ansiedad. Por favor, contácteme para hacer una pregunta sobre la ansiedad o para reservar una consulta."
            },
            {
                question: "¿Qué es la Depresión?",
                answer: "Todos nos hemos sentido tristes o deprimidos y hemos dicho algo como \"¡Me siento deprimido!\" ¿Significa eso que estás clínicamente deprimido? Es normal sentirse triste o bajo, a veces. Sentirse deprimido está dentro del rango normal de emociones humanas. Durante el transcurso de un día, tu estado de ánimo puede cambiar en intensidad de activación (alarmado/asombrado) a desactivación (fatigado/cansado); y puede cambiar de agradable (feliz/contento) a desagradable (angustiado/triste). Estar en un estado de ánimo desactivado y desagradable no necesariamente califica como \"depresión\". Sin embargo, la depresión puede estar presente cuando te quedas atrapado en este estado de ánimo bajo desactivado desagradable. Alguien que lucha con la depresión está atrapado no solo por unos minutos o una o dos horas, sino que está atrapado en este estado de ánimo durante la mayor parte del día casi todos los días, durante semanas, sin poder salir de él, y sin poder volver a la gama habitual de emociones humanas, y así creando problemas en relaciones, escuela y/o trabajo."
            },
            {
                question: "¿Cuáles son los síntomas y signos de la depresión?",
                answer: "Además de la tristeza persistente, algunos síntomas y signos de la depresión incluyen: Sentirse inútil, desesperanzado o con culpa excesiva Irritabilidad Pérdida de interés o placer/retiro de actividades/personas, y soledad resultante Cambios en el apetito y el peso Falta de sueño o sueño excesivo y fatiga Sentirse lento o letárgico Dificultad para concentrarse o tomar decisiones Llorar fácilmente o sentir ganas de llorar Síntomas más agudos a tener en cuenta incluyen pensamientos de suicidio y/o pérdida de contacto con la realidad, como escuchar voces o tener pensamientos extraños (delirios).Se necesita un profesional de la salud mental calificado para diagnosticar formalmente la depresión clínica, incluida la clarificación del tipo de depresión que se está experimentando."
            },
            {
                question: "¿Cuáles son los tipos comunes de depresión?",
                answer: "Los trastornos depresivos, también conocidos como trastornos del estado de ánimo, se describen o diagnostican comúnmente como: Trastorno Depresivo Mayor Trastorno Bipolar (a veces referido como depresión maníaca) Depresión Postparto Trastorno Afectivo Estacional (o depresión estacional) Distimia (una depresión de bajo grado persistente durante años) Trastorno de Ajuste con Estado de Ánimo Depresivo (los síntomas depresivos pueden ser una reacción más pronunciada a un estresor externo)"
            },
            {
                question: "¿La depresión está asociada con deterioro?",
                answer: "Lamentablemente, la depresión persistente puede afectar negativamente su trabajo y/o escuela, sus relaciones y la búsqueda de sus metas de vida, y le roba su capacidad de disfrutar la vida. Prácticamente, debería buscar ayuda si está atrapado en este lugar y le impide hacer las cosas que desea hacer en su vida."
            },
            {
                question: "¿Cuáles son las causas de la depresión?",
                answer: "No hay una respuesta simple a esta pregunta. Puedes escuchar a personas decir que la depresión es causada por un \"desequilibrio químico\" en el cerebro. Sin embargo, esta es una respuesta insuficiente al considerar las posibles causas. Generalmente no hay una sola causa clara y hay muchas causas sospechadas. Estas se conocen como factores de riesgo. Los siguientes factores se cree que juegan un papel en la depresión: " +
                    "Causas genéticas/biológicas (¿se da en la familia?), " +
                    "Personalidad (tu \"estilo\" de interactuar con el mundo que te rodea), " +
                    "Eventos estresantes en la vida (por ejemplo, abuso en la infancia o trauma adulto, pérdida de trabajo, fin de una relación cercana, muerte de un ser querido - no solo duelo), " +
                    "Condiciones médicas (por ejemplo, diabetes, problemas de tiroides, dolor crónico, problemas de peso, problemas cardíacos y otros), " +
                    "Estos son factores de riesgo comunes para la depresión. Aun conociendo estos factores de riesgo, es difícil saber cuál causa cuál. Por ejemplo, ¿el dolor causa depresión, o la depresión causa dolor? ¿O simplemente se exacerban mutuamente, y hay una tercera \"causa\" subyacente? Sorprendentemente, hay muchas personas con estos factores de riesgo que no sufren de depresión. Y para aquellos que sí luchan con la depresión, es un desafío identificar el factor causal. " +
                    "La buena noticia es que, independientemente de la causa, existen opciones de tratamiento efectivas para la depresión."
            },
            {
                question: "¿Cuáles son los factores protectores?",
                answer: "Algunas personas tienen menos probabilidades de luchar contra la depresión que otras. No sabemos exactamente por qué. Sin embargo, la investigación ha identificado varios factores protectores. Los siguientes son algunos de los factores asociados con menos depresión: " +
                    "Una dieta saludable, reducción del alcohol y ejercicio aeróbico regular, " +
                    "Habilidades de afrontamiento y toma de decisiones, " +
                    "Apoyo social de familiares y amigos, " +
                    "Autoestima y resiliencia (capacidad para adaptarse a circunstancias estresantes), " +
                    "Orientación existencial/espiritual (adherencia a valores, sentido del propósito, orientación hacia el futuro), " +
                    "Estos factores protectores están asociados con hábitos diarios, estilo de vida y perspectiva. Centrarse en estos factores puede llevar a pasos prácticos que puedes tomar para reducir tu riesgo de depresión."
            },
            {
                question: "¿Cómo se trata la depresión?",
                answer: "Puedes preguntar, ¿cómo curar la depresión? Aquí están los dos enfoques más comunes para tratar la depresión:" +
                    "Psicoterapia (también llamada terapia de conversación) – Hay más de 50 tipos de psicoterapia o enfoques de terapia. Estos tipos pueden agruparse en cuatro áreas principales: 1: Terapias psicodinámicas, 2: Terapias centradas en el cliente (humanísticas), 3: Terapias cognitivo-conductuales y 4: Enfoques integrales/holísticos. Un terapeuta efectivo utilizará un enfoque terapéutico que tenga apoyo empírico (respaldado por investigación científica). Un terapeuta puede utilizar más de un enfoque particular y a menudo adapta el tipo de tratamiento al tipo de problema presentado y al enfoque más efectivo para un cliente en particular. " +
                    "Medicación antidepresiva – necesita ser prescrita por un psiquiatra o por un médico general (médico de familia) con conocimientos/experiencia en prescribir psicotrópicos. " +
                    "Este es un resumen muy breve y no es una lista exhaustiva. Por supuesto, en Bonanza Counseling Services, nos enfocamos en proporcionar psicoterapia efectiva."
            },
        ],

        // FOOTER
        footerPrivacyPolicy: "POLÍTICA DE PRIVACIDAD",
        footerDesignedBy: "DISEÑADO POR JAIME MENDIETA",
    }
}