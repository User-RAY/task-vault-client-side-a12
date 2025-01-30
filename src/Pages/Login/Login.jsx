import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useContext } from "react";
import AuthContext from "../../Provider/Auth/AuthContext";
import useAxiosPublic from "../../Hooks/useAxiosPublic";


const Login = () => {

    const {login, setLoading, googleLogin, errorMessage, setErrorMessage} = useContext(AuthContext);



    const navigate = useNavigate();

    const location = useLocation();

    const axiosPublic = useAxiosPublic();


    const handleLogin = (e) => {
        e.preventDefault();
        setErrorMessage('');
        const email = e.target.email.value;
        const password = e.target.password.value;



        login(email, password)
        .then(() => {
            e.target.reset();
            navigate(location?.state ? location.state : '/');
          })
          .catch((error) => {
            const err = error.message;
            setErrorMessage(err)
            setLoading(false);
          });
    }

    const handleGoogle = () => {
        
        googleLogin()
        .then((result) => {
            
            const userInfo = {
                user_name: result.user?.displayName,
                user_email: result.user?.email,
                user_img: result.user?.photoURL,
                coin: 10,
                role: "worker"
            }
            

            axiosPublic.post('/users', userInfo)
            .then( () => {
                navigate(location?.state ? location.state : '/');
            })


        })
        .catch((error) => {
            const err = error.message;
            setErrorMessage(err)
          });
    }

    return (
        <div>

            <div className="min-h-screen flex flex-col justify-center items-center w-11/12 mx-auto my">
                <h1 className="text-4xl my-4"> Login now </h1>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form className="card-body text-black pb-0" onSubmit={handleLogin}>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                        </div>
                        <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                        </div>
                    </form>

                    {
                        errorMessage && <p className='px-8 pb-8 text-center text-red-600'>{errorMessage}</p>
                    }

                    <div className="px-4">
                        <div className="divider text-black">OR</div>
                        <button className="btn max-w-sm w-full bg-black text-white mb-4 shadow-2xl" onClick={handleGoogle}> <FcGoogle className="text-xl" />Login with Google</button>
                    </div>
                    <h2 className="px-8 mb-4 text-center text-black ">Do not have an account? then <Link to='/register' className="text-blue-600">Register</Link></h2>
                </div>

            </div>
            
        </div>
    );
};

export default Login;