const Form = () => {
    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
    };

    return (
        <div className="bg-white mt-[50px] ml-[142px] mr-[385px] h-[1155px] w-[913px] rounded-xl">
            <h1 className=" font-medium text-2xl pt-[30px] pl-[48px]">
                New Hackathon Submission
            </h1>
            <form className="mt-[40px]" onSubmit={handleSubmit}>
                <div>
                    <label
                        className="font-medium text-lg pt-[30px]  pl-[48px]"
                        htmlFor="title"
                    >
                        Title
                    </label>
                    <br />
                    <input
                        id="title"
                        className="border border-gray-500 rounded-lg w-[700px] h-[40px] mt-2 ml-[45px] p-[11px] font-[Poppins] text-sm"
                        type="text"
                        placeholder="Title of your submission"
                    />
                </div>
                <div className="mt-4">
                    <label
                        htmlFor="summary"
                        className="font-medium text-lg pt-[30px]  pl-[48px]"
                    >
                        Summary
                    </label>
                    <br />
                    <input
                        type="text"
                        id="summary"
                        className="border border-gray-500 rounded-lg w-[700px] h-[40px] mt-2 ml-[45px] p-[11px] font-[Poppins] text-sm"
                        placeholder="A short summary of your submission (this will be visible with your submission)"
                    />
                </div>
                <div className="mt-4">
                    <label
                        htmlFor="description"
                        className="font-medium text-lg pt-[30px]  pl-[48px]"
                    >
                        Description
                    </label>
                    <br />
                    <textarea
                        id="description"
                        className="border border-gray-500 rounded-lg w-[700px] h-[200px] mt-2 ml-[45px] p-[11px] font-[Poppins] text-sm"
                        placeholder="Write a long description of your project. You can describe your ideas and approach here."
                    />
                </div>
                {/* cover image input */}
                <div className="mt-4">
                    <label
                        htmlFor="coverImage"
                        className="font-medium text-lg pt-[30px]  pl-[48px]"
                    >
                        Cover Image
                    </label>
                    <p className="pl-[48px] text-sm text-gray-500">
                        Minimum resolution: 360px X 360px
                    </p>
                    <br />
                    <input
                        type="file"
                        id="coverImage"
                        className="border border-gray-500 rounded-lg w-[700px] h-[40px] ml-[45px] p-[11px] font-[Poppins] text-sm"
                    />
                </div>
                <div className="mt-4">
                    <label
                        htmlFor="name"
                        className="font-medium text-lg pt-[30px]  pl-[48px]"
                    >
                        Hackathon Name
                    </label>
                    <br />
                    <input
                        type="text"
                        id="name"
                        className="border border-gray-500 rounded-lg w-[700px] h-[40px] mt-2 ml-[45px] p-[11px] font-[Poppins] text-sm"
                        placeholder="Enter the name of the hackathon"
                    />
                </div>
                {/*start and end date */}
                <div className="mt-4 grid grid-cols-2">
                    <div>
                        <label
                            htmlFor="startDate"
                            className="font-medium text-lg pt-[30px]  pl-[48px]"
                        >
                            Hackathon Start Date
                        </label>
                        <br />
                        <input
                            type="date"
                            id="startDate"
                            className="border border-gray-500 rounded-lg w-[250px] h-[40px] mt-2 ml-[45px] p-[11px] font-[Poppins] text-sm"
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="endDate"
                            className="font-medium text-lg pt-[30px]  pl-[48px]"
                        >
                            Hackathon End Date
                        </label>

                        <input
                            type="date"
                            id="endDate"
                            className="border border-gray-500 rounded-lg w-[250px] h-[40px] mt-2 ml-[45px] p-[11px] font-[Poppins] text-sm"
                        />
                    </div>
                </div>

                <div className="mt-4">
                    <label
                        htmlFor="github"
                        className="font-medium text-lg pt-[30px]  pl-[48px]"
                    >
                        Github Repository
                    </label>
                    <br />
                    <input
                        type="text"
                        id="github"
                        className="border border-gray-500 rounded-lg w-[700px] h-[40px] mt-2 ml-[45px] p-[11px] font-[Poppins] text-sm"
                        placeholder="Enter your submission's public GitHub repository link"
                    />
                </div>
                <div className="mt-4">
                    <label
                        htmlFor="other"
                        className="font-medium text-lg pt-[30px]  pl-[48px]"
                    >
                        Other Links
                    </label>
                    <br />
                    <input
                        type="text"
                        id="other"
                        className="border border-gray-500 rounded-lg w-[700px] h-[40px] mt-2 ml-[45px] p-[11px] font-[Poppins] text-sm"
                        placeholder="You can add a video demo or URL of your demo here"
                    />
                </div>

                {/* submit button */}
                <div className="mt-4">
                    <button
                        type="submit"
                        className="bg-[#44924c] text-white font-medium rounded-lg p-2 w-[150px] h-[40px] mt-2 ml-[45px] font-[Poppins] text-sm"
                    >
                        Upload Submission
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Form;
