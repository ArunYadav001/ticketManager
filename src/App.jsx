import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DashBoard from './pages/Dashboard';
import TicketPage from './pages/TicketPage';
import './styles.css';
import Nav from './components/Nav';
import CategoriesContext from './context';


const App = () => {

    const [categories, setCategories] = useState(null);

    const value = { categories, setCategories };

    return (
        <div className="app">
            <CategoriesContext.Provider value={value}>
                <BrowserRouter>
                    <Nav />
                    <Routes>
                        <Route path='/' element={<DashBoard />} />
                        <Route path='/ticket' element={<TicketPage />} />
                        <Route path='/ticket/:id' element={<TicketPage editMode={true} />} />
                    </Routes>
                </BrowserRouter>
            </CategoriesContext.Provider>
        </div>
    )
}

export default App;