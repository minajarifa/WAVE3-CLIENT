import ProductCurd from "./ProductCurd";


const FeaturedProduct = () => {
    return (
        <div className="grid lg:grid-cols-3">
         <ProductCurd />   
         <ProductCurd/>   
         <ProductCurd/>   
         <ProductCurd/>   
         <ProductCurd/>   
        </div>
    );
};

export default FeaturedProduct;