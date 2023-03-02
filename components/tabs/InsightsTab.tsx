import React from 'react'
import TabNavbar from '../navbar/TabNavbar'
import { useRouter } from 'next/router'
import jsonData from '../../data/campaigns.json'
import type { Campaign } from '../../utils/types'
import BarChart from '../charts/BarChart'

const data: Campaign[] = jsonData as Campaign[]

const InsightsTab = () => {
  const router = useRouter()

  return (
    <div className="w-full min-h-screen ml-20 lg:ml-44 flex flex-col justify-start p-7">
      <TabNavbar />
      {/* Add the Charts */}
      <BarChart />
    </div>
  )
}

export default InsightsTab
