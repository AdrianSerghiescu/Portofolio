import "./App.css";
import { Header } from "./Components/Header/Header";
import CookieConsent from "react-cookie-consent";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { AboutMePage } from "./Components/Pages/AboutMePage";
import { ProjectsPage } from "./Components/Pages/ProjectsPage";
import { ExperiencePage } from "./Components/Pages/ExperiencePage";
import { ContactMePage } from "./Components/Pages/ContactMePage";
import { HomePage } from "./Components/Pages/HomePage";
import { ToDoPage } from "./Components/Pages/ToDoPage";
import { QuotesPage } from "./Components/Pages/QuotesPage";
import { RandomDogPage } from "./Components/Pages/RandomDogPage";
import { PolicyPage } from "./Components/Pages/PolicyPage";
import { AnimatePresence } from "framer-motion";
import { Footer } from "./Components/Footer/Footer";
import { Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div
        className="App"
        style={{
          overflowX: "hidden",
          backgroundImage: `url('images/wallpaper1.svg')`,
        }}
      >
        <Header />
        <AnimatePresence>
          <Switch>
            <Route path="/home_page">
              <HomePage />
            </Route>
            <Route path="/about_me">
              <AboutMePage />
            </Route>
            <Route path="/projects">
              <ProjectsPage />
            </Route>
            <Route path="/experience">
              <ExperiencePage />
            </Route>
            <Route path="/contact_me">
              <ContactMePage />
            </Route>
            <Route path="/todo_page">
              <ToDoPage />
            </Route>
            <Route path="/quotes_page">
              <QuotesPage />
            </Route>
            <Route path="/random_dog_page">
              <RandomDogPage />
            </Route>
            <Route path="/policy_page">
              <PolicyPage />
            </Route>
            <Redirect to="/home_page" />
          </Switch>
        </AnimatePresence>
        <Footer />
        <CookieConsent
          location="bottom"
          style={{ background: "#000", textAlign: "left" }}
          buttonStyle={{
            color: "#000",
            background: "#fff",
            fontSize: "14px",
            borderRadius: "4px",
          }}
          buttonText="Accept All Cookies"
          expires={20}
        >
          By clicking "Accept All Cookies", you accept our Cookie Policy.You can
          manage your cookie preferences{" "}
          <Link to="/policy_page">
            <a className="cookie-anchor" href="/privacy">
              here !
            </a>{" "}
          </Link>
        </CookieConsent>
      </div>
    </Router>
  );
}

export default App;
