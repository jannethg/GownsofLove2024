import { Container } from 'reactstrap';
import CampsitesList from '../features/campsites/CampsitesList';

//here you should see the Campsite list component, not any details.
const CampsitesDirectoryPage = () => {
    return (
        <Container>
            <CampsitesList />
        </Container>
    );
};

export default CampsitesDirectoryPage;