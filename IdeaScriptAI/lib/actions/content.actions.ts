"use server"
import Content from "../models/schema";
import { connectToDB } from "../mongoose";

interface PROPS{
    formData : any,
    templateSlug : any,
    aiResponse : String,
    email : any
}



export async function saveToDB({formData, templateSlug, aiResponse,email}:PROPS)
{


    
    connectToDB();

    const genContent = await Content.create({
        formData,
        templateSlug,
        aiResponse,
        email, 
    })

    console.log(genContent);
    console.log("Data Saved Successfully");



}


// we will be giving input email id of the user to get the data
export async function getDatafromDB(user_email : any){

    await connectToDB();
    
    
    const history = await Content.find({email : user_email})
    
    return history;

}

