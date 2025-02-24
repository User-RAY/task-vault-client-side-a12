import PropTypes from "prop-types";


const BestCards = ({best=true, test={}, user={}}) => {

    
    return (
        <div>

            <div className={`card  ${best ? 'bg-base-100' : 'bg-slate-700 text-white'} shadow-xl`}>
                <figure className="px-10 pt-10">
                    <img
                    src={best ? user.user_img :  test.photo }
                    alt="Profile Picture"
                    className="object-cover rounded-full w-52 h-52" />
                </figure>


                {
                    best ? <>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Available Coins: <span>{user.coin}</span></h2>  
                            </div>

                           </> : <>

                                    <div className="card-body items-center text-center">
                                        <h2 className="card-title">{test?.name}</h2>
                                        <p>{test?.quote}</p>
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