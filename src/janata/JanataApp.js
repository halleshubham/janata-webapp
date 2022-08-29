import {Button} from 'react-bootstrap';
import JanataHeader from './header/JanataHeader';
import Main from './main/Main';

function App() {
  console.log("JanataApp Rendered...");
  return (
   <>
    <JanataHeader />
    <Main />
   </>
  );
}

export default App;
