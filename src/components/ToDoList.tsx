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
        listTasks.length > 0
          ? (
            listTasks.map((task) => (
              <ListItem
                key={task.id}
                task={task}
                onMarkTaskAsCompleted={markTaskAsCompleted}
                onDeleteTask={deleteTask}
              />
            )))
          : (
            <div className='flex flex-col justify-center items-center text-gray-300 stroke-gray-300 pt-16 border border-transparent border-t-gray-400'>
              <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24">
                <g fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M16 4.002c2.175.012 3.353.109 4.121.877C21 5.758 21 7.172 21 10v6c0 2.829 0 4.243-.879 5.122C19.243 22 17.828 22 15 22H9c-2.828 0-4.243 0-5.121-.878C3 20.242 3 18.829 3 16v-6c0-2.828 0-4.242.879-5.121c.768-.768 1.946-.865 4.121-.877" />
                  <path strokeLinecap="round" d="M8 14h8m-9-3.5h10m-8 7h6" />
                  <path d="M8 3.5A1.5 1.5 0 0 1 9.5 2h5A1.5 1.5 0 0 1 16 3.5v1A1.5 1.5 0 0 1 14.5 6h-5A1.5 1.5 0 0 1 8 4.5v-1Z" />
                </g>
              </svg>
              <div className='mt-4'>
                <p>Você ainda não tem tarefas cadastradas</p>
                <p>Crie tarefas e organize seus itens a fazer</p>
              </div>
            </div>
          )
      }
    </div>
  )
}