import { TabContext } from "@mui/lab";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Tab from "@mui/material/Tab";
import { useState } from "react";
import CardList from "./CardList";

const TabMenu = () => {
    const [value, setValue] = useState("all");
    const [search, setSearch] = useState("");
    const [order, setOrder] = useState("Newest");

    const handleChange = (e: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };
    return (
        <div className="mt-[57px] ml-[140px]">
            <div className="grid grid-cols-2">
                <div>
                    <TabContext value={value}>
                        <TabList
                            value={value}
                            onChange={handleChange}
                            textColor="primary"
                            indicatorColor="primary"
                        >
                            <Tab label="All Submissions" value="all" />
                            <Tab label="Favourite Submissions" value="fav" />
                        </TabList>
                        <TabPanel className="-ml-20" value="all">
                            <CardList
                                value={value}
                                search={search}
                                order={order}
                            />
                        </TabPanel>
                        <TabPanel className="-ml-20" value="fav">
                            <CardList
                                value={value}
                                search={search}
                                order={order}
                            />
                        </TabPanel>
                    </TabContext>
                </div>
                <div>
                    <input
                        className=" border border-black rounded-xl w-[236px] h-[26px] ml-[45px] mt-2 p-[11px] font-[Poppins] text-sm"
                        type="text"
                        placeholder="Search"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <select
                        className="rounded-xl w-[120px] h-[26px] ml-[56px] border border-black text-sm p-[2px]"
                        value={order}
                        onChange={(e) => setOrder(e.target.value)}
                    >
                        <option value="Newest">Newest</option>
                        <option value="Oldest">Oldest</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default TabMenu;
