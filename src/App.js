import React, { Component } from "react";
import styled from "styled-components";
import Menu from "./components/Menu";
import CategorySelection from "./organisms/CategorySelection";
import LocationSelection from "./organisms/LocationSelection";

const Header = styled.h3`
  color: #1c1f34;
  font-size: 56px;
  margin-bottom: 68px;
  text-align: center;
`;

const Content = styled.div`
  padding: 15px;
`;

const Footer = styled.div`
  height: 15px;
`;

class App extends Component {
  constructor() {
    super();

    this.state = {
      category: "",
      destination: "",
      origin: "",
      step: "Category Selection"
    };
  }

  render() {
    const { category, destination, origin, step } = this.state;

    return (
      <div>
        <Menu />
        <Content>
          <Header>Get an estimate</Header>
          {step === "Category Selection" && (
            <CategorySelection
              onSelection={category => () => {
                this.setState({
                  category,
                  step: "Location Selection"
                });
              }}
            />
          )}
          {step === "Location Selection" && (
            <LocationSelection
              category={category}
              destination={destination}
              origin={origin}
              handleDestinationChange={event => {
                this.setState({ destination: event.target.value });
              }}
              handleOriginChange={event => {
                this.setState({ origin: event.target.value });
              }}
              onChangeCategory={() =>
                this.setState({ category: "", step: "Category Selection" })
              }
            />
          )}
        </Content>
        <Footer />
      </div>
    );
  }
}

export default App;
