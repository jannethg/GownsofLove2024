import {Col, Row} from 'reactstrap';
// import DisplayCard from './DisplayCard';
import AnimatedDisplayCard from './AnimatedDisplateCard';
import { selectFeaturedCampsite } from '../campsites/campsitesSlice';
import { selectFeaturedPromotion } from '../promotions/promotionsSlice';
import { selectFeaturedPartner } from '../partners/partnersSlice';
import { selectFeaturedGown } from '../gowns/gownsSlice';



const DisplayList = () => {
    const items = [selectFeaturedCampsite(), selectFeaturedPromotion(), selectFeaturedGown()];

    return (
        <Row>
            {items.map((item, idx) => {
                return (
                    item && (
                    <Col md className='m-1' key={idx}>
                        <AnimatedDisplayCard item={item} />
                    </Col>
                    )
                );
            })}
        </Row>
    );
};

export default DisplayList;
