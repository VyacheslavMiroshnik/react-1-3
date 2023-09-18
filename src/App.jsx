import Calendar from './components/calendar/Calendar';
import './App.css';

function App() {
  const now = new Date(2023, 9, 3);
  return (
    <>
      <Calendar date={now} />
    </>
  );
}

export default App;
