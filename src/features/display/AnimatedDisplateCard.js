import { useState, useEffect } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";
import { useSpring, animated } from "react-spring";

const AnimatedDisplayCard = ({ item }) => {
  const { image, name, description } = item;
  const [toggle, setToggle] = useState(false);

  const animatedStyle = useSpring({
    opacity: toggle ? 1 : 0,
    transform: toggle ? "scale(1,1)" : "scale(1,0)",
    consfig: { duration: 500 },
  });

  useEffect(() => {
    setToggle(true);
  }, []);

  return (
    <animated.div style={animatedStyle}>
      <Card>
        <CardImg src={image} alt={name} />
        <CardBody>
          <CardTitle>
            <h4 className="my-3">{name}</h4>
          </CardTitle>
          <CardText>{description}</CardText>
        </CardBody>
      </Card>
    </animated.div>
  );
};

export default AnimatedDisplayCard;
