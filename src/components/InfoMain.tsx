const InfoMain = ({ description, name, startDate, endDate, github, other }) => {
    return (
        <div className="grid grid-cols-2 pl-[140px] pt-[57px] bg-white">
            <div className="">
                <h1 className="font-semibold text-[20px]">Description</h1>
                <p className="text-[16px] mt-5">{description}</p>
            </div>
            <div className="ml-[300px]">
                <h1 className="text-[20px] font-medium">{name}</h1>
                <br />
                <h2 className="text-center">
                    {startDate} - {endDate}
                </h2>
                <br />
                <span className=" border border-black h-[50px] w-auto p-3 ml-20 rounded-md">
                    <a
                        target="_blank"
                        rel="noreferrer"
                        className="  text-center"
                        href={github}
                    >
                        Github Repository
                    </a>
                </span>
                <br />
                <br />
                <br />
                <span className=" my-4 border border-black h-[50px] w-auto ml-32 p-2 rounded-md">
                    <a
                        target="_blank"
                        rel="noreferrer"
                        className=" text-center"
                        href={other}
                    >
                        Other
                    </a>
                </span>
            </div>
        </div>
    );
};

export default InfoMain;
