
const Partner = ({ partner }) => {
    if (partner) {
        const {image, name, description } = partner;
        return (
            <>
                <img 
                src={image} 
                alt="" 
                style={{ width: '150px' }}   
                />
                <div className='m-4'>
                    <h3>{name}</h3>
                    {description}
                </div>
            </>
         );
    }
    return null;
};

export default Partner;
