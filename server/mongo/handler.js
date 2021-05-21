const { UserModel, ChatRoomModel } = require("./model");

const signUp = (name, email, password) => {
    return new Promise((resolve, reject) => {
        const user = new UserModel({ name, email, password });
        user.save().then(() => resolve()).catch(() => reject());
    });
}

const login = (email, password) => {
    return new Promise((resolve, reject) => {
        UserModel.findOne({ email }).then(user => {
            if (user.password === password) resolve(user);
            reject();
        }).catch(reject)
    });
}

const createRoom = (name, description, host) => {
    return new Promise((resolve, reject) => {
        const room = new ChatRoomModel({ name, description, host, chats: [], users: [] });
        room.save().then(roomData => resolve(roomData)).catch(() => reject());
    });
}

module.exports = {
    signUp,
    login,
    createRoom
}