import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './index.css';
import { LoginPage } from './screens/LoginPage';
import { Register } from './screens/Register';
import { HomePage } from './screens/HomePage';
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
import React from 'react'
import { Cloudinary } from '@cloudinary/url-gen';
import { auto } from '@cloudinary/url-gen/actions/resize';
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';
import { AdvancedImage } from '@cloudinary/react';
function App() {

  const cld = new Cloudinary({ cloud: { cloudName: 'dltmntsa3' } });

  // Use this sample image or upload your own via the Media Explorer
  const img = cld.image('cld-sample-5')
    .format('auto') // Optimize delivery by resizing and applying auto-format and auto-quality
    .quality('auto')
    .resize(auto().gravity(autoGravity()).width(500).height(500)); // Transform the image: auto-crop to square aspect_ratio

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/Register" element={<Register />} />
        <Route path='/HomePage' element={<HomePage />} />
        <Route path='/PlanView' element={<PlanView />} />
        <Route path="/InfoPlanView" element={<InfoPlanView />} />
        <Route path="/EditInfoPlanView" element={<EditInfoPlanView />} />
        <Route path='/CreatePlan' element={<CreatePlanView />}/>
        <Route path='/ClientView' element={<ClientView />} />
        <Route path='/InfoClientView' element={<InfoClientView />} />
        <Route path='/EditInfoClientView' element={<EditInfoClientView />} />
        <Route path='/ViewerView' element={<ViewerView />} />
        <Route path='/InfoViewerView' element={<InfoViewerView />} />
        <Route path='/EditInfoViewerView' element={<EditInfoViewerView />} />
        <Route path='/AgentView' element={<AgentView />} />
        <Route path='/InfoAgentView' element={<InfoAgentView />} />
        <Route path='/EditInfoAgentView' element={<EditInfoAgentView />} />
      </Routes>
    </Router>
  );
}

export default App;