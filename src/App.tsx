import Navbar from './component/Navbar/Navbar.tsx'
import Welcome from './component/Landing Page/Welcome.tsx'
import Headline from './component/Landing Page/Headline.tsx'
import Message from './component/Footer/Message.tsx'
import Footer from './component/Footer/Footer.tsx'


export default function App() {
  return (
    <>
      <body className="bg-dasar">
        <header>
          <Navbar />
        </header>

        <main className="flex items-center justify-center flex-col">
          <Welcome />
          <Headline />
        </main>

        <footer>
          <Message />
          <Footer />
        </footer>
      </body>
    </>
  )
}