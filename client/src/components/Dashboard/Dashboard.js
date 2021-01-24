import React from 'react'
import MainDashBoard from './Maindashboard'
import Quickquote from './Quickquote'
import PendingQuotes from './PendingQuotes'
import NewLeads from './NewLeads'
import PopularDestinations from './PopularDestinations'
import TeamChat from './TeamChat'
import Revenue from './Revenue'
import PotentialRevenue from './PotentialRevenue'
import CloseRatios from './CloseRatios'

function Dashboard(props) {
    return (
        <div className="dashboardcontainer">
            <MainDashBoard />
            <div className="row2">
                <Quickquote onAdd={props.onAdd} />
                <PendingQuotes quotes={props.quotes} />
                <NewLeads />
            </div>
            <div className="row3">
                <PopularDestinations />
                <TeamChat />
            </div>
            <div className="row4">
                <Revenue />
                <PotentialRevenue />
                <CloseRatios />
            </div>
        </div>
    )
}

export default Dashboard
