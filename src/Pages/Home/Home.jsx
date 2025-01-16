import Best from "../../Components/Best/Best";
import Hero from "../../Components/Hero/Hero";
import Testimonial from "../../Components/Testimonial/Testimonial";


const Home = () => {
    return (
        <div className="min-h-[60vh]">
            <div className=" mb-6">
                <Hero></Hero>
            </div>

            <div className="mt-14 mb-6 w-11/12 mx-auto">
                <Best></Best>
            </div>

            <div className="mt-14 mb-6 w-11/12 mx-auto">
                <h1 className="text-4xl mt-20 mb-10 font-bold text-center">Testimonial</h1>
                <Testimonial></Testimonial>
            </div>

        </div>
    );
};

export default Home;