import { readFile, writeFile } from "./readAndWriteFile.js";
const data = {
    first_name: "Corny",
    last_name: "Vautier",
    email: "cornyvautier@histats.com",
    gender: "Female"
}
const writeFileData = async (path, data) => {
    try {
        const fileData = await readFile(path);
        const updatedData = [];

        if(!fileData) updatedData = [{id:1, ...data}]
        else updatedData = [...fileData, {id:fileData.length+1, ...data}];

        await writeFile(path, JSON.stringify(updatedData,null,2));
    } catch (error) {
        console.log("unable to run write service");
    }
}
writeFileData("./students.json",data);

const readFileData = async (path) => {
    try {
        const fileData = await readFile(path);
        console.log(fileData);
    } catch (error) {
        console.log("Error");
    }
}

// readFileData("./student.json");