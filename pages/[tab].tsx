import { GetServerSideProps } from 'next'
import React, { Fragment } from 'react'
import Sidebar from '../components/sidebar/Sidebar'
import { useRouter } from 'next/router'
import CampaignsTab from '../components/tabs/CampaignsTab'
import InsightsTab from '../components/tabs/InsightsTab'

const Campaign = () => {
  const router = useRouter()

  return (
    <Fragment>
      <div className="w-full flex">
        <Sidebar />
        {router.query.tab === 'campaigns' ? <CampaignsTab /> : <InsightsTab />}
      </div>
    </Fragment>
  )
}

export default Campaign

export const getServerSideProps: GetServerSideProps = async (context) => {
  // handle session check
  if (!context.req.cookies.session_token)
    return {
      redirect: {
        destination: '/',
      },
      props: {},
    }
  return {
    props: {},
  }
}
