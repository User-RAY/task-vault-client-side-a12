import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../../Provider/Auth/AuthContext";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const Register = () => {

    const axiosPublic = useAxiosPublic();
    const {register, updateUserProfile, setUser, setLoading, errorMessage, setErrorMessage} = useContext(AuthContext);

    const navigate = useNavigate();

    const [selectedOption, setSelectedOption] = useState("");

    const handleChange = (e) => {
      setSelectedOption(e.target.value);
    };

    const handleRegister = (e) => {

        e.preventDefault();

        setErrorMessage('');

        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const role = selectedOption;
        let coin = 0;
        if (role === "worker") {
            coin = 10;
        } else {
            coin = 50;
        }
        

        register(email, password)
        .then(() => {
            const updateUserData = {displayName: name, photoURL: photo};
            updateUserProfile(updateUserData)
            .then(() => {
                setUser((prevUser) => {
                return {...prevUser, updateUserData}
                });
            })
            const userInfo = {
                user_name: name,
                user_email: email,
                user_img: photo,
                coin: coin,
                role: role
            }

            axiosPublic.post('/users', userInfo)
            .then(() => {
                
                e.target.reset();
            })
            navigate('/')
          })
          .catch((error) => {
            const err = error.message;
            setErrorMessage(err)
            setLoading(false);
          });

    }


    return (
        <div>
            
            <div className="min-h-screen flex flex-col justify-center items-center w-11/12 mx-auto mb-8">
                <h1 className="text-4xl my-4"> Register now </h1>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form className="card-body text-black pb-0" onSubmit={handleRegister}>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="User Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo-URL</span>
                        </label>
                        <input type="text" name="photo" placeholder="Photo-URL" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Role</span>
                        </label>
                        <select name="role" value={selectedOption} onChange={handleChange}  className="input appearance-auto pl-2 input-bordered" required>
                            <option value='' disabled>Select Role</option>
                            <option value="worker">Worker</option>
                            <option value="buyer">Buyer</option>
                        </select>
                        </div>

                        <div className="form-control mt-2">
                        <button className="btn btn-primary">Register</button>
                        </div>
                    </form>

                    {
                        errorMessage && <p className='px-8 pb-8 text-center text-red-600'>{errorMessage}</p>
                    }

                    <h2 className="px-8 my-4 text-center text-black">Already have an account? then <Link to='/login' className="text-blue-600">Login</Link></h2>
                </div>


            </div>

            
        </div>
    );
};

export default Register;