
import Header from "../components/Header/index";

function DefautLayout( {children} ) {
    return ( 
        <div>
            <Header/>
            <div className="container" >
                <div className="content">
                    {children}
                </div>
            </div>
        </div>
     );
}

export default DefautLayout;