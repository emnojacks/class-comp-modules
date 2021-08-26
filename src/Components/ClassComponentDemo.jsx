import React, { Component } from 'react';


class ClassComponentDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            likeCount: 0,
            dislikeCount: 0
        };
    }

    incrementCount = () => {
    //setState is the catalyst for the render method being fired if the DOM has changed or an event occurs
        //setState is a request, not a command to update the component the changes are not applied immediately
        console.log("incremenet method called")
        this.setState(
        {likeCount: this.state.likeCount +1}
        )
    }
    
    deincrementCount = () => {
    
        console.log("deincrement count called")
        this.setState(
        {dislikeCount: this.state.dislikeCount -1 }
        )
    }
    
    render() {
            console.log("render method called")
            return (  
                <div className='main'>
                    <div className="mainDiv">
                        <ClassComponentNotes />
                        <hr />
                        <h3>Smash the like button!</h3>
                        <button onClick={this.incrementCount}>
                        Likes: {this.state.likeCount}
                        </button>
                        
                        <h3>Hit the dislike button!</h3>
                        <button onClick={this.deincrementCount}>
                        Dislikes: {this.state.dislikeCount}
                        </button>
                        
                        <h4>
                        {this.state.simpleMessage}
                        </h4>
                    </div>
                </div>
                    );
                }
}

const ClassComponentNotes = function () {
    return (
        <div>
            <h1>
                Class Components
            </h1>
            <p>Class components are considered the "React way" of writing components</p>
            <dl>
                <dt>
                    ES6 JS Classes
                </dt>
                <dd>
                    Built on these, must understand them
                </dd>
                <dd>Class components need to extend the React Component.</dd>
                
                <dt>render()</dt>
                <dd>Class components must always have a render method.</dd>
                
                <dt>Export</dt>
                <dd>Only one class component can be exported per file.</dd>
            </dl>
        </div>
    );
};
//Multiple class components can be in one file, but only one class component should be exported for each file

export default ClassComponentDemo;