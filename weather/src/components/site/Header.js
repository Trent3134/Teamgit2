import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
}from 'reactstrap';

const Header = () => {
    return(
        <header>
            <Navbar className='header'>
                <NavbarBrand href='/'>TeamThreeProjects</NavbarBrand> 
                <Nav className='ml-auto' navbar>
                    <NavItem>
                        <NavLink href='https://github.com/Trent3134/teamgit2/tree/trent'>
                        GitHub
                    </NavLink>
                </NavItem>
                </Nav>
            </Navbar>
        </header>
    );
};
export default Header;
    