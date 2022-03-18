
// Various stands loactions
type standsLocations = "L1" | "L2" | "L3" | "L4" | "L5" | "L6" | "F1" | "F2" | "F3" | "R1" | "R2" | "P1" | "A1" | "A2";
// Teams full names
type standNames = "SCALab" | "Equipe MINT" | "Le Fresnoy" | "Anthropo-Lab"| "PsyCos" | "ISA" | "ISEN" | "MEL" | "CASC" | "La Fresco" | "ICL" | "Master PPNSA" | "Master SCE" | "Xperium" | "Gaze intelligence";
// Teams ids
export type standIds = "scalab" | "mint" | "fresnoy" | "anthropo" | "psycos" | "isa" | "isen" | "mel" | "casc" | "fresco" | "catho" | "ppnsa" | "sce" | "xperium" | "gaze";


type IStand = {
    id: standIds,
    name: standNames,
    longName: string,
    location?: standsLocations,
    themes?: Themes[],
    description?: string,
};
export interface IWorkshop {
    id: string;
    speakersId: string[];
    title: string;
    description?: string;
}
// type for themes
type Themes = "INFLUENCE" | "MOUVEMENT" | "SOCIETE" | "EXPERIMENTATION";
export interface IEvent {
    id: string;
    speakersId: string[];
    title: string;
    description?: string;
    date: string;
    theme: Themes;
    standId?: standIds;
}

export enum EventThemesEnum {
    "INFLUENCE" = "11h - La perception sous influence ! ",
    "SOCIETE" = "12h - Environnement et société : améliorer la perception pour passer à l’action",
    "MOUVEMENT" = "14h - Au-delà du mouvement",
    "EXPERIMENTATION" = "15h - Regards croisés sur l’expérimentation citoyenne et artistique",
}
export enum EventThemesEnumShort {
    "INFLUENCE" = "La perception sous influence ! ",
    "SOCIETE" = "Environnement et société : améliorer la perception pour passer à l’action",
    "MOUVEMENT" = "Au-delà du mouvement",
    "EXPERIMENTATION" = "Regards croisés sur l’expérimentation citoyenne et artistique",
}

export const getEvents = () => events;
export const getWorkshops = () => workshops;
export const getSpeakerWorkshops = (speakerId: string) => (workshops.filter(w => w.speakersId.includes(speakerId)));
export const getEvent = (id: string) => events.find((event) => event.id === id);
export const getSpeakerEvents = (speakerId: string) => events.filter((event) => event.speakersId.includes(speakerId));
export const getWorkshop = (id: string) => workshops.find((workshop) => workshop.id === id);
export const getStand = (id: standIds) => stands.find((stand) => stand.id === id);
export const getCompanyName = (id: standIds) => stands.find((stand) => stand.id === id)?.name ?? "";



