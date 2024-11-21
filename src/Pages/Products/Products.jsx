import ProductCurd from "../Home/Featured/ProductCurd";


const Products = () => {
    return (
        <div className="grid grid-cols-3">
        <ProductCurd/>
        <ProductCurd/>
        <ProductCurd/>
        <ProductCurd/>
        <ProductCurd/>
        <ProductCurd/> 
        </div>
    );
};

export default Products;