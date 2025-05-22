import './App.css';
import HomePage from './components/HomePage/HomePage';
import Navbar from './components/Layout/Navbar';
function LayOut({ children }) {
  return (
    <div>
      {/* Your navbar, header, etc. */}
      <main>
        {children}  {/* This renders the HomePage */}
      </main>
      {/* Your footer, etc. */}
    </div>
  );
}
function App() {
  return (
    <LayOut>
    
      <HomePage />
    </LayOut>
  );
}
export default App;
