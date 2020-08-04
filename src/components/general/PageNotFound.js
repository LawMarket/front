import React from 'react';
import { Link } from 'react-router-dom';
import './PageNotFound.css';

 const PageNotFound = () => {
    return (
        <div className="page-not-found">
            <h1 className="page-not-found_h1">404</h1>
<p>אופס! משהו לא בסדר.</p>
<Link className="button" to="#"><i className="icon-home"></i> חזור לדף הבית</Link>
        </div>
    )
}

export default PageNotFound;
