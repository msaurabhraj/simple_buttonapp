import { useContext } from "react"
import { CountContext } from "../context";
import { RecoilRoot, useRecoilCallback, useRecoilState, useRecoilValue } from "recoil";
import { countAtom } from "./store/atoms/count";


function App() {
  
  
  // wrap anyone that wants to use the teleported value inside a provider
  return (
    <div>
      <RecoilRoot>
        <Count/>
      </RecoilRoot>
    
    </div>
  )
}

function Count() {
  console.log("count-rerender")
  return <div>
    <CountRenderer />
    <Buttons />
  </div>
}

function CountRenderer(){
const count = useRecoilValue(countAtom);//using the count item 

  return <div>
    {count}
  </div>
}

function Buttons() {
  const[count,setCount]= useRecoilState(countAtom);
  return <div>
    <button onClick={() => {
      setCount(count + 1)
    }}>Increase</button>

    <button onClick={() => {
      setCount(count - 1)
    }}>Decrease</button>
  </div>
}

export default App