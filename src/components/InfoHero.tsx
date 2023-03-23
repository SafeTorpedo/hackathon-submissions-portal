const InfoHero = ({ title, coverImage, summary, id }) => {
    return (
        <div className=" bg-[#003145] h-[416px] w-full ">
            <div className="grid grid-cols-2 pt-[96px] pl-[142px]">
                <div className="grid grid-cols-2">
                    <img src={coverImage} className="w-[120px] h-[120px]" />
                    <h1 className="text-white font-semibold text-[42px] mt-4 -ml-20">
                        {title}
                    </h1>
                </div>
                <div className="text-white pl-96">
                    <button className="w-[100px] h-[40px] rounded-lg border border-white">
                        Edit
                    </button>
                    <br />
                    <button className="mt-4 w-[100px] h-[40px] rounded-lg border border-white">
                        Delete
                    </button>
                </div>
            </div>
            <p className="text-white mt-[24px] ml-[142px] w-[1156px] h-[26px]">
                {summary}
            </p>
            <div className="grid grid-cols-2 text-white mt-5">
                <h1 className="ml-[142px] ">S</h1>
                <h1 className="-ml-[450px]">{id.slice(0, 10)}</h1>
            </div>
        </div>
    );
};

export default InfoHero;
