import React, { useState, useEffect } from 'react';
import './App.css';

import Card from './Card';
import CardModule from './CardModule/Card';
import imgUrl from './chuck.png';

const facts = [
    "Chuck Norris doesn't bug hunt as that signifies a probability of failure, he goes bug killing.",
    'Once a police officer caught Chuck Norris, the cop was lucky enough to escape with a warning.',
    "Chuck Norris doesn't step on toes. Chuck Norris steps on necks.",
    'Chuck Norris can divide by zero.',
    "Chuck Norris doesn't need an account. He just logs in.",
    'Chuck Norris won super bowls VII and VIII singlehandedly before unexpectedly retiring to pursue a career in ass-kicking.',
    "With Chuck Norris P = NP. There's no nondeterminism with Chuck Norris decisions.",
    'There are only two things that can cut diamonds: other diamonds, and Chuck Norris.',
];

function App() {
    // const [facts, setFact] = useState([]);

    // useEffect(() => {
    //     const interval = setInterval(async () => {
    //         const response = await fetch('https://api.icndb.com/jokes/random');
    //         const json = await response.json();
    //         setJokes((facts) => [json.value.joke, ...facts]);
    //     }, 1000);
    //     return () => clearInterval(interval);
    // }, []);

    return (
        <div className="flex flex-col flex-grow-0 justify-center">
            {facts.map((joke, key) => (
                <CardModule
                    headline={'Chuck Norris Fact'}
                    image={imgUrl}
                    text={joke}
                    key={key}
                />
            ))}

            {facts.map((joke, key) => (
                <Card
                    headline={'Chuck Norris Fact'}
                    image={imgUrl}
                    text={joke}
                    key={key}
                />
            ))}
        </div>
    );
}

export default App;
