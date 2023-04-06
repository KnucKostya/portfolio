import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import Main from "./components/main/main";
import Services from "./components/services/Services";
import Projects from "./components/myProjects/Projects";
import DistanceWorkBlock from "./components/distanceWorkBlock/DistanceWorkBlock";
import Footer from "./components/footer/Footer";

export const App = () => {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Services/>
            <Projects/>
            <DistanceWorkBlock/>
            {/*<Contacts/>*/}
            <Footer/>
        </div>
    );
}

export default App;
