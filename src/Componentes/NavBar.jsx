import BuscadorNav from "./BuscadorNav.jsx";
import ImgCarrito from "./Carrito.jsx";



const NavBar = () => {
        return (
            <>
            <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
                <div className='container-fluid'>
                    <a className='navbar-brand' href='#'>
                        <img src="#" alt='' className='img-icon' />
                    </a>
                    <button
                        className='navbar-toggler'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#navbarColor02'
                        aria-controls='navbarColor02'
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                    >
                        <span className='navbar-toggler-icon' />
                    </button>
                    <div className='collapse navbar-collapse' id='navbarColor02'>
                        <ul className='navbar-nav me-auto'>
                            <li className='nav-item'>
                                <a className='nav-link' href='#'>Peliculas</a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href='#'>Series</a>
                            </li>
                        </ul>
                        <ImgCarrito/>
                        <BuscadorNav contBuscar='Buscar'/>
                    </div>
                </div>
            </nav>
            </>
        );
    
}

export default NavBar