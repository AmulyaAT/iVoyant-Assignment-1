import React from 'react';
import './styles/App.css';
import Header from './components/Header';
import SideBar from './components/SideBar';
import MainContent from './components/MainContent';

const App: React.FC = () => {
    return (
        <div className="app">
            <Header />
            <div className="app-body">
                <SideBar />
                <MainContent />
                
            </div>
        </div>
    );
}

export default App;
