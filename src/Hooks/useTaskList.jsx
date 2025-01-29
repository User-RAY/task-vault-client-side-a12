import {useQuery} from '@tanstack/react-query'
import useAxiosPublic from './useAxiosPublic'

const useTaskList = () => {

    const axiosPublic = useAxiosPublic();

    const {data: taskList = [], isPending: loading, refetch} = useQuery({
        queryKey: ['taskList'], 
        queryFn: async() =>{
            const res = await axiosPublic.get('/tasklist');
            return res.data;
        }
    })
    
    
    
    return [taskList, loading, refetch]
};

export default useTaskList;