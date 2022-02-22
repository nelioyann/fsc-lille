const events = [
    {
        id: "1",
        speakersId: ["bVictor"],
        title: "Les limites de la perception visuelle",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit alias odio repudiandae earum temporibus fugit placeat voluptate esse, nemo impedit velit labore, ut consequuntur porro vitae assumenda officia blanditiis possimus?",
        date: "11h",
        theme: "INFLUENCE"
    },
    {
        id: "2",
        speakersId: ["1"],
        title: "La conscience du temps nous fait positiver",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit alias odio repudiandae earum temporibus fugit placeat voluptate esse, nemo impedit velit labore, ut consequuntur porro vitae assumenda officia blanditiis possimus?",
        date: "11h",
        theme: "INFLUENCE"
    },
    {
        id: "3",
        speakersId: ["vMathilde", "cSylvie"],
        title: "Le goût de la bière et la musique",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit alias odio repudiandae earum temporibus fugit placeat voluptate esse, nemo impedit velit labore, ut consequuntur porro vitae assumenda officia blanditiis possimus?",
        date: "11h",
        theme: "INFLUENCE"
    },
    {
        id: "4",
        speakersId: ["1"],
        title: "Atelier biais",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit alias odio repudiandae earum temporibus fugit placeat voluptate esse, nemo impedit velit labore, ut consequuntur porro vitae assumenda officia blanditiis possimus?",
        date: "14h - 15h",
        theme: "INFLUENCE"
    },
    {
        id: "5",
        speakersId: ["kJerome"],
        title: "Perception de la météo et stress hydrique",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit alias odio repudiandae earum temporibus fugit placeat voluptate esse, nemo impedit velit labore, ut consequuntur porro vitae assumenda officia blanditiis possimus?",
        date: "12h",
        theme: "SOCIETE"
    },
    {
        id: "6",
        speakersId: ["dLaure"],
        title: "Ecologie et action ",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit alias odio repudiandae earum temporibus fugit placeat voluptate esse, nemo impedit velit labore, ut consequuntur porro vitae assumenda officia blanditiis possimus?",
        date: "12h",
        theme: "SOCIETE"
    },
    {
        id: "7",
        speakersId: ["gPierre"],
        title: "ECOPOSS : agir pour un futur désirable",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit alias odio repudiandae earum temporibus fugit placeat voluptate esse, nemo impedit velit labore, ut consequuntur porro vitae assumenda officia blanditiis possimus?",
        date: "12h",
        theme: "SOCIETE"
    },
    {
        id: "8",
        speakersId: ["dYvonne"],
        title: "Musique et illusion dans l’effort physique",
        description: "S’engager dans la pratique d’une séance de sport requiert la capacité de gérer l’effort physique et mentale associée à l’exercice. Nous présenterons comment la musique permet de donner l’illusion de bouger plus rapidement ou plus lentement en fonction de l’énergie sonore perçue.",
        date: "14h",
        theme: "MOUVEMENT"
    },
    {
        id: "9",
        speakersId: ["iNacim"],
        title: "Perception artificielle et mouvement",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit alias odio repudiandae earum temporibus fugit placeat voluptate esse, nemo impedit velit labore, ut consequuntur porro vitae assumenda officia blanditiis possimus?",
        date: "14h",
        theme: "MOUVEMENT"
    },
    {
        id: "10",
        speakersId: ["bFlorent"],
        title: "Perception de la gestuelle dans la musique électronique",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit alias odio repudiandae earum temporibus fugit placeat voluptate esse, nemo impedit velit labore, ut consequuntur porro vitae assumenda officia blanditiis possimus?",
        date: "14h",
        theme: "MOUVEMENT"
    }
    ,
    {
        id: "11",
        speakersId: ["bVictor"],
        title: "L’ XPERIUM la vulgarisation scientifique par l’expérimentation",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit alias odio repudiandae earum temporibus fugit placeat voluptate esse, nemo impedit velit labore, ut consequuntur porro vitae assumenda officia blanditiis possimus?",
        date: "15h",
        theme: "EXPERIMENTATION"
    }
    ,
    {
        id: "12",
        speakersId: ["pEric"],
        title: "Les collaborations artistes/laboratoires dans la création contemporaine",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit alias odio repudiandae earum temporibus fugit placeat voluptate esse, nemo impedit velit labore, ut consequuntur porro vitae assumenda officia blanditiis possimus?",
        date: "15h",
        theme: "EXPERIMENTATION"
    }
    ,
    {
        id: "13",
        speakersId: ["zFabien"],
        title: "Spider and I : robot, émotion et électrophysiologie",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit alias odio repudiandae earum temporibus fugit placeat voluptate esse, nemo impedit velit labore, ut consequuntur porro vitae assumenda officia blanditiis possimus?",
        date: "15h",
        theme: "EXPERIMENTATION"
    }
]

export interface IEvent  {
    id: string;
    speakersId: string[];
    title: string;
    description: string;
    date: string;
    theme: "INFLUENCE" | "MOUVEMENT" | "EXPERIMENTATION" | "SOCIETE";
}

export enum EventThemesEnum  {
    "INFLUENCE" = "La perception sous influence ! ",
    "MOUVEMENT" = "Au-delà du mouvement",
    "SOCIETE" = "Environnement et société : améliorer la perception pour passer à l’action",
    "EXPERIMENTATION" = "Regards croisés sur l’expérimentation citoyenne et artistique"
}
export const getEvents = () => events;
export const getEvent = (id: string) => events.filter(event => event.id === id )[0];