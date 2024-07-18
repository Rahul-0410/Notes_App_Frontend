import NotesApiBackend from "./Notes-api";

let username = '';

export const logInUser = async({ email, password }) => {
    const response = await NotesApiBackend.post("/user/login", { email, password });
    if (response.data.user && response.data.user.username) {
        username = response.data.user.username;
        localStorage.setItem("username", username);
        localStorage.setItem("token", response.data.token);
    }
    return response.data;
};

export const signUp = async(userData) => {
    const response = await NotesApiBackend.post("/user/signup", userData);
    if (response.data.user && response.data.user.username) {
        username = response.data.user.username;
        localStorage.setItem("username", username);
        localStorage.setItem("token", response.data.token);
    }
    return response.data;
};

export const logOutUser = async() => {
    const response = await NotesApiBackend.post("/user/logout");
    if (response.status === 200) {
        username = '';
        localStorage.removeItem("username");
        localStorage.removeItem("token");
    }
    return response.data;
};

export const getUsername = () => {
    return username || localStorage.getItem("username") || '';
};