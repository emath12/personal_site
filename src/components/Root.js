import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Page from './Page.js'
import Notes from "./Notes.js"
import FunBlog from './FunBlog.js';

function Root() {
    
    return (
        <Router>
            <Routes>
            <Route path='/' element={<Page />} />
            <Route path='/notes' element={<Notes />} />
            <Route path='/fun' element={<FunBlog />} />
            </Routes>
        </Router>
    )
}

export default Root;