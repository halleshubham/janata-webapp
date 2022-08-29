
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function CategoriesDropDownList({ list }){

    
    console.log("CategoriesDropDownList Rendered...");

    return <>
    {list.map((cat)=>{
        return <NavDropdown.Item key={cat.id} id={cat.id} href={cat.link}>
            {cat.name}
        </NavDropdown.Item>
    })}
    
    </>
}