import './App.css';
import NavBarr from './Components/NavBar';
import ProfileChild from './Components/ProfileChild';
import Slider from './Components/Slider';
function App() {
// const personne=[fullName= "Victor Hugo",
//  bio=" was a French poet, playwright, novelist, statesman and human rights activist. ... Outside of France, his novels Les Misérables and Notre-Dame de Paris ",
//  profession="Author"]

const  handelAlerte = (fullName) =>alert(`Hallo mein Name ist ${fullName} ! `)
  return (
    <div className="App bg-dark">
      <NavBarr />
      <Slider />
      <ProfileChild 
      fullName="Victor Hugo" 
      bio =" was a French poet, playwright, novelist, statesman and human rights activist. ... Outside of France, his novels Les Misérables and Notre-Dame de Paris "
      profession="Author"
      handelAlerte={handelAlerte}
      >
        <img className="imgprof" src="/photoprofile.jpg" alt=""/>

      </ProfileChild>
    </div>
  );
}
//
export default App;
