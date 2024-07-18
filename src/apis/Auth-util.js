// import { logInUser, signUp } from "./user-Api";
// import NotesApiBackend from "./Notes-api";
// import axios from "axios";

// const getLocalStorageUser = () => {
//     return JSON.parse(localStorage.getItem("id"));
// }

// const setUser = (user) => {
//     localStorage.setItem("id", JSON.stringify(user));
// }

// const loginUserFunction = async ({email, password}) => {
//     const user = await logInUser({email, password});
//     setUser(user._id);
//     return user;
// }

// const SignupUser = async (userData) => {
//     const user = await signUp(userData);
//     return user;
// }
// const GoogleloginUser = async (userData) => {

//     const response = await axios.get(`https://oauth2.googleapis.com/tokeninfo?id_token=${userData}`);
//     const { email } = response.data;
//     console.log(email);
//     const user = await NotesApiBackend.post("/user/googlelogin", {email})
//     setUser(user.data._id);
//     return user;

// };

// export { 
//     loginUserFunction as loginUser,
//     SignupUser,
//     getLocalStorageUser,
//     GoogleloginUser,
// };


import { logInUser, signUp } from "./user-Api";
import NotesApiBackend from "./Notes-api";
import axios from "axios";

// Helper function to get the user ID from local storage

const getUserToken = () => {
    return localStorage.getItem("token");
};

export { getUserToken };

const getLocalStorageUser = () => {
    return JSON.parse(localStorage.getItem("user"));
}

// Helper function to set the user ID in local storage
const setUser = (data) => {
    localStorage.setItem("user", JSON.stringify(data.user));
    localStorage.setItem("token", data.token);
}

// Function to log in a user with email and password
const loginUserFunction = async ({ email, password }) => {
    const data = await logInUser({ email, password });
    setUser(data);
    return data.user;
}

// Function to sign up a new user
const SignupUser = async (userData) => {
    const data = await signUp(userData);
    setUser(data);
    return data.user;
}

// Function to log in a user using Google OAuth
const GoogleloginUser = async (idToken) => {
    const response = await axios.get(`https://oauth2.googleapis.com/tokeninfo?id_token=${idToken}`);
    const { email } = response.data;
    const { data } = await NotesApiBackend.post("/googlelogin", { email });
    setUser(data);
    return data.user;
};

// Exporting the functions
export { 
    loginUserFunction as loginUser,
    SignupUser,
    getLocalStorageUser,
    GoogleloginUser,
};
