import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";
import { Link } from "react-router-dom";

const CampsiteCard = ({campsite}) => {
    const {id, image, name} = campsite;
    return (
        //this will pass the value of id to the link component as a string
        //here we use a backtick (not quotes) to convert and integer into a string 
        //this will trigger a route component that we added in the App.js to the campsiteDetailpage for
        //whatever id was passed in here....
        <Link to={`${id}`}>
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
        </Link>
   
    );
};

export default CampsiteCard;