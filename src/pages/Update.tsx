import FormEdit from "../components/FormEdit";
import Navbar from "../components/Navbar";

const Update = ({
    coverImage,
    title,
    summary,
    id,
    description,
    name,
    startDate,
    endDate,
    github,
    other,
}) => {
    return (
        <>
            <Navbar />
            <FormEdit
                coverImage={coverImage}
                title={title}
                summary={summary}
                id={id}
                description={description}
                name={name}
                startDate={startDate}
                endDate={endDate}
                github={github}
                other={other}
            />
        </>
    );
};

export default Update;
