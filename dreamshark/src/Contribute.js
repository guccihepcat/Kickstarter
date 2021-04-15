import React from 'react';

function Contribute() {

    return (
        <div>
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <img src="/dreamshark-logo-resize.png" alt="" />
            </div>

            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <h1>DreamShark</h1>
            </div>

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