import NavDropdown from 'react-bootstrap/NavDropdown';

export default function TranslatedArticlesDropDownList(){

    console.log("TranslatedArticlesDropDownList Rendered...");
    return <>
            <NavDropdown.Item href="#action/3.2">
            Marathi
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">
            Hindi
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">
            Others
            </NavDropdown.Item>
        </>
}