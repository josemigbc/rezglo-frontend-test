export type User = {
    username: string,
    photo: string
}

export type Message = {
    user: User,
    text: string,
    timestamp: number
}

export type ChatData = {
    id: number,
    name: string,
    messages: Message[]
}

export const data: {channels: ChatData[], directs: ChatData[]} = {
    channels: [
        {
            id: 1,
            name: "Design",
            messages: [
                {
                    user: {
                        username: "Jhon Wood",
                        photo: "/src/assets/react.svg"
                    },
                    text: "Hello everyone",
                    timestamp: 1700000000000,
                },
                {
                    user: {
                        username: "Jhon Wood",
                        photo: "/src/assets/react.svg"
                    },
                    text: "Hello everyone",
                    timestamp: 1700000000098,
                },
                {
                    user: {
                        username: "Jhon Wood",
                        photo: "/src/assets/react.svg"
                    },
                    text: "Hello everyone",
                    timestamp: 1700000000123,
                }
            ]
        },
        {
            id: 2,
            name: "Frontend",
            messages: [
                {
                    user: {
                        username: "Jhon Wood",
                        photo: "/src/assets/react.svg"
                    },
                    text: "Hello everyone",
                    timestamp: 1700000000000,
                },
                {
                    user: {
                        username: "Jhon Wood",
                        photo: "/src/assets/react.svg"
                    },
                    text: "Hello everyone",
                    timestamp: 1700000000098,
                },
                {
                    user: {
                        username: "Jhon Wood",
                        photo: "/src/assets/react.svg"
                    },
                    text: "Hello everyone",
                    timestamp: 1700000000123,
                }
            ]
        },
        {
            id: 3,
            name: "Backend",
            messages: [
                {
                    user: {
                        username: "Jhon Wood",
                        photo: "/src/assets/react.svg"
                    },
                    text: "Hello everyone",
                    timestamp: 1700000000000,
                },
                {
                    user: {
                        username: "Jhon Wood",
                        photo: "/src/assets/react.svg"
                    },
                    text: "Hello everyone",
                    timestamp: 1700000000098,
                },
                {
                    user: {
                        username: "Jhon Wood",
                        photo: "/src/assets/react.svg"
                    },
                    text: "Hello everyone",
                    timestamp: 1700000000123,
                }
            ]
        }
    ],
    directs: [
        {
            id: 4,
            name: "Matt Weber",
            messages: [
                {
                    user: {
                        username: "Jhon Wood",
                        photo: "/src/assets/react.svg"
                    },
                    text: "Hello everyone",
                    timestamp: 1700000000000,
                },
                {
                    user: {
                        username: "Jhon Wood",
                        photo: "/src/assets/react.svg"
                    },
                    text: "Hello everyone",
                    timestamp: 1700000000098,
                },
                {
                    user: {
                        username: "Jhon Wood",
                        photo: "/src/assets/react.svg"
                    },
                    text: "Hello everyone",
                    timestamp: 1700000000123,
                }
            ]
        },
        {
            id: 5,
            name: "Andrew Ferguson",
            messages: [
                {
                    user: {
                        username: "Andrew Ferguson",
                        photo: "/src/assets/react.svg"
                    },
                    text: "Hello everyone",
                    timestamp: 1700000000000,
                },
                {
                    user: {
                        username: "Andrew Ferguson",
                        photo: "/src/assets/react.svg"
                    },
                    text: "Today is a work day",
                    timestamp: 1700000000098,
                },
                {
                    user: {
                        username: "You",
                        photo: "/src/assets/react.svg"
                    },
                    text: "All is ok.",
                    timestamp: 1700000000123,
                }
            ]
        },
        {
            id: 6,
            name: "Elizabeth Godwin",
            messages: [
                {
                    user: {
                        username: "Jhon Wood",
                        photo: "/src/assets/react.svg"
                    },
                    text: "Hello everyone",
                    timestamp: 1700000000000,
                },
                {
                    user: {
                        username: "Jhon Wood",
                        photo: "/src/assets/react.svg"
                    },
                    text: "Hello everyone",
                    timestamp: 1700000000098,
                },
                {
                    user: {
                        username: "Jhon Wood",
                        photo: "/src/assets/react.svg"
                    },
                    text: "Hello everyone",
                    timestamp: 1700000000123,
                }
            ]
        }
    ]
}