import React from "react";
import Navbar from "./NavBar";
import Form from "./Form";
import PageContent from "./PageContent";
import ThemeProvider from "./ThemeContext";
import LanguageProvider from "./LanguageContext";
function App() {
  return (
    <ThemeProvider>
      <PageContent>
        <LanguageProvider>
          <Navbar />
          <Form />
        </LanguageProvider>
      </PageContent>
    </ThemeProvider>
  );
}

export default App;
