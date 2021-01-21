import React from 'react'
import office from "./office.png"

function Dashboard() {
    return (
        <div className="dashboard">
            <div className="dashboardtext">   
                <h1 className="dashboardtitle">Welcome to your dashboard</h1>
                <p className="dashboardparagraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at hendrerit mi, luctus luctus ipsum. Quisque eu lorem ante. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean sed tristique ante. Phasellus pretium ligula ac nibh pretium, quis sodales sapien sodales. Nullam eu sodales metus. Morbi tellus odio, lobortis eget accumsan ac, ultrices vel risus. Fusce condimentum hendrerit tellus, nec mattis lacus mollis ac. Pellentesque a sapien ultrices, tempor sem sed,Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at hendrerit mi, luctus luctus ipsum. Quisque eu lorem ante. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean sed tristique ante. Phasellus pretium ligula ac nibh pretium, quis sodales sapien sodales. Nullam eu sodales metus. Morbi tellus odio, lobortis eget accumsan ac, ultrices vel risus. Fusce condimentum hendrerit tellus, nec mattis  consequat nulla.</p>
            </div>
            <div className="statscontainer">
                <img className="officeimg" src={office} alt="office"/>
                <div className="stats">
                    <div className="newleadscontainer">
                        <div className="newleadsnum">101</div>
                        <div className="newleads">NEW LEADS</div>
                    </div>
                    <div className="quotescreatedcontainer">
                        <div className="quotescreatednum">35</div>
                        <div className="quotescreated">QUOTES CREATED</div>
                    </div>
                    <div className="pendingorderscontainer">
                        <div className="pendingordersnum">40</div>
                        <div className="pendingorders">PENDING ORDERS</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
