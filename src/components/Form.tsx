import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Form = () => {
    const navigate = useNavigate();

    //image conversion
    const getBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result);
            reader.onabort = (error) => reject(error);
            reader.readAsDataURL(file);
        });
    };

    //handling image upload
    const handleImage = (e) => {
        const file = e.target.files[0];
        getBase64(file).then((base64) => {
            setFormData({
                ...formData,
                coverImage: base64,
            });
        });
    };

    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();

        //save data to local storage for multiple submissions
        const data = JSON.parse(localStorage.getItem("data") || "[]");
        data.push(formData);
        localStorage.setItem("data", JSON.stringify(data));

        //navigate to home page
        navigate("/");
    };
    // a state for all form data
    const [formData, setFormData] = useState({
        id: `${
            new Date().toLocaleDateString() +
            " " +
            new Date().toLocaleTimeString()
        }`,
        title: "",
        summary: "",
        description: "",
        coverImage: "",
        name: "",
        startDate: "",
        endDate: "",
        github: "",
        other: "",
        fav: false,
    });

    return (
        <div className="bg-white mt-[50px] ml-[142px] mr-[385px] h-[1250px] w-[913px] rounded-xl">
            <h1 className=" font-medium text-2xl pt-[30px] pl-[48px]">
                New Hackathon Submission
            </h1>
            <form className="" onSubmit={handleSubmit}>
                <div>
                    <label
                        className="font-medium text-lg pt-[30px]  pl-[48px]"
                        htmlFor="title"
                    >
                        Title
                    </label>
                    <br />
                    <input
                        required
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
                <div className="">
                    <label
                        htmlFor="summary"
                        className="font-medium text-lg pt-[30px]  pl-[48px]"
                    >
                        Summary
                    </label>
                    <br />
                    <input
                        required
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
                <div className="">
                    <label
                        htmlFor="description"
                        className="font-medium text-lg pt-[30px]  pl-[48px]"
                    >
                        Description
                    </label>
                    <br />
                    <textarea
                        required
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
                <div className="">
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
                        required
                        onChange={handleImage}
                        type="file"
                        accept="image/*"
                        id="coverImage"
                        className="border border-gray-500 rounded-lg w-[700px] h-[40px] ml-[45px] p-[11px] font-[Poppins] text-sm"
                    />
                </div>
                <div className="">
                    <label
                        htmlFor="name"
                        className="font-medium text-lg pt-[30px]  pl-[48px]"
                    >
                        Hackathon Name
                    </label>
                    <br />
                    <input
                        required
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
                <div className=" grid grid-cols-2">
                    <div>
                        <label
                            htmlFor="startDate"
                            className="font-medium text-lg pt-[30px]  pl-[48px]"
                        >
                            Hackathon Start Date
                        </label>
                        <br />
                        <input
                            required
                            value={formData.startDate}
                            onChange={(e) => {
                                setFormData({
                                    ...formData,
                                    startDate: e.target.value,
                                });
                            }}
                            type="date"
                            id="startDate"
                            className="border border-gray-500 rounded-lg w-[250px] h-[40px] ml-[45px] p-[11px] font-[Poppins] text-sm"
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
                            required
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

                <div className="">
                    <label
                        htmlFor="github"
                        className="font-medium text-lg pt-[30px]  pl-[48px]"
                    >
                        Github Repository
                    </label>
                    <br />
                    <input
                        required
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
                <div className="-mt-2">
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
                <div className="">
                    <button
                        type="submit"
                        className="bg-[#44924c] text-white font-medium rounded-lg p-2 w-[150px] h-[40px] mt-4 ml-[45px] font-[Poppins] text-sm"
                    >
                        Upload Submission
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Form;
