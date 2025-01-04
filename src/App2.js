import { Component } from "react";
import Class1 from "./class1";
class App2 extends Component {
    constructor() {
        super()
        this.n = 'PS406';
        this.state = {
            name: 'ITVEDANT',
            branch: 'pimpri'
        }
    }

    newVal = () => {
        this.setState({ name: 'itv',branch:'bihar' })
    }

    render() {
        // const [name, branch] = this.state;
        return (
            <>
                <h1>hello from {this.n}</h1>
                <h2>You Are Enroled In {this.state.name} from {this.state.branch}</h2>
                <button onClick={this.newVal}>click</button>
                <Class1 text=' Random Text'/>
            </>
        )

    }
}

export default App2;