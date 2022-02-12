const events = [
    {
        id: "1",
        speakerId: "1",
        title: "Cognition incarnée",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit alias odio repudiandae earum temporibus fugit placeat voluptate esse, nemo impedit velit labore, ut consequuntur porro vitae assumenda officia blanditiis possimus?",
        date: "12h - 13h",
        theme: ""
    },
    {
        id: "2",
        speakerId: "1",
        title: "Perception du mouvement",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit alias odio repudiandae earum temporibus fugit placeat voluptate esse, nemo impedit velit labore, ut consequuntur porro vitae assumenda officia blanditiis possimus?",
        date: "13h - 14h",
        theme: ""
    },
    {
        id: "3",
        speakerId: "1",
        title: "Cognition incarnée",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit alias odio repudiandae earum temporibus fugit placeat voluptate esse, nemo impedit velit labore, ut consequuntur porro vitae assumenda officia blanditiis possimus?",
        date: "14h - 15h",
        theme: ""
    }
]

export const getEvents = () => events;
export const getEvent = (id: string) => events.filter(event => event.id === id )[0];