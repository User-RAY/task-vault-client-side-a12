import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";


const Card = ({data = {}}) => {
    
    return (
        <>


            <div className="card bg-base-100 shadow-xl h-full">
                <figure>
                    <img
                    src={data.task_image_url}
                    alt="Shoes" className="object-cover w-full h-full"/>
                </figure>
                <div className="card-body flex-grow">
                <h2>{data.buyer_name}</h2>
                    <h2 className="card-title flex-grow">{data.task_title}</h2>
                    <h2 className="font-bold flex-grow">required_workers: {data.required_workers}</h2>
                    <h2 className="font-bold flex-grow">payable_amount : {data.payable_amount}$</h2>
                    <h2 className="font-bold flex-grow">completion_date: {data.completion_date}</h2>

                    <div className="card-actions justify-end mt-2">
                    <NavLink to={`/dashboard/details/${data._id}`} className="btn btn-primary">View Details</NavLink>
                    </div>
                </div>
            </div>
            
        </>
    );
};

Card.propTypes = {
    data: PropTypes.object,
}

export default Card;