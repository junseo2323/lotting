
import Nav from '@/components/Nav'
import './globals.css'
import Header from '@/components/Header'
import RecoilRootProvider from './recoilRootProvider';


export const metadata = {
  title: 'LOTTING',
  description: 'LOTTING SYSTEM 개발중',
}

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <script src="//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"></script>
      </head>
      <body>
        <Nav /> 
        <Header />
        <RecoilRootProvider>
          <main>{children}</main>
        </RecoilRootProvider>
      </body>
    </html>
  )
}
