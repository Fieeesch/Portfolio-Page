export type Language = "de" | "en"
export type Localized = Record<Language, string>

export type PortfolioItem = {
  id: string
  kind: "project" | "publication"
  title: Localized
  eyebrow: Localized
  description: Localized
  /** Supported formats: YYYY, YYYY-MM, or YYYY-MM-DD */
  date: string
  images: { src: string, alt: Localized }[]
  tags: string[]
  link?: string
  demoLink?: string
  notes?: Localized
}

export type CvEntry = {
  period: string
  title: Localized
  place: Localized
  placeLink?: string
}

export const profile = {
  name: "Cecilia Halbritter",
  role: {
    de: "Informatikstudentin · Mensch-Computer-Interaktion & Extended Reality",
    en: "Computer Science Student · Human Computer Interaction & Extended Reality",
  },
  intro: {
    de: "Als Masterstudentin der Medieninformatik an der Hochschule RheinMain in Wiesbaden beschäftige ich mich mit der Schnittstelle zwischen Mensch und Maschine. Mich interessiert, wie sich Interaktion intuitiv und kreativ gestalten lässt – ganz unabhängig vom Medium. Deshalb reichen meine Projekte von klassischen Desktopanwendungen bis hin zu immersiven Virtual-Reality-Umgebungen.\n\nSchau dich gern selbst um.",
    en: "As a Master's student in Media Informatics at RheinMain University of Applied Sciences in Wiesbaden, I focus on the intersection between humans and machines. I'm interested in how interaction can be designed in intuitive and creative ways, regardless of the medium. That's why my projects range from classic desktop applications to immersive virtual reality environments.\n\nFeel free to look around.",
  },
  about: {
    de: "Ich bin Cecilia und studiere Medieninformatik (M.Sc.) an der Hochschule RheinMain in Wiesbaden. Nachdem ich im Bachelor die Grundlagen der Programmierung und Anwendungsentwicklung gelernt habe, beschäftige ich mich heute mit der Schnittstelle zwischen Mensch, Maschine und KI-Agenten. Mich interessiert, wie Produkte und Prototypen menschenzentriert designt, entwickelt und umgesetzt werden können. Dabei habe ich bereits mit den unterschiedlichsten Medien gearbeitet, vom Smartphone bis zur VR-Brille, und die jeweiligen Möglichkeiten und Herausforderungen kennengelernt.\n\nIn meiner Arbeit wissenschaftliche Mitarbeiterin an meiner Hochschule gehe ich über das studieren hinaus und forsche aktiv an Themen, die mich interessieren. Im Feld der Extended Reality arbeite ich an interaktiven Systemen, die die menschliche Wahrnehmung austricksen, erweitern oder beeinflussen. Auf Workshops und internationalen Konferenzen tausche ich mich mit anderen Forschenden aus und erweitere meinen Horizont.\n\nIn meiner Freizeit gehe ich gerne Schwimmen und tobe mich beim Handarbeiten kreativ aus.",
    en: "I’m Cecilia and I’m currently studying Media Informatics (M.Sc.) at RheinMain University of Applied Sciences in Wiesbaden. After learning the fundamentals of programming and application development during my bachelor’s degree, I now focus on the intersection between humans, machines, and AI agents. I’m interested in how products and prototypes can be designed, developed, and implemented with a human-centered approach. Along the way, I’ve worked with a wide range of media, from smartphones to VR headsets, and gained experience with the opportunities and challenges each medium brings.\n\nIn my work as a research assistant at my university, I go beyond my studies and actively conduct research on topics that interest me. In the field of Extended Reality, I work on interactive systems that trick, extend, or influence human perception. At workshops and international conferences, I exchange ideas with other researchers and broaden my perspective.\n\nIn my free time, I enjoy swimming and expressing my creativity through crafts.",
  },
  email: "cecilia.halbritter@student.hs-rm.de",
  github: "https://github.com/fieeesch/",
  linkedin: "www.linkedin.com/in/cecilia-halbritter-5737b7349/",
  location: "Wiesbaden, Deutschland",
  heroImage: "/images/cecilia-hero.jpg",
  heroAlt: {
    de: "Porträt auf einem belebten Markt",
    en: "Portrait at a busy market",
  },
}

