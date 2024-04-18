import React, { useState } from 'react';

function Counter() {
// Initialisation de l'état avec useState
// Le 0 est la valeur initiale de l'état `count`
const [count, setCount] = useState(0);
function inc() {
    setCount(count + 1);
    }
    function dec() {
    setCount(count - 1);
    }
    function raz() {
    setCount(0);
    }
    return (
    <div>
        <h1>Compteur: {count}</h1>
        <button onClick={ inc }>Incrémenter</button>
        <button onClick={ dec }>Décrémenter</button>
        <button onClick={ raz }>Réinitialiser</button>
    </div>
    );
    }
export default Counter;