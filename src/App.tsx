import { Routes, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import Info from "./pages/Info";
import "./App.css";
import New from "./pages/New";

function App() {
    //fetch data from local storage
    const data = JSON.parse(localStorage.getItem("data") || "[]");

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/new" element={<New />} />
                    {
                        // create route for every title in data
                        data.map((value) => {
                            return (
                                <Route
                                    key={value.id}
                                    path={`/${value.title}`}
                                    element={
                                        <Info
                                            coverImage={value.coverImage}
                                            title={value.title}
                                            summary={value.summary}
                                            id={value.id}
                                            description={value.description}
                                            name={value.name}
                                            startDate={value.startDate}
                                            endDate={value.endDate}
                                            github={value.github}
                                            other={value.other}
                                            fav={value.fav}
                                        />
                                    }
                                />
                            );
                        })
                    }
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
