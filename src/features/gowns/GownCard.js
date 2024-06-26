import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";


const GownCard = (props) => {
    return (
        <Card>
            <CardImg
                width='100%'
                src={props.gown.image}
                alt={props.gown.name}
            />
            <CardImgOverlay>
                <CardTitle>{props.gown.name}</CardTitle>
            </CardImgOverlay>
        </Card>
    );
};

export default GownCard;