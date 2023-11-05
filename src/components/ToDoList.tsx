import DataServices from '@/services/DataServices'
import ListItem from './ListItem'
import { Task } from '../../data'

interface ToDoListProps {
  data: DataServices
  listTasks: Task[]
  onGetData: Function
}

export default function ToDoList({ data, listTasks, onGetData }: ToDoListProps) {
  async function markTaskAsCompleted(taskId: number) {
    await data.markTaskAsCompleted(taskId)
    await onGetData()
  }

  async function deleteTask(taskId: number) {
    await data.deleteTask(taskId)
    await onGetData()
  }
  
  return (
    <div>
      {
        listTasks.map((task) => (
          <ListItem
            key={task.id}
            task={task}
            onMarkTaskAsCompleted={markTaskAsCompleted}
            onDeleteTask={deleteTask}
          />
        ))
      }
    </div>
  )
}