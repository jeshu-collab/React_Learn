import { createRoot } from "react-dom/client";
import App from "./App";
import Conditional_rendering from "./conditional_rendering";
import Array from "./Array";
import Mybutton from "./Mybutton";
const root = createRoot(document.getElementById("root"));


root.render(
    <>
        <App />
        <Conditional_rendering />
        <Array />
        <Mybutton />
    </>
)
