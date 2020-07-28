import React, { Fragment, useEffect} from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { getAllUsers } from '../../../actions/admin';

import Spinner from '../../Layout/Header/Spinner'
import UserItem from './UserItem';


 const UsersList = ({ getAllUsers, usersList: { users, loading }, admin, lawyer}) => {
    useEffect(() => {getAllUsers()}, [getAllUsers])
   /*  if (!admin || !lawyer) {
        return <Redirect to='/' />
    } */
    console.log(users)
    return (
        <Fragment>
         { loading ? <Spinner /> : <Fragment>
            <h1 className="mb-3 text-center">משתמשים</h1>
           
            <div className="lw-wrapper row">
                {users.length > 0 ? (
                    users.map(user => (
                    <UserItem key={user._id} user={user} />
                ))
                 ) : <h4>לא נמצאו עובדים..</h4>}
            </div>
            </Fragment>}  
    </Fragment>
    )
}


const mapStateToProps = state => ({
    usersList: state.admin,
    admin: state.auth.admin
});



export default connect(mapStateToProps, { getAllUsers })(UsersList);