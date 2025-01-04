import { createContext } from "react";
import CompA from "./compA";
const Name = createContext();
const Name1 = createContext();
const Batch = createContext()

function App() {
  return (
    <>
      <h1>hello</h1>
      <Name.Provider value={'itvedant'}>
        <Name1.Provider value={'pimpri'}>
          <Batch.Provider value={'Ps-406'}>
            <CompA />
          </Batch.Provider>
        </Name1.Provider>
      </Name.Provider>
    </>

  );

}
export default App;
export { Name, Name1 ,Batch};