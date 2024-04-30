import {star} from "../assets/icons";
const ProductCard = ({imgURL, name, price}) => {
    return (
        <div className="flex flex-1 flex-col w-full">
            <img src={imgURL} alt={name} className="w-full h-[280px] object-cover rounded-2xl"/>
            <div className="mt-4 flex justify-start gap-2.5">
                <img src={star} alt="Star" width={24} height={24}/>
                <p className="text-slate-gray font-montserrat text-xl leading-normal">(4.5)</p>
            </div>
            <h3 className="text-2xl font-semibold leading-normal mt-2 font-palanquin">{name}</h3>
            <p className="font-montserrat text-coral-red">{price}</p>
        </div>
    );
};

export default ProductCard;