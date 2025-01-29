import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";


const Card = ({data = {}}) => {
    
    return (
        <div>


            <div className="card bg-base-100 shadow-xl">
                <figure>
                    <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes" />
                </figure>
                <div className="card-body">
                <h2>{data.Buyer_name}</h2>
                    <h2 className="card-title">{data.task_title}</h2>
                    <h2 className="font-bold">required_workers: {data.required_workers}</h2>
                    <h2 className="font-bold">payable_amount : {data.payable_amount}$</h2>
                    <h2 className="font-bold">completion_date: {data.completion_date}</h2>

                    <div className="card-actions justify-end mt-2">
                    <NavLink to={`/dashboard/details`} className="btn btn-primary">View Details</NavLink>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

Card.propTypes = {
    data: PropTypes.object,
}

export default Card;