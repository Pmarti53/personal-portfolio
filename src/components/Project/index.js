import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Project(props) {
    const currentCategory = {
        name: "Front-end",
        description:
        "Front-end only projects"

    }
    return (
        <section>
            <h1>{capitalizeFirstLetter(currentCategory.name)}</h1>
            <p>{currentCategory.description}</p>
        </section>
    );
}

export default Project;