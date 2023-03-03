import React from "react";

function Body({name,image})
{
    return (
        <div>
            <ul>
                <li>
                    <p>{name}</p>
                    <img src={image} alt="food" width={100}/>
                </li>
            </ul>
        </div>
    );
}

export default Body;