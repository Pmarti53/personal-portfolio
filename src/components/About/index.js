import React from 'react';
import coverImage from "../../assets/about/about.JPG";


function About() {
    return (
        <section className="my-5">
            <h1 id="about">about me</h1>
            <img src={coverImage} className="my2" style={{ width: "70%" }} alt="cover" />
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac suscipit odio. Etiam sodales volutpat justo et suscipit. Fusce fringilla, massa vel laoreet tristique, quam nisi pulvinar lacus, ac pulvinar ante leo in turpis. Suspendisse eu massa cursus, cursus neque sed, euismod tellus. Ut accumsan lorem ut libero imperdiet, ac tempus enim posuere. Donec ullamcorper eros ac ipsum tincidunt euismod. Etiam volutpat rhoncus nisi. Cras faucibus maximus sodales. Nam in porttitor velit. Aliquam tincidunt euismod lorem sit amet dignissim. Sed ut enim sit amet neque malesuada varius id a sapien.
            </p>
        </section>
    );
}

export default About;