export const projects: PortfolioItem[] = [
  {
    id: "tretbot",
    kind: "project",
    title: {
      de: "TretBot — Arbeite für deine Tokens",
      en: "TretBot — Work for your Tokens",
    },
    eyebrow: {
      de: "Multimodale App · Mensch-KI-Interaktion",
      en: "Multimodal App · Human-AI Interaction",
    },
    description: {
      de: "KI-Chatbots sind nicht mehr aus dem Alltag wegzudenken. Aber ist uns eigentlich bewusst, wie unsere Prompts verarbeitet werden und welcher Energieaufwand dahinter steckt? Beides versuchen wir, mit dem TretBot zu verdeutlichen. Wir haben eine Desktop-Oberfläche mit Ollama-Anbindung entwickelt, über die man mit verschiedenen LLMs chatten kann. Der Clou: Für jedes Input- und Output-Token müssen Nutzer:innen in die Pedale treten.\n\nDie Rotation des Pedals wird mithilfe eines Hall-Sensors erfasst, von einem Raspberry Pi 5 verarbeitet und das Signal per Websocket-Verbindung an die Desktopanwendung gesendet. In der Weboberfläche muss jetzt für jeden Verarbeitungsschritt (Tokenization, Modell-Prefill, Reasoning und Output) gestrampelt werden, während der jeweilige Schritt in einer Infografik erläutert wird. Auch kann zwischen verschieden guten Modellen gewählt werden - allerdings erhöht sich mit der Parameteranzahl auch der Tretwiderstand.\n\nIn einer Feldstudie bekamen wir das Feedback, dass die Erfahrung unterhaltsam und lehrreich war.",
      en: "AI chatbots have become an integral part of everyday life. But are we actually aware of how our prompts are processed and how much energy is required behind the scenes? With TretBot, we aim to make both aspects more tangible. We developed a desktop interface connected to Ollama that allows users to chat with different LLMs. The twist: for every input and output token, users have to pedal.\n\nThe rotation of the pedal is detected using a Hall sensor, processed by a Raspberry Pi 5, and transmitted to the desktop application via a WebSocket connection. In the web interface, users have to keep pedaling for each processing step (tokenization, model prefill, reasoning, and output) while the respective step is explained through an infographic. Users can also choose between models with different levels of capability, although a higher parameter count also increases the pedaling resistance.\n\nIn a field study, we received feedback that the experience was both entertaining and educational.",
    },
    date: "2026-07",
    images: [
      {
        src: "/images/tretbot-demo.png",
        alt: {
          de: "Demo der TretBot-Anwendung mit Texteingabe, Tokenausgabe und Roboterfigur",
          en: "Demo of the TretBot application with text input, token output, and robot character",
        },
      },
      {
        src: "/images/tretbot-character.png",
        alt: {
          de: "Grafik der verschiedenen Gesichtsausdrücke des TretBot",
          en: "Graphic showing the different facial expressions of TretBot",
        },
      },
      {
        src: "/images/tretbot-tech.png",
        alt: {
          de: "Technischer Aufbau des umgebauten Pedaltrainers für TretBot",
          en: "Technical setup of the modified pedal trainer for TretBot",
        },
      },
      {
        src: "/images/tretbot-ui.png",
        alt: {
          de: "Nutzung des TretBot-Pedaltrainers mit sichtbarer Geräteanzeige",
          en: "Using the TretBot pedal trainer with its device display visible",
        },
      },
      {
        src: "/images/tretbot-pedal.png",
        alt: {
          de: "TretBot-Projektaufnahme",
          en: "TretBot project photograph",
        },
      },
    ],
    tags: ["React", "Ollama", "Raspberry Pi"],
    link: "https://github.com/Fieeesch/TretBot",
    demoLink: "https://tretbot.dtmayer.dev/",
    notes: {
      de: "Das Projekt wurde im Rahmen eines Master-Moduls konzipiert sowie Hard- und Softwareseitig umgesetzt. Der Source Code wurde auf GitHub hochgeladen. Eine technische Demo ohne LLM-Anbindung und mit einer UI-Kurbel statt Hardware ist über den unteren Link erreichbar.",
      en: "The project was developed as part of a Master’s module and implemented on both the hardware and software side. The source code is available on GitHub. A technical demo without LLM integration, using an on-screen crank instead of the physical hardware, can be accessed via the link below.",
    },
  },
  {
    id: "more",
    kind: "project",
    title: { de: "More is coming...", en: "More is coming..." },
    eyebrow: {
      de: "to be continued",
      en: "to be continued",
    },
    description: {
      de: "",
      en: "",
    },
    date: "2024-10-02",
    images: [],
    tags: [],
    link: "https://github.com/Fieeesch",
  },
]

