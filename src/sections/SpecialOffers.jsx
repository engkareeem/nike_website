import {offer} from "../assets/images";
import Button from "../components/Button";
const SpecialOffers = () => {
    return (
        <section className="flex max-lg:flex-col-reverse justify-center items-center max-container">
            <div className=" flex-1 padding">
                <img src={offer} width={773} height={687} alt="Offer" className="rounded-2xl"/>
            </div>
            <div className="flex flex-col justify-center">
                <h2 className="text-4xl font-palanquin font-bold"><span className="text-coral-red">Special</span> Offer</h2>
                <p className="mt-6 text-slate-gray max-w-lg">Embark on a shopping journey that redefines your experience
                    with unbeatable deals. From premier selections to incredible
                    savings, we offer unparalleled value that sets us apart.
                </p>
                <p className="mt-6 text-slate-gray max-w-lg">
                    Navigate a realm of possibilities designed to fulfill your unique
                    desires, surpassing the loftiest expectations, Your journey with
                    us is nothing short of exceptional.
                </p>
                <div className="flex gap-5 mt-16">
                    <Button label="View details" secondary={false}/>
                    <Button label="Learn more" secondary={true}/>
                </div>
            </div>
        </section>
    );
};

export default SpecialOffers;