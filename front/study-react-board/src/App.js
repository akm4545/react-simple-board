import React from "react";
import { BrowserRouter as Router, Route, Routes} from "../node_modules/react-router-dom/index";
import BoardWritePage from "./pages/BoardWritePage";
import BoardPage from "./pages/BoardPage";
import BoardListPage from "./pages/BoardListPage";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<BoardListPage></BoardListPage>}></Route>
          <Route path="/board/:idx" element={<BoardPage></BoardPage>}></Route>
          <Route path="/board/write" element={<BoardWritePage></BoardWritePage>}></Route>
          <Route path="/board/update/:idx" element={<BoardWritePage></BoardWritePage>}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
