import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import * as screen from './screens'

function App () {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Routes>
            <Route path='/' element={<screen.HomeScreen />} />
            <Route path='/products/:id' element={<screen.ProductScreen />} />
            <Route path='/cart'>
              <Route path=':id' element={<screen.CartScreen />} />
              <Route path='' element={<screen.CartScreen />} />
            </Route>
            <Route path='*' element={<screen.NotFound />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
