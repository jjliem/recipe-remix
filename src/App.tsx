import { Link, Outlet } from "react-router-dom";

export function App() {
  return (
    <div className="app-shell">
      <header className="header">
        <h1>Recipe Remix</h1>
        <p>Turn what you have into your next meal.</p>
        <nav className="nav">
          <Link to="/">Pantry</Link>
          <Link to="/recipes">Recipes</Link>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}