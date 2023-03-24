import moment from "moment";
import { AiTwotoneCalendar, AiFillGithub } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";

const InfoMain = ({
    description,
    name,
    startDate,
    endDate,
    github,
    other,
}: {
    description: string;
    name: string;
    startDate: string;
    endDate: string;
    github: string;
    other: string;
}) => {
    const getDate = (date: string): string => {
        const newDate = moment(date, "YYYY-MM-DD").format("DD MMM YYYY");
        return newDate;
    };
    return (
        <div className="grid grid-cols-2 pl-[140px] pt-[57px] bg-white">
            <div className="">
                <h1 className="font-semibold text-[20px]">Description</h1>
                <p className="text-[16px] mt-5">{description}</p>
            </div>
            <div className="ml-[300px]">
                <h1 className="text-[20px] font-medium">{name}</h1>
                <br />
                <h2 className="text-center text-gray-500 -ml-10">
                    <AiTwotoneCalendar
                        className="inline mr-2 -mt-1"
                        size={20}
                    />
                    {getDate(startDate)} - {getDate(endDate)}
                </h2>
                <br />

                <button
                    className="  text-center bg-white border-gray-300 text-gray-700 border-2 border-spacing-3   h-[50px] w-[200px] ml-6 mt-4 p-2 rounded-xl"
                    onClick={() => window.open(github, "_blank")}
                >
                    <AiFillGithub className="inline mr-2 -mt-1" size={20} />
                    Github Repository
                </button>

                <br />
                {other === "" ? null : (
                    <button
                        className="  text-center bg-white border-gray-300 text-gray-700 border-2 border-spacing-3   h-[50px] w-[200px] ml-6 mt-4 p-2 rounded-xl"
                        onClick={() => window.open(other, "_blank")}
                    >
                        <BiLinkExternal
                            className="inline mr-2 -mt-1"
                            size={20}
                        />
                        Other Link
                    </button>
                )}
            </div>
        </div>
    );
};

export default InfoMain;
