import {BASE_URL} from './Baseurl';
import { commonStructure } from './common';



//api for admin register
export const Adminregister=async(body)=>{
    return await commonStructure("POST",`${BASE_URL}/rentacar/adminSignup`,body)
}


export const addLuxury=async(body)=>{
    return await commonStructure("POST",`${BASE_URL}/rentacar/addluxurycars`,body)
}

export const addwork=async(body)=>{
    return await commonStructure("POST",`${BASE_URL}/rentacar/addcars`,body)
}


export const addElectric=async(body)=>{
    return await commonStructure("POST",`${BASE_URL}/rentacar/addelectriccars`,body)
}


//api for admin login
export const adminLogin=async(body)=>{
    return await commonStructure("POST",`${BASE_URL}/rentacar/adminLogin`,body)
}

export const getAllCars=async()=>{
    return await commonStructure("GET",`${BASE_URL}/rentacar/getCars`,{})
}

export const getAllLuxuryCars=async()=>{
    return await commonStructure("GET",`${BASE_URL}/rentacar/getLuxuryCars`,{})
}


export const getAllElectricCars=async()=>{
    return await commonStructure("GET",`${BASE_URL}/rentacar/getElectricCars`,{})
}

export const addEnquiries=async(body)=>{
    return await commonStructure("POST",`${BASE_URL}/rentacar/addEnquiry`,body)
}


export const getEnquiries=async()=>{
    return await commonStructure("GET",`${BASE_URL}/rentacar/getEnquiry`,{})
}