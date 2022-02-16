const events = [
    {
        id: "1",
        speakerId: "1",
        title: "Illusion d'optique",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit alias odio repudiandae earum temporibus fugit placeat voluptate esse, nemo impedit velit labore, ut consequuntur porro vitae assumenda officia blanditiis possimus?",
        date: "12h - 13h",
        theme: "INFLUENCE"
    },
    {
        id: "2",
        speakerId: "1",
        title: "Le biais de positivité",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit alias odio repudiandae earum temporibus fugit placeat voluptate esse, nemo impedit velit labore, ut consequuntur porro vitae assumenda officia blanditiis possimus?",
        date: "13h - 14h",
        theme: "INFLUENCE"
    },
    {
        id: "3",
        speakerId: "1",
        title: "Le goût de la bière et la musique",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit alias odio repudiandae earum temporibus fugit placeat voluptate esse, nemo impedit velit labore, ut consequuntur porro vitae assumenda officia blanditiis possimus?",
        date: "14h - 15h",
        theme: "INFLUENCE"
    },
    {
        id: "4",
        speakerId: "1",
        title: "Atelier biais",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit alias odio repudiandae earum temporibus fugit placeat voluptate esse, nemo impedit velit labore, ut consequuntur porro vitae assumenda officia blanditiis possimus?",
        date: "14h - 15h",
        theme: "INFLUENCE"
    },
    {
        id: "5",
        speakerId: "1",
        title: "Stress hydrique et perception de la météo",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit alias odio repudiandae earum temporibus fugit placeat voluptate esse, nemo impedit velit labore, ut consequuntur porro vitae assumenda officia blanditiis possimus?",
        date: "14h - 15h",
        theme: "SOCIETE"
    },
    {
        id: "6",
        speakerId: "1",
        title: "Ecologie et action ",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit alias odio repudiandae earum temporibus fugit placeat voluptate esse, nemo impedit velit labore, ut consequuntur porro vitae assumenda officia blanditiis possimus?",
        date: "14h - 15h",
        theme: "SOCIETE"
    },
    {
        id: "7",
        speakerId: "1",
        title: "ECOPOSS",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit alias odio repudiandae earum temporibus fugit placeat voluptate esse, nemo impedit velit labore, ut consequuntur porro vitae assumenda officia blanditiis possimus?",
        date: "14h - 15h",
        theme: "SOCIETE"
    },
    {
        id: "8",
        speakerId: "1",
        title: "Musique et illusion dans l’effort physique",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit alias odio repudiandae earum temporibus fugit placeat voluptate esse, nemo impedit velit labore, ut consequuntur porro vitae assumenda officia blanditiis possimus?",
        date: "14h - 15h",
        theme: "MOUVEMENT"
    },
    {
        id: "9",
        speakerId: "1",
        title: "Perception du mouvement par les robots",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit alias odio repudiandae earum temporibus fugit placeat voluptate esse, nemo impedit velit labore, ut consequuntur porro vitae assumenda officia blanditiis possimus?",
        date: "14h - 15h",
        theme: "MOUVEMENT"
    },
    {
        id: "10",
        speakerId: "1",
        title: "Perception de la gestuelle musicale en musique électronique",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit alias odio repudiandae earum temporibus fugit placeat voluptate esse, nemo impedit velit labore, ut consequuntur porro vitae assumenda officia blanditiis possimus?",
        date: "14h - 15h",
        theme: "MOUVEMENT"
    }
    ,
    {
        id: "11",
        speakerId: "1",
        title: "Vulgarisation scientifique par l’expérimentation",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit alias odio repudiandae earum temporibus fugit placeat voluptate esse, nemo impedit velit labore, ut consequuntur porro vitae assumenda officia blanditiis possimus?",
        date: "14h - 15h",
        theme: "EXPERIMENTATION"
    }
    ,
    {
        id: "12",
        speakerId: "1",
        title: "Les collaborations artistes/laboratoires dans la création contemporaine",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit alias odio repudiandae earum temporibus fugit placeat voluptate esse, nemo impedit velit labore, ut consequuntur porro vitae assumenda officia blanditiis possimus?",
        date: "14h - 15h",
        theme: "EXPERIMENTATION"
    }
    ,
    {
        id: "13",
        speakerId: "1",
        title: "Création entre électrophysiologie et robotique",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit alias odio repudiandae earum temporibus fugit placeat voluptate esse, nemo impedit velit labore, ut consequuntur porro vitae assumenda officia blanditiis possimus?",
        date: "14h - 15h",
        theme: "EXPERIMENTATION"
    }
]

export interface IEvent  {
    id: string;
    speakerId: string[];
    title: string;
    description: string;
    date: string;
    theme: "INFLUENCE" | "MOUVEMENT" | "EXPERIMENTATION" | "SOCIETE";
}

export enum EventThemesEnum  {
    "INFLUENCE" = "La perception sous influence ! ",
    "MOUVEMENT" = "La perception du mouvement humain",
    "SOCIETE" = "Environnement et société : améliorer la perception pour passer à l’action",
    "EXPERIMENTATION" = "Regards croisés sur l’expérimentation citoyenne et artistique"
}
export const getEvents = () => events;
export const getEvent = (id: string) => events.filter(event => event.id === id )[0];