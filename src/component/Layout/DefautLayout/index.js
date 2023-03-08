import Sidebar from "./Sidebar";
import Header from "˜/component/Layout/components/Header"


function DefautLayout( {children} ) {
    return ( 
        <div>
            <Header/>
            <div className="container" >
                <Sidebar/>
                <div className="content">
                    {children}
                </div>
            </div>
        </div>
     );
}

export default DefautLayout;