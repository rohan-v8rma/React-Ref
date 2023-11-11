import React from 'react'

class TestingComponent extends React.Component {

    // If constraint is 3, expected values are 0+1, 1+1, 2+1 : 1, 2, 3
    getRandomMarginValue(constraint=4) {
        return( Math.floor( 1 + (Math.random() * constraint * 10 ) ) + 'px' );
    }

    constructor(props) {
        super(props)
        
        this.state = {
            date: new Date(),
            marginInPixels: this.getRandomMarginValue()
        }
    }

    updateTimer = () => {
        console.timeLog("answer time");

        this.setState({
            date: new Date(),
            marginInPixels: this.getRandomMarginValue()
        })
    }

    render() {
        console.timeLog("answer time");
        const paraStyle = {
            backgroundColor: "yellow",
            margin: this.state.marginInPixels
        }

        // const divStyle = {
        //     height: '100px',
        //     width: '100px',
        //     backgroundColor: 'red'
        // }

        return(<>
        <p>hello</p>
        {/* <div style={divStyle}>hello</div> */}
        <p style={paraStyle}>{this.state.date.toLocaleTimeString()}</p>
        </>);
        
    }

    componentDidUpdate() {
        // console.timeEnd()
        console.timeLog("answer time");
    }

    componentDidMount() {
        this.timerID = setInterval(this.updateTimer, 1000);
        // this.random
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }
}

// function TestingComponent() {
//     return (
//         <>
//         </>
//     );
// }

export default TestingComponent;