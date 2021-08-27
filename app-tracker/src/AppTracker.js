import './AppTracker.css';
import Navbar from './components/Navbar'
import ApplicationManager from './components/application-manage/ApplicationManager'
import ApplicationView from './components/application-view/ApplicationView';

function AppTracker() {
  return (
    <div className="AppTracker">
      <Navbar />
      <div className="content">
        <ApplicationManager />
        <ApplicationView />
      </div>
    </div>
  );
}

export default AppTracker;