import Main from "./components/Main"
import Footer from "./components/Footer"
import Sidebar from "./components/Sidebar"
import { useState } from "react"
import { useEffect } from "react"

function App() {
const [data, setData] = useState(null)
const [loading, setLoading] = useState(false)
const [showModel, setShowModel] = useState(false)


function handleToggleModel(){
  setShowModel(!showModel)
}


useEffect(() => {
async function fetchApiData() {
  const NASA_KEY = import.meta.env.VITE_NASA_API_KEY;
  const url = `https://api.nasa.gov/planetary/apod?api_key=${NASA_KEY}`;



 const today = (new Date()).toDateString()
      const localKey = `NASA-${today}`
      if (localStorage.getItem(localKey)) {
        const apiData = JSON.parse(localStorage.getItem(localKey))
        setData(apiData)
        console.log('Fetched from cache today')
        return
      }
      localStorage.clear()

      try {
        const res = await fetch(url)
        const apiData = await res.json()
        localStorage.setItem(localKey, JSON.stringify(apiData))
        setData(apiData)
        console.log('Fetched from API today')
      } catch (err) {
        console.log(err.message)
      }
    }
fetchApiData()
}, [])


  return (
    <>
      {data ? (<Main data={data}/>): (
        <div className="LoadingState">
          <i className="fa-solid fa-gear"></i>
        </div>

      )}
      {showModel && (<Sidebar data={data} handleToggleModel={handleToggleModel}/>)}
      {data && (<Footer data={data} handleToggleModel={handleToggleModel}/>)}
    </>
  )
}

export default App
