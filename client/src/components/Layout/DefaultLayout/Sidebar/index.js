import Side from './Side';
import RoutesSideBar from './Routes';
import { Container } from '@material-ui/core';

function Sidebar() {
    return (
        <Container>
            <Side />
            <RoutesSideBar />
        </Container>
    );
}

export default Sidebar;