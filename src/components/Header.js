import React from "react";

function Header({name,kelas})
{
    return (
        <div>
            <p> Hello </p>
            <p> My Name Is {name} </p>
            <p> class : {kelas}</p>
        </div>
    );
}

export default Header;