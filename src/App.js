import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from './components/LoginPage';
import Home from './components/Home';

function App() {
    return (
        <div className='App'>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<LoginPage />} />
                    <Route path='/home' element={<Home />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
