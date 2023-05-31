import Heading from './Components/Heading'
import { Section }  from './Components/Section'
import  Counter  from './Components/Counter'
import { useState } from "react";
import Lists from './Components/Lists';

function App() {
  const [ count, setCount] = useState<number>(1)

  return (
    <>
    <Heading title={'hello'}/>
    <Section title={ 'diff title'}> This is my section</Section>
    <Counter setCount={setCount}>Count is {count}</Counter>
    <Lists items={['coffee', 'tacos', 'code']} render ={(item:string) => <span>{item}</span>}/>
    </>
  )
}

export default App
