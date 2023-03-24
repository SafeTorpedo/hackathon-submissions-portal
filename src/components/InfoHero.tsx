import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import schema from "../types/schema";

import { MdEdit, MdDelete } from "react-icons/md";
import { TbMinusVertical } from "react-icons/tb";
import moment from "moment";

const InfoHero = ({
    title,
    coverImage,
    summary,
    id,
    starValue,
}: {
    title: string;
    coverImage: string;
    summary: string;
    id: string;
    starValue: boolean;
}) => {
    const getDate = (date: string): string => {
        const newDate = moment(date, "DD/MM/YYYY").format("DD MMMM, YYYY");
        return newDate;
    };
    const [fav, setFav] = useState(starValue);

    const handleClick = () => {
        setFav(!fav);

        //update fav value in local storage for this submission
        const data = JSON.parse(localStorage.getItem("data") || "[]");
        const newData = data.map((value: schema) => {
            if (value.id === id) {
                return { ...value, fav: !fav };
            }
            return value;
        });
        localStorage.setItem("data", JSON.stringify(newData));
    };

    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const handleClose = () => {
        setShow(false);
    };
    const handleDelete = () => {
        //delete from local storage having title
        const data = JSON.parse(localStorage.getItem("data") || "[]");
        const newData = data.filter((value: schema) => value.title !== title);
        localStorage.setItem("data", JSON.stringify(newData));
        navigate("/");
    };
    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Delete Model?
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        This action is irreversible. Are you sure you want to
                        delete this model?
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleClose} variant="alert">
                        Cancel
                    </Button>
                    <Button onClick={handleDelete} variant="alert">
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
            <div className=" bg-[#003145] h-[416px] w-full ">
                <div className="grid grid-cols-2 pt-[96px] pl-[142px]">
                    <div className="grid grid-cols-2">
                        <img
                            src={coverImage}
                            className="w-[120px] h-[120px] rounded-xl"
                        />
                        <h1 className="text-white font-semibold text-[42px] mt-4 -ml-20">
                            {title}
                        </h1>
                    </div>
                    <div className="text-white pl-96">
                        <button
                            onClick={() => navigate(`/${title}/edit`)}
                            className="w-[100px] h-[40px] rounded-lg border border-white text-center"
                        >
                            <MdEdit className="inline mr-2 -mt-1" size={20} />
                            Edit
                        </button>
                        <br />
                        <button
                            onClick={() => setShow(true)}
                            className="mt-4 w-[100px] h-[40px] rounded-lg border border-white text-center"
                        >
                            <MdDelete className="inline mr-2 -mt-1" size={20} />
                            Delete
                        </button>
                    </div>
                </div>
                <p className="text-white mt-[24px] ml-[142px] w-[1156px] h-[26px]">
                    {summary}
                </p>
                <div className="grid grid-cols-2 text-white mt-5">
                    <span className="ml-[142px] ">
                        <FaStar
                            size={24}
                            onClick={handleClick}
                            color={fav === true ? "orange" : "grey"}
                        />
                    </span>
                    <h1 className="-ml-[450px]">
                        <TbMinusVertical
                            className="inline -ml-4 mr-4 font-light -mt-1"
                            size={35}
                            color="gray"
                        />
                        {getDate(id.slice(0, 10))}
                    </h1>
                </div>
            </div>
        </>
    );
};

export default InfoHero;
