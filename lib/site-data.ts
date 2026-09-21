export const business = {
  name: 'East Orange Porta Potty Rentals',
  phone: '+1 (715) 379-2164',
  phoneHref: 'tel:+17153792164',
  email: 'contact@eastorangeportapotty.com',
  address: '10–12 Hedden Pl, East Orange, NJ 07017',
  hours: 'Mon–Sat: 7am–7pm',
}

export const services = [
  { slug: 'standard-porta-potty-rental', short: 'Standard Porta Potty', title: 'Standard Porta Potty Rental in East Orange, NJ', image: '/images/Porta potty photos/outdoor-porta-potties.jpg', blurb: 'Clean, dependable units for job sites, gatherings, and everyday needs.', body: 'A standard portable toilet is the simple answer when you need a clean restroom without adding plumbing, construction, or complications. We deliver well-maintained units across East Orange and nearby Essex County communities, place them where guests and crews can reach them, and keep the process clear from the first call.' },
  { slug: 'construction-site-porta-potty-rental', short: 'Construction Site Toilets', title: 'Construction Site Porta Potty Rental', image: '/images/Porta potty photos/construction-toilet-portable.jpg', blurb: 'Reliable site sanitation that keeps crews moving and projects compliant.', body: 'Your crew should not lose productive time looking for a restroom. Our construction site rentals are planned around access, work phases, and the realities of an active East Orange job site. We help contractors choose the right number of units and service cadence for the project.' },
  { slug: 'event-porta-potty-rental', short: 'Event Porta Potties', title: 'Event Porta Potty Rental for East Orange Gatherings', image: '/images/Porta potty photos/event-porta-potty-rentals.jpg', blurb: 'Guest-ready portable restrooms for parties, festivals, and community events.', body: 'Good event planning includes the moments guests do not post about. We provide practical, clean restroom solutions for outdoor celebrations, school events, block parties, and public gatherings throughout East Orange. Our team helps you plan placement and capacity so the facilities feel like part of the event—not an afterthought.' },
  { slug: 'ada-compliant-portable-restrooms', short: 'ADA Accessible Units', title: 'ADA-Compliant Portable Restrooms', image: '/images/Porta potty photos/ada-compliant-portable-toilets-for-special-events.jpg', blurb: 'Roomier accessible units that help every guest use the event comfortably.', body: 'Accessible restroom planning is part of welcoming everyone. Our ADA-compliant portable restrooms offer ground-level access, extra interior room, and wide doors for mobility devices and caregivers. We can help you include accessible units in an event layout or construction-site plan.' },
  { slug: 'handwashing-station-rental', short: 'Handwashing Stations', title: 'Portable Handwashing Station Rental', image: '/images/Porta potty photos/handwashing-station.png', blurb: 'Convenient handwashing stations with soap and water for cleaner outdoor spaces.', body: 'Portable toilets work best when handwashing is close by. Our standalone stations give guests, workers, and vendors a convenient place to wash with soap and water, making them a smart addition for food service, festivals, worksites, and any gathering where cleanliness matters.' },
  { slug: 'luxury-restroom-trailer-rental', short: 'Luxury Restroom Trailers', title: 'Luxury Restroom Trailer Rental', image: '/images/Porta potty photos/luxury-trailer.png', blurb: 'A more polished restroom experience for weddings, galas, and elevated events.', body: 'When the occasion calls for more than a basic unit, a restroom trailer creates a comfortable, finished guest experience. We help event hosts think through access, placement, and timing for trailer rentals in East Orange and surrounding New Jersey communities.' },
  { slug: 'long-term-porta-potty-rental', short: 'Long-Term Rentals', title: 'Long-Term Porta Potty Rental', image: '/images/Porta potty photos/long-term-rentals.png', blurb: 'Straightforward recurring service for extended projects, sites, and seasonal needs.', body: 'Long-term rentals are easier when service is predictable. We support construction projects, renovations, parks, and seasonal operations with recurring schedules that keep units usable, stocked, and positioned for the people who rely on them every day.' },
  { slug: 'portable-sink-rental', short: 'Portable Sink Rental', title: 'Portable Sink Rental in East Orange', image: '/images/Porta potty photos/portable-sink-for-rent.jpg', blurb: 'Practical portable sinks for food service, events, and temporary facilities.', body: 'A portable sink adds a dedicated handwashing point wherever plumbing is unavailable. Our sink rentals are useful for outdoor kitchens, community events, work areas, and temporary facilities that need a clean, convenient setup.' },
] as const

export const serviceAreas = ['East Orange', 'Orange', 'West Orange', 'Newark', 'Montclair', 'Bloomfield', 'Irvington', 'Maplewood', 'South Orange']

export const faqs = [
  ['How quickly can you deliver?', 'Call us with your location and date. We will confirm availability and the most practical delivery window for your project or event.'],
  ['How many portable toilets do I need?', 'It depends on guest count, event length, alcohol service, and whether you need accessible or handwashing units. We will help you estimate a comfortable setup.'],
  ['Do you service long-term rentals?', 'Yes. We can discuss recurring cleaning and pumping schedules for construction sites, renovations, seasonal locations, and extended projects.'],
]

export const navServices = services.map(({ slug, short }) => ({ slug, short }))
