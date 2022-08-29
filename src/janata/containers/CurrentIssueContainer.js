import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {useState, useEffect} from 'react';
import { getGraphqlPosts } from '../rest-api/GetData';
import ArticleCard from './ArticleCard';
import CoverArticle from './CoverArticle';
import { Button } from 'react-bootstrap';

export default function CurrentIssueContainer() {

    const [postList, setPostList] = useState([]);

    useEffect(()=>{
        getGraphqlPosts('2022-08-28')
        .then((data)=>setPostList(data.posts.nodes))
    },[])

    console.log("CurrentIssueContainer Rendered...");

    const renderArticle = (data)=>{
        console.log(data.content);
    }

    return <>
    {postList.length > 1 ? 
    <Container className='current-issue-container'>
      <Row>
        <Col md={7}>
            <Row>
                <Col md={6}>
                    <div className='container-title'>
                        Current Issue: {new Date(postList[0].date).toUTCString().slice(4)}
                    </div>
                </Col>
            </Row>
            <CoverArticle data={postList[0]} />
            <Button className='button-style'>{"View All Articles >>>"}</Button>
        </Col>
        <Col className="article-cards-container">
            {
                postList.slice(1,9).map((post) => {
                    console.log("")
                    return <ArticleCard key={post.postId} data={post} renderArticle={renderArticle}/>
                })
            }
        </Col>
      </Row>
    </Container> :  <div className='loading-bg'>
                        <div className="spinner-grow text-primary loading" role="status">
                            <span className="sr-only"></span>
                        </div>
                    </div>}
    </>
}