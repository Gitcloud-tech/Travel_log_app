import axios from "axios";
// const baseURL = `${process.env.REACT_APP_BASEPATH}`
const baseURL = process.env.REACT_APP_BASEPATH;

//----------------------------------Blogger Api-------------------------

//================= CREATE  ONE BLOGGER===============================
export async function register(creditials) {
    try {
        const response = await axios.post(`${baseURL}/register-blogger`, creditials);
        return response.data;
    } catch (error) {
        console.error('Error during registration:', error);
        throw error; 
    }
}



//==================BLOGGER  LOGIN ===============================
export async function bloggerLogin(creditials){

    try {
        const response = await axios.post(`${baseURL}/login-blogger`, creditials);
        console.log("Response Data:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error:", error);
        throw error;
    }
}


//===================READ ONE BLOGGER==================
export async function getBloggerDetails(id){
    try {
       const response = await axios.get(`${baseURL}/blogger/fetch/${id}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

//===================READ ALL BLOGGERS ===================== 
export async function getAllBlogger(){
    try {
       const response = await axios.get(`${baseURL}/get-blogger`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

//====================UPDATE ONE BLOGGER===============
export async function updateBlogger(creditials){
    const response = await axios.post(`${baseURL}/update-blogger`,creditials);
    return response.data;
}

//===================DELETE ONE Blogger ==============
export async function deleteBlogger(id){
    try {
        const response = await axios.delete(`${baseURL}/delete-blogger/${id}`)
        return response.data;
    } catch (error) {
        console.log(error);
    }
}



//--------------------------------User Api----------------------------------------


//====================USER LOGIN =========================
export async function login(creditials){
    const response =await axios.post(`${baseURL}/login-user`,creditials);
    return response.data;
}

//=================READ ONE==========================
export async function getUserDetails(id){
    try {
       const response = await axios.get(`${baseURL}/user/fetch/${id}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}


//===================USER SIGNUP========================
export async function userSignUp(creditials){
    const response = await axios.post(`${baseURL}/register-user`,creditials);
    return response.data;
}

//====================UPDATE ONE USER===============
export async function updateUser(creditials){
    const response = await axios.patch(`${baseURL}/user-update`,creditials);
    return response.data;
}


//=================== READ USER======================
export async function getUsers(){
    try {
       const response = await axios.get(`${baseURL}/all-users`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

//=====================DELETE ONE USER=========================

export async function deleteUser(userId) {
    try {
        const response = await axios.delete(`${baseURL}/delete-user/${userId}`);
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}
