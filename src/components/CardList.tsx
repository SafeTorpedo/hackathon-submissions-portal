import Card from "./Card";
import schema from "../types/schema";

const CardList = ({
    value,
    search,
    order,
}: {
    value: string;
    search: string;
    order: string;
}) => {
    //get data from local storage
    const data = JSON.parse(localStorage.getItem("data") || "[]");

    var newData = data.map((value: schema) => {
        const [day1, month1] = value.id.split("/");
        const day1Num = parseInt(day1);
        const month1Num = Number(month1);

        const date2 = new Date().toLocaleDateString();
        const [day2, month2] = date2.split("/");
        const day2Num = parseInt(day2);
        const month2Num = Number(month2);

        var diffDays = day2Num - day1Num;
        var diffMonths = month2Num - month1Num;

        if (diffDays <= 0) {
            diffDays = 30 * diffMonths + diffDays;
        }
        //return original data with new property diffDays
        return { ...value, diffDays };
    });

    //sort newData according to diffDays
    if (order === "Newest")
        newData.sort(
            (
                a: {
                    diffDays: number;
                },
                b: {
                    diffDays: number;
                }
            ) => a.diffDays - b.diffDays
        );
    else
        newData.sort(
            (
                a: {
                    diffDays: number;
                },
                b: {
                    diffDays: number;
                }
            ) => b.diffDays - a.diffDays
        );

    //filter newData according to search
    if (search !== "")
        newData = newData.filter((value: schema) => {
            return value.title.toLowerCase().includes(search.toLowerCase());
        });

    //filter newData according to value (fav) for all data having fav true
    if (value === "fav")
        newData = newData.filter((value: schema) => {
            return value.fav === true;
        });

    console.log(newData);

    return (
        <div className="grid grid-cols-3 gap-x-96 gap-y-9">
            {newData.map(
                (value: {
                    id: string;
                    title: string;
                    coverImage: string;
                    summary: string;
                    diffDays: number;
                }) => {
                    return (
                        <Card
                            key={value.id}
                            title={value.title}
                            image={value.coverImage}
                            summary={value.summary}
                            diffDays={value.diffDays}
                        />
                    );
                }
            )}
        </div>
    );
};

export default CardList;
