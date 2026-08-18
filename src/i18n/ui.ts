export const languages = {
  es: 'Español',
  en: 'English',
} as const;

export const defaultLang = 'es';

export type Lang = keyof typeof languages;

export const ui = {
  es: {
    'meta.title': 'Axioma Digital — Webs y herramientas de IA para negocios',
    'meta.description':
      'Construimos webs y herramientas de IA para que tu empresa exista, funcione y opere efectivamente.',

    'nav.services': 'Servicios',
    'nav.projects': 'Proyectos',
    'nav.process': 'Proceso',
    'nav.contact': 'Contacto',
    'nav.cta': 'Hablemos',

    'hero.eyebrow': 'Web · IA aplicada · Automatización',
    'hero.title.a': 'Tu empresa, como',
    'hero.title.b': 'debe ser',
    'hero.sub':
      'Construimos webs y herramientas de IA para que exista, funcione y opere efectivamente — en un mundo donde no tenerlo ya es quedarse atrás.',
    'hero.cta.primary': 'Habla con nuestro asistente',
    'hero.cta.secondary': 'Ver proyectos',
    'hero.demo.label': 'Asistente en vivo · 24/7',
    'hero.demo.msg1': 'Hola, necesito una web para mi empresa. ¿Por dónde empiezo?',
    'hero.demo.msg2': 'Por entender tu negocio. ¿A qué se dedica y qué necesita resolver?',
    'hero.proof.label': 'Algunos de nuestros proyectos',

    'pains.eyebrow': '¿Te suena esto?',
    'pains.title': 'Los tres motivos por los que nos escriben.',
    'pains.1': 'No tenemos web, o la que tenemos da vergüenza mostrar.',
    'pains.2': 'Solo estamos en redes, pero nuestros clientes nos buscan en Google.',
    'pains.3': 'Hacemos tareas a mano que podrían hacerse solas.',

    'services.eyebrow': 'Qué hacemos',
    'services.title': 'Tres formas de resolverlo.',
    'services.1.name': 'Presencia digital',
    'services.1.desc':
      'Sin web o con una que da vergüenza, no existes para Google. Te construimos una presencia completa: web profesional, dominio y correo corporativo. Tu empresa, visible y seria desde el primer día.',
    'services.1.tags': 'Web|Dominio|Correo corporativo',
    'services.2.name': 'Asistente inteligente',
    'services.2.badge': 'En vivo arriba',
    'services.2.desc':
      'Tu negocio no puede atender clientes a toda hora — el nuestro sí. Un chatbot que responde, cualifica y te avisa en tiempo real, aunque estés durmiendo.',
    'services.2.tags': 'Telegram|Cualifica leads|Aviso en tiempo real',
    'services.3.name': 'Herramienta a medida',
    'services.3.desc':
      'Cada negocio tiene un proceso que hace a mano y podría hacer solo. Te construimos la herramienta exacta que necesitas — calculadora, cotizador, app interna.',
    'services.3.tags': 'Calculadoras|Cotizadores|Apps internas',
    'services.footnote': '¿Necesitas algo que no ves aquí? Nos encantan los retos —',
    'services.footnote.link': 'cuéntanos',

    'cases.eyebrow': 'Proyectos',
    'cases.title': 'Todo lo que ves aquí está en producción.',
    'cases.sub': 'Puedes abrirlo y probarlo ahora mismo. No hay maquetas ni capturas.',
    'cases.label.problem': 'Problema',
    'cases.label.solution': 'Solución',
    'cases.label.tech': 'Tecnología',
    'cases.label.result': 'Resultado',

    'cases.1.problem': 'Emprendedores sin claridad sobre sus márgenes y punto de equilibrio.',
    'cases.1.solution': 'Suite de calculadoras financieras online.',
    'cases.1.tech': 'PWA multi-moneda, ES/EN, generación de PDF.',
    'cases.1.result': '10 herramientas en producción, planes gratis y Pro.',
    'cases.1.quote':
      'Muy cómodo para resolver tareas desde el teléfono — ideal para la dinámica de mi negocio.',

    'cases.2.problem': 'Una empresa de comercio internacional sin presencia web.',
    'cases.2.solution': 'Web corporativa multiidioma con identidad propia.',
    'cases.2.tech': 'Multiidioma ES/EN/RU, paleta de marca, CDN global.',
    'cases.2.result': 'Sitio operativo y en uso comercial.',
    'cases.2.quote':
      'Con esto damos un paso más hacia una empresa profesional, al día y actualizada. Muy satisfecho.',

    'cases.3.problem': 'Negocios que pierden leads fuera del horario de atención.',
    'cases.3.solution': 'Bot que responde, cualifica y avisa en tiempo real.',
    'cases.3.tech': 'Telegram, IA generativa, desplegado 24/7.',
    'cases.3.result': 'En producción, atendiendo sin interrupciones.',
    'cases.3.cta': 'Pruébalo ahora',

    'testimonials.eyebrow': 'Lo que dicen',
    'testimonials.title': 'No lo decimos nosotros, lo dicen ellos.',
    'process.eyebrow': 'Cómo trabajamos',
    'process.title': 'Cuatro pasos, sin sorpresas.',
    'process.1.name': 'Diagnóstico',
    'process.1.desc': 'Entendemos tu negocio y lo que necesitas antes de empezar.',
    'process.2.name': 'Propuesta',
    'process.2.desc': 'Una solución clara, con alcance y plazo definidos.',
    'process.3.name': 'Construcción',
    'process.3.desc': 'Desarrollamos y te mantenemos al tanto del avance.',
    'process.4.name': 'Entrega',
    'process.4.desc': 'Lanzamos, probamos y te dejamos operando.',

    'faq.eyebrow': 'Preguntas frecuentes',
    'faq.title': 'Lo que todos preguntan antes de decidir.',

    'contact.eyebrow': 'Empecemos',
    'contact.title': 'Hablemos de tu negocio.',
    'contact.sub':
      'Escríbenos por Telegram y nuestro asistente te atiende ahora mismo, o déjanos tus datos y te contactamos en menos de 24 horas.',
    'contact.telegram': 'Habla con nuestro asistente',
    'contact.form.label': 'O déjanos tus datos',
    'contact.form.name': 'Nombre',
    'contact.form.name.ph': 'Tu nombre',
    'contact.form.email': 'Correo',
    'contact.form.email.ph': 'nombre@empresa.com',
    'contact.form.phone': 'Teléfono',
    'contact.form.phone.ph': '+1 000 000 0000',
    'contact.form.service': 'Qué necesitas',
    'contact.form.service.1': 'Presencia digital',
    'contact.form.service.2': 'Asistente inteligente',
    'contact.form.service.3': 'Herramienta a medida',
    'contact.form.service.4': 'Otro',
    'contact.form.submit': 'Enviar',
    'contact.form.sending': 'Enviando…',
    'contact.form.privacy': 'Tus datos llegan directo a nuestro correo. No los compartimos con nadie.',
    'contact.form.success': 'Recibido. Te contactamos en menos de 24 horas.',
    'contact.form.error': 'No se pudo enviar. Escríbenos por Telegram y lo resolvemos.',

    'footer.tagline': 'Webs y herramientas de IA para negocios que quieren operar efectivamente.',
    'footer.services': 'Servicios',
    'footer.projects': 'Proyectos',
    'footer.contact': 'Contacto',
    'footer.rights': 'Todos los derechos reservados.',
  },

  en: {
    'meta.title': 'Axioma Digital — Websites and AI tools for businesses',
    'meta.description':
      'We build websites and AI tools so your business exists, runs, and operates effectively.',

    'nav.services': 'Services',
    'nav.projects': 'Projects',
    'nav.process': 'Process',
    'nav.contact': 'Contact',
    'nav.cta': "Let's talk",

    'hero.eyebrow': 'Web · Applied AI · Automation',
    'hero.title.a': 'Your business, as it',
    'hero.title.b': 'should be',
    'hero.sub':
      'We build websites and AI tools so it exists, runs, and operates effectively — in a world where not having them means falling behind.',
    'hero.cta.primary': 'Talk to our assistant',
    'hero.cta.secondary': 'See our work',
    'hero.demo.label': 'Live assistant · 24/7',
    'hero.demo.msg1': 'Hi, I need a website for my company. Where do I start?',
    'hero.demo.msg2': 'By understanding your business. What do you do, and what needs solving?',
    'hero.proof.label': 'A few of our projects',

    'pains.eyebrow': 'Sound familiar?',
    'pains.title': 'The three reasons people reach out.',
    'pains.1': "We have no website — or one we'd rather not show anyone.",
    'pains.2': "We're only on social media, but our customers search on Google.",
    'pains.3': 'We do things by hand that could run on their own.',

    'services.eyebrow': 'What we do',
    'services.title': 'Three ways to fix it.',
    'services.1.name': 'Digital presence',
    'services.1.desc':
      "Without a website — or with one you'd rather hide — you don't exist to Google. We build the whole thing: a professional site, your domain, and corporate email. Your company, visible and credible from day one.",
    'services.1.tags': 'Website|Domain|Corporate email',
    'services.2.name': 'Intelligent assistant',
    'services.2.badge': 'Live above',
    'services.2.desc':
      "Your business can't answer customers around the clock — ours can. A chatbot that replies, qualifies, and alerts you in real time, even while you sleep.",
    'services.2.tags': 'Telegram|Lead qualifying|Real-time alerts',
    'services.3.name': 'Custom tool',
    'services.3.desc':
      'Every business has a process it does by hand that could run itself. We build the exact tool you need — calculator, quoting engine, internal app.',
    'services.3.tags': 'Calculators|Quoting engines|Internal apps',
    'services.footnote': "Need something you don't see here? We love a challenge —",
    'services.footnote.link': 'tell us about it',

    'cases.eyebrow': 'Projects',
    'cases.title': 'Everything here is live.',
    'cases.sub': 'Open it and try it right now. No mockups, no screenshots.',
    'cases.label.problem': 'Problem',
    'cases.label.solution': 'Solution',
    'cases.label.tech': 'Technology',
    'cases.label.result': 'Result',

    'cases.1.problem': 'Founders with no clear view of their margins or break-even point.',
    'cases.1.solution': 'A suite of online financial calculators.',
    'cases.1.tech': 'Multi-currency PWA, ES/EN, PDF export.',
    'cases.1.result': '10 tools live, with free and Pro plans.',
    'cases.1.quote':
      'Very convenient for sorting things out from my phone — ideal for how my business runs.',

    'cases.2.problem': 'An international trading company with no web presence.',
    'cases.2.solution': 'A multilingual corporate site with its own identity.',
    'cases.2.tech': 'ES/EN/RU, custom brand palette, global CDN.',
    'cases.2.result': 'Live and in commercial use.',
    'cases.2.quote':
      "This takes us a step closer to being a professional company that's current and up to date. Very happy with it.",

    'cases.3.problem': 'Businesses losing leads outside working hours.',
    'cases.3.solution': 'A bot that replies, qualifies, and alerts in real time.',
    'cases.3.tech': 'Telegram, generative AI, deployed 24/7.',
    'cases.3.result': 'Live and answering without interruption.',
    'cases.3.cta': 'Try it now',

    'testimonials.eyebrow': 'What they say',
    'testimonials.title': "Don't take our word for it.",
    'process.eyebrow': 'How we work',
    'process.title': 'Four steps, no surprises.',
    'process.1.name': 'Diagnosis',
    'process.1.desc': 'We understand your business and what you need before we start.',
    'process.2.name': 'Proposal',
    'process.2.desc': 'A clear solution, with scope and timeline defined.',
    'process.3.name': 'Build',
    'process.3.desc': 'We develop it and keep you posted as it progresses.',
    'process.4.name': 'Delivery',
    'process.4.desc': 'We launch, test, and leave you up and running.',

    'faq.eyebrow': 'Frequently asked',
    'faq.title': 'What everyone asks before deciding.',

    'contact.eyebrow': 'Get started',
    'contact.title': "Let's talk about your business.",
    'contact.sub':
      'Message us on Telegram and our assistant answers right away, or leave your details and we get back to you within 24 hours.',
    'contact.telegram': 'Talk to our assistant',
    'contact.form.label': 'Or leave your details',
    'contact.form.name': 'Name',
    'contact.form.name.ph': 'Your name',
    'contact.form.email': 'Email',
    'contact.form.email.ph': 'name@company.com',
    'contact.form.phone': 'Phone',
    'contact.form.phone.ph': '+1 000 000 0000',
    'contact.form.service': 'What you need',
    'contact.form.service.1': 'Digital presence',
    'contact.form.service.2': 'Intelligent assistant',
    'contact.form.service.3': 'Custom tool',
    'contact.form.service.4': 'Something else',
    'contact.form.submit': 'Send',
    'contact.form.sending': 'Sending…',
    'contact.form.privacy': 'Your details go straight to our inbox. We never share them.',
    'contact.form.success': 'Got it. We will be in touch within 24 hours.',
    'contact.form.error': "Couldn't send that. Message us on Telegram and we'll sort it out.",

    'footer.tagline': 'Websites and AI tools for businesses that want to operate effectively.',
    'footer.services': 'Services',
    'footer.projects': 'Projects',
    'footer.contact': 'Contact',
    'footer.rights': 'All rights reserved.',
  },
} as const;

