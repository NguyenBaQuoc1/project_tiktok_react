//phublic routes
import Upload from '˜/pages/Upload';
import Home from '˜/pages/Home';
import Following from '˜/pages/Following';
import Profile from '˜/pages/Profile';
import { HeaderOnly } from '˜/component/Layout';
import Search from '˜/pages/Profile';

const publicRoutes = [
    {path : '/' , component : Home},
    {path : '/following' , component : Following},
    {path : '/profile' , component : Profile},
    {path : '/Upload' , component : Upload , layout:HeaderOnly},
    {path : '/Search' , component : Search, layout:null},




]

const privateRoutes = [

]

export { publicRoutes , privateRoutes  }