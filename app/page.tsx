import EventCard from '@/components/EventCard'
import ExploreBtn from '@/components/ExploreBtn'

const events = [
  { image: '/images/event1.png', title: 'Tech Conference 2024' },
  { image: '/images/event2.png', title: 'JavaScript Summit' },
  { image: '/images/event3.png', title: 'AI & ML Expo' },
  { image: '/images/event4.png', title: 'Web Dev Workshop' },
  { image: '/images/event5.png', title: 'Cloud Computing Meetup' },
  { image: '/images/event6.png', title: 'Cybersecurity Forum' },
  { image: '/images/event1.png', title: 'Open Source Con' },
  { image: '/images/event2.png', title: 'Mobile Dev Fest' },
  { image: '/images/event3.png', title: 'Data Science Symposium' },
]

const Page = () => {
  return (
    <section>
      <h1 className='text-center'>The Hub for Every Dev <br/> Event You Can&apos;t Miss</h1>
      <p className='text-center mt-5'>Hackatons, Meetups, and Conferences, All in One Place</p>
      <ExploreBtn />

        <div className='mt-20 space-y-7'>
          <h3>
            Featured Events
          </h3>
          <ul className='events'>
            {events.map((event) => (
              <li key={event.title}>
                <EventCard {...event} />
              </li>
            ))} 
          </ul>
        </div>
    </section>
  )
}

export default Page