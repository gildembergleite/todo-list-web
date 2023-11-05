'use client'
import { useState } from 'react'

export default function ListItem() {
  const description = 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.'
  const [isCompleted, setIsCompleted] = useState(false)

  return (
    <div className="flex w-full mb-3 gap-3 items-center p-4 rounded-lg bg-gray-500 border border-gray-400">
      <input
        onChange={() => setIsCompleted(!isCompleted)}
        type="checkbox"
        name="checkTask"
        id="checkTask"
      />
      <p className={`flex-1 ${isCompleted ? 'line-through text-gray-300' : 'text-gray-100'}`}>
        {description}
      </p>
      <button>
        <svg
          className='stroke-gray-300 hover:stroke-danger'
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