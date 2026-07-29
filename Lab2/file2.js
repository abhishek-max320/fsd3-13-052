import { readFile } from "fs/promises";

const data = await readFile("stus.txt", "utf-8");

console.log("File Contents:");
console.log(data);