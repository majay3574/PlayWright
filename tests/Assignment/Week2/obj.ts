type legoCar ={wheel: number, color: string, speed: number};
type legoHouse ={door: number, color: string, area: number};

type lego = legoCar | legoHouse;
let lego1: lego = {wheel: 4, color: "red", speed: 100, door: 2, area: 1000};
console.log(lego1);
