import { useState, useEffect } from 'react'
import { Routes, Route, useParams } from 'react-router-dom'
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./components/Home"
import About from "./components/About"
import Store from "./components/Store"
import Error from './components/Error'
import Single from './components/Single'
import data from './data'

const App =()=> {

    const [ products, setProducts ] = useState([])

    useEffect(()=> {
        setProducts(data)
    }, [])


    
    return (
        <>
            <Header />
            <Routes>
                <Route path='/' element={ <Home /> } />
                <Route path='/about' element={ <About /> } />
                <Route path='/store' element={ <Store products={products} /> } />
                <Route path={`/store/:id}`} element={ <Single /> } />
                <Route path='*' element={ <Error /> } />
            </Routes>
            <Footer />
        </>
    )
}

export default App