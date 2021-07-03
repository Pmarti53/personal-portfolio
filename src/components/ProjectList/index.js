import React, { useState } from 'react'

import photo from '../../assets/small/front-end/run-buddy.png'

const ProjectList = ({ category }) =>{
    
    const [photos] = useState([
        {
            name: 'run-buddy',
            category: 'front end',
            description: 'A website that offers fitness training services'

        },
    ]);

    const currentPhotos = photos.filter((photo) => photo.category === category);

    return (
        <div>
            <div className="flex-row">
                {currentPhotos.map((image, i) => (
                    <img
                        src={require(`../../assets/small/${category}/${i}.jpg`)}
                        alt={image.name}
                        className="img-thumbnail mx-1"
                        key={image.name}
                    />
                ))}
            </div>
            <img
                src={photo}
                alt="Frontend Example"
            />
        </div>
    )
}

export default ProjectList;