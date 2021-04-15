import React from 'react';
import Create from './Create';
import { Button } from 'react-bootstrap';

function Navigator() {
    return (
        <div>
            <Button variant="btn btn-success" onClick={() => Create.push('/Create')}>Create a Project</Button>
        </div>
    );
}

export default Navigator;