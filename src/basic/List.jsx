function List(){
  return(
    <>
      리스트 컴포넌트임



    </>
  )
}

export function Car(props){
  return(
    <>
      
      <div>{props.brand}</div>
    </>
  )
}

export function Garage(){
  const cars = ['Ford', 'BMW', 'Audi'];

  return(
    <>
      <h1>Who lives in my garage?</h1>
      <ul>
        {cars.map((car, i)=>{
          return <Car key={i} brand={car}></Car>

        })}
      </ul>
      <ul>
        {cars.forEach((car, i)=>{
          return <Car key={i} brand={car}></Car>

        })}
      </ul>
    </>
  )

}


export default List