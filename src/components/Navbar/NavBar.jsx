import './NavBar.css'
import { NavbarProvider } from './NavbarContext.jsx';
import { Menu, MenuToggle }from './elements/Menu.jsx';

function NavBar() {

    return (
        <NavbarProvider>
            {/* <div className='navbar'> */}
            <MenuToggle />
            {/* </div> */}
            <Menu/>   
        </NavbarProvider>
    );
};



export default NavBar;