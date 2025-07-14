
const Card = ({image, tittle, text, button}) => {
    return (
        <div className="card-container card col-12 col-md-6 my-5 p-0 " style={{ width: "18rem" }}>
            <img src={image} className="card-img card-img-top" />
            <div className="card-body d-flex flex-column justify-content-between">
                <h5 className="card-title text-center">{tittle}</h5>
                <p className="card-text fs-8 text-">{text}</p>
                <a href="#" className="btn btn-primary">{button}</a>
            </div>
        </div>
    )
};

export default Card; 