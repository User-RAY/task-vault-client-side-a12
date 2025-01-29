import Card from "../../Components/Card/Card";
import useTaskList from "../../Hooks/useTaskList";


const TaskList = () => {

        const [taskList] = useTaskList();


    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

        {
            taskList.map(data => <Card key={data.task_id} data={data}></Card>)
        }



        </div>
    );
};

export default TaskList;