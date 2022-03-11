import { getCompanyName, standIds } from "./events";


const speakers: ISpeaker[] = [
    {
        id: "bVictor",
        firstName: 'Victor',
        lastName: 'Brossard',
        role: 'Doctorant en psychologie cognitive',
        companyId: "scalab",
        photoUrl: "/assets/speakers/Victor.png",
        twitter: "",
        linkedin: "",
        biography: ""
    },
    {
        id: "lBruno",
        firstName: 'Bruno',
        lastName: 'Lenne',
        role: 'Enseignant chercheur',
        companyId: "psycos",
        photoUrl: "/assets/speakers/lBruno.svg",
        twitter: "",
        linkedin: "",
        biography: ""
    }
    ,
    {
        id: "aMarie",
        firstName: 'Marie',
        lastName: "Auphan",
        role: 'UX/UI Designer',
        companyId: "fresco",
        photoUrl: "/assets/speakers/Marie.png",
        twitter: "https://twitter.com/marieauphan",
        linkedin: "https://www.linkedin.com/in/marie-auphan/",
        biography: "",
        misc: {
            label: "Portfolio",
            url: "/assets/speakers/Marie.pdf"
        }
    }
    ,
    {
        id: "jM",
        firstName: 'Jean-Michel',
        lastName: "Dagba",
        role: 'Doctorant CIFRE en économie comportementale',
        companyId: "fresco",
        photoUrl: "/assets/speakers/JM.png",
        twitter: "",
        linkedin: "https://www.linkedin.com/in/jean-michel-dagba/",
        biography: ""
    }
    ,
    {
        id: "iNacim",
        firstName: 'Nacim',
        lastName: "Ihaddadene",
        role: 'Enseignant chercheur',
        companyId: "isen",
        photoUrl: "/assets/speakers/Nacim.jpg",
        twitter: "",
        linkedin: "",
        biography: ""
    }
    ,
    {
        id: "cSylvie",
        firstName: 'Sylvie',
        lastName: "Chollet",
        role: 'Enseignante chercheuse',
        companyId: "isa",
        photoUrl: "/assets/speakers/Sylvie.jpg",
        twitter: "",
        linkedin: "",
        biography: ""
    }
    ,
    {
        id: "dYvonne",
        firstName: 'Yvonne',
        lastName: "Delevoye",
        role: 'Professeure en psychologie cognitive',
        companyId: "scalab",
        photoUrl: "/assets/speakers/Yvonne.jpg",
        twitter: "",
        linkedin: "",
        biography: ""
    }
    
    ,
    {
        id: "bFlorent",
        firstName: 'Florent',
        lastName: "Berthaut",
        role: 'Enseignant chercheur',
        companyId: "mint",
        photoUrl: "/assets/speakers/Florent.jpeg",
        twitter: "",
        linkedin: "",
        biography: ""
    }
    ,
    {
        id: "zFabien",
        firstName: 'Fabien',
        lastName: "Zocco",
        role: 'Artiste',
        photoUrl: "/assets/speakers/Fabien.jpg",
        twitter: "",
        linkedin: "",
        biography: ""
    }
    ,
    {
        id: "dBeatrice",
        firstName: 'Béatrice',
        lastName: "Degraeve",
        role: 'Enseignante chercheuse',
        companyId: "psycos",
        photoUrl: "/assets/speakers/dBeatrice.svg",
        twitter: "",
        linkedin: "",
        biography: ""
    }
    ,
    {
        id: "vMathilde",
        firstName: 'Mathilde',
        lastName: "Vandenberghe",
        role: 'Enseignante chercheuse',
        companyId: "isa",
        photoUrl: "/assets/speakers/Mathilde.jpg",
        twitter: "",
        linkedin: "",
        biography: ""
    },
    {
        id: "hCatherine",
        firstName: 'Catherine',
        lastName: "Huyghe",
        role: 'Doctorante en deep learning',
        companyId: "isen",
        photoUrl: "/assets/speakers/hCatherine.svg",
        twitter: "",
        linkedin: "",
        biography: ""
    }
    ,
    {
        id: "pEric",
        firstName: 'Eric',
        lastName: "Prigent",
        role: 'Coordinateur arts numériques',
        companyId: "fresnoy",
        photoUrl: "/assets/speakers/Eric.jpg",
        twitter: "",
        linkedin: "",
        biography: ""
    }
    ,
    {
        id: "kJerome",
        firstName: 'Jerome',
        lastName: "Klimsza",
        role: 'Chef de projet',
        companyId: "mel",
        photoUrl: "/assets/speakers/Jerome.jpg",
        twitter: "",
        linkedin: "",
        biography: ""
    }
    ,
    {
        id: "gPierre",
        firstName: 'Pierre',
        lastName: "Giorgini",
        role: 'Ingénieur, auteur, anc. prés. recteur UCL',
        companyId: "catho",
        photoUrl: "/assets/speakers/Pierre.jpg",
        twitter: "",
        linkedin: "",
        biography: ""
    },
    {
        id: "pSophie",
        firstName: 'Sophie',
        lastName: "Picart",
        role: 'MCF en chimie organique - chargée de mission',
        companyId: "xperium",
        photoUrl: "/assets/speakers/Sophie.jpg",
        twitter: "",
        linkedin: "",
        biography: ""
    }
    
]

type Misc = {
    url: string;
    label: string;
}
export interface ISpeaker  {
    id: string;
    firstName: string;
    lastName: string;
    role: string;
    companyId?: standIds;
    photoUrl?: string;
    twitter?: string;
    linkedin?: string;
    biography?: string;
    misc?: Misc;
}

export const getSpeakers = () => speakers;
export const getSpeaker = (id: string) => speakers.find(speaker => speaker.id === id );
export const getSpeakerImage = (id: string) => speakers.filter(speaker => speaker.id === id )[0]?.photoUrl || "/assets/speakers/FSC.svg";
export const getSpeakerSummary = (id: string, fullSummary = false) => {
        let {firstName, lastName, role, companyId} = speakers.filter(speaker => speaker.id === id )[0];
        if (fullSummary) return `${firstName} ${lastName}, ${role}, ${companyId ? getCompanyName(companyId) : ""}`
        return `${firstName} ${lastName}`
};

