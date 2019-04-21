import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import {configure, observable, action} from 'mobx';
import {observer} from "mobx-react";
import Face from "@components/face";

// don't allow state modifications outside actions
configure({enforceActions: "always"});

const StyledAppContainer = styled.div`
    background-color: lightgoldenrodyellow;
    color: white;
    text-shadow: 0px 0px 4px #333;
    font-size: 2rem;
    height: 100vh;
    width: 100vw;
    padding: 100px;
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
            <React.Fragment>
                <div>
                    <div>{this.title}</div>
                    <button
                        onClick={this.handleClick}
                    >
                        Toggle Title
                    </button>
                </div>
                <br />
                <Face />
            </React.Fragment>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("app_root"));