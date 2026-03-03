import type { ReactNode } from 'react'

interface SectionProps {
  id: string
  title: string
  subtitle?: string
  children: ReactNode
  dark?: boolean
}

export function Section({ id, title, subtitle, children, dark }: SectionProps) {
  return (
    <section
      id={id}
      className={`py-20 px-6 ${dark ? 'bg-dark text-white' : 'bg-bg'}`}
    >
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <h2 className={`text-3xl md:text-4xl font-bold mb-3 ${dark ? 'text-white' : 'text-primary'}`}>
            {title}
          </h2>
          {subtitle && (
            <p className={`text-lg ${dark ? 'text-white/60' : 'text-muted'}`}>{subtitle}</p>
          )}
          <div className="w-16 h-1 bg-gold mt-4 rounded-full" />
        </div>
        {children}
      </div>
    </section>
  )
}

export function Card({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div className={`bg-card rounded-2xl border border-border p-6 shadow-sm ${className}`}>
      {children}
    </div>
  )
}

export function Table({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-border">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-primary text-white">
            {headers.map((h, i) => (
              <th key={i} className="px-4 py-3 text-left font-medium">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              {row.map((cell, j) => (
                <td key={j} className="px-4 py-3 border-t border-border">{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export function Stat({ value, label, accent }: { value: string; label: string; accent?: boolean }) {
  return (
    <div className="text-center">
      <div className={`text-3xl font-bold ${accent ? 'text-accent' : 'text-primary'}`}>{value}</div>
      <div className="text-muted text-sm mt-1">{label}</div>
    </div>
  )
}
