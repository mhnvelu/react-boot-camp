import React, { createContext, Component } from "react";

export const LanguageContext = createContext();
export class LanguageProvider extends Component {
  constructor(props) {
    super(props);
    this.state = { language: "tamil" };
    this.changeLanguage = this.changeLanguage.bind(this);
  }

  changeLanguage(e) {
    this.setState({ language: e.target.value });
  }
  render() {
    return (
      <LanguageContext.Provider
        value={{ ...this.state, changeLanguage: this.changeLanguage }}>
        {this.props.children}
      </LanguageContext.Provider>
    );
  }
}

// Creata HoC - Higher Order Component
export const withLanguageContext = (Component) => (props) => (
  <LanguageContext.Consumer>
    {(contextValue) => (
      <Component languageContextValue={contextValue} {...props} />
    )}
  </LanguageContext.Consumer>
);
