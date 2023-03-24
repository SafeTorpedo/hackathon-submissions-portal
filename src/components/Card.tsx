import { Link } from "react-router-dom";

const Card = ({
    title,
    image,
    summary,
    diffDays,
}: {
    title: string;
    image: string;
    summary: string;
    diffDays: number;
}) => {
    return (
        <div className="bg-white rounded-2xl w-[360px] h-[289px] flex-col">
            <div className="grid grid-cols-2">
                <img
                    className="ml-[24px] mt-[24px] h-[100px] w-[100px] rounded-md"
                    src={image}
                />

                <h2 className="pt-[59px] pl-[12px] font-medium text-xl">
                    <Link to={`/${title}`}>{title}</Link>
                </h2>
            </div>
            <p className="pt-[32px] pl-[24px] w-[312px] h-[60px] font-normal text-sm">
                {summary}
            </p>
            <br />
            <div className="mt-10 pr-[24px] text-xs">
                <p className=" text-[#666666] text-right">
                    {diffDays == 0
                        ? "Uploaded just now"
                        : `Uploaded ${diffDays} days ago`}
                </p>
            </div>
        </div>
    );
};

export default Card;
