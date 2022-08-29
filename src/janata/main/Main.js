import Container from "react-bootstrap/esm/Container"
import CurrentIssueContainer from "../containers/CurrentIssueContainer"

export default function Main(props){
    console.log("Main Rendered...");
    return <>
    <Container >
        <CurrentIssueContainer {...props} />
    </Container>
   
    </>
}