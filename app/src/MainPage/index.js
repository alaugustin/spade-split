import './mainPage.scss';
import ExecTeam from '../ExecTeam/ExecTeam';
import data from '../data.json'

function App() {
  return (
    <>
      <ExecTeam className='executive-team' HeadingText={data.executiveTeam.heading} introText={data.executiveTeam.introText} ></ExecTeam>
    </>
  );
}

export default App;