export const publications: PortfolioItem[] = [
  {
    id: "genie-vr",
    kind: "publication",
    title: {
      de: "GENIE: Generative Narrative Immersion Engine for Deep Reading Engagement",
      en: "GENIE: Generative Narrative Immersion Engine for Deep Reading Engagement",
    },
    eyebrow: {
      de: "Konferenz-Paper · Erstautorin",
      en: "Conference paper · First Author",
    },
    description: {
      de: "Diese Arbeit stellt GENIE (Generative Narrative Immersion Engine) vor, ein Virtual-Reality-basiertes Lesesystem, das aus erzählerischen Texten an die Geschichte angepasste 360°-Panoramaumgebungen erzeugt, um die Auseinandersetzung der Leser:innen mit fiktionalen Geschichten zu vertiefen. Zu diesem Zweck segmentiert eine KI-Pipeline den Buchtext in szenenbasierte Einheiten, leitet mithilfe von Large Language Models bildgenerierende Prompts mit Fokus auf den jeweiligen Ort ab und erzeugt anschließend passende Panoramen durch diffusionbasierte Bildgenerierung und neuronale Super-Resolution-Modelle.\n\nIn einer In-Subject-User-Study (N = 32), in der diese dynamische Umgebung mit einer statischen Baseline verglichen wurde, analysierten wir sowohl die subjektive Story World Absorption (SWAS) als auch objektives Verhalten wie Lesegeschwindigkeit und Kopfbewegungen. Die Ergebnisse zeigen, dass unser an die Handlung angepasstes Lesesystem sowohl das Transportation-Erleben als auch die mentale Vorstellungskraft signifikant steigerte. Darüber hinaus zeigt unsere Studie entscheidende Interaktionseffekte zwischen der Erzählung und den generierten Umgebungen. Diese Ergebnisse legen nahe, dass generative VR zwar die Immersion vertiefen kann, ihre Wirksamkeit jedoch von der visuellen Konkretheit und dem Tempo des Ausgangstextes beeinflusst wird. Daraus ergeben sich neue Implikationen für das Design zukünftiger immersiver Leseerfahrungen.",
      en: "This paper presents GENIE (Generative Narrative Immersion Engine), a virtual reality (VR)-based reading system that generates story-adaptive 360° panoramic environments from narrative text to deepen readers' engagement with fictional stories. To this end, an AI pipeline segments book text into scene-level units, derives location-focused image prompts via large language models, and synthesizes corresponding panoramas using diffusion-based image generation and neural super-resolution models. In a within-subject user study (N=32) comparing this dynamic environment to a static baseline, we analyzed both subjective Story World Absorption (SWAS) and objective behavior (reading speed, head rotation). The results show that our story-adaptive reading system significantly increased transportation and mental imagery. Moreover, our study reveals critical interaction effects between the narrative and generated environments. These findings suggest that while generative VR can deepen absorption, its effectiveness is modulated by the visual concreteness and pacing of the source text, offering new design implications for the future of immersive reading experiences.",
    },
    date: "2026-03-22",
    images: [
      {
        src: "/images/genie-vr-final.png",
        alt: {
          de: "Story-adaptives VR-Lesesystem mit generierten Umgebungen zu Rotkäppchen",
          en: "Story-adaptive VR reading system with generated environments for Little Red Riding Hood",
        },
      },
      {
        src: "/images/genie-vr-briefmarkengrafik.png",
        alt: {
          de: "Briefmarkengrafik zum GENIE-Projekt",
          en: "Stamp graphic for the GENIE project",
        },
      },
    ],
    tags: ["Immersive Reading", "360°", "VR", "AI Pipeline"],
    link: "https://doi.org/10.1109/VRW70859.2026.00018",
    notes: {
      de: "Lesen innerhalb der Welt der Geschichte - Was als Pflichtprojekt in meinem ersten Mastersemester begann, entwickelte sich zu einer wissenschaftlichen Arbeit mit Nutzerstudie, Auswertung und anschließender Veröffentlichung. Auf der IEEE VR 2026 in Daegu, Südkorea, konnte ich das Paper schließlich präsentieren und hatte darüber hinaus die Möglichkeit, das Land zu bereisen.",
      en: "Reading inside of the story's world - What started as a required project in my first semester of the Master’s program developed into a scientific paper, including a user study, data analysis, and publication. I was eventually able to present the paper at IEEE VR 2026 in Daegu, South Korea, and also had the opportunity to travel around the country.",
    },
  },
  {
    id: "dynamic-labels",
    kind: "publication",
    title: {
      de: "Design of View-Dependent Dynamic Text-Label Layouting in Interactive 3D Information-Rich Virtual Environments: A Compute-Budgeted Benchmark of Optimization Methods",
      en: "Design of View-Dependent Dynamic Text-Label Layouting in Interactive 3D Information-Rich Virtual Environments: A Compute-Budgeted Benchmark of Optimization Methods",
    },
    eyebrow: {
      de: "Konferenz-Paper · IEEE VR 2026",
      en: "Conference paper · IEEE VR 2026",
    },
    description: {
      de: "Wahrnehmungsrobuste Extended-Reality-(XR)-Szenen sollten eingeblendete Informationen auch bei kontinuierlichen Änderungen des Blickwinkels gut lesbar und übersichtlich halten – und das unter strengen Echtzeitanforderungen. Interaktive, informationsreiche virtuelle 3D-Umgebungen (IRVEs) verwenden häufig 3D-Labels („Callouts“), die kurze Texte mit den zugehörigen Objekten verknüpfen. Wenn sich Nutzer:innen bewegen und ihren Blickwinkel verändern, können solche Callouts durch Verdeckungen, Überlappungen, visuelle Unordnung und uneindeutige Zuordnungen problematisch werden. Gleichzeitig müssen interaktive Anwendungen Layout-Anpassungen innerhalb enger Laufzeitgrenzen berechnen.\n\nIn dieser Arbeit vergleichen wir vier dynamische metaheuristische Verfahren zur Anordnung von Callouts: Simulated Annealing (SA), eine nicht-verschlechternde SA-Variante (H-SA), Grey Wolf Optimization (GWO) sowie eine erweiterte GWO-Variante mit nachbarschaftsbasierter Kandidatenintegration (GWO-ext). Zusätzlich dient eine zufällige Anordnung als Baseline. Für unterschiedliche Callout-Dichten und Iterationsbudgets vergleichen wir den Zielfunktionswert, die Laufzeit und den Anteil akzeptabler Lösungen. SA erweist sich als das zuverlässigste Verfahren und ist innerhalb der getesteten Budgets die einzige Methode, die auch bei höherer Dichte mit 20 Callouts akzeptable Layouts erreicht. GWO-ext verbessert dagegen bei geringerer Dichte und einer höheren Anzahl an Iterationen den Anteil akzeptabler Lösungen.",
      en: "Perceptually robust extended reality (XR) scenes should keep overlaid information legible and low-clutter under continuous viewpoint change within strict real-time budgets. Interactive 3D informationrich virtual environments (IRVEs) commonly use 3D labels (call-outs) that link short text to annotate objects. As users move and change viewpoint, callouts can become perceptually problematic due to occlusion, overlap, clutter, and ambiguous associations, while interactive deployments must compute layout adjustments under tight runtime budgets.\n\nIn this work, we benchmark four dynamic meta-heuristic callout-arrangement methods: simulated annealing (SA), a non-degrading SA variant (H-SA), grey wolf optimization (GWO), and an extended GWO with neighborhood-style candidate injection (GWO-ext), together with a random baseline. Across callout densities and iteration budgets, we compare objective score, runtime, and an acceptable-solution rate. SA is most reliable and the only method reaching acceptable layouts at higher density (20 callouts) within tested budgets, while GWO-ext improves acceptability at lower density with more iterations.",
    },
    date: "2026-03-21",
    images: [
      {
        src: "/images/dynamic-labels-chemistry.jpg",
        alt: {
          de: "Dynamische Textlabels an einem Chemieaufbau in einer virtuellen Lernumgebung",
          en: "Dynamic text labels on a chemistry setup in a virtual learning environment",
        },
      },
      {
        src: "/images/dynamic-labels-airplane.jpg",
        alt: {
          de: "Dynamische Textlabels an den Bauteilen eines Flugzeugs in einer virtuellen Umgebung",
          en: "Dynamic text labels on aircraft components in a virtual environment",
        },
      },
    ],
    tags: ["Perception", "E-Learning"],
    link: "https://doi.org/10.1109/VRW70859.2026.00079",
  },
  {
    id: "foveated-pathtracing",
    kind: "publication",
    title: {
      de: "Edge- and Eccentricity-Guided Foveated Path Tracing with Adaptive Russian Roulette",
      en: "Edge- and Eccentricity-Guided Foveated Path Tracing with Adaptive Russian Roulette",
    },
    eyebrow: {
      de: "Konferenz-Paper · IEEE VR 2026",
      en: "Conference paper · IEEE VR 2026",
    },
    description: {
      de: "Path Tracing ist dafür bekannt, physikalisch korrekte und fotorealistische Bilder zu erzeugen. Der hohe Rechenaufwand und die langsame Konvergenz schränken jedoch den Einsatz in Echtzeitanwendungen ein, insbesondere in interaktiven oder immersiven Umgebungen. Daher stellen wir einen dynamischen foveierten Path-Tracing-Ansatz vor, der die ungleichmäßige Empfindlichkeit des menschlichen Sehens nutzt, um die Rendering-Performance zu verbessern.\n\nUnsere Methode kombiniert (i) eine exzentrizitätsabhängige Verteilung der Samples auf Basis eines Modells der kortikalen Vergrößerung, (ii) eine kantenbewusste Importance-Modulation, die die Sampling-Dichte in der Nähe kontrastreicher Strukturen erhöht, und (iii) eine foveierte Russian-Roulette-Terminierung, die die erwartete Pfadlänge zur Peripherie hin verkürzt und durch eine entsprechende Throughput-Kompensation dennoch unverzerrt bleibt. Wir evaluieren sechs komplexe Szenen mit einheitlichem Sampling (4 SPP) sowie foveiertem Sampling (max. 4 SPP) bei einer Auflösung von 4K. Die Foveierung verbessert die Performance in Kombination mit dem OIDN-Denoiser um bis zu das 2,77-Fache und erreicht dabei vergleichbare oder höhere Just-Objectionable-Difference-(JOD)-Werte im FovVideoVDP. Die Ergebnisse zeigen damit ein vorteilhaftes Verhältnis zwischen Bildqualität und Effizienz für Echtzeit-Path-Tracing unter wahrnehmungsbasierten Einschränkungen.",
      en: "Path tracing is widely regarded for its ability to produce physically accurate photorealistic imagery. However, high computational cost and slow convergence limit its real-time applications, particularly in interactive or immersive environments. Therefore, we present a dynamic foveated path tracing approach that exploits the non-uniform sensitivity of human vision to accelerate the rendering performance. Our method combines (i) an eccentricity-dependent sampling allocation derived from a cortical magnification model, (ii) edgeaware importance modulation that increases sampling near highcontrast structures, and (iii) foveated Russian roulette termination that shortens expected path length toward the periphery while maintaining unbiasedness via throughput compensation. We evaluate six complex scenes under uniform (4 SPP) and foveated (max 4 SPP) sampling budgets at 4K resolution. The foveation improves the performance up to 2.77× with OIDN denoiser and scores similar or higher in FovVideoVDP's just- objectionable-difference (JOD) scores. These results indicate a favorable quality-efficiency tradeoff for real-time path tracing under perceptual constraints.",
    },
    date: "2026-03-21",
    images: [
      {
        src: "/images/foveated-pathtracing.jpg",
        alt: {
          de: "Vergleich von einheitlichem und foveiertem Path Tracing mit und ohne OIDN-Denoising",
          en: "Comparison of uniform and foveated path tracing with and without OIDN denoising",
        },
      },
    ],
    tags: ["Visual Computing", "Path Tracing"],
    link: "https://doi.org/10.1109/VRW70859.2026.00077",
  },
  {
    id: "prompt-engineering",
    kind: "publication",
    title: {
      de: "Exploring the Role of Prompt Engineering in the AI-Driven Generation of Virtual Worlds",
      en: "Exploring the Role of Prompt Engineering in the AI-Driven Generation of Virtual Worlds",
    },
    eyebrow: {
      de: "Konferenz-paper · IEEE AIxVR 2026",
      en: "Conference paper · IEEE AIxVR 2026",
    },
    description: {
      de: "Generative KI senkt zunehmend die Einstiegshürden für die Erstellung von 3D-Inhalten. Dennoch bleibt es eine Herausforderung, aus wenigen realen Eingangsdaten kohärente, kontrollierbare und zugängliche virtuelle Welten zu erschaffen – insbesondere für Nutzer:innen ohne technisches Fachwissen. Diese Arbeit untersucht das Potenzial der Integration von Retrieval-Augmented Generation (RAG), ReAct-Prompting und multimodalem Reasoning bei der Erstellung digitaler Zwillinge und virtueller Welten. Durch die Anpassung aktueller Methoden aus dem Bereich der Large Language Models (LLMs) soll das vorgestellte konzeptionelle Framework eine kontrolliertere, nachvollziehbarere und zugänglichere Generierung kohärenter 3D-Inhalte aus unterschiedlichen multimodalen Eingaben ermöglichen, darunter Text, Sprache, Bilder und Sensordaten.\n\nWir schlagen eine dynamische Knowledge-Graph-Architektur vor, die semantische Informationen mit Echtzeit-Eingaben der Nutzer:innen kombiniert, um generative Systeme der künstlichen Intelligenz (KI) gezielt zu steuern. Der Ansatz richtet sich insbesondere an Nutzer:innen ohne technisches Fachwissen und bietet dabei besondere Vorteile für vulnerable Gruppen wie ältere Menschen und Personen mit eingeschränkter Mobilität.\n\nUnsere Methode adressiert systematisch Herausforderungen in kreativen Arbeitsprozessen, der Zugänglichkeit für Nutzer:innen und der Effektivität von Prompts und bietet gleichzeitig einen transparenten und nachvollziehbaren Prozess zur Rekonstruktion realer, den Nutzer:innen vertrauter Umgebungen. Darüber hinaus liegt ein Schwerpunkt sowohl auf der Reduzierung von Risiken durch algorithmische Verzerrungen als auch auf der Einhaltung neuer regulatorischer Anforderungen. Das daraus entstandene Positionspapier zeigt zentrale Potenziale menschenzentrierter generativer KI in Virtual-Reality-Systemen (VR) auf, mit direkten Anwendungsmöglichkeiten in den Bereichen Gesundheitswesen, Bildung und inklusives Technologiedesign.",
      en: "Generative AI is rapidly lowering the barrier to creating 3D assets, yet building coherent, controllable, and accessible virtual worlds from sparse real-world inputs remains difficult - especially for non-expert users. This paper explores the potential for integrating Retrieval-Augmented Generation (RAG), ReAct-Prompting, and multimodal reasoning into the creation of digital twins and virtual worlds. By adapting recent techniques developed for Large Language Models (LLMs), the conceptual framework aims to enable a more controlled, interpretable, and accessible generation of coherent 3D content from diverse multimodal inputs, including text, speech, images, and sensor data.\n\nWe propose a dynamic knowledge graph architecture that combines semantic information and real-time user inputs to guide generative artificial intelligence (AI) systems. This approach specifically targets non-expert users and offers significant benefits for critically vulnerable groups, such as the elderly and those with limited mobility.\n\nOur method systematically addresses challenges in creative workflows, user accessibility, and prompt effectiveness while offering a transparent and explainable process for recreating real-life spaces familiar to the user. Furthermore, it focuses on both mitigating the risks of algorithmic bias and maintaining compliance with emerging regulatory standards. The resulting position paper outlines key opportunities for human-centered generative AI in Virtual Reality (VR) systems, with direct applications in healthcare, education, and inclusive technology design.",
    },
    date: "2026-01-28",
    images: [],
    tags: ["Prompt Engineering", "Generative AI", "Virtual Worlds"],
    link: "https://doi.org/10.1109/AIxVR67263.2026.00061",
  },
  {
    id: "pseudohaptic-weight",
    kind: "publication",
    title: {
      de: "A Unified Rating System for a Qualitative Comparison of Haptic and Pseudo-Haptic Weight Simulation in Virtual Reality",
      en: "A Unified Rating System for a Qualitative Comparison of Haptic and Pseudo-Haptic Weight Simulation in Virtual Reality",
    },
    eyebrow: {
      de: "Konferenz-Paper · Erstautorin",
      en: "Conference Paper · First Author",
    },
    description: {
      de: "Eine zentrale Herausforderung von VR-Technologien besteht darin, eine realistische Interaktion zwischen Nutzer:innen und virtuellen Objekten zu ermöglichen. Dabei spielt insbesondere die Vermittlung von haptischem Gewichtsfeedback eine wichtige Rolle, um den Realismus und die Immersion zu erhöhen. Grundsätzlich haben sich zwei Hauptkategorien zur Simulation von Gewicht in VR herausgebildet: haptische und pseudo-haptische Ansätze.\n\nObwohl es bereits mehrere Übersichtsarbeiten gibt, die Verfahren innerhalb der jeweiligen Kategorien untersuchen, fehlt bislang eine vergleichende Betrachtung beider Ansätze zur Gewichtssimulation. Dieser Artikel stellt daher ein neuartiges, einheitliches Bewertungssystem vor, das einen direkten Vergleich der Effektivität haptischer und pseudo-haptischer Gewichtssimulation in Virtual Reality ermöglicht.\n\nDurch die Anwendung dieses Bewertungssystems auf bestehende Lösungen konnten wir einen Score berechnen, der die jeweiligen Stärken und Schwächen haptischer sowie pseudo-haptischer Verfahren zur Gewichtssimulation widerspiegelt. Das Bewertungssystem ermöglicht damit sowohl die Beurteilung einzelner Geräte als auch eine vergleichende Analyse der beiden Kategorien als Ganzes.",
      en: "One key challenge in VR technologies lies in enabling realistic interaction between users and virtual objects, with a particular emphasis on providing haptic weight feedback to enhance realism and user engagement. Specifically, two main categories have emerged for simulating weight in VR: haptic and pseudo-haptic solutions.\n\nAlthough several surveys cover approaches within each category, comparative research examining these two types of weight simulation methods is still lacking. This article introduces a novel unified rating system that allows to compare the effectiveness of haptic versus pseudo-haptic weight simulation in virtual reality using a unified rating system.\n\nApplying this rating system to existing solutions, we were able to calculate a score that reflects the strengths and weaknesses of both haptic and pseudo-haptic weight simulation techniques. As a result, the rating system facilitates the evaluation of individual devices as well as a comparative analysis of the two categories as a whole.",
    },
    date: "2025-03-09",
    images: [
      {
        src: "/images/unified-rating-system.jpg",
        alt: {
          de: "Übersicht verschiedener haptischer und pseudo-haptischer Verfahren zur Gewichtssimulation in Virtual Reality",
          en: "Overview of haptic and pseudo-haptic approaches to weight simulation in virtual reality",
        },
      },
    ],
    tags: ["Pseudo-Haptics", "Weight Simulation", "XR"],
    link: "https://doi.org/10.1109/VRW66409.2025.00178",
    notes: {
      de: "Diese Arbeit entstand im Rahmen eines Seminars über wissenschaftliches Arbeiten. Dank der Unterstützung meines Professors wurde das ursprüngliche Essay zu einem vollwertigen Paper weiterentwickelt und für den WSR Workshop auf der IEEE VR 2025 eingereicht. In Saint-Malo, Frankreich, durfte ich im Rahmen der fünftägigen Konferenz unsere Arbeit präsentieren und mich mit Forschenden austauschen.",
      en: "This work originated as part of a seminar on academic writing. With the support of my professor, the initial essay was further developed into a full paper and submitted to the WSR Workshop at IEEE VR 2025. During the five-day conference in Saint-Malo, France, I had the opportunity to present our work and exchange ideas with researchers from the field.",
    },
  },
  {
    id: "interaction-fidelity",
    kind: "publication",
    title: {
      de: "Extending Interaction Fidelity: The Impact of Feedback Symmetry on the Usability of Mixed Reality Applications",
      en: "Extending Interaction Fidelity: The Impact of Feedback Symmetry on the Usability of Mixed Reality Applications",
    },
    eyebrow: {
      de: "Konferenz-Paper · IEEE VR 2025",
      en: "Conference paper · IEEE VR 2025",
    },
    description: {
      de: "Diese Arbeit stellt eine Erweiterung des Framework for Interaction Fidelity Analysis (FIFA) vor, die um eine neue Dimension namens „Feedback Symmetry“ ergänzt wird. Während FIFA bereits effektiv bewertet, wie stark Interaktionstechniken in Mixed Reality (MR) ihren realen Entsprechungen hinsichtlich biomechanischer und steuerungsbezogener Aspekte ähneln, berücksichtigt das Framework die Rolle von Ausgabefeedback für Nutzererlebnis und Leistung bislang nicht vollständig. Durch die Ergänzung um Feedback Symmetry, ein Maß für die zeitliche Abstimmung, Genauigkeit und Realitätsnähe von Systemreaktionen, verschiebt sich der Fokus von einer rein eingabebezogenen Betrachtung hin zu einer ganzheitlichen, bidirektionalen Bewertung von MR-Interaktionen.\n\nDie Anwendung des erweiterten Frameworks auf bereits veröffentlichte experimentelle Daten zeigt eine bessere Übereinstimmung zwischen den vorhergesagten Fidelity-Werten und der tatsächlich beobachteten Nutzerleistung als beim ursprünglichen Framework. Insbesondere Bedingungen, die zuvor als besonders realitätsnah bewertet wurden, in der Praxis jedoch schlecht abschnitten, lassen sich unter Berücksichtigung der Feedback-Eigenschaften genauer einordnen.\n\nDieser Ansatz verdeutlicht, warum natürliche, aber inkonsistente Feedbackmechanismen die Nutzbarkeit beeinträchtigen können, während einfachere, dafür konsistente Rückmeldungen zu besseren Ergebnissen führen können. Unsere Ergebnisse unterstreichen die Bedeutung eines ausgewogenen Feedbackdesigns und legen nahe, dass die Integration von Feedback Symmetry in FIFA Forschende und Entwickler:innen dabei unterstützen kann, ihre Interaktionstechniken gezielter zu verbessern und damit die Nutzbarkeit und Effektivität von MR-Anwendungen zu steigern.",
      en: "This paper introduces an extension to the Framework for Interaction Fidelity Analysis (FIFA) that incorporates a new dimension called Feedback Symmetry. While FIFA effectively evaluates how closely Mixed Reality (MR) interaction techniques resemble their real-world counterparts in terms of biomechanical and control aspects, it does not fully account for the role of output feedback in user experience and performance. By adding Feedback Symmetry, a measure capturing the timeliness, accuracy, and realism of system responses, we shift from focusing solely on input fidelity toward a holistic, bidirectional assessment of MR interactions.\n\nUtilizing this extended framework to analyze previously published experimental data reveals improved alignment between predicted fidelity scores and observed user performance compared to the original framework. In particular, conditions previously rated as high in fidelity but performing poorly in practice become more accurately represented when feedback properties are considered.\n\nThis approach clarifies why certain natural yet inconsistent feedback schemes impede usability, while simpler yet consistent cues can enhance user outcomes. Our results highlight the importance of balanced feedback design and suggest that incorporating Feedback Symmetry into FIFA can guide researchers and developers in refining their interaction techniques, ultimately improving the usability and effectiveness of MR applications.",
    },
    date: "2025-03-09",
    images: [],
    tags: ["HCI", "Interaction", "Mixed Reality"],
    link: "https://doi.org/10.1109/VRW66409.2025.00172",
    notes: {
      de: "Diese Arbeit hat den Best Paper Award beim WSR-Workshop auf der IEEE VR 2025 erhalten.",
      en: "This work received the Best Paper Award at IEEE VR 2025's WSR workshop.",
    },
  },
]

