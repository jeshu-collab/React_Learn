import { createRoot } from "react-dom/client";
import App from "./App";
import Conditional_rendering from "./conditional_rendering";
import Array from "./Array";
import Mybutton from "./Mybutton";
import Counter from "./counter";
import Car from "./car";
import UseEffect from "./useEffect";
import UseRef from "./useRef";
const root = createRoot(document.getElementById("root"));


root.render(
    <>
        <App />
        <Conditional_rendering />
        <Array />
        <Mybutton />
        <Counter />
        <Car />
        <UseEffect />
        <UseRef />
    </>
)
