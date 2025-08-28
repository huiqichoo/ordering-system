import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "#e3f2fd" }}>
                <div className='container'>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" onClick={() => navigate('/Orders')}>
                                    Orders
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" onClick={() => navigate('/Products')}>
                                    Products
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav></div>
    )
}

export default Navbar