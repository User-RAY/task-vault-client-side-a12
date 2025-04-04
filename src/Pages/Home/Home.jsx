import Best from "../../Components/Best/Best";
import ChooseUs from "../../Components/ChooseUs/ChooseUs";
import Faq from "../../Components/Faq/Faq";
import Hero from "../../Components/Hero/Hero";
import How from "../../Components/How/How";
import Testimonial from "../../Components/Testimonial/Testimonial";


const Home = () => {
    return (
        <div className="min-h-[60vh]">
            <div className=" mb-6">
                <Hero></Hero>
            </div>

            <div className="mt-14 mb-6 w-11/12 mx-auto">

            <h1 className="text-4xl mt-20 mb-10 font-bold text-center">Best Workers</h1>
                <Best></Best>
            </div>

            <div className="mt-14 mb-6 w-11/12 mx-auto">
                <h1 className="text-4xl mt-20 mb-10 font-bold text-center">Testimonial</h1>
                <Testimonial></Testimonial>
            </div>

            <div className="mt-36 mb-6 w-11/12 mx-auto">
                <h1 className="text-4xl mt-20 mb-6 font-bold text-center">How It Works</h1>
                <How></How>
            </div>

            <div className="mt-14 mb-6 w-11/12 mx-auto">
                <ChooseUs></ChooseUs>
            </div>


            <div className="mt-14 mb-6 w-11/12 mx-auto">
                <h1 className="text-4xl mt-20 mb-10 font-bold text-center">FAQ</h1>
                <Faq></Faq>
            </div>

        </div>
    );
};

export default Home;