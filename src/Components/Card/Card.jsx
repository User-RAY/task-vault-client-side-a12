

const Card = () => {
    return (
        <div>


            <div className="card bg-base-100 shadow-xl">
                <figure>
                    <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes" />
                </figure>
                <div className="card-body">
                <h2>Buyer Name</h2>
                    <h2 className="card-title">Task Title</h2>
                    <h2 className="font-bold">required_workers: 10</h2>
                    <h2 className="font-bold">payable_amount : 1$</h2>
                    <h2 className="font-bold">completion_date: 2201-392-2 </h2>

                    <div className="card-actions justify-end mt-2">
                    <button className="btn btn-primary">View Details</button>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Card;