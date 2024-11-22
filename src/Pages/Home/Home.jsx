import According from "./According/According";
import Banner from "./Banner";
import FeaturedProduct from "./Featured/FeaturedProduct";
import UserReview from "./Review/UserReview";


const Home = () => {
    return (
        <div>
            <Banner/>
            <div className="my-10">
                <h1 className="flex justify-center text-xl mb-14">Featured Product</h1>
            <FeaturedProduct/>
            </div>
            <div className="my-10">
            <h1 className="flex justify-center text-xl mb-14">User Review</h1>
                <UserReview/>
            </div>
            <div className="my-10">
            <h1 className="flex justify-center text-xl mb-14">Frequently Asked Question</h1>
                <According/>
            </div>
        </div>
    );
};

export default Home;