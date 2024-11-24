


const FeaturedProduct = () => {
    return (
        // <div className="grid lg:grid-cols-3">
            <section className="py-16 featured-products">
                <div className="container mx-auto text-center">
                    <h2 className="mb-6 text-3xl font-bold">Featured Products</h2>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
                        {[...Array(6)].map((_, index) => (
                            <div key={index} className="p-4 rounded-lg shadow-md">
                                <img
                                    src={`https://via.placeholder.com/150?text=Product+${index + 1}`}
                                    alt={`Product ${index + 1}`}
                                className="w-full mb-4 rounded-lg"
                                />
                                <h3 className="text-lg font-bold">Product {index + 1}</h3>
                                <p className="text-gray-600">$19.99</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        // </div>
    );
};

export default FeaturedProduct;