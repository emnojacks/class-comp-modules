import React, { Component } from 'react';
import { Form, Input, Button} from 'reactstrap';


class ClassComponentProps extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fruitArr: ["banana", "papaya", "mango"],
            newFruit: " ",
        };
        this.addFruit = this.addFruit.bind(this);
    }
    
    addFruit(event) {
        event.preventDefault();
        // fruitArr.push(newFruit);
        // newFruit.value = " "
        // console.log(fruitArr);
        this.setState({
            //add new fruit
            fruitArr: [...this.state.fruitArr, this.state.newFruit],
            //reset input to empty 
            newFruit: " ",
        });
    }
    
    updateFruit(event) {
        this.setState({ newFruit: event.target.value });
        // newFruit.setState()
        //     {this.state.newFruit.value }
    }
   
    render() {
//The render() method starts in the mounting phase and continues to exist in the update phases. One important thing to note about the render() method is all it should be doing is rendering, do not have any calculations or anything in this method that will change the state or props. Do not call setState() in render(). Doing so will cause the render() method to trigger infinitely, as react re-renders on state change.
        return (
            <div className="main">
                <div className="mainDiv">
               
                <Form onSubmit={this.addFruit}>
                    <label>
                        Which fruit do you want to add to your basket?
                    </label>
                    <br>
                    </br>
                    <br>
                    </br>
                    <Input
                        id="newFruit"
                        type="text"
                        placeholder="add fruit"
                        onChange={(event) => this.updateFruit(event)}
                    >
                    </Input>
                    <br>
                    </br>
                    <br>
                    </br>
                    <Button
                        //onClick={(event) => this.addFruit(event)}
                        type="submit">
                        Add Fruit to Basket
                    </Button>
                </Form>
                <FruitBowl
                    fruitArr = {this.state.fruitArr}
                />
                 </div>
            </div>
        );
    };

}

class FruitBowl extends Component {
    render() {
        return (
            <div>
                {this.props.fruitArr.map((fruit) => {
                    return <Fruit passingFruit={fruit}/>
                })}
            </div>
        );
    }

}
//functional component is passed props 
const Fruit = (props) => {
    return (
        <div>
            <h3>{props.passingFruit}
            </h3>
        </div>
    );
};



export default ClassComponentProps;