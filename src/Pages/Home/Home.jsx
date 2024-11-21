import According from "./According/According";
import Banner from "./Banner";
import FeaturedProduct from "./Featured/FeaturedProduct";
import UserReview from "./Review/UserReview";


const Home = () => {
    return (
        <div>
            <Banner/>
            <div className="my-10">
                <h1 className="mb-14 text-xl flex justify-center">Featured Product</h1>
            <FeaturedProduct/>
            </div>
            <div className="my-10">
            <h1 className="mb-14 text-xl flex justify-center">User Review</h1>
                <UserReview/>
            </div>
            <div className="my-10">
            <h1 className="mb-14 text-xl flex justify-center">Frequently Asked Question</h1>
                <According/>
            </div>
        </div>
    );
};

export default Home;