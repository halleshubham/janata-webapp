import Container from "react-bootstrap/esm/Container"
import CurrentIssueContainer from "../containers/CurrentIssueContainer"

export default function Main(){
    console.log("Main Rendered...");
    return <>
    <Container >
        <CurrentIssueContainer />
    </Container>
   
    </>
}