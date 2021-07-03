import React from 'react';

function Nav() {

    const categories = [
        { name: "front end", description: "front end projects" },
        { name: "back end", description: "back end projects" },
    ]

    function categorySelected(name) {
        console.log(`${name} clicked`)
    }

    return (
        <header>
            <h2>
                <a href="/">
                    <span role="img" aria-label="camera">💻</span> Pete Martinez Web Development
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a href="#about">
                            About me
                        </a>
                    </li>
                    <li>
                        <span>Contact</span>
                    </li>
                    {categories.map((category) => (
                        <li className="mx-1"
                            key={category.name}
                        >
                            <span onClick={() => categorySelected(category.name)} >
                                {category.name}
                            </span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}


export default Nav;
