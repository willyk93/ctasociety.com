import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LanguageProvider } from './translations/LanguageContext';
import { Layout } from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Community from './pages/Community';
import Events from './pages/Events';
import News from './pages/News';
import GetInvolved from './pages/GetInvolved';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="a-propos" element={<About />} />
            <Route path="communaute" element={<Community />} />
            <Route path="evenements" element={<Events />} />
            <Route path="actualites" element={<News />} />
            <Route path="participer" element={<GetInvolved />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}
