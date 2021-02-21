import "./css/Skills.css";

const GenreSkills = (props) => {
    return (
        <div className="genre-skills">
            {props.genreSkills.map((skill) => {
                return (
                    <div className="skill">
                        <img
                            src={`${process.env.PUBLIC_URL}/${props.baseDir}/${skill}.png`}
                            alt={skill}
                        ></img>

                        <div className="name">{skill}</div>
                    </div>
                );
            })}
        </div>
    );
};

const Genre = (props) => {
    return (
        <div className="genre">
            <div className="title">{props.title}</div>

            <GenreSkills genreSkills={props.skills} baseDir={props.baseDir} />
        </div>
    );
};

const Skills = (props) => {
    return (
        <div className="skills">
            {props.data.map((el) => {
                return (
                    <Genre
                        title={el.title}
                        skills={el.skills}
                        baseDir={props.baseDir}
                    />
                );
            })}
        </div>
    );
};

export default Skills;
