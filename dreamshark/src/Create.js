import React from 'react';

function Create() {

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

            <h2>Create a Project</h2>

            <form>
                <label>
                Project Name:
                <input type="text" name="name" />
                </label>
            </form>

            <form>
                <label>
                    Description:
                <input type="text" name="name" />
                </label>
            </form>

            <form>
                <label>
                    Minimum Donation Amount:
                <input type="text" name="name" />
                </label>
            </form>

            <form>
                <label>
                    Donation Goal:
                <input type="text" name="name" />
                </label>
            </form>

            <form>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default Create;