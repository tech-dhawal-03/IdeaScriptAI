 import mongoose, { Schema } from "mongoose";

const ContentSchema = new mongoose.Schema({
 

    formData :
         {
            type : Object,
            required : true,
        },

    aiResponse : 
        {
        type : String,
        required : true
        },
       
    templateSlug : {
        type : Object
    },     
     
    email : 
        {
            type : String,
            required : true,
            
        }
    },
        { 
            timestamps : true
        }    

)

const Content = mongoose.models.Content || mongoose.model('Content',ContentSchema);
export default Content;




