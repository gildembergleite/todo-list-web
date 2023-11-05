export default function CountBar() {
  return (
    <div className="flex w-full justify-between items-center mt-16 mb-6">
      <div className="flex items-center gap-2 text-sm font-bold">
        <p className="text-blue">Tarefas criadas</p>
        <p className="bg-gray-400 px-2 py-0.5 text-gray-100 rounded-full">0</p>
      </div>
      <div className="flex items-center gap-2 text-sm font-bold">
        <p className="text-purple">Concluídas</p>
        <p className="bg-gray-400 px-2 py-0.5 text-gray-100 rounded-full">0</p>
      </div>
    </div>
  )
}