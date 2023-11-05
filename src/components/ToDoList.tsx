import DataServices from '@/services/DataServices'
import ListItem from './ListItem'
import { Task } from '../../data'

interface ToDoListProps {
  data: DataServices
  listTasks: Task[]
}

export default function ToDoList({ data, listTasks }: ToDoListProps) {
  return (
    <div>
      {
        listTasks.map((task) => (
          <ListItem key={task.id} data={data} task={task} />
        ))
      }
    </div>
  )
}