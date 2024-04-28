const Button = (props) => {
    return (
        <button className="flex justify-center items-center gap-2 px-7 py-4 border border-coral-red
        font-montserrat text-lg leading-none bg-coral-red rounded-full ">
            {props.label}
            <img src={props.iconURL} alt="arrow_right" className="ml-2 rounded-full w-5 h-5 "/>
        </button>
    );
};

export default Button;