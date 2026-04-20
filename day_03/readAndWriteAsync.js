import fs from "fs/promises";
const writeFile = async (path, data) => {
    try {
        await fs.writeFile(path, data);
        console.log("Data has been written successfully...");
    } catch (error) {
        console.log("Unable to perform write operation.");
    }
}

const readFile = async (path) => {
    try {
        const data = await fs.readFile(path, "utf-8");
        console.log(data);
    } catch (error) {
        console.log("Unable to perform read operation");      
    }
}

const appendFile = async (path, data) => {
    try {
        await fs.appendFile(path, data);
        console.log("Data has been appended successfully...");
    } catch (error) {
        console.log("Unable to perform append operation.");
    }
}
console.log("before write");
writeFile("./example.txt", "This data has been written through async fun");
console.log("after write");

console.log("before read");
readFile("./example.txt");
console.log("after read");

console.log("before append");
appendFile("./example.txt", "This data has been appended through async fun");
console.log("after append");
