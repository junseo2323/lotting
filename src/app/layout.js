import Nav from '@/components/Nav'
import './globals.css'

export const metadata = {
  title: 'LOTTING',
  description: 'LOTTING SYSTEM 개발중',
}

export default function RootLayout({ children }) {
  return (
    <>
      <Nav />
      <main>{children}</main>
    </>
  )
}
