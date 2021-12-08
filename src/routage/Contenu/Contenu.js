import { Routes, Route } from 'react-router-dom'
import Accueil from './Accueil/Accueil'
import Notifications from './Notifications/Notifications'
import Messages from './Messages/Messages'
import Explorer from './Explorer/Explorer'
import PageNotFound from './PageNotFound/PageNotFound'

const Contenu = (props) => {
   return (
      <Routes>
         <Route path="/" element={<Accueil />} />
         <Route path="/notifications" element={<Notifications />}  />
         <Route path="/messages" element={<Messages />}  />
         <Route path="/explore" element={<Explorer />}  />
         <Route path="*" element={<PageNotFound />}  />
      </Routes>
   )
}

export default Contenu