const events: IEvent[] = [
    {
        id: "1",
        speakersId: ["bVictor"],
        title: "Les limites de la perception visuelle",
        description:
            "Vous vous êtes sans doute déjà trouvés face à une illusion d'optique qui vous a fait douter de votre vue. Quelle est la science derrière ces illusions ? Et comment perçoit-on une image ? Vous vous doutez probablement que c'est grâce à vos yeux, mais en êtes-vous sûrs ? Les yeux ne sont que le point de départ de notre système visuel et si vous souhaiter en savoir plus, venez découvrir comment vos yeux et votre cerveau perçoivent le monde qui vous entoure.",
        date: "11h",
        theme: "INFLUENCE",
        standId: "scalab"
    },
    {
        id: "2",
        speakersId: ["lBruno", "dBeatrice"],
        title: "Biais de positivité : lorsque la conscience du temps qui passe nous fait positiver ?",
        description: "Cette étude, aux objectifs fondamentaux et cliniques, vise à évaluer la participation d’un biais de positivité aux déficits de reconnaissance des émotions dans la sclérose en plaques (SEP). Ce biais de positivité est la conséquence de changements motivationnels, liés à une conscience aiguë du temps de vie limité, se manifestant par une préférence pour l’information, en lien avec l’âge et certaines pathologies chroniques. ",
        date: "11h",
        theme: "INFLUENCE",
        standId: "psycos"
    },
    {
        id: "3",
        speakersId: ["vMathilde", "cSylvie"],
        title: "Le goût de la bière et la musique",
        description: "Pourquoi, les habitants de Chavignol accompagnent-ils leur crottin de Sancerre ? Plusieurs équipes de chercheurs ont mis en évidence des règles ou des principes d’association, expliquant l’harmonie entre deux aliments. Ces règles sont-elles transposables à deux sens différents comme l’ouïe et le goût par exemple ? C’est ce que nous avons voulu investiguer à travers une étude sur l’harmonie entre une bière et une musique provenant d’une même zone géographique.",
        date: "11h",
        theme: "INFLUENCE",
        standId: "isa"
    },
    {
        id: "4",
        speakersId: ["kJerome"],
        title: "Design et expérimentation au service d’une consommation responsable de l’eau",
        description: "Le succès de la transition écologique passe notamment par le développement de comportements de consommation des habitants plus économes, plus sobres. Cela passe par plusieurs étapes : la connaissance du problème, la conscience que l’on peut agir, savoir quoi faire, vouloir le faire et enfin le faire concrètement au quotidien. Fin 2021 et début 2022, un groupement de designers, chercheurs en sciences humaines et sociales et évaluateur des politiques publiques ont accompagnés une douzaine de ménages de la MEL vers une consommation plus économe d’eau potable. Les enseignements de cette expérimentation sont riches et encourageantes. ",
        date: "12h",
        theme: "SOCIETE",
        standId: "mel"
    },
    {
        id: "6",
        speakersId: ["gPierre"],
        title: "Éloge de la prosp’active",
        description: "Comment échapper au chronos porteur de la malédiction écologique pour envahir le Kaïros, source de joie et de mobilisation contributive. Tous prosp’activistes.",
        date: "12h",
        theme: "SOCIETE",
    },
    {
        id: "7",
        speakersId: ["dYvonne"],
        title: "Musique et illusion dans l’effort physique",
        description:
            "S’engager dans la pratique d’une séance de sport requiert la capacité de gérer l’effort physique et mentale associée à l’exercice. Nous présenterons comment la musique permet de donner l’illusion de bouger plus rapidement ou plus lentement en fonction de l’énergie sonore perçue.",
        date: "14h",
        theme: "MOUVEMENT",
        standId: "scalab"
    },
    {
        id: "8",
        speakersId: ["iNacim"],
        title: "Perception artificielle et mouvement",
        description: "Peut-on toujours se baser sur le mouvement pour identifier des évènements dans les contenus vidéo ?",
        date: "14h",
        theme: "MOUVEMENT",
        standId: "isen"
    },
    {
        id: "9",
        speakersId: ["bFlorent"],
        title: "Perception de la gestuelle dans la musique électronique",
        description: "Lors de concerts de musique électronique, il est souvent difficile de comprendre ce que font exactement les musiciens : Quel est le lien entres les gestes qu'ils effectuent et la musique produite ? Quelle est leur implication réelle dans la performance ? Nous présenterons ici des travaux cherchant à évaluer ce que perçoivent et comprennent les spectateurs et proposant des techniques de visualisation en réalité augmentée pour enrichir leur expérience.",
        date: "14h",
        theme: "MOUVEMENT",
        standId: "mint"
    },
    {
        id: "10",
        speakersId: ["pSophie"],
        title: "L’ XPERIUM la vulgarisation scientifique par l’expérimentation",
        date: "15h",
        description: "Vitrine de la recherche partenariale réalisée dans les laboratoires de l’Université de Lille, Xperium est un lieu qui se visite, en classe ou en groupe non scolaire, et permet la rencontre entre les chercheurs et différents publics. Autour d'un thème central unique et interdisciplinaire, diverses démonstrations et expériences pédagogiques, interactives, étonnantes sont présentées par des doctorants. Xperium est l’un des trois pôles d’activité de LILLIAD Learning center Innovation, situé au cœur du campus Cité scientifique. En savoir plus : https://lilliad.univ-lille.fr/a-propos-dxperium",
        theme: "EXPERIMENTATION",
        standId: "scalab"
    },
    {
        id: "11",
        speakersId: ["pEric"],
        title:
            "Les collaborations artistes/laboratoires dans la création contemporaine",
        description: "Le Fresnoy, Studio national des arts contemporains est lieu de formation, de production et de recherche qui accueille des artistes venus du monde entier. Éric Prigent est le coordinateur des arts numériques pour Le Fresnoy. Il a très vite eu l’intuition que des ponts entre artistes et laboratoires scientifiques constituaient une approche singulière et féconde de notre rapport au monde, là encore entre perception et réalité... ",
        date: "15h",
        theme: "EXPERIMENTATION",
    },
    {
        id: "12",
        speakersId: ["zFabien"],
        title: "Spider and I : robot, émotion et électrophysiologie",
        description:
            "Fabien Zocco présentera le projet de sculpture Spider and I, réalisé en collaboration avec le laboratoire de sciences cognitives SCAlab (Lille), mettant en jeu un robot araignée répondant en direct aux émotions de l'artiste.",
        date: "15h",
        theme: "EXPERIMENTATION",
    },
];


