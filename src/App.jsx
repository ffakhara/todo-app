// 3rd party libraries
import { Routes, Route } from "react-router-dom";

// components
import Navigation from "./components/Navigation";
import ToDosContainer from "./components/ToDosContainer";
import ToDonesContainer from "./components/ToDonesContainer";
import Help from "./views/Help";
import NotFound from "./views/NotFound";
import { TodoProvider } from "./context/TodoContext";

// styles
import "./scss/App.scss";

function App() {
  return (
    <TodoProvider>
      <div className="app">
        <Navigation />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <ToDosContainer />
                <ToDonesContainer />
              </>
            }
          />
          <Route path="/help" element={<Help />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </TodoProvider>
  );
}

export default App;
