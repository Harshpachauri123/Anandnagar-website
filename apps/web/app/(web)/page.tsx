
'use client'

import { useState } from 'react'
import Homepage from '@/components/pages/Homepage'
import AnnouncementTicker from '@/components/Hero/AnnouncementTicker'
import DigitalGateway from '@/components/Hero/DigitalGateway'
import Portals from '@/components/Hero/portals'
import DignitariesSection from '@/components/Hero/dignitariesSection'
import AboutDistrictSection from '@/components/Hero/AboutDistrict-Section'
import Galleryslider from '@/components/Hero/galleryslider'
import Complain from '@/components/Hero/complain'
import ChairmanProfile from '@/components/pages/ChairmanProfile'
import AboutUs from '@/components/pages/AboutUs'
import CitizenForms from '@/components/pages/CitizenForms'
import Gallery from '@/components/pages/Gallery'
import Services from '@/components/pages/Services'
import PublicGrievance from '@/components/pages/publicGrievance'
import Contact from '@/components/pages/Contact'
import Schemes from '@/components/pages/Schemes'
import Events from '@/components/pages/Events'
import RtiAct from '@/components/pages/RtiAct'
import Department from '@/components/pages/department'

export default function Page() {
  const [currentPage, setCurrentPage] = useState('home')

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <Homepage />
            <AnnouncementTicker />
            <DigitalGateway />
            <Portals />
            <DignitariesSection />
            <AboutDistrictSection />
            <Galleryslider/>
            <Complain/>
          </>
        )
      
      case 'about':
        return <AboutUs />
      case 'chairman':
        return <ChairmanProfile />
      case "department":
        return <Department />
      case 'publicgrievance':
        return <PublicGrievance />
      case 'forms':
        return <CitizenForms />
      case 'gallery':
        return <Gallery />
      case 'services':
        return <Services />
      case 'schemes':
        return <Schemes />
      case 'events':
        return <Events />
      case 'rtiAct':
        return <RtiAct/>
      case 'contact':
        return <Contact />

      default:
        return <Homepage />
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <main className="flex-1 w-full">
        {renderPage()}
      </main>
    </div>
  )
}
