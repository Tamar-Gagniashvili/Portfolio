import React from 'react'
import Layout from '../Admin/Layout/Layout'
import {Switch, Route} from 'react-router';


const Admin = (props) => {
    return (
        <Layout>
            <Switch>
                <h1>admin page</h1>
                {/* <Route path='/admin/login' component={}/> */}
            </Switch>
        </Layout>
    )

}

export default Admin