import React from 'react'
import MainDashBoard from './Maindashboard'
import Quickquote from './Quickquote'
import PendingQuotes from './PendingQuotes'
import NewLeads from './NewLeads'
import PopularDestinations from './PopularDestinations'

function Dashboard() {
    return (
        <div className="dashboardcontainer">
            <MainDashBoard/>
            <Quickquote/>
            <PendingQuotes/>
            <NewLeads/>
            <PopularDestinations/>
        </div>
    )
}

export default Dashboard
