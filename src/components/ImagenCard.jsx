import IconHeart from "./IconHeart";

export const ImagenCard = ({
    id,
    url,
    photographer,
    filled,
    handleFav,
}) => {
    return (
        <div className="p-3">
            <div className="flex flex-col gap-2 justify-center items-center p-3">
                    <figure>
                        <img 
                        className="w-full h-auto object-cover"
                        src={url}
                        alt={photographer}
                        style={{maxHeight: '200px' }}/>
                    </figure>
                <div className="flex items-center justify-end cursor-pointer mt-2">
                    <button onClick={() => handleFav(id)}>
                        <IconHeart filled={filled}/>
                    </button>
                </div>
            </div>
        </div>
    );
};