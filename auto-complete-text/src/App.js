import React from 'react';
import './App.css';
import AutoCompleteText from './AutoCompleteText';
import countries from "./countries";

function App() {
    return (
        <div className="App">
            <div className="App-Component">
                <div className="App-Component">
                    <AutoCompleteText items={countries}/>
                <br/>
                <br/>
                    <AutoCompleteText items={['countries','Animals','People']}/>
                </div>
            </div>
        </div>
    );
}

export default App;
