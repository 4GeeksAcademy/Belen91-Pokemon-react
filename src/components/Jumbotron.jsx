const Jumbotron = ({tittle, text, button}) => {
    return (
        <div className="div-jumbotron p-5 m-4 rounded-3"> 
            <div className="container-fluid py-5 text-start">
                <h1 className="display-6 fw-bold text-primary">{tittle}</h1>
                <p className="col-md-8 fs-5 text-dark"> 
                    {text}
                </p>
                <button className="btn btn-primary btn-lg" 
                    style={{ 
                        color: "yellow", 
                        borderColor: "yellow" 
                    }} 
                    type="button">{button}</button>
            </div>
        </div>
    )
};

export default Jumbotron; 