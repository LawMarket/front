import React from 'react';
import Headline from "./Headline";
import { connect } from "react-redux";

import Navbar from "./Navbar";

const Header = ({ admin }) => {

    if (admin) {
        console.log('okay')
    }
    return (
        <div>
            <Headline />
            {admin ? '' : <Navbar />}
            
        </div>
    )
}

const mapStateToProps = state => ({
    admin: state.auth.admin
});

export default connect(mapStateToProps)(Header);
