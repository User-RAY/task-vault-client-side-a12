import PropTypes from "prop-types";


const BestCards = ({best=true, test={}, user={}}) => {

    
    return (
        <div className="h-full flex">

            <div className={`card w-full  ${best ? 'bg-base-100' : 'bg-slate-700 text-white'} h-full shadow-xl`}>
                <figure className="px-10 pt-10 flex-shrink-0">
                    <img
                    src={best ? user.user_img :  test.photo }
                    alt="Profile Picture"
                    className="object-cover rounded-full w-52 h-52" />
                </figure>


                {
                    best ? <>
                            <div className="card-body items-center text-center  flex-grow flex flex-col">
                                <h2 className="card-title">Available Coins: <span>{user.coin}</span></h2>  
                            </div>

                           </> : <>

                                    <div className="card-body items-center text-center h-full">
                                        <h2 className="card-title">{test?.name}</h2>
                                        <p className="flex-grow">{test?.quote}</p>
                                    </div>
                                        
                                 </>
                }
            </div>
            
        </div>
    );
};

BestCards.propTypes = {
    best: PropTypes.bool,
    test: PropTypes.object,
    user: PropTypes.object
}

export default BestCards;