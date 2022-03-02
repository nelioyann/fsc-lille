import { standIds } from "./events";


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
}
const speakers: ISpeaker[] = [
    {
        id: "bVictor",
        firstName: 'Victor',
        lastName: 'Brossard',
        role: '',
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
        role: '',
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
        role: '',
        companyId: "fresco",
        photoUrl: "/assets/speakers/Marie.png",
        twitter: "",
        linkedin: "",
        biography: ""
    }
    ,
    {
        id: "jM",
        firstName: 'Jean-Michel',
        lastName: "Dagba",
        role: '',
        companyId: "fresco",
        photoUrl: "/assets/speakers/JM.png",
        twitter: "",
        linkedin: "",
        biography: ""
    }
    ,
    {
        id: "iNacim",
        firstName: 'Nacim',
        lastName: "Ihaddadene",
        role: '',
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
        role: '',
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
        role: '',
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
        role: '',
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
        role: '',
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
        role: '',
        companyId: "isa",
        photoUrl: "/assets/speakers/Mathilde.jpg",
        twitter: "",
        linkedin: "",
        biography: ""
    }
    // ,
    // {
    //     id: "dLaure",
    //     firstName: 'Laure',
    //     lastName: "Dobigny",
    //     role: '',
    //     companyId: "MEL",
    //     photoUrl: "/assets/speakers/FSC.svg",
    //     twitter: "",
    //     linkedin: "",
    //     biography: ""
    // }
    ,
    {
        id: "hCatherine",
        firstName: 'Catherine',
        lastName: "Huyghe",
        role: '',
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
        role: '',
        companyId: "catho",
        photoUrl: "/assets/speakers/pEric.svg",
        twitter: "",
        linkedin: "",
        biography: ""
    }
    ,
    {
        id: "kJerome",
        firstName: 'Jerome',
        lastName: "Klimsza",
        role: '',
        companyId: "mel",
        photoUrl: "/assets/speakers/kJerome.svg",
        twitter: "",
        linkedin: "",
        biography: ""
    }
    ,
    {
        id: "gPierre",
        firstName: 'Pierre',
        lastName: "Giorgini",
        role: '',
        companyId: "catho",
        photoUrl: "/assets/speakers/gPierre.svg",
        twitter: "",
        linkedin: "",
        biography: ""
    }
    
]

export const getSpeakers = () => speakers;
export const getSpeaker = (id: string) => speakers.find(speaker => speaker.id === id );
export const getSpeakerImage = (id: string) => speakers.filter(speaker => speaker.id === id )[0]?.photoUrl || "/assets/speakers/FSC.svg";
export const getSpeakerSummary = (id: string, full = false) => {
        let {firstName, lastName, role, companyId} = speakers.filter(speaker => speaker.id === id )[0];
        if (full) return `${firstName} ${lastName}, ${role}, getCompanyName${companyId}`
        return `${firstName} ${lastName}`
};

