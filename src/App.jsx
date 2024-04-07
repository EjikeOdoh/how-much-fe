import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Rice from './assets/ekpoma-rice.webp'
import Beans from './assets/beans.jpg'
import Egusi from './assets/egusi.webp'
import formatCurrency from './utils/FormatCurrency'
import ItemCard from './components/ItemCard'

function App() {
  const [items, setItems] = useState(0)

useEffect(()=>{
async function getItems() {
const response = await fetch('https://how-much-n5qb.onrender.com/')

const data  = await response.json()

setItems(data)
}

getItems();
  }, [])
  return (
   <>
   <h1 className='text-centera'>Oga how much na? </h1>

  <div className='grid gap-10'>

   <ItemCard name='Local Rice' description="Rice as one of the major staple food in Nigeria can help boost the economy in this trying time. Currently, Nigeria is not self-sufficient in rice production, but it has the capacity to produce the quantity it needs and even more for export. Five major rice ecologies have been identified in the country, which include upland, hydromorphic, lowland, deep inland water and mangrove swamps. If these rice ecologies are utilized optimally there will be no need to import rice again in to the country." image={Rice} price={formatCurrency(items?.localRice)} />
   <ItemCard name='White Beans' description="Nigerian Stewed Beans is a Nigerian Beans recipe made with Honey or Black Eyed Beans. Stewed Beans is quite similar to the popular Beans Pottage, the main difference being the addition of ground fresh pepper. I personally prefer Stewed Beans because I prefer my Beans really rich and lush." image={Beans} price={formatCurrency(items?.beans)} />
   <ItemCard name='Egusi' description="Egusi (Yoruba) (also known as agusi, ohue, Ikpan, Ikon, agushi or mbíka) is the name for the protein-rich seeds of certain cucurbitaceous plants (squash, melon, gourd), which, after being dried and ground, are used as a major ingredient in West African cuisine." image={Egusi} price={formatCurrency(items.egusi)} />
  </div>



      </>
  )
}

export default App
