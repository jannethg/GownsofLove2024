import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";


const GownCard = ({gown}) => {
    const {image, name} = gown;
    return (
        <Card>
            <CardImg
                width='100%'
                src={image}
                alt={name}
            />
            <CardImgOverlay>
                <CardTitle>{name}</CardTitle>
            </CardImgOverlay>
        </Card>
    );
};

export default GownCard;