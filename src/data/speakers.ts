import { ISpeaker } from "../components/Customs/Programmes/SpeakerCard";

const speakers: ISpeaker[] = [
    {
        id: "bVictor",
        firstName: 'Victor',
        lastName: 'Brossard',
        role: '',
        companyId: "scalab",
        photoUrl: "https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y",
        twitter: "https://twitter.com/",
        linkedin: "https://www.linkedin.com/in/",
        biography: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit alias odio repudiandae earum temporibus fugit placeat voluptate esse, nemo impedit velit labore, ut consequuntur"
    },
    {
        id: "lBruno",
        firstName: 'Bruno',
        lastName: 'Lenne',
        role: '',
        companyId: "psycos",
        photoUrl: "https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y",
        twitter: "https://twitter.com/",
        linkedin: "https://www.linkedin.com/in/",
        biography: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit alias odio repudiandae earum temporibus fugit placeat voluptate esse, nemo impedit velit labore, ut consequuntur"
    }
    ,
    {
        id: "dBeatrice",
        firstName: 'Béatrice',
        lastName: "Degraeve",
        role: 'Director',
        companyId: "psycos",
        photoUrl: "https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y",
        twitter: "https://twitter.com/",
        linkedin: "https://www.linkedin.com/in/",
        biography: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit alias odio repudiandae earum temporibus fugit placeat voluptate esse, nemo impedit velit labore, ut consequuntur"
    }
    ,
    {
        id: "vMathilde",
        firstName: 'Mathilde',
        lastName: "Vandenberghe",
        role: '',
        companyId: "isa",
        photoUrl: "https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y",
        twitter: "https://twitter.com/",
        linkedin: "https://www.linkedin.com/in/",
        biography: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit alias odio repudiandae earum temporibus fugit placeat voluptate esse, nemo impedit velit labore, ut consequuntur"
    }
    ,
    {
        id: "cSylvie",
        firstName: 'Sylvie',
        lastName: "Chollet",
        role: 'Director',
        companyId: "isa",
        photoUrl: "https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y",
        twitter: "https://twitter.com/",
        linkedin: "https://www.linkedin.com/in/",
        biography: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit alias odio repudiandae earum temporibus fugit placeat voluptate esse, nemo impedit velit labore, ut consequuntur"
    }
    ,
    {
        id: "1",
        firstName: 'John',
        lastName: "Doe",
        role: 'Director',
        companyId: "isa",
        photoUrl: "https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y",
        twitter: "https://twitter.com/",
        linkedin: "https://www.linkedin.com/in/",
        biography: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit alias odio repudiandae earum temporibus fugit placeat voluptate esse, nemo impedit velit labore, ut consequuntur"
    }
]

export const getSpeakers = () => speakers;
export const getSpeaker = (id: string) => speakers.filter(speaker => speaker.id === id )[0];
export const getSpeakerImage = (id: string) => speakers.filter(speaker => speaker.id === id )[0].photoUrl;
export const getSpeakerSummary = (id: string) => {
        let {firstName, lastName, role, companyId} = speakers.filter(speaker => speaker.id === id )[0];
        return `${firstName} ${lastName}, ${role}, getCompanyName${companyId}`
};

