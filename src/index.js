import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import {configure, observable, action} from 'mobx';
import {observer} from "mobx-react";

// don't allow state modifications outside actions
configure({enforceActions: "always"});


const StyledAppContainer = styled.div`
    background-color: green;
    color: white;
    font-size: 2rem;
`;

const App = () => {
    return(
        <StyledAppContainer>
            <Cube />
        </StyledAppContainer>
    );
};

@observer
class Cube extends React.Component {
    @observable title = "Rubik's Cube";

    @action.bound
    handleClick = () => {
        if(this.title === "Rubik's Cube") {
            this.title = "Andrew's Cube";
        } else {
            this.title = "Rubik's Cube";
        }
    };

    render() {
        return(
            <div>
                <div>{this.title}</div>
                <button
                    onClick={this.handleClick}
                >
                    Toggle Title
                </button>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("app_root"));