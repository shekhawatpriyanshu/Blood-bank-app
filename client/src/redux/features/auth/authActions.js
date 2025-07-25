import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../../services/API";


export const userLogin =createAsyncThunk(
    'auth/Login',
    async({role,email,password},{rejectWithValue })=>{
try{

    const {data} = await API.post('/auth/login',{role,email,password})
// store token

if(data.success){
    alert(data.success)
    localStorage.setItem('token',data.token)
    window.location.replace("/")
}
return data

}catch(error){
    if(error.response && error.response.data.message){
        return rejectWithValue(error.response.data.message)
    }
    else{
        return rejectWithValue(error.message)
    }
}
    }
)

//register

export const userRegister =createAsyncThunk(
    'auth/register',
    
    async({
        name,
        role,
        email,
        password,
        phone,
        organizationName,
        address,
        hospitalName,
        website
    },{rejectWithValue})=>{
        try{
  const { data } = await API.post("/auth/register", {
    name,
    role,
    email,
    password,
    phone,
    organizationName,
    address,
    hospitalName,
    website,
  });
  if(data?.success) {
    alert('user registered successfully');
    
    window.location.replace('/login')
  }
        }catch(error){
            console.log(error);
            if (error.response && error.response.data.message) {
              return rejectWithValue(error.response.data.message);
            } else {
              return rejectWithValue(error.response.data.message);
            }
        }
    }
);
// current user
    export const getCurrentUser = createAsyncThunk(
  "auth/getCurrentUser",
  async ({ rejectWithValue }) => {
    try {
      const res = await API.get("/auth/current-user");
      if (res.data) {
        return res?.data;
      }
    } catch (error) {
      console.log(error);
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
)
