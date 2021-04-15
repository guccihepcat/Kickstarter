import React from 'react';
import Navigator from "./Navigator";
import {Container} from '@material-ui/core'


function Home() {
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

            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <h3>Welcome to DreamShark, your #1 destination for kickstarter projects!</h3>
            </div>

            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <Navigator />
            </div>

            <h4>Looking for projects to donate/contribute to?</h4>
            <h4>Here is a list of projects currently deployed on DreamShark:</h4>
            <Container fixed style={{ backgroundColor: "teal" }}>
                <h4>Projects</h4>
            </Container>
        </div>
    );
}

export default Home;