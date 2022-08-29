import {PersonCircle, Calendar} from 'react-bootstrap-icons';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';

export default function ArticleCard({data, renderArticle}) {

    console.log("ArticleCard rendered.")
    return <>
    {
        data==undefined ? "" : 
    
        <Row className="article-card" onClick={()=>renderArticle(data)}>
            <Col md={4}>
            {/* <a href={data.link}> */}
                <img className="article-card-img img-fluid" src={data.featuredImage.node.mediaDetails.sizes[1].sourceUrl}></img>
            {/* </a> */}
            </Col>
            <Col md>
                <div className='article-card-title'><a href={data.link}>{data.title}</a></div>
                <div className='article-card-meta'>
                <Row>
                    <Col><PersonCircle/> {data.author.node.name} </Col>
                    <Col> <Calendar/> {new Date().toDateString().slice(4)}</Col>
                    
                </Row>
                </div>
            </Col>
        </Row>
}
    </>
}