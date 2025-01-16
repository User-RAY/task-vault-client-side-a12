import BestCards from "../BestCards/BestCards";


const Best = () => {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                <BestCards></BestCards>
                <BestCards></BestCards>
                <BestCards></BestCards>

            </div>

            
        </>
    );
};

export default Best;