import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import Home from './pages/Home';
import Following from './pages/Following';
import { publicRoutes } from './Routers'
import { DefautLayout } from './component/Layout';
import { Fragment } from 'react';


function App() {
  return (
   
    <Router>
      <div>
        <Routes>
          {publicRoutes.map((route ,index) => {
            const Page = route.component

            let Layout = DefautLayout
            if(route.layout){
              Layout = route.layout;
            }else if(route.layout === null){
              Layout = Fragment
            }

            return <Route key = {index} path={route.path} element={
              <Layout>
                <Page/>
              </Layout>
            } />
          })}

        </Routes>
      </div>
    </Router>
  
  );
}

export default App;