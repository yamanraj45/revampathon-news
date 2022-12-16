import React from 'react'
import LatestVariant from './LatestVariant'
import Latest from './Latest'
import Exclusive from './Exclusive'
import BelowHeaderSmall from './BelowHeaderSmall'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'
import Slide from './Card'

function LatestNews({ news }) {
    return (
        <>
            <div>
                {/* {news.map((p) => (
                    <Latest news={p} />
                ))[6]} 
                {news.map((p) => (
                    <LatestVariant news={p} />
                ))[11]} */}

                <div className='container d-flex'>
                    <Row>
                        <Col sm={4}>
                            {news.map((p) => (<Latest news={p} />))[6]}
                        </Col>
                        <Col sm={4} style={{ paddingTop: "100px" }}>
                            {news.map((p) => (<div> <BelowHeaderSmall news={p} /> </div>)).slice(10,13)}
                        </Col>
                        <Col sm={4} style={{ paddingTop: "100px"}}>
                            {news.map((p) => (<div> <BelowHeaderSmall news={p} />  </div>)).slice(7,10)}
                        </Col>
                    </Row>
                </div>
                <div className='container d-flex'>
                    <Row>
                        <Col sm={4} style={{ paddingTop: "100px", }}>

                                <div style={{paddingBottom:"50px"}}>  <h1> ENTERTAINMENT</h1> </div>
                            {news.map((p) => (<div>  <BelowHeaderSmall news={p} /> </div>)).slice(13,16)}
                        </Col>
                        <Col sm={4} style={{ paddingTop: "100px"}}>
                        <div style={{paddingBottom:"50px"}}>  <h1> &nbsp;</h1> </div>

                            {news.map((p) => (<div> <BelowHeaderSmall news={p} />  </div>)).slice(18,21)}
                        </Col>
                        <Col sm={4}>
                            {news.map((p) => (<LatestVariant news={p} />))[11]}
                        </Col>
                    </Row>
                </div>

                <div className='container d-flex'>
                    <Row>
                        <Col sm={8}>
                            {news.map((p) => (<Exclusive news={p} />))[23]}
                        </Col>
                        <Col sm={4} style={{ paddingTop: "100px" }}>
                            {news.map((p) => (<div> <BelowHeaderSmall news={p} /> <hr /> </div>)).slice(30, 35)}
                        </Col>
                    </Row>
                </div>
            </div>
            <div>
            {news.map(p => (
                    <Slide news={p} />
                ))[10]}
            </div>
        </>
    )
}

export default LatestNews;