export const cv: {
  experience: CvEntry[]
  education: CvEntry[]
  scholarships: CvEntry[]
} = {
  experience: [
    {
      period: "2025 — now",
      title: {
        de: "Wissenschaftliche Mitarbeiterin",
        en: "Research Associate",
      },
      place: {
        de: "LAVIS Arbeitsgruppe, Hochschule RheinMain",
        en: "LAVIS Working Group, RheinMain University",
      },
      placeLink: "https://lavis.cs.hs-rm.de/",
    },
    {
      period: "2023 — 2025",
      title: { de: "Duale Studentin", en: "Dual Study Program" },
      place: {
        de: "DB Fernverkehr AG",
        en: "DB Long-Distance AG",
      },
      placeLink:
        "https://www.deutschebahn.com/de/konzern/konzernprofil/Konzernunternehmen/dbfernverkehr-6879486",
    },
    {
      period: "2022 — 2023",
      title: { de: "Duale Studentin", en: "Dual Study Program" },
      place: {
        de: "Bitworks EDV Dienstleistungs-GmbH",
        en: "Bitworks EDV Dienstleistungs-GmbH",
      },
    },
  ],
  education: [
    {
      period: "2025 — now",
      title: {
        de: "M.Sc. Medieninformatik - Intelligente und Interaktive Systeme",
        en: "M.Sc. Media Informatics - Intelligent and Interactive Systems",
      },
      place: {
        de: "Hochschule RheinMain",
        en: "RhineMain University of Applied Sciences",
      },
      placeLink: "https://www.hs-rm.de/",
    },
    {
      period: "2022 — 2025",
      title: {
        de: "B.Sc. Angewandte Informatik (Dual)",
        en: "B.Sc. Applied Computer Science",
      },
      place: {
        de: "Hochschule RheinMain",
        en: "RhineMain University of Applied Sciences",
      },
      placeLink: "https://www.hs-rm.de/",
    },
  ],
  scholarships: [
    {
      period: "2024 - 2025",
      title: { de: "Deutschlandstipendium", en: "Deutschland Scholarship" },
      place: {
        de: "Bundesmininsterium für Wissenschaft, Technologie und Raumfahrt",
        en: "Federal Ministry of Research, Technology and Space",
      },
      placeLink:
        "https://www.deutschlandstipendium.de/deutschlandstipendium/de/home/home_node.html",
    },
  ],
}

