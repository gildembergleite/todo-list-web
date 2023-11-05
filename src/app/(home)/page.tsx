import CountBar from '@/components/CountBar'
import Header from '@/components/Header'
import InputText from '@/components/InputTask'
import ListItem from '@/components/ListItem'

export default function Home() {
  return (
    <>
      <Header />
      <main className='flex w-full justify-center items-center'>
        <div className='w-full max-w-3xl'>
          <InputText />
          <CountBar />
          <ListItem />
        </div>
      </main>
    </>
  )
}