import Button from "../components/Button";

const Subscribe = () => {
    return (
        <section className="flex justify-between items-center max-lg:flex-col gap-10 max-container">
            <h1 className="text-4xl font-semibold font-palanquin max-w-md">
                Sign Up for <span className="text-coral-red">Updates</span> & Newsletter
            </h1>
            <div className="flex w-full border-2 border-slate-gray rounded-full px-2 py-2">
                <input type="text" placeholder="subscribe@nike.com" className="flex-1 input bg-transparent"/>
                <Button label="Sign Up"/>
            </div>
        </section>
    );
};

export default Subscribe;