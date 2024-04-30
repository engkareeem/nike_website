import {products} from "../constants";
import ProductCard from "../components/ProductCard";

const PopularProducts = () => {
    return (
        <section id="products" className="max-container max-sm:mt-12">
            <div className="flex flex-col gap-5">
                <p className="font-bold text-4xl">
                    Our <span className="text-coral-red">Popular</span> Products
                </p>
                <p className="lg:max-w-lg text-lg text-slate-gray font-montserrat">
                    Experience topnotch quality and style With our sought-after
                    selections Discover a world of comfort. design. and value
                </p>
            </div>
            <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14">
                {products.map(product => (
                    <ProductCard key={product.name} {...product}/>
                ))}
            </div>
        </section>
    );
};

export default PopularProducts;