import { BrowserRouter, Route, Routes } from "react-router-dom";
import Showques from "./components/Showques"
import Footer from "./components/Footer/Footer";
import Home from "./Pages/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Quiz from "./Pages/Quiz/Quiz";
import Result from "./Pages/Result/Result";
import { useState } from "react";
import Navbar from "../src/components/Navbar/Navbar";
import axios from "axios";
import Admin from "./Pages/Admin/Admin";
import Addques from "./components/Addques";
import Login from "./components/Login/Login";
import Adminlogin from "./components/Adminlogin/Adminlogin"


function App() {
  const [name, setName] = useState("");
  const [questions, setQuestions] = useState("");
  const [score, setScore] = useState("");

  const fetchQuestions = async (category = "", difficulty = "") => {
    const { data } =
      await axios.get(`https://opentdb.com/api.php?amount=10&category=18&type=multiple
    `);
    console.log(data);

    setQuestions(data.results);
  };

  return (
    // <BrowserRouter>
    //   <div className="App" >
      
    //     <Routes>
    //     <Route
    //         exact
    //         path="/"
    //         element={
    //           <Admin/>
    //         }
    //       />
    //     <Route
    //         exact
    //         path="/home"
    //         element={
    //           <Home/>
    //         }
    //       />
       
    //     </Routes>
    //   </div>
   
    // </BrowserRouter>
    <BrowserRouter>
      <div className="App" style={{ backgroundImage: "url(./bg.jpg)" }}>
      
      <Routes>
        <Route
            exact
            path="/"
            element={
              <Admin/>
            }
          />
        <Route
            exact
            path="/login"
            element={
              <Login/>
            }
          />
             <Route
            exact
            path="/adminlogin"
            element={
              <Adminlogin/>
            }
          />
          <Route
            exact
            path="/addques"
            element={
              <Addques />
            }
          />
          <Route
            exact
            path="/showques"
            element={
              <Showques />
            }
          />
          <Route
           exact
            path="/home"
            element={
              <Home
                name={name}
                setName={setName}
                fetchQuestions={fetchQuestions}
              />
            }
          />
          <Route
            path="/quiz"
            element={
              <Quiz
                name={name}
                questions={questions}
                score={score}
                setScore={setScore}
                setQuestions={setQuestions}
              />
            }
          />
          <Route 
          path="/result" 
          element={
          <Result
                name={name}
                score={score}
           />
           }
          />
       
        </Routes>
      {/* <Navbar/>
      
        <Header />
        <br/>
        <Routes>

        <Route path="/login"  element = {<Login />} />
        <Route path="/signup"  element = {<Signup />} />

          <Route
            exact
            path="/"
            element={
              <Home
                name={name}
                setName={setName}
                fetchQuestions={fetchQuestions}
              />
            }
          />

<Route path="/admin"  element = {<Login />} />

          <Route
            path="/quiz"
            element={
              <Quiz
                name={name}
                questions={questions}
                score={score}
                setScore={setScore}
                setQuestions={setQuestions}
              />
            }
          />

          <Route 
          path="/result" 
          element={
          <Result
                name={name}
                score={score}
           />
           }
          />
        </Routes> */}
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

// 
// https://opentdb.com/api.php?amount=10${category && `&category=${category}`}${difficulty && `&difficulty=${difficulty}`}&type=multiple