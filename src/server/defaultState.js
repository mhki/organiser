import md5 from 'md5';


export const defaultState = {
    // session: {
    //     authenticated: false
    // },
    users: [{
        id: "UI",
        name: "Dev",
        passwordHash: md5("TUPLES")
    }, {
        id: "U2",
        name: "C. Eeyo",
        passwordHash: md5("PROFITING")
    }],
    groups: [{
        name: "To Do",
        id: "GI",
        owner: "UI"
    }, {
        name: "Doing",
        id: "G2",
        owner: "UI"
    }, {
        name: "DoNE",
        id: "G3",
        owner: "UI"
    }],
    tasks: [{
        name: "ReFACTOR tests",
        id: "TI",
        group: "GI",
        owner: "UI",
        isComplete: false,
    }, {
        name: "Meet with CTO",
        id: "T2",
        group: "GI",
        owner: "UI",
        isComplete: true,
    }, {
        name: "Complie ES6",
        id: "T3",
        group: "G2",
        owner: "U2",
        isComplete: false,
    }],
    comments: [{
        owner: "UI",
        id: "CI",
        task: "TI",
        content: "Great work!!"
    }]
}