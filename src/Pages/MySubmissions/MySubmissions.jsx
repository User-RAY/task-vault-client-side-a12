import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useUser from "../../Hooks/useUser";
import { useEffect, useState } from "react";


const MySubmissions = () => {
    

    const axiosSecure = useAxiosSecure();

    const {userInfo} = useUser();

    const [subdata, setSubdata] = useState([]);
    const [selectedpage, setSelectedPage] = useState(1);

    const {data: mySubmissions = []} = useQuery({
        queryKey: ['MySubmissions'], 
        queryFn: async() =>{
            const res = await axiosSecure.get(`/submission/${userInfo.user_email}`);
            return res.data;
        }
    })

    const subPerPage = 10;
    const totalSubs = mySubmissions.length;
    const totalPage = Math.ceil(totalSubs / subPerPage);
    
    const totalPages = [...Array(totalPage).keys()]


    useEffect(() => {

        axiosSecure.get(`/pagesubmissions/${userInfo.user_email}?page=${selectedpage-1}`)
        .then(resPage => setSubdata(resPage.data))

    }, [axiosSecure, selectedpage, userInfo.user_email])
    
    
    const handlePage = (p) => {
        setSelectedPage(p)
    }
        


    return (
        <div className="min-h-full flex flex-col justify-around">


<div className="overflow-x-auto">
                <table className="table table-zebra mb-6">
                    {/* head */}
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>task_title</th>
                        <th>payable_amount</th>
                        <th>Buyer_name</th>
                        <th>status</th>
                    </tr>
                    </thead>
                    <tbody>
                    {/* row 1 */}


                    {
                        subdata.map((submission,index) => <tr key={submission._id}>
                            <th>{((selectedpage-1)*10) + index+ 1}</th>
                            <td>{submission.task_title}</td>
                            <td>{submission.payable_amount}</td>
                            <td>{submission.buyer_name}</td>
                            <td className={`font-bold ${submission.status === 'pending' ? 'bg-yellow-300' : submission.status === 'approve' ? 'bg-green-500' : 'bg-red-600'}`}>{submission.status}</td>
                        </tr> )
                    }


                    </tbody>
                </table>
            </div>

            <div className="text-center flex justify-center items-end grow mb-32 lg:mb-16">
                <div className="join">
                    {
                        totalPages.map((page) => <button key={page} onClick={() => handlePage(page+1)} className={`join-item btn btn-square ${(page+1) === selectedpage ? 'bg-blue-500' : ''}`}>{page + 1}</button>)
                    }
                </div>
            </div>
            
        </div>
    );
};

export default MySubmissions;