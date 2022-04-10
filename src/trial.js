import React from 'react';
import CourseList from './CourseList.json';
import { Row, Col } from 'react-simple-flex-grid';
import "react-simple-flex-grid/lib/main.css";

const Trial = () => {
    return(
        <Row>
            {(CourseList).map(co =>
                <Col 
                    xs={{ span: 6 }} sm={{ span: 4 }} md={{ span: 3 }}
                    lg={{ span: 2 }} xl={{ span: 1 }}
                ><img src={'${co.image}.jpg'} width='100%'/></Col>
            )}
        </Row>
    );
}


// function Trial(){
//     return(
//         <div>
//             <a href="#"><img width={200} src="https://source.unsplash.com/Rd01U0tPmQI" alt='image'></img></a>
//             <a href="#"><img width={200} src="https://source.unsplash.com/Rd01U0tPmQI" alt='image'></img></a>
//             <a href="#"><img width={200} src="https://source.unsplash.com/Rd01U0tPmQI" alt='image'></img></a>
//            <a href="#"><img width={200} src="https://source.unsplash.com/Rd01U0tPmQI" alt='image'></img></a>
//             <a href="#"><img width={200} src="https://source.unsplash.com/Rd01U0tPmQI" alt='image'></img></a>
//             <a href="#"><img width={200} src="https://source.unsplash.com/Rd01U0tPmQI" alt='image'></img></a>
//         </div>
//     );
// }

export default Trial;