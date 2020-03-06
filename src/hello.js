import { now } from "./now";

export function hello(name) {
    console.log(`${now()}: Hello ${name}`);
}
