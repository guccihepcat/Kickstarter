import React from 'react';

function Create() {

    return (
        <div>
            <h1>DreamShark</h1>
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