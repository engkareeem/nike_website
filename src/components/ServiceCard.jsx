const ServiceCard = ({imgURL, label, subtext}) => {
    return (
        <div className="flex-1 shadow-xl w-full sm:w-[350px] sm:m-w-[350px] rounded-[20px] px-10 py-16">
            <div className="w-11 h-11 flex justify-center items-center bg-coral-red rounded-full">
                <img src={imgURL} alt={label} width={24} height={24}/>
            </div>
            <h3 className="text-2xl font-semibold mt-3 font-palanquin">{label}</h3>
            <p className="text-sm font-montserrat mt-3 break-words text-slate-gray">{subtext}</p>
        </div>
    );
};

export default ServiceCard;