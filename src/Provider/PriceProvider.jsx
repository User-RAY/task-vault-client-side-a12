import PropTypes from "prop-types";
import { createContext, useState } from "react";

const PriceContext = createContext(null);


const PriceProvider = ({children}) => {

    const [price, setPrice] = useState(0);
    const [coins, setCoins] = useState(0);

    const priceInfo = {
        price,
        setPrice,
        coins,
        setCoins
    }

    return (
        <PriceContext.Provider value={priceInfo}>
            {children}
        </PriceContext.Provider>
    );
};

PriceProvider.propTypes = {
    children: PropTypes.node,
}

export  {PriceProvider , PriceContext};