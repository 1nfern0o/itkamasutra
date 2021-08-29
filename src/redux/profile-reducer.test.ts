import profileReducer, {actions} from "./profile-reducer";

let state = {
    postsData: [
        {
            id: 1,
            message: "Hi, who are u?",
            likes: 12
        },
        {
            id: 2,
            message: "Hi, who are u Doe?",
            likes: 1
        },
        {
            id: 3,
            message: "Hi, who are John?",
            likes: 129
        },
        {
            id: 4,
            message: "Hi, who are John 1?",
            likes: 129
        }
    ],
    profile: null,
    status: '',
    newPostText: ''
};

it('length of posts should be incremented', () => {
    // 1. test data
    let action = actions.addPostActionCreator("it-kamasutra.com");

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
     expect(newState.postsData.length).toBe(5);
});

it('message of new post should be correct', () => {
    // 1. test data
    let action = actions.addPostActionCreator("it-kamasutra.com");

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.postsData[4].message).toBe("it-kamasutra.com");
});

it('after deleting length of messages should be decrement', () => {
    // 1. test data
    let action = actions.deletePost(1);

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.postsData.length).toBe(3);
});

it("after deleting length shouldn't be decrement if id is incorrect", () => {
    // 1. test data
    let action = actions.deletePost(1000);

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.postsData.length).toBe(4);
});