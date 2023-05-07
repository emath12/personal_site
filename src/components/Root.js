import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Page from './Page.js'

function Root() {
    
    return (
        <Router>
            <Routes>
            <Route path='/' element={<Page />} />
            </Routes>
        </Router>
    )
}

export default Root;