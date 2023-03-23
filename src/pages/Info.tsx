import InfoHero from "../components/InfoHero";
import InfoMain from "../components/InfoMain";
import Navbar from "../components/Navbar";

const Info = ({
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
            <InfoHero
                coverImage={coverImage}
                title={title}
                summary={summary}
                id={id}
            />
            <InfoMain
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

export default Info;
