import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";


export default function ErrorPage() {
    const {user}=useAuth();
    
    return (
        <div
            className="min-h-screen hero"
            style={{
                backgroundImage: "url(https://i.ibb.co.com/6XNFx63/sadface.gif)",
            }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="text-center hero-content text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Hello {user?.displayName}</h1>
                    <h1 className="mb-5 text-3xl font-bold">We can’t find that page</h1>
                    <p className="mb-5">
                    Sorry, the page you are looking for does not exist or has been moved.
                    </p>
                    <Link to="/" className="btn btn-primary">Go to home</Link>
                </div>
            </div>
        </div>
    )
}
