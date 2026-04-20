import { readFile } from "../../day_06/utils/readFile.js";
import { writeFile } from "../../day_06/utils/writeFile.js";
const FILE = "../../day_06/user.json";
const deleteData = async (users, email) => {
    const updatedData = users.filter((u) => u.email !== email);
    const response = await writeFile(FILE, updatedData);
    return response;
}
const deleteUser = async (email) => {
    const users = await readFile(FILE);
    if (users.length === 0) {
        return { message: "not existing", status: 400 };
    }
    const existingUser = users.find((u) => u.email === email);
    if (!existingUser) return { message: "not existing", status: 400 };

    const response = await deleteData(users, email);
    return response.status === 201 ?
        { message: "User has been deleted successfully", status: 200 } :
        { message: "Unable to delete user", status: 500 };
}

deleteUser("ccornely9@amazon.co.jp")
.then((res)=>console.log(res))