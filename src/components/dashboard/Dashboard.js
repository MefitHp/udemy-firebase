import React, { Component } from 'react'
import NotificationPanel from './NotificationPanel'
import ProjectList from '../projects/ProjectList'

class Dashboard extends Component {
    render() {
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col m6 s12">
                        <ProjectList />
                    </div>
                    <div className="col s12 m4 offset-m1">
                        <NotificationPanel />
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard