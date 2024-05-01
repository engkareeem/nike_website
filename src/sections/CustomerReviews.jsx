import {reviews} from "../constants";
import ReviewCard from "../components/ReviewCard";

const CustomerReviews = () => {
    return (
        <section className="max-container">
            <div className="text-center">
                <h3 className="text-4xl font-bold font-palanquin">
                    What our<span className="text-coral-red"> Customers </span>Say?
                </h3>
                <div className="w-full flex justify-center mt-3">
                    <p className="text-slate-gray font-montserrat max-w-lg">
                        Hear genuine stories from our satisfied customers about
                        their exceptional experiences with us.
                    </p>
                </div>
                <div className="mt-14 flex flex-wrap max-lg:flex-col justify-evenly w-full gap-8">
                    {reviews.map(review => (
                        <>
                            <ReviewCard key={review.customerName} {...review}/>
                            <hr/>
                        </>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CustomerReviews;