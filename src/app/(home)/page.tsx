'use client'
import CountBar from '@/components/CountBar'
import Header from '@/components/Header'
import InputText from '@/components/InputTask'
import ToDoList from '@/components/ToDoList'
import DataServices from '@/services/DataServices'
import { useEffect, useState } from 'react'
import { Task } from '../../../data'

export default function Home() {
  const data = new DataServices()
  const [listTasks, setListTasks] = useState<Task[]>([])

  useEffect(() => {
    getData()
  }, [])

  async function getData() {
    const listTasks = await data.listTasks()
    setListTasks([...listTasks])
  }

  return (
    <>
      <Header />
      <main className='flex w-full justify-center items-center'>
        <div className='w-full max-w-3xl'>
          <InputText />
          <CountBar />
          <ToDoList data={data} listTasks={listTasks} />
        </div>
      </main>
    </>
  )
}