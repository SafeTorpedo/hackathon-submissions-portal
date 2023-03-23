import FormEdit from "../components/FormEdit";
import Navbar from "../components/Navbar";
import schema from "../types/schema";

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
    fav,
}: schema) => {
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
                fav={fav}
            />
        </>
    );
};

export default Update;
