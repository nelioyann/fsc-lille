const events: IEvent[] = [
    {
        id: "1",
        speakersId: ["bVictor"],
        title: "Les limites de la perception visuelle",
        description:
            "Vous vous êtes sans doute déjà trouvés face à une illusion d'optique qui vous a fait douter de votre vue. Quelle est la science derrière ces illusions ? Et comment perçoit-on une image ? Vous vous doutez probablement que c'est grâce à vos yeux, mais en êtes-vous sûrs ? Les yeux ne sont que le point de départ de notre système visuel et si vous souhaiter en savoir plus, venez découvrir comment vos yeux et votre cerveau perçoivent le monde qui vous entoure.",
        date: "11h",
        theme: "INFLUENCE",
    },
    {
        id: "2",
        speakersId: ["lBruno", "dBeatrice"],
        title: "La conscience du temps nous fait positiver",
        description: "",
        date: "11h",
        theme: "INFLUENCE",
    },
    {
        id: "3",
        speakersId: ["vMathilde", "cSylvie"],
        title: "Le goût de la bière et la musique",
        description: "",
        date: "11h",
        theme: "INFLUENCE",
    },
    {
        id: "4",
        speakersId: ["kJerome"],
        title: "Perception de la météo et stress hydrique",
        description: "",
        date: "12h",
        theme: "SOCIETE",
    },
    // {
    //     id: "5",
    //     speakersId: ["dLaure"],
    //     title: "Ecologie et action ",
    //     description: "",
    //     date: "12h",
    //     theme: "SOCIETE",
    // },
    {
        id: "6",
        speakersId: ["gPierre"],
        title: "ECOPOSS : agir pour un futur désirable",
        description: "",
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
    },
    {
        id: "8",
        speakersId: ["iNacim"],
        title: "Perception artificielle et mouvement",
        description: "",
        date: "14h",
        theme: "MOUVEMENT",
    },
    {
        id: "9",
        speakersId: ["bFlorent"],
        title: "Perception de la gestuelle dans la musique électronique",
        description: "",
        date: "14h",
        theme: "MOUVEMENT",
    },
    {
        id: "10",
        speakersId: ["bVictor"],
        title: "L’ XPERIUM la vulgarisation scientifique par l’expérimentation",
        description: "",
        date: "15h",
        theme: "EXPERIMENTATION",
    },
    {
        id: "11",
        speakersId: ["pEric"],
        title:
            "Les collaborations artistes/laboratoires dans la création contemporaine",
        description: "",
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

const stands = {
    INFLUENCE: ["SCALab", "PsyCos", "ISA", "Neurethic"],
    MOUVEMENT: ["SCALab", "PsyCos", "ISA", "Neurethic"],
    SOCIETE: ["Métropole Européenne de Lille", "Institut Catholique de Lille"],
    EXPERIMENTATION: ["SCALab"],
};

const workshops: IWorkshops = {
    INFLUENCE: [
        {
            speakersId: ["jM", "aMarie"],
            title: "Dark patterns et design éthique",
            description:
                "Être addict à son smartphone est de plus en plus courant, et pour cause ! Les géants du numérique font tout pour nous rendre accros, quitte à utiliser notre cerveau contre nous. En effet, les interfaces de nos sites et applications préférées sont pleines de pièges et astuces appelés dark patterns. Les dark patterns sont notamment basés sur nos biais cognitifs ce qui les rend particulièrement redoutables. Pour lutter contre, de plus en plus de designers dénoncent ces usages et prônent un design éthique, qui ne profite pas de notre cerveau pour nous détourner de nos intentions d’origine. Pour vous sensibiliser à ce sujet, nous vous proposons de participer en groupe à notre atelier qui prendra la forme d’un jeu de société inspiré du saboteur ! Vous pourrez ainsi tenter de concevoir une interface utilisateur éthique… à moins que les Dark UX de l’équipe ne vous en empêchent !",
        },
    ],
    MOUVEMENT: [
        {
            speakersId: ["bFlorent"],
            title: "Augmentations visuelles pour la musique numérique",
            description: "",
        },
        {
            speakersId: ["hCatherine"],
            title:
                "Reconnaissance d'actions humaines dans un environnement robotique d'assistance à la personne",
            description: "",
        },
    ],
    SOCIETE: [],
    EXPERIMENTATION: [],
};

interface IWorkshop {
    speakersId: string[];
    title: string;
    description?: string;
}
interface IWorkshops {
    INFLUENCE?: IWorkshop[];
    MOUVEMENT?: IWorkshop[];
    SOCIETE?: IWorkshop[];
    EXPERIMENTATION?: IWorkshop[];
}

export interface IEvent {
    id: string;
    speakersId: string[];
    title: string;
    description: string;
    date: string;
    theme: "INFLUENCE" | "MOUVEMENT" | "EXPERIMENTATION" | "SOCIETE";
}

export enum EventThemesEnum {
    "INFLUENCE" = "La perception sous influence ! ",
    "SOCIETE" = "Environnement et société : améliorer la perception pour passer à l’action",
    "MOUVEMENT" = "Au-delà du mouvement",
    "EXPERIMENTATION" = "Regards croisés sur l’expérimentation citoyenne et artistique",
}
export const getEvents = () => events;
export const getEvent = (id: string) => events.find((event) => event.id === id);
export const filterStands = (theme: "INFLUENCE" | "MOUVEMENT" | "EXPERIMENTATION" | "SOCIETE") => stands[theme];
// export const filterEvents = (theme: "INFLUENCE" | "MOUVEMENT" | "EXPERIMENTATION" | "SOCIETE", id: string) => events.filter(event.theme === theme)
