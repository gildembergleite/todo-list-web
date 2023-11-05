export default function InputText() {
  return (
    <div className="flex w-full space-x-2 -mt-7">
      <input
        className="w-full flex flex-1 p-4 rounded-lg border border-gray-700 bg-gray-500 placeholder-gray-300 text-gray-100 focus:border-purple-dark outline-none"
        placeholder="Adicione uma nova tarefa"
        type="text"
        name="task"
        id="task"
      />
      <button
        className="flex items-center gap-1 font-bold text-sm bg-blue-dark text-gray-100 p-4 rounded-lg hover:bg-blue transition-colors duration-200"
      >
        Criar +
      </button>
    </div>
  )
}