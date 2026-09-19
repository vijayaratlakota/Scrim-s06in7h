/*
    The functions, everything has been done in App.jsx, like extracting the data from data.js and sending the data to Header.jsx. Everything was done in App.jsx,
     so to make the code simple, we are doing everything in App.jsx and calling this App in index.jsx. It will make the code simple. 
*/

import {createRoot} from "react-dom/client"
import App from "./App"

const root = createRoot(document.getElementById("root"))
root.render(<App />)