const stands: IStand[] = [
    {
        id: "scalab",
        name: "SCALab",
        longName: "SCALab - Laboratoire",
        location: "L1",
        themes: ["INFLUENCE", "MOUVEMENT", "EXPERIMENTATION"],
    },
    {
        id: "mint",
        name: "Equipe MINT",
        longName: "Equipe MINT  - CRISTAL - Laboratoire ",
        location: "L2",
    },
    {
        id: "anthropo",
        name: "Anthropo-Lab",
        longName: "Anthropo-Lab - Laboratoire",
        location: "L3",
    },
    {
        id: "psycos",
        name: "PsyCos",
        longName: "PsyCos - Neurethic",
        location: "L4",
        themes: ["INFLUENCE", "MOUVEMENT"],
        description: "L’équipe PSyCOS (Processus Sociaux et Cognitifs dans les Organisations et la Santé) du laboratoire ETHICS (EA7446) développe une activité de recherche fondamentale et appliquée, visant à éclairer les processus sociaux et cognitifs impliqués dans le fonctionnement des individus et des groupes, dans les champs de la santé (au travail ou dans différentes pathologies neurologiques). En étroite collaboration avec le projet NEURETHIC, cette équipe développe des travaux combinant des mesures cognitivo-comportementales à divers signaux neurophysiologiques chez des sujets sains et auprès de patients souffrant de divers pathologies neurologiques."
    },
    {
        id: "isa",
        name: "ISA",
        longName: "ISA - Junia",
        themes: ["INFLUENCE", "MOUVEMENT"],
        location: "L6",
        description: "Vous vous demandez si des interactions existent entre nos sens, pourquoi la musique est si forte dans les bars, si la musique influence notre perception lorsque nous buvons une boisson, ou plus largement quels éléments guident notre ressenti lorsque nous dégustons une bière ? Venez participer à une expérience sensorielle."
    },
    {
        id: "isen",
        name: "ISEN",
        longName: "ISEN - Junia",
        location: "L5",
    },
    {
        id: "mel",
        name: "MEL",
        longName: "Métropole Européenne de Lille",
        themes: ["SOCIETE"],
        location: "R1",
    },
    {
        id: "catho",
        name: "ICL",
        longName: "Master de Neuropsychologie et de neurosciences cognitives",
        location: "F3",
        themes: ["SOCIETE"],
        description: "Ce Master répond aux exigences cliniques et de recherche du métier de psychologue, spécialisé en neuropsychologie, en proposant une formation théorique et pratique dans le domaine de la neuropsychologie de l’enfant que de l’adulte, avec une visée diagnostique, de rééducation cognitive et d’accompagnement psychologique. Cette formation permet de répondre aux challenges de la neuropsychologie actuelle et de demain, en centrant sa formation sur l’apport de connaissances indispensables, tant à la pratique professionnelle qu’au développement et au suivi de recherches fondamentales en neurosciences cognitives"
    },
    {
        id: "ppnsa",
        name: "Master PPNSA",
        longName: "Master PPNSA - Université de Lille",
        location: "F2",
        description: "Le Master Psychologie parcours Psychologie des Processus Neurocognitifs et Sciences Affectives - PPNSA est un Master Européen (codiplômation avec les Universités de Naples-Italie et Minho-Portugal) qui vise à former des psychologues spécialistes du fonctionnement normal et pathologique des processus neurocognitifs et affectifs. Il vise également à fournir une formation approfondie sur la pratique de la recherche et prépare ainsi au Doctorat de psychologie."
    },
    {
        id: "sce",
        name: "Master SCE",
        longName: "Master Sciences cognitives pour l’Entreprise - Université de Lille",
        location: "F1",
        description: "Le Master Sciences Cognitives pour l’Entreprise (SCE), proposé par l’UFR de Psychologie de l’Université de Lille, vise à former des professionnels spécialisés dans la cognition humaine capables de réaliser des études en recherche appliquée, de concevoir des dispositifs l’interaction homme-machine en prenant en compte les contraintes physiques, physiologiques et psychologies des humainsLe Master Sciences Cognitives pour l’Entreprise (SCE), proposé par l’UFR de Psychologie de l’Université de Lille, vise à former des professionnels spécialisés dans la cognition humaine capables de réaliser des études en recherche appliquée, de concevoir des dispositifs l’interaction homme-machine en prenant en compte les contraintes physiques, physiologiques et psychologies des humains"
    },
    {
        id: "casc",
        name: "CASC",
        longName: "CASC - Association",
        location: "A2",
    },
    {
        id: "fresco",
        name: "La Fresco",
        longName: "La Fresco - Association",
        location: "A1",
    },
    {
        id: "xperium",
        name: "Xperium",
        longName: "Xperium",
        location: "R2",
    },
    {
        id: "gaze",
        name: "Gaze intelligence",
        longName: "Gaze intelligence",
        location: "P1",
    },
    {
        id: "fresnoy",
        name: "Le Fresnoy",
        longName: "Le Fresnoy",
        location: "P1",
    }
]

