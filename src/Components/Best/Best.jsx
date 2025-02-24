import { useQuery } from "@tanstack/react-query";
import BestCards from "../BestCards/BestCards";
import useAxiosPublic from "../../Hooks/useAxiosPublic";



const Best = () => {

    const axiosPublic = useAxiosPublic();

    

    const {data: best = []} = useQuery({
        queryKey: ['best'], 
        queryFn: async() =>{
            const res = await axiosPublic.get(`/users/best`);
            return res.data;
        }
    })


    

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                {/* <BestCards></BestCards>
                <BestCards></BestCards>
                <BestCards></BestCards> */}

                {
                    best.map(user => <BestCards key={user._id} user={user}></BestCards>)
                }

            </div>

            
        </>
    );
};

export default Best;