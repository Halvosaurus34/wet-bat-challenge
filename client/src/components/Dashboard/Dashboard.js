import React from 'react'
import MainDashBoard from './Maindashboard'
import Quickquote from './Quickquote'
function Dashboard() {
    return (
        <div className="dashboardcontainer">
            <MainDashBoard/>
            <Quickquote/>
        </div>
    )
}

export default Dashboard
