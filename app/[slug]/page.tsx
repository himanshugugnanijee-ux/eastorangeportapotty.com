import { notFound } from 'next/navigation'
import { SiteShell } from '@/components/site-shell'
import { ServicePage } from '@/components/site-pages'
import { services } from '@/lib/site-data'

export function generateStaticParams() { return services.map(({ slug }) => ({ slug })) }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const service = services.find(s => s.slug === slug); return service ? { title: `${service.title} | East Orange Porta Potty Rentals`, description: service.blurb } : {} }
export default async function Page({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const service = services.find(s => s.slug === slug); if (!service) notFound(); return <SiteShell><ServicePage service={service} /></SiteShell> }
