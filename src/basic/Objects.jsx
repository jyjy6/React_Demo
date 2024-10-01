import { Car } from "./List"

export function GarageSecond(){
  const cars=[
    {id:1, brand:'sonata'},
    {id:2, brand:'ferrari'},
    {id:3, brand:'BMW'},
  ]
  return(
    <>
      <div>
        <h1>우리집 차고에있는거</h1>
        {cars.map((car)=>{
          return <Car key={car.id} brand={car.brand}></Car>


        })}
      </div>
    </>
  )
}