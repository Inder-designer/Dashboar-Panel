import Image from 'next/image'
import { Inter } from 'next/font/google'
import WelcomePage from '@/components/WelcomePage/WelcomePage'
import Login from '@/components/Login/Login'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={``}
    >
      <WelcomePage/>
      {/* <Login/> */}
    </main>
  )
}
