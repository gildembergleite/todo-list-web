import CountBar from '@/components/CountBar'
import Header from '@/components/Header'
import InputText from '@/components/InputTask'

export default function Home() {
  return (
    <>
      <Header />
      <main className='flex w-full justify-center items-center'>
        <div className='w-full max-w-3xl'>
          <InputText />
          <CountBar />
        </div>
      </main>
    </>
  )
}