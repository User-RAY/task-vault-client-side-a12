import { useContext } from "react";
import { RiCoinsLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { PriceContext } from "../../Provider/PriceProvider";


const CoinInfo = () => {

    const {setPrice, setCoins} = useContext(PriceContext);
    

    const handlePay = (p, c) => {
        setPrice(p);
        setCoins(c);
    }



    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

            <div className="card bg-slate-200 shadow-xl">
                <div className="card-body items-center text-center">
                    <RiCoinsLine className="text-4xl" />
                    <h2 className="text-lg font-bold">10 Coins</h2>
                    <p className="my-4 text-3xl font-bold">$1</p>
                    <div className="card-actions">
                    <NavLink to={`/dashboard/pay`} className="btn btn-primary" onClick={() => handlePay(1, 10)}>Purchase Now</NavLink >
                    </div>
                </div>
            </div>
            <div className="card bg-slate-200 shadow-xl">
                <div className="card-body items-center text-center">
                    <RiCoinsLine className="text-4xl" />
                    <h2 className="text-lg font-bold">150 Coins</h2>
                    <p className="my-4 text-3xl font-bold">$10</p>
                    <div className="card-actions">
                    <NavLink to={`/dashboard/pay`} className="btn btn-primary"onClick={() => handlePay(10, 150)}>Purchase Now</NavLink>
                    </div>
                </div>
            </div>
            <div className="card bg-slate-200 shadow-xl">
                <div className="card-body items-center text-center">
                    <RiCoinsLine className="text-4xl" />
                    <h2 className="text-lg font-bold">500 Coins</h2>
                    <p className="my-4 text-3xl font-bold">$20</p>
                    <div className="card-actions">
                    <NavLink to={`/dashboard/pay`} className="btn btn-primary" onClick={() => handlePay(20, 500)}>Purchase Now</NavLink>
                    </div>
                </div>
            </div>
            <div className="card bg-slate-200 shadow-xl">
                <div className="card-body items-center text-center">
                    <RiCoinsLine className="text-4xl" />
                    <h2 className="text-lg font-bold">1000 Coins</h2>
                    <p className="my-4 text-3xl font-bold">$35</p>
                    <div className="card-actions">
                    <NavLink to={`/dashboard/pay`} className="btn btn-primary" onClick={() => handlePay(35, 1000)}>Purchase Now</NavLink>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default CoinInfo;