import { Routes, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import Info from "./pages/Info";
import "./App.css";
import New from "./pages/New";
import Update from "./pages/Update";
import schema from "./types/schema";
import { useEffect, useState } from "react";

function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
        //fetch data from local storage
        const data = localStorage.getItem("data");
        if (data) {
            const parsedData = JSON.parse(data);
            //set data to state
            setData(parsedData);
        }
    }, [data]);

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/new" element={<New />} />

                    {
                        // create route for every title in data
                        data.map((value: schema) => {
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
                    {
                        //create route for every update page in data
                        data.map((value: schema) => {
                            return (
                                <Route
                                    key={value.id}
                                    path={`/${value.title}/edit`}
                                    element={
                                        <Update
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
