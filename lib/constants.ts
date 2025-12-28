export type EventItem = {
    title: string;
    image: string;
    slug?: string;
    location?: string;
    date?: string;
    time?: string;
};

export const events: EventItem[] = [
    {
        image: '/images/event1.png',
        title: 'Tech Conference 2024',
        slug: 'tech-conference-2024',
        location: 'San Francisco, CA',
        date: '2024-09-15',
        time: '10:00 AM - 5:00 PM',
    },
    {
        image: '/images/event2.png',
        title: 'JavaScript Summit',
        slug: 'javascript-summit',
        location: 'New York, NY',
        date: '2024-10-20',
        time: '9:00 AM - 6:00 PM',
    },
    {
        image: '/images/event3.png',
        title: 'AI & ML Expo',
        slug: 'ai-ml-expo',
        location: 'Boston, MA',
        date: '2024-11-05',
        time: '11:00 AM - 4:00 PM'
    },
    {
        image: '/images/event4.png',
        title: 'Web Dev Workshop',
        slug: 'web-dev-workshop',
        location: 'Chicago, IL',
        date: '2024-12-12',
        time: '1:00 PM - 5:00 PM',
    },
    {
        image: '/images/event5.png',
        title: 'Cloud Computing Meetup',
        slug: 'cloud-computing-meetup',
        location: 'Seattle, WA',
        date: '2025-01-18',
        time: '10:00 AM - 3:00 PM',
    },
    {
        image: '/images/event6.png',
        title: 'Cybersecurity Forum',
        slug: 'cybersecurity-forum',
        location: 'Austin, TX',
        date: '2025-02-22',
        time: '9:00 AM - 5:00 PM',
    },
];