import React from 'react'
import countries from 'countries-list'

interface CountriesProps extends React.HTMLAttributes<HTMLSelectElement> {
  value: string
}

const Countries = ({ value, onChange }: CountriesProps) => {
  const countryOptions = Object.entries(countries.countries).map(
    ([code, name]) => ({
      value: code,
      label: name.name,
    })
  )

  return (
    <select
      value={value}
      onChange={onChange}
      className="w-full h-12 border border-black outline-none rounded-md pl-3 mt-5"
    >
      {countryOptions.map(({ value, label }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  )
}

export default Countries
