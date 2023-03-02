import Select, { SingleValue } from 'react-select'

interface GetClientProps {
  getValue: (name: string) => void
}

const FilterBy = ({ getValue }: GetClientProps) => {
  const options = [
    { value: 'Educational', label: 'Educational' },
    { value: 'Governmental', label: 'Governmental' },
    { value: 'Marketing', label: 'Marketing' },
  ]

  const handleInputChange = (
    data: SingleValue<{ label: string; value: string }>
  ) => {
    getValue(data!.value)
  }

  return (
    <div className="w-full md:max-w-[220px]">
      <Select
        onChange={handleInputChange}
        options={options}
        placeholder="filter by..."
      />
    </div>
  )
}

export default FilterBy
