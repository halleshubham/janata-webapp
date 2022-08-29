import {PersonCircle, Calendar} from 'react-bootstrap-icons';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';



export default function CoverArticle({data}) {

    console.log("CoveCoverArticle rendered.")

    return <>
        <Row className="article-card">
            <Col md={12}>
            <a href={data.link}>
                <img className="article-card-img img-fluid" src={data.featuredImage.node.mediaDetails.sizes[1].sourceUrl}></img>
            </a>
            </Col>
            <Col md>
                <div className='article-card-title title'><a href={data.link}>{data.title}</a></div>
                <div className='article-card-meta'>
                <Row>
                    <Col><PersonCircle/> {data.author.node.name} </Col>
                    <Col> <Calendar/> {new Date(data.date).toDateString().slice(4)}</Col>
                </Row>
                <div className='cover-excerpt'>
                    {new DOMParser().parseFromString(data.excerpt,"text/html").all[0].textContent}
                </div>
                </div>
            </Col>
        </Row>
    </>
}