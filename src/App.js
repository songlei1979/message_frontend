// import logo from './logo.svg';
import './App.css';
import TopBar from "./components/TopBar";
import {Route, Routes} from "react-router";
import Home from "./components/Home";
import ChatRoom from "./components/ChatRoom";
import NumberSumUp from "./components/NumberSumUp";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
        <TopBar/>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/chatroom" element={<ChatRoom/>}/>
          <Route path="/sumupnum" element={<NumberSumUp/>}/>
          <Route path="/login" element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
