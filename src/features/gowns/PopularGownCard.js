import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";


const PopularGownCard = ({popular}) => {
    const {image, name} = popular;
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

export default PopularGownCard;