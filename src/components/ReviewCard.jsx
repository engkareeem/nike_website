import {star} from "../assets/icons";

const ReviewCard = ({imgURL, customerName, rating, feedback}) => {
    return (
        <div className="flex flex-col justify-center items-center">
            <img src={imgURL} alt={customerName} width={150} height={150} className="rounded-full"/>

            <div className="flex mt-2">
                <img src={star} alt="star" width={24} height={24}/>
                <div className="text-lg font-semibold font-montserrat text-slate-gray">({rating})</div>
                <div className="text-xl font-semibold font-palanquin ml-2">{customerName}</div>

            </div>
            <p className="max-w-lg text-lg text-slate-gray font-montserrat mt-2">{feedback}</p>
        </div>
    );
};

export default ReviewCard;