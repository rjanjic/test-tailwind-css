import React, { useState, useEffect } from 'react';
import './App.css';

import Card from './Card/Card';
import CardModule from './Card/CardModule';
import CardApplyModule from './Card/CardApplyModule';
import CardClassNames from './Card/CardClassNames';
import imgUrl from './chuck.png';

function App() {
    const [fact, setFact] = useState([]);

    useEffect(() => {
        const interval = setInterval(async () => {
            const response = await fetch('https://api.icndb.com/jokes/random');
            const json = await response.json();
            setFact(json.value.joke);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-col flex-grow-0 justify-center">
            <Card
                headline={'Chuck Norris Fact - Only classes'}
                image={imgUrl}
                text={fact}
            />
            <CardModule
                headline={'Chuck Norris Fact - Module'}
                image={imgUrl}
                text={fact}
            />
            <CardApplyModule
                headline={'Chuck Norris Fact - Module apply'}
                image={imgUrl}
                text={fact}
            />
            <CardClassNames
                headline={'Chuck Norris Fact - Module'}
                image={imgUrl}
                text={fact}
            />
        </div>
    );
}

export default App;
