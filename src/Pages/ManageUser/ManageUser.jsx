import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Select from 'react-select'
import Swal from "sweetalert2";


const ManageUser = () => {

    const axiosSecure = useAxiosSecure();

    const {data: users = [], refetch} = useQuery({
        queryKey: ['users'], 
        queryFn: async() =>{
            const res = await axiosSecure.get(`/users-details`);
            return res.data;
        }
    })

    const options = [
        { value: 'worker', label: 'Worker' },
        { value: 'buyer', label: 'Buyer' },
        { value: 'admin', label: 'Admin' },
      ];
      

      const handleRole = async(e, id) => {
        e.preventDefault();

        const Newrole = e.target.role.value;
        
        const updateRole = {
            role: Newrole,
        }

        const res = await axiosSecure.patch(`/role/${id}`, updateRole);

        if(res.data.modifiedCount) {
            refetch();
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `Role Upadated`,
                showConfirmButton: false,
                timer: 1500
                });
            e.target.reset();                
        }
        

      }

      const handleDelete = async(id) => {

        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
              confirmButton: "btn btn-success",
              cancelButton: "btn btn-danger"
            },
            buttonsStyling: false
          });
          swalWithBootstrapButtons.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, cancel!",
            reverseButtons: true
          }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/users/${id}`)
                .then(res => {
                    if (res.data.deletedCount) {
                        refetch();
                        swalWithBootstrapButtons.fire({
                            title: "Deleted!",
                            text: "User has been deleted.",
                            icon: "success"
                          });
                    }
                })
            } else if (
              result.dismiss === Swal.DismissReason.cancel
            ) {
              swalWithBootstrapButtons.fire({
                title: "Cancelled",
                text: "User is not deleted",
                icon: "error"
              });
            }
          })



        

      }
    



    return (
        <div>

            <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                <tr>
                    <th>#</th>
                    <th>User Name</th>
                    <th>User Email</th>
                    <th>User photo</th>
                    <th>role</th>
                    <th>coin</th>
                    <th>Action</th>
                    <th className="text-center">Update Role</th>
                </tr>
                </thead>
                <tbody>


                { users.map((user, index) =><tr key={user._id}>
                    <th>{index+1}</th>
                    <td>{user.user_name}</td>
                    <td>{user.user_email}</td>
                    <td><img src={user.user_img} alt="profile pic" className="object-cover w-12 h-12 rounded-full"/></td>
                    <td>{user.role}</td>
                    <td>{user.coin}</td>
                    <td><button className="btn btn-error" onClick={() => handleDelete(user._id)}>Delete user</button></td>
                    <td>
                    <form onSubmit={(e) => handleRole(e, user._id)}>
                        <div className="card-actions grid grid-cols-1 md:grid-cols-3 items-center">
                        <div className='flex items-center justify-end col-span-2 mt-6 md:mt-0'>
                         <Select className='w-36' name="role" options={options}  required  />
                        </div>
                            <button className='btn btn-primary w-1/2 mt-6 md:w-auto md:mt-0'>Update Role</button>
                        </div>

                    </form>
                    </td>
                </tr>)
                }





                </tbody>
            </table>
            </div>
            
        </div>
    );
};

export default ManageUser;