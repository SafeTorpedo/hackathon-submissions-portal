import bulb from "/bulb.png";

const Hero = () => {
    return (
        <div className=" bg-[#003145] h-[416px] w-full ">
            <div className="grid grid-cols-2">
                <div>
                    <h1 className=" text-white text-5xl font-semibold font-[Poppins] pl-[142px] pt-[88px]">
                        Hackathon Submissions
                    </h1>

                    <p className="text-white font-[Poppins] text-[17px] font-medium w-[792px] h-[78px] pt-[31px] pl-[142px]">
                        Lorem ipsum dolor sit amet consectetur. Urna cursus amet
                        pellentesque in parturient purus feugiat faucibus.
                        Congue laoreet duis porta turpis eget suspendisse ac
                        pharetra amet. Vel nisl tempus nec vitae
                    </p>
                </div>
                <div className=" mt-[58px] ml-auto pr-[142px]">
                    <img src={bulb} className=" w-[199.89px] h-[300px]"></img>
                </div>
            </div>
            <button className=" flex flex-row shadow w-[194px] justify-center h-[52px] ml-[142px] p-[12px] -mt-[40px] text-white bg-[#44924C] rounded-xl font-[Poppings] font-normal text-base">
                Upload Submission
            </button>
        </div>
    );
};

export default Hero;
