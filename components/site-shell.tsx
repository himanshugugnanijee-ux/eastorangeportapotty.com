'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ChevronDown, Menu, Phone, X, ArrowUpRight } from 'lucide-react'
import { business, navServices } from '@/lib/site-data'

export function SiteShell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  return <>
    <div className="topbar"><div className="container topbar-inner"><span>Serving East Orange & Essex County</span><a href={business.phoneHref}><Phone size={14} /> {business.phone}</a></div></div>
    <header className="site-header"><div className="container nav-wrap">
      <Link href="/" className="brand" onClick={() => setOpen(false)}><span className="brand-mark" aria-hidden="true">EP</span><span><strong>East Orange</strong><small>Porta Potty Rentals</small></span></Link>
      <nav className="desktop-nav" aria-label="Main navigation"><Link href="/">Home</Link><div className="services-nav"><button type="button">Services <ChevronDown size={16} /></button><div className="services-menu">{navServices.map(s => <Link key={s.slug} href={`/${s.slug}`}>{s.short}<ArrowUpRight size={14} /></Link>)}</div></div><Link href="/about">Why choose us</Link><Link href="/contact">Contact</Link></nav>
      <a className="nav-call" href={business.phoneHref}><Phone size={16} /> Call now</a>
      <button className="menu-button" onClick={() => setOpen(v => !v)} aria-expanded={open} aria-label={open ? 'Close menu' : 'Open menu'}>{open ? <X /> : <Menu />}</button>
    </div></header>
    {open && <div className="mobile-menu"><div className="container"><Link href="/" onClick={() => setOpen(false)}>Home</Link><Link href="/services" onClick={() => setOpen(false)}>All services</Link>{navServices.map(s => <Link key={s.slug} href={`/${s.slug}`} onClick={() => setOpen(false)} className="mobile-service">{s.short}</Link>)}<Link href="/about" onClick={() => setOpen(false)}>Why choose us</Link><Link href="/contact" onClick={() => setOpen(false)}>Contact</Link><a className="mobile-menu-call" href={business.phoneHref}><Phone size={17} /> {business.phone}</a></div></div>}
    {children}
    <footer className="footer"><div className="container footer-grid"><div><Link href="/" className="brand footer-brand"><span className="brand-mark">EP</span><span><strong>East Orange</strong><small>Porta Potty Rentals</small></span></Link><p>Clean, dependable portable restroom rentals for East Orange, New Jersey and the communities around it.</p></div><div><h3>Explore</h3><Link href="/services">All services</Link><Link href="/about">Why choose us</Link><Link href="/contact">Contact</Link></div><div><h3>Talk to our team</h3><a href={business.phoneHref}>{business.phone}</a><a href={`mailto:${business.email}`}>{business.email}</a><span>{business.address}</span></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} East Orange Porta Potty Rentals</span><span>{business.hours}</span></div></footer>
    <a className="mobile-sticky-call" href={business.phoneHref}><Phone size={18} /> Call for availability</a>
  </>
}
