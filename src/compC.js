//use the consumer 
import { Name, Name1 } from "./App"
const CompC = () => {
    return (
        <>
            <Name.Consumer>
                {
                    (n) => {
                        return (
                            <Name1.Consumer>
                                {
                                    (n1) => {
                                        return <h1>welcome to : {n} {n1}</h1>
                                    }
                                }
                            </Name1.Consumer>
                        )
                    }
                }
            </Name.Consumer>
        </>
    )

}
export default CompC