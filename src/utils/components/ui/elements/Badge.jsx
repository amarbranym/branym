import React from 'react'

const normalizeText = (text) => text.toLowerCase().replace(/[^a-z]/g, '')

const colors = {
  ui: 'bg-purple-700',
  branding: 'bg-orange-700',
  design: 'bg-yellow-700',
  prototyping: 'bg-blue-700',
  development: 'bg-red-700',
  ceo: 'bg-purple-700',
  cofounder: 'bg-orange-700',
  designlead: 'bg-yellow-700',
  frontendspecialist: 'bg-blue-700',
  csa: 'bg-blue-700',
  cta: 'bg-purple-700',
  cloudengineer: 'bg-orange-700',
  backenddatabase: 'bg-yellow-700',
}

const capitalize = (text) =>
  text.charAt(0).toUpperCase() + text.slice(1).toLowerCase()

const Badge  = ({key,  text }) => {
  const normalizedText = normalizeText(text)
  const colorClass = colors[normalizedText] || 'bg-gray-700'

  return (
    <div
    key={key}
      className={`inline-block rounded-lg px-2 ${colorClass} text-sm font-extralight uppercase text-white`}
    >
      {capitalize(text)}
    </div>
  )
}

export default Badge 
