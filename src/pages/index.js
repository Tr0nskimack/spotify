import { useState } from 'react'
import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'
import ListAlbums from '../../components/ListAlbums'


const landingPage = () => {
  const [showSidebar, setShowSidebar] = useState(false)
  
  return (
    <div className='bg-graycolor min-h-screen text-gray-300'>
      <Header setShowSidebar = {setShowSidebar}/>
      <Sidebar showSidebar = {showSidebar} setShowSidebar = {setShowSidebar} />
      <ListAlbums title="Spotify PlayList"/>
      
    </div>
  )
}

export default landingPage
