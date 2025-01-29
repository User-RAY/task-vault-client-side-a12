import Card from "../../Components/Card/Card";
import useTaskList from "../../Hooks/useTaskList";


const TaskList = () => {

        const [taskList] = useTaskList();


    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

        {
            taskList.map(data => <div key={data.task_id}  className="flex flex-col h-full">
                <Card data={data}></Card>
            </div>)
        }



        </div>
    );
};

export default TaskList;