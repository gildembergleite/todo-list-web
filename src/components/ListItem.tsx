import { Task } from '../../data'

interface ListItemProps {
  task: Task
  onMarkTaskAsCompleted: Function
  onDeleteTask: Function
}

export default function ListItem({ task, onMarkTaskAsCompleted, onDeleteTask }: ListItemProps) {

  async function handleMarkTaskAsCompleted(taskId: number) {
    onMarkTaskAsCompleted(taskId)
  }

  async function handleDeleteTask(taskId: number) {
    await onDeleteTask(taskId)
  }

  return (
    <div className="flex w-full mb-3 gap-3 items-center p-4 rounded-lg bg-gray-500 border border-gray-400">
      <input
        onChange={() => handleMarkTaskAsCompleted(task.id)}
        className={`
          h-4 w-4 bg-transparent border-2 border-blue hover:border-blue-dark rounded-full cursor-pointer outline-none focus:ring-transparent focus:ring-offset-transparent transition-all duration-200
          ${task.isCompleted ? 'text-purple-dark' : ''}
        `}
        type="checkbox"
        name="checkTask"
        id="checkTask"
      />
      <label htmlFor='checkTask' className={`flex-1 ${task.isCompleted ? 'line-through text-gray-300' : 'text-gray-100'}`}>
        {task.description}
      </label>
      <button onClick={() => handleDeleteTask(task.id)}>
        <svg
          className='stroke-gray-300 hover:stroke-danger transition-colors duration-200'
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 7h16m-10 4v6m4-6v6M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2l1-12M9 7V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3" />
        </svg>
      </button>
    </div>
  )
}