// Workshops and demos combined
const workshops: IWorkshop[] = [
    {
        id: "1",
        speakersId: ["jM", "aMarie"],
        title: "Dark patterns et design éthique",
        description:
            "Être addict à son smartphone est de plus en plus courant, et pour cause ! Les géants du numérique font tout pour nous rendre accros, quitte à utiliser notre cerveau contre nous. En effet, les interfaces de nos sites et applications préférées sont pleines de pièges et astuces appelés dark patterns. Les dark patterns sont notamment basés sur nos biais cognitifs ce qui les rend particulièrement redoutables. Pour lutter contre, de plus en plus de designers dénoncent ces usages et prônent un design éthique, qui ne profite pas de notre cerveau pour nous détourner de nos intentions d’origine. Pour vous sensibiliser à ce sujet, nous vous proposons de participer en groupe à notre atelier qui prendra la forme d’un jeu de société inspiré du saboteur ! Vous pourrez ainsi tenter de concevoir une interface utilisateur éthique… à moins que les Dark UX de l’équipe ne vous en empêchent !",
    },
    {
        id: "2",
        speakersId: ["bFlorent"],
        title: "Augmentations visuelles pour la musique numérique",
        description: "",
    },
    {
        id: "3",
        speakersId: ["hCatherine"],
        title:
            "Reconnaissance d'actions humaines dans un environnement robotique d'assistance à la personne",
        description: "",
    }
]

