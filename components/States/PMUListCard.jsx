const PMUListCard = ({ name, image, description }) => {
    return (
        <div className="space-y-4">
            <img
                className="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56"
                src={image}
                alt={name}
            />
            <div className="text-lg leading-6 font-medium space-y-1 text-center">
                <h3>{name}</h3>
            </div>
            <div className="text-lg text-center">
                <p className="text-gray-500">{description}</p>
            </div>
        </div>
    );
}

export default PMUListCard;