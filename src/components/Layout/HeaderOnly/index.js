import Header from "../components/Header";


function DefautLayout( {children} ) {
    return (
        <div>
            <Header/>
            <div className="container">
                <div className="content">
                    {children}
                </div>
            </div>
            <Header/>
        </div>
    )
}

export default DefautLayout;