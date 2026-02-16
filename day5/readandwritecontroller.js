import {readfile} from"./readandwriterfile.js";
const readfiledata = async(path)=>{
    try{
        const filedata = await readfile(path);
        console.log(filedata);
    } catch(error){
        console.log("Error");
    }
}
readfiledata("./student.json");