import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Car from './pages/car';
import Other from './pages/other';
import Datacont from './dataContext/dataContext';
import { useState } from 'react';

const App = () => {
    const [data, setData] = useState(['1','2','3']);
    return (
        <Datacont.Provider value={data}>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Car />} />
                    <Route path='/other' element={<Other />} />
                    <Route path='/contact' element={<h2>Contact page in progress...</h2>} />
                    <Route path='*' element={<h2>404 not found</h2>} />
                </Routes>
            </BrowserRouter>
        </Datacont.Provider>
    );
};

export default App;