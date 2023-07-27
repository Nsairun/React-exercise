/* eslint-disable jsx-a11y/img-redundant-alt */
import Exers from './components/Exers';
import './styles/App.css';

const user = {
  name: 'Nsairun',
  imgUrl:
    'https://media.licdn.com/dms/image/C4D03AQFkdUOKo34IFA/profile-displayphoto-shrink_800_800/0/1642068026284?e=2147483647&v=beta&t=Svi9nmFVBKeKZbwM5CLxIgDKfCOWOuRp-0Ygtg2e7M8',
  sex: 'male',
};

function App() {
  return (
    <div className="App">
      <h1>welcome to my first react trial</h1>
      <p>{user.name}</p>
      <img src={user.imgUrl} alt={`photo of ${user.name}`} />
      <Exers />
    </div>
  );
}

export default App;
