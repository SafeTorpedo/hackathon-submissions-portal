import { Routes, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import "./App.css";
import New from "./pages/New";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/new" element={<New />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
