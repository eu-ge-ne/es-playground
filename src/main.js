import { hello } from "./hello";

const tick = () => {
    hello("world");
    setTimeout(tick, 10000);
};

tick();
