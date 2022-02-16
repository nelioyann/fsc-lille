import { ISpeaker } from "../components/Customs/Programmes/SpeakerCard";

const speakers: ISpeaker[] = [
    {
        id: "1",
        firstName: 'Johnny',
        lastName: 'Dog',
        role: 'CEO and Co-founder',
        companyId: "1",
        photoUrl: "https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y",
        twitter: "https://twitter.com/",
        linkedin: "https://www.linkedin.com/in/",
        biography: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit alias odio repudiandae earum temporibus fugit placeat voluptate esse, nemo impedit velit labore, ut consequuntur"
    },
    {
        id: "2",
        firstName: 'Jane',
        lastName: 'Dough',
        role: 'Director',
        companyId: "1",
        photoUrl: "https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y",
        twitter: "https://twitter.com/",
        linkedin: "https://www.linkedin.com/in/",
        biography: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit alias odio repudiandae earum temporibus fugit placeat voluptate esse, nemo impedit velit labore, ut consequuntur"
    },
    {
        id: "3",
        firstName: 'Jean',
        lastName: "D'où",
        role: 'Director',
        companyId: "1",
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

