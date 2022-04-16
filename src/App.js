import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Link, Navigate, useLocation } from "react-router-dom";
import Welcome from "./pages/welcome";
import Library from "./pages/library";
import { ProvideAuth, useAuth } from "./context/use_auth";
function App() {
  return (
    <div className="App">
      <ProvideAuth>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route
            path="/library"
            element={
              <RequireAuth>
                <Library />
              </RequireAuth>
            }
          />
        </Routes>
      </ProvideAuth>
    </div>
  );
}

function RequireAuth({ children }) {
  let auth = useAuth();
  let location = useLocation();

  if (!auth.user) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
}

export default App;
