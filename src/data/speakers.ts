import { ISpeaker } from "../components/Customs/Programmes/SpeakerCard";

const speakers: ISpeaker[] = [
    {
        id: "1",
        firstName: 'Johnny',
        lastName: 'Dog',
        role: 'CEO and Co-founder',
        companyId: "1",
        photoUrl: "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/579d4057-5860-4f5e-a6f1-4b1fbadedd8e/logoTeteVert.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220211T040019Z&X-Amz-Expires=86400&X-Amz-Signature=2a1f4912826e2841b6773e0ff7d8477cfa2abc1085f5c86050338d6a5ad42de3&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22logoTeteVert.png%22&x-id=GetObject",
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
        photoUrl: "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/579d4057-5860-4f5e-a6f1-4b1fbadedd8e/logoTeteVert.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220211T040019Z&X-Amz-Expires=86400&X-Amz-Signature=2a1f4912826e2841b6773e0ff7d8477cfa2abc1085f5c86050338d6a5ad42de3&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22logoTeteVert.png%22&x-id=GetObject",
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

