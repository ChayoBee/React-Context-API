import IconHeart from "./IconHeart";

export const ImagenCard = ({
    id,
    url,
    photographer,
    filled,
    handleFav,
}) => {
    return (
        <>
            <div className="flex flex-col gap-2 justify-center w-[250px] p-3">
                <div className="flex item-center justify-center">
                    <figure className="w-[100px]">
                        <img 
                        className="w-full object-contain"
                        src={url}
                        alt={photographer}/>
                    </figure>
                </div>
                <div className="flex items-center justify-end cursor-pointer">
                    <button onClick={() => handleFav(id)}>
                        <IconHeart filled={filled}/>
                    </button>
                </div>
            </div>
        </>
    );
};