export const ui = {
  de: {
    nav: {
      home: "Start",
      projects: "Projekte",
      publications: "Publikationen",
      about: "Über mich",
    },
    heroKicker: "Hallo, ich bin Cecilia.",
    viewProjects: "Projekte ansehen",
    readPapers: "Publikationen",
    selectedWork: "Ausgewählte Arbeiten",
    selectedIntro:
      "Das spiegelt meine Interessen und Kenntnisse am besten wieder:",
    allProjects: "Projekte",
    allPublications: "Publikationen",
    projectIntro:
      "Mein Studium ermöglicht es mir, unterschiedlichste Ideen, Prototypen und Produkte zu entwickeln, ob solo oder im Team. Dabei lerne ich neben nötigen Fachkenntnissen auch wichtige Soft Skills für die effektive Kommunikation untereinander.",
    publicationIntro:
      "Als Studentin und wissenschaftliche Mitarbeiterin war und bin ich an mehreren veröffentlichten Papern beteiligt, sowohl als Erstautorin als auch als unterstützende Autorin. Inhaltlich beschäftige ich mich dabei vor allem mit den Themen Wahrnehmung, Rendering und der Integration von KI in Extended Reality.",
    aboutTitle: "Technik mit Neugier und Haltung.",
    experience: "Erfahrung",
    education: "Ausbildung",
    scholarships: "Stipendien",
    contact: "Kontakt",
    contactText:
      "Du möchtest dich über ein Projekt, Forschung oder eine Zusammenarbeit austauschen?",
    writeMe: "E-Mail schreiben",
    back: "Zurück",
    visit: "Projekt öffnen",
    demo: "Demo öffnen",
    publication: "Veröffentlichung öffnen",
    notes: "Persönliche Notiz",
    nextImage: "Nächstes Bild",
    previousImage: "Vorheriges Bild",
    projectLabel: "Projekt",
    publicationLabel: "Publikation",
    theme: "Darstellung wechseln",
    language: "Switch to English",
    menu: "Menü öffnen",
  },
  en: {
    nav: {
      home: "Home",
      projects: "Projects",
      publications: "Publications",
      about: "About",
    },
    available: "Available for internships from fall 2025",
    heroKicker: "Hi, I'm Cecilia.",
    viewProjects: "View projects",
    readPapers: "Publications",
    selectedWork: "Selected work",
    selectedIntro: "This best reflects my interests and skills:",
    allProjects: "All projects",
    allPublications: "All publications",
    projectIntro:
      "My studies give me the opportunity to develop a wide range of ideas, prototypes, and products, both independently and as part of a team. Along the way, I not only gain the necessary technical knowledge, but also develop important soft skills for effective communication and collaboration.",
    publicationIntro:
      "As a student and research assistant, I have contributed to several published papers, both as a first author and as a supporting author. My work has mainly focused on perception, rendering, and the integration of AI in Extended Reality.",
    aboutTitle: "Technology with curiosity and conviction.",
    experience: "Experience",
    education: "Education",
    scholarships: "Scholarships",
    contact: "Contact",
    contactText: "Want to talk about a project, research, or working together?",
    writeMe: "Write an email",
    back: "Back",
    visit: "Open project",
    demo: "Open demo",
    publication: "Open publication",
    notes: "Personal note",
    nextImage: "Next image",
    previousImage: "Previous image",
    projectLabel: "Project",
    publicationLabel: "Publication",
    theme: "Toggle appearance",
    language: "Auf Deutsch wechseln",
    menu: "Open menu",
  },
}
