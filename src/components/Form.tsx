import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Form = () => {
    const navigate = useNavigate();
    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        //save data to local storage for multiple submissions
        const data = JSON.parse(localStorage.getItem("data") || "[]");
        data.push(formData);
        //use today's date time as key
        const date = new Date();
        const key = date.toLocaleDateString() + date.toLocaleTimeString();
        localStorage.setItem(key, JSON.stringify(data));

        //navigate to home page
        navigate("/");
    };
    // a state for all form data
    const [formData, setFormData] = useState({
        title: "",
        summary: "",
        description: "",
        coverImage: "",
        name: "",
        startDate: "",
        endDate: "",
        github: "",
        other: "",
    });

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
                        value={formData.title}
                        onChange={(e) =>
                            setFormData({ ...formData, title: e.target.value })
                        }
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
                        value={formData.summary}
                        onChange={(e) => {
                            setFormData({
                                ...formData,
                                summary: e.target.value,
                            });
                        }}
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
                        value={formData.description}
                        onChange={(e) => {
                            setFormData({
                                ...formData,
                                description: e.target.value,
                            });
                        }}
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
                        value={formData.coverImage}
                        onChange={(e) => {
                            setFormData({
                                ...formData,
                                coverImage: e.target.value,
                            });
                        }}
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
                        value={formData.name}
                        onChange={(e) => {
                            setFormData({ ...formData, name: e.target.value });
                        }}
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
                            value={formData.startDate}
                            onChange={(e) => {
                                setFormData({
                                    ...formData,
                                    startDate: e.target.value,
                                });
                            }}
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
                            value={formData.endDate}
                            onChange={(e) => {
                                setFormData({
                                    ...formData,
                                    endDate: e.target.value,
                                });
                            }}
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
                        value={formData.github}
                        onChange={(e) => {
                            setFormData({
                                ...formData,
                                github: e.target.value,
                            });
                        }}
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
                        value={formData.other}
                        onChange={(e) => {
                            setFormData({ ...formData, other: e.target.value });
                        }}
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
