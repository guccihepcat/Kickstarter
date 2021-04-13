import React from 'react';

function Contribute() {

    return (
        <div>
            <h1>DreamShark</h1>



            <form>
                <label>
                Contribute:
                <input type="text" name="name" />
                </label>
            </form>

            <form>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default Contribute;