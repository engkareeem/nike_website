const Button = ({label, iconURL, secondary}) => {
    return (
        <button className={`flex justify-center items-center gap-2 px-7 py-4 border 
        font-montserrat text-lg leading-none rounded-full ${secondary ? 'bg-white border-slate-gray text-slate-gray':'bg-coral-red border-coral-red text-white'}`}>
            {label}
            {iconURL && <img src={iconURL} alt="arrow_right" className="ml-2 rounded-full w-5 h-5 animate-bounce-right"/>}
        </button>
    );
};

export default Button;