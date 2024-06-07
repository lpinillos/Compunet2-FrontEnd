import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './index.css';
import { LoginPage } from './screens/LoginPage';
import { Register } from './screens/Register';
import { CreateDestino } from './screens/CreateDestino';
import { PlanView } from './screens/PlanView';
import { InfoPlanView } from './screens/InfoPlanView';
import { EditInfoPlanView } from './screens/EditInfoPlanView';
import { CreatePlanView } from './screens/CreatePlanView';
import { ClientView } from './screens/ClientView';
import { InfoClientView } from './screens/InfoClientView';
import { EditInfoClientView } from './screens/EditInfoClientView';
import { ViewerView } from './screens/ViewerView';
import { InfoViewerView } from './screens/InfoViewerView';
import { EditInfoViewerView } from './screens/EditInfoViewerView';
import { AgentView } from './screens/AgentView';
import { InfoAgentView } from './screens/InfoAgentView';
import { EditInfoAgentView } from './screens/EditInfoAgentView';
import { CreateClient } from './screens/CreateClient';
import ViewDestino from './screens/ViewDestino';
import { CreateViewer } from './screens/CreateViewer';
import { InfoDestinationView }  from './screens/InfoDestinationView';
import { EditInfoDestinationView }  from './screens/EditInfoDestinationView';
import CatalogoDestinoView from './screens/CatalogoDestinoView';
import ReportsView from './screens/ReportsView';

function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/CreateViewer" element={<CreateViewer />} />
        <Route path="/CreateClient" element={<CreateClient />} />
        <Route path='/PlanView' element={<PlanView />} />
        <Route path="/InfoPlanView" element={<InfoPlanView />} />
        <Route path="/EditInfoPlanView" element={<EditInfoPlanView />} />
        <Route path='/CreatePlan' element={<CreatePlanView />}/>
        <Route path='/CreateDestino' element={<CreateDestino />}/>
        <Route path='/ClientView' element={<ClientView />} />
        <Route path='/InfoClientView' element={<InfoClientView />} />
        <Route path='/EditInfoClientView' element={<EditInfoClientView />} />
        <Route path='/ViewerView' element={<ViewerView />} />
        <Route path='/InfoViewerView' element={<InfoViewerView />} />
        <Route path='/EditInfoViewerView' element={<EditInfoViewerView />} />
        <Route path='/AgentView' element={<AgentView />} />
        <Route path='/InfoAgentView' element={<InfoAgentView />} />
        <Route path='/EditInfoAgentView' element={<EditInfoAgentView />} />
        <Route path='/DestinoView' element={<ViewDestino/>}/>
        <Route path='/InfoDestinationView' element={<InfoDestinationView/>}/>
        <Route path='/EditInfoDestinationView' element={<EditInfoDestinationView/>}/>
        <Route path='/CatalogoDestino' element={<CatalogoDestinoView/>}/>
        <Route path='/ReportsView' element={<ReportsView/>}/>
      </Routes>
    </Router>
  );
}

export default App;