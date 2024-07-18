// import NotesApiBackend from "./Notes-api";
// export const getTaskForCurrentUser= async()=>{
//     const {data} = await NotesApiBackend.get("/user/getTask");
//     return data;
// }

// export const addTask= async({description})=>{
//     const {data}= await NotesApiBackend.post("/user/addTask",{description});
//     return data;
// }

import NotesApiBackend from "./Notes-api";

export const getTaskForCurrentUser = async () => {
    const { data } = await NotesApiBackend.get("/user/getTask");
    return data;
}

export const addTask = async ({ description }) => {
    const { data } = await NotesApiBackend.post("/user/addTask", { description });
    return data;
}

export const deleteTask = async (taskId) => {
    console.log('Deleting task with ID:', taskId); // Add this line for debugging
    const { data } = await NotesApiBackend.delete(`/user/deleteTask/${taskId}`);
    return data;
}