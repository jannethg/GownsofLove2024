import { Container } from 'reactstrap';
import CampsitesList from '../features/campsites/CampsitesList';
import SubHeader from '../components/SubHeader';

//here you should see the Campsite list component, not any details.
const CampsitesDirectoryPage = () => {
    return (
        <Container>
            <SubHeader current='Directory'/>
            <CampsitesList />
        </Container>
    );
};

export default CampsitesDirectoryPage;