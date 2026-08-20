
'use client'

import React from 'react'
import Image from 'next/image'
import { Calendar, Clock, MapPin } from 'lucide-react'

interface EventItem {
  id: string
  title: string
  descriptionKey: string
  date: string
  time: string
  location: string
  imageUrl: string
}

export default function Events() {
  const eventsList: EventItem[] = [
    {
      id: 'Swachh-Bharat',
      title: 'Swachh Bharat Day',
      descriptionKey: 'Cleanliness drive conducted with large citizen participation.',
      date: '15 Mar 2024',
      time: '07:00 AM',
      location: 'Town Hall, Nagar Panchayat',
      imageUrl: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 'citizen-Awareness',
      title: 'Citizen Awareness Program',
      descriptionKey: 'Workshop on civic sense, digital services and water conservation held.',
      date: '22 Mar 2024',
      time: '02:00 PM',
      location: 'Community Center',
      imageUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 'Public-meeting',
      title: 'Independence Day',
      descriptionKey: 'Flag hoisting ceremony and cultural celebrations.',
      date: '15 Aug 2024',
      time: '08:00 AM',
      location: 'Municipal Building',
      imageUrl: 'https://images.unsplash.com/photo-1532375810709-75b1da00537c?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 'Womens-Day',
      title: 'Women\'s Day Celebration',
      descriptionKey: 'Programs and workshops for empowerment & awareness.',
      date: '08 Mar 2024',
      time: '10:00 AM',
      location: 'Town Hall',
      imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 'Health-Camp',
      title: 'Free Health Camp',
      descriptionKey: 'General health checkup and free medicine distribution by medical teams.',
      date: '05 Aug 2024',
      time: '09:00 AM',
      location: 'Primary Health Center',
      imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop'
    }
  ]

  return (
    <div className="w-full bg-[#f8fafc] min-h-screen pb-16">
      
      {/* Top Header Section */}
      <section className="w-full text-center py-10 px-6">
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#1e3a8a] tracking-tight">
          Events & News
        </h1>
        <p className="text-gray-500 text-sm md:text-base mt-2">
          Latest updates and public activities from Nagar Palika Parishad, Etah.
        </p>
      </section>

      {/* Main Events Grid */}
      <main className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {eventsList.map((event) => (
            <div 
              key={event.id} 
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col justify-between"
            >
              <div>
                {/* Image & Date Badge Overlay */}
                <div className="relative w-full h-48 bg-gray-100">
                  <Image 
                    src={event.imageUrl} 
                    alt={event.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  
                  {/* Date Badge */}
                  <div className="absolute top-3 left-3 bg-[#0070f3] text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                    {event.date}
                  </div>
                </div>

                {/* Card Details Body */}
                <div className="p-5">
                  <h2 className="text-lg font-bold text-gray-900 mb-2 line-clamp-1">
                    {event.title}
                  </h2>
                  <p className="text-xs text-gray-500 mb-4 line-clamp-2 min-h-[32px]">
                    {event.descriptionKey}
                  </p>

                  {/* Metadata List */}
                  <div className="space-y-2 pt-2 border-t border-gray-100 text-xs text-gray-600">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-emerald-600 shrink-0" />
                      <span>{event.date}</span>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-emerald-600 shrink-0" />
                      <span>{event.time}</span>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-emerald-600 shrink-0" />
                      <span className="truncate">{event.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Upcoming Events Banner */}
        <div className="mt-12 bg-[#e0f2fe] border border-blue-100 rounded-2xl p-8 flex flex-col items-center text-center gap-3 shadow-sm">
          <h2 className="text-2xl font-bold text-[#1e3a8a]">Upcoming Events</h2>
          <p className="text-blue-800 text-sm">Events CalendarDesc</p>
          <button 
            suppressHydrationWarning
            type="button"
            className="mt-2 bg-[#10b981] hover:bg-[#0ea5e9] text-white font-semibold py-2.5 px-6 rounded-xl transition-colors shadow-sm text-sm"
          >
            View Calendar
          </button>
        </div>
      </main>
    </div>
  )
}
