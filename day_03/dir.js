import fs from "fs/promises";
const makeDir = async (path) => {
    try {
        await fs.mkdir(path);
        console.log("Directory has been created successfully.");
    } catch (error) {
       console.log("Unable to make dir");      
    }
}
makeDir("../day_04");
