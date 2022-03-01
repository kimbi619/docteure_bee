import './App.css'
import { useEffect } from 'react'
import { Client } from './Client'
import Main from './Components/Main/Main'
import Nav from './Components/Nav/Nav'
import { Route, Switch } from 'react-router'
import useLocalStorage from './UseLocalStorage'
import HomePage from './Components/Home/HomePage'
import Contact from './Components/Contact'
import About from './Components/About'
import Footer from './Components/Footer/Footer'
import Honey from './Components/FeaturedProducts/Honey'
import OtherMainProduct from './Components/FeaturedProducts/OtherMainProduct'
import Winery from './Components/Winery'

import i18next from 'i18next'
import Checkout from './Components/Checkout/Checkout'
import { CartContextProvider } from './Components/Main/CartContext'
import { tabTitle } from '.'
import env from 'react-dotenv'

function App() {
  tabTitle('docteure bee')

  const changeLanguage = (lang, e) => {
    i18next.changeLanguage(lang)
    e.target.parentElement.classList.add('hideLang')
  }
  const [products, setProducts] = useLocalStorage('products', [])

  const fetchData = async () => {
    let currentLang = i18next.language
    const res = await Client.getEntries({
      locale: currentLang === 'fr' ? 'fr' : 'en-US',
    })

    setProducts(res.items)
    // .catch(err=>console.log(err))
  }
  useEffect(() => {
    fetchData()
  }, [])

  i18next.on('languageChanged', () => {
    window.location.reload()
  })

  return (
    <div className='App'>
      <CartContextProvider>
        <Nav handleChangeLanguage={changeLanguage} products={products} />
        <div className='mainAppWrapper'>
          <Main products={products} />

          <Switch>
            <Route path='/contact-us' component={Contact} />
            <Route path='/about' component={About} />
            <Route path='/winery' component={Winery} />
            <Route path='/pollen' component={OtherMainProduct} />
            <Route path='/hydromel' component={OtherMainProduct} />
            <Route path='/propolis' component={OtherMainProduct} />
            <Route path='/royal-jelly' component={OtherMainProduct} />
            <Route path='/immune-booster' component={OtherMainProduct} />
            <Route path='/honey'><Honey products={products} /></Route>
            <Route path='/cart/checkout' component={Checkout} />
            <Route path='/' exact component={HomePage} />
          </Switch>
        </div>
        <Footer />
      </CartContextProvider>
    </div>
  )
}

export default App
