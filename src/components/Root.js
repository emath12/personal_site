import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Page from './Page.js'
import Notes from "./Notes.js"

function Root() {
    
    return (
        <Router>
            <Routes>
            <Route path='/' element={<Page />} />
            <Route path='/notes' element={<Notes />} />
            </Routes>
        </Router>
    )
}

export default Root;