export const faq = {
  es: [
    {
      q: '¿Cuánto tarda en estar lista mi web?',
      a: 'Una web de presencia corporativa la entregamos en aproximadamente 2 semanas desde que tenemos todo lo que necesitamos de tu parte. El plazo también depende de la complejidad del proyecto y de los tiempos de feedback — mientras más ágil sea la comunicación, más rápido avanzamos. Para herramientas más complejas o aplicaciones a medida, lo definimos juntos antes de empezar, sin sorpresas.',
    },
    {
      q: '¿El sitio queda en mis manos o dependo de ustedes?',
      a: 'El sitio es tuyo al 100 %. Dominio, hosting y todo el contenido quedan bajo tu control desde el primer día. No dependes de nosotros para nada.',
    },
    {
      q: '¿Puedo actualizar el contenido yo mismo después?',
      a: 'Sí. Te entregamos el sitio listo para que puedas manejarlo sin depender de nosotros. Y si en algún momento necesitas ayuda, estamos disponibles.',
    },
    {
      q: '¿Qué pasa si no me gusta el resultado?',
      a: 'Trabajamos en etapas con tu feedback incluido en el proceso, por eso el resultado final no es una sorpresa. Si algo no te convence durante el desarrollo, lo ajustamos antes de cerrar.',
    },
    {
      q: '¿Trabajan con clientes en cualquier país?',
      a: 'Sí, trabajamos 100 % en remoto con clientes en cualquier parte del mundo. La distancia no es un obstáculo.',
    },
    {
      q: '¿Cómo se paga desde otro país?',
      a: 'Aceptamos múltiples métodos de pago internacional para adaptarnos a cada cliente — transferencias bancarias, plataformas digitales y otras opciones según tu país. Lo coordinamos sin complicaciones.',
    },
    {
      q: '¿Necesito saber de tecnología para trabajar con ustedes?',
      a: 'Para nada. Nuestro trabajo es traducir tus necesidades de negocio en soluciones digitales. Tú nos dices qué necesitas, nosotros nos encargamos del resto.',
    },
    {
      q: '¿Ofrecen soporte después de la entrega?',
      a: 'Sí. Una vez entregado el proyecto no desaparecemos. Ofrecemos soporte para dudas, ajustes y cualquier imprevisto que surja después del lanzamiento.',
    },
    {
      q: '¿El chatbot funciona las 24 horas?',
      a: 'Sí. El asistente trabaja de forma autónoma las 24 horas, los 7 días de la semana. Responde, cualifica y te avisa en tiempo real, sin importar la hora.',
    },
    {
      q: '¿Pueden hacer una herramienta que necesito y no veo en sus servicios?',
      a: 'Muy probablemente sí. Cuéntanos qué necesitas y lo evaluamos. Nos especializamos en construir soluciones a medida y nos encantan los retos.',
    },
  ],
  en: [
    {
      q: 'How long until my website is ready?',
      a: 'A corporate presence site takes roughly 2 weeks from the moment we have everything we need from you. The timeline also depends on how complex the project is and how quickly feedback comes back — the faster we hear from you, the faster we move. For more complex tools or custom applications, we agree the timeline together before starting. No surprises.',
    },
    {
      q: 'Is the site mine, or am I tied to you?',
      a: "The site is 100 % yours. Domain, hosting, and all content stay under your control from day one. You don't depend on us for anything.",
    },
    {
      q: 'Can I update the content myself afterwards?',
      a: "Yes. We hand the site over ready for you to manage without us. And if you ever need a hand, we're here.",
    },
    {
      q: "What if I don't like the result?",
      a: "We work in stages with your feedback built into the process, so the final result is never a surprise. If something isn't working for you during the build, we adjust it before we close.",
    },
    {
      q: 'Do you work with clients in any country?',
      a: "Yes, we work 100 % remotely with clients anywhere in the world. Distance isn't an obstacle.",
    },
    {
      q: 'How do international payments work?',
      a: 'We accept a range of international payment methods to suit each client — bank transfers, digital platforms, and other options depending on your country. We sort it out without complications.',
    },
    {
      q: 'Do I need to be technical to work with you?',
      a: 'Not at all. Our job is to translate your business needs into digital solutions. You tell us what you need; we handle the rest.',
    },
    {
      q: 'Do you offer support after delivery?',
      a: "Yes. Once the project ships we don't disappear. We offer support for questions, adjustments, and anything unexpected after launch.",
    },
    {
      q: 'Does the chatbot run 24 hours a day?',
      a: 'Yes. The assistant runs on its own 24 hours a day, 7 days a week. It replies, qualifies, and alerts you in real time, whatever the hour.',
    },
    {
      q: "Can you build something I need that isn't in your services?",
      a: 'Very likely yes. Tell us what you need and we will look at it. Custom solutions are what we specialise in, and we love a challenge.',
    },
  ],
} as const;

export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)['es']): string {
    return (ui[lang] as Record<string, string>)[key] ?? (ui[defaultLang] as Record<string, string>)[key];
  };
}
