import React,  { useState } from "react";
import './basic-parameters.css'

const BasicParameters = ({lifePower, setLifePower}) => {
    const [ strength, setStrength ] = useState(0);
    const [ dexterity, setDexterity ] = useState(0);
    const [ intelligence, setIntelligence ] = useState(0);
    const [ charisma, setCharisma ] = useState(0);
    let [ lifeLevel, setLifeLevel ] = useState('Нетренированный');
    let [ avoidanceLevel, setAvoidanceLevel ] = useState('Нетренированный');
    let [ energyLevel, setEnergyLevel ] = useState('Нетренированный');

    const strengthHandler = (isIncrement) => {
        const newStrength = isIncrement ? strength + 1 : strength - 1
        setStrength(newStrength)
        setLifePower(newStrength + 3)
    };

    const dexterityHandler = (isIncrement) => {
        const newDexterity = isIncrement ? dexterity + 1 : dexterity - 1
        setDexterity(newDexterity)
    };

    const intelligenceHandler = (isIncrement) => {
        const newIntelligence = isIncrement ? intelligence + 1 : intelligence - 1
        setIntelligence(newIntelligence)
    };

    const charismaHandler = (isIncrement) => {
        const newCharisma = isIncrement ? charisma + 1 : charisma - 1
        setCharisma(newCharisma)
    }

    const ohHit = () => {
        alert(`Вы нанесли удар на ${strength}hp`)
    }

    const avoidance = dexterity + 10;

    const energy = dexterity + intelligence;

    if (lifePower > 20 && lifePower <= 40){
        lifeLevel = 'Новичок'
    } else if (lifePower > 40 && lifePower <= 60){
        lifeLevel = 'Ученик'
    } else if (lifePower > 60 && lifePower <= 80){
        lifeLevel = 'Адепт'
    } else if (lifePower > 80 && lifePower < 100){
        lifeLevel = 'Эксперт'
    } else if (lifePower === 100){
        lifeLevel = 'Мастер'
    };

    if(avoidance !== 0 && avoidance <= 20){
        avoidanceLevel = 'Нетренированный'
    } else if (avoidance > 20 && avoidance <= 40){
        avoidanceLevel = 'Новичок'
    } else if (avoidance > 40 && avoidance <= 60){
        avoidanceLevel = 'Ученик'
    } else if (avoidance > 60 && avoidance <= 80){
        avoidanceLevel = 'Адепт'
    } else if (avoidance > 80 && avoidance < 100){
        avoidanceLevel = 'Эксперт'
    } else if (avoidance === 100){
        avoidanceLevel = 'Мастер'
    }
    
    
    if(energy !== 0 && energy <= 20){
        energyLevel = 'Нетренированный'
    } else if (energy > 20 && energy <= 40){
        energyLevel = 'Новичок'
    } else if (energy > 40 && energy <= 60){
        energyLevel = 'Ученик'
    } else if (energy > 60 && energy <= 80){
        energyLevel = 'Адепт'
    } else if (energy > 80 && energy < 100){
        energyLevel = 'Эксперт'
    } else if (energy === 100){
        energyLevel = 'Мастер'
    }


    return(
        <>
        <div className="baseList">
            <div className="tittleItem">Базовые параметры</div>
            <div>
                <ul className="list-group">
                    <li className="list-group-item">
                        <button disabled={ strength === 0 } className="btn btn-danger" onClick={ () => strengthHandler(false) }>-</button>
                        <div className="liItem"> Сила: { strength } </div>
                        <button disabled={ strength === 97 } className="btn btn-success" onClick={ () => strengthHandler(true) }>+</button>
                    </li>
                    <li className="list-group-item">
                        <button disabled={ dexterity === 0 } className="btn btn-danger" onClick={ () => dexterityHandler(false) }>-</button>
                        <div className="liItem"> Ловкость: { dexterity } </div>
                        <button disabled={avoidance === 100} className="btn btn-success" onClick={ () => dexterityHandler(true) }>+</button>
                    </li>
                    <li className="list-group-item">
                        <button disabled={ intelligence === 0 } className="btn btn-danger" onClick={ () => intelligenceHandler(false) }>-</button>
                        <div className="liItem"> Интелект: { intelligence } </div>
                        <button disabled={energy === 100} className="btn btn-success" onClick={ () => intelligenceHandler(true) }>+</button>
                    </li>
                    <li className="list-group-item">
                        <button disabled={ charisma === 0 } className="btn btn-danger" onClick={ () => charismaHandler(false) }>-</button>
                        <div className="liItem"> Харизма: { charisma } </div>
                        <button disabled={charisma === 100} className="btn btn-success" onClick={ () => charismaHandler(true) }>+</button>
                    </li>
                </ul>
            </div>
        </div>
        <div className="anotherParametrs">
            <div className="tittleParam">Вычисляемые параметры</div>
            <ul className="list-group">
                <li className="list-group-item all">
                    <span className="param">Жизненая сила: {lifePower}</span>
                    <input className="level" disabled value={ lifeLevel }/>
                </li>
                <li className="list-group-item all">
                    <span className="param">Уклонение: {avoidance}</span>
                    <input className="level" disabled value={ avoidanceLevel }/>
                </li>
                <li className="list-group-item all">
                    <span className="param">Энергичность: {energy}</span>
                    <input className="level" disabled value={ energyLevel }/>
                </li>
            </ul>
        </div>
        <button id='hit' disabled={ strength == 0 } className="hit btn" onClick={ohHit}>Нанести урон</button>
        </>
        
    )
}

export default BasicParameters;