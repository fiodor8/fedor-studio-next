'use next'

import * as React from 'react'

const CoffeCalc : React.FC = () => {

    const [mass, setMass] = React.useState(16)
    const water = mass*15 //225
    const time = [0, 45, 90, 130, 165, 210]
    const proportions : Array<number> = [0.166, 0.234, 0.2, 0.2, 0.2]

    function convertToMinSec(seconds:number) {
      const minutes = Math.floor(seconds / 60);
      const remainingSeconds = seconds % 60;
      return `${minutes}min ${remainingSeconds}s`;
    }

    return (
      <div>
        <p>Coffee: {mass}</p>
        <p>water: {water}</p>
        <p>Time:</p>
        <div className="grid grid-flow-col grid-rows-6">
          {time.map((time, index) => (
            <p key={index}>{convertToMinSec(time)}</p>
          ))}
          {proportions.map((item, index) => (
            <p key={index}>{Math.round(item * water)}</p>
          ))}
        </div>
      </div>
    );
}

export { CoffeCalc }

