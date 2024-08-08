import React from "react";

interface BrandItem {
    brand: string
}

const Brands: React.FC<BrandItem> = ({ brand }) => {
    return (
        <img src={`./img/background/${brand}.png`} alt={brand} className=""/>
    )
}

export default Brands