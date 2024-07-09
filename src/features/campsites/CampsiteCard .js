import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";
import { Link } from "react-router-dom";

const CampsiteCard = ({ campsite }) => {
  const { id, image, name } = campsite;
  return (   
    <Link to={`${id}`}>
      <Card  className="list-title">
      <CardTitle className="list-title">{name}</CardTitle>
        <CardImg width="100%" src={image} alt={name} />
        <CardImgOverlay>         
        </CardImgOverlay>
      </Card>
    </Link>
  );
};

export default CampsiteCard;
