import React from 'react';


function Navigator() {
    const Create = () => {
        console.log("Create");
    };
    const Contribute = () => {
        console.log("Contribute")
    };

    return (
        <div>
            <button onClick={Create}>Create</button>
            <button onClick={Contribute}>Contribute</button>
        </div>
    );
}

export default Navigator;