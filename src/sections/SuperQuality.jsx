import Button from "../components/Button";
import {shoe8} from "../assets/images";

const SuperQuality = () => {
    return (
        <section className="flex justify-between items-start max-lg:flex-col gap-10 w-full max-container">
            <div className="flex flex-col flex-1">
                <h2 className="text-4xl font-bold capitalize lg:max-w-lg">
                    We Provide You
                    <span className="text-coral-red"> Super Quality </span> Shoes
                </h2>
                <h3 className="mt-4 mb-4 text-2xl font-bold">
                    Match your  <span className="text-coral-red"> favourite car brand</span>
                </h3>
                <p className="mt-2 max-w-lg font-montserrat text-slate-gray">Ensuring premium comfort and style, our meticulously
                    crafted footwear is designed to elevate your experience,
                    providing you with unmatched quality, innovation, and a
                    touch of elegance.
                </p>
                <p className="mt-6 max-w-lg font-montserrat text-slate-gray">
                    Our dedication to detail and excellence ensures your
                    satisfaction
                </p>
                <div className="mt-16">
                    <Button label="View details"/>
                </div>
            </div>
            <div className="flex-1 flex justify-center items-center">
                <img src={shoe8} alt="shoe8" width={420} height={522} className="object-contain rounded-2xl shadow-xl"/>
            </div>
        </section>
    );
};

export default SuperQuality;