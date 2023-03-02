import React, { useState } from 'react'
import TabNavbar from '../navbar/TabNavbar'
import { useRouter } from 'next/router'
import { MagnifyingGlassIcon, PlusIcon } from '@heroicons/react/24/outline'
import FilterBy from '../../utils/FilterBy'
import jsonData from '../../data/campaigns.json'
import type { Campaign } from '../../utils/types'

const data: Campaign[] = jsonData as Campaign[]

const CampaignsTab = () => {
  const router = useRouter()
  const columns = ['ID', 'Name', 'Date', 'contacts', 'Actions']
  const [tableData, setTableData] = useState(data)

  const getFilterBy = (filter: string) => {
    // get filter dropdown value
  }

  return (
    <div className="w-full min-h-screen ml-20 lg:ml-44 flex flex-col justify-start p-7">
      <TabNavbar />

      <div className="w-full flex flex-wrap flex-col justify-start items-start gap-3 md:flex-row">
        <button className="text-white bg-primary rounded-md w-full md:w-44 h-[38px] hover:bg-opacity-90 font-semibold flex justify-center items-center gap-2">
          <PlusIcon className="w-5" />
          Add Campaign
        </button>

        <div className="relative w-full md:w-[200px]">
          <input
            className="px-10 w-full text-primary border border-primary rounded-md outline-none h-[38px] box-border focus:border-secondary"
            name="search"
            type="text"
            // add value and onChange
          />
          <MagnifyingGlassIcon
            // onClick={initSearch}
            className="absolute top-[0.55rem] left-3 w-5 text-primary hover:text-secondary cursor-pointer"
          />
        </div>
        <FilterBy getValue={getFilterBy} />
      </div>
      {/* Add the <Table> */}
    </div>
  )
}

export default CampaignsTab
