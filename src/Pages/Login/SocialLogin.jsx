import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";


const SocialLogin = () => {
    const navigate = useNavigate()
    const { signInWithGoogle, signInWithGithub } = useAuth();

    const handleGoogle = () => {
        signInWithGoogle()
            .then(() => {
                navigate('/')
            })
    }
    const handleGithub = () => {
        signInWithGithub()
            .then(() => {
                navigate('/');
            })

    }
    return (
        <div>
            <button onClick={handleGoogle} className="btn btn-outline btn-success mr-2">Sign in with Google</button>
            <button onClick={handleGithub} className="btn btn-outline btn-success ">Sign in with Github</button>
        </div>
    );
};

export default SocialLogin;