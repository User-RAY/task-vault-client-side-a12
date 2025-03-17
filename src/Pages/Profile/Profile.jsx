import useUser from "../../Hooks/useUser";


const Profile = () => {

    const {userInfo} = useUser();

    

    return (
        <div>
            <div className=" bg-base-200 min-h-screen ">
            <h1 className="text-5xl font-bold py-14 text-center">User Profile Information</h1>
                <div className="hero">
                    <div className="hero-content text-center ">
                        <div className="max-w-md">

                        <div className="avatar">
                            <div className="w-24 rounded-full">
                                <img src={userInfo.user_img}/>
                            </div>
                        </div>
                        <h1 className="text-4xl font-bold">{userInfo.user_name}</h1>
                        <h2 className="py-1">
                            Email : {userInfo.user_email}
                        </h2>
                        <h2 className="py-1">
                            Role : {userInfo.role}
                        </h2>
                        <h2 className="py-1">
                            Available Coins : {userInfo.coin}
                        </h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;