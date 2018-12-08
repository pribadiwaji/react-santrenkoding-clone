import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle} from 'reactstrap';
import '../Assets/Custom-style.css'

const Cards = (props) => {
  return (
    <div class="Card card">
      <Card>
        <CardImg 
            top width="100%" 
            src={props.img} 
            alt={props.alt} />
        <CardBody>
          <CardTitle>{props.title}</CardTitle>
          <CardText>{props.text}</CardText>
          <CardText>
              <div className = "row">
                <div className = "col-6">
                    <p className="footerCard">by Santren Koding</p>
                </div>
                {/* <div className = "col-4">
                    
                </div> */}
                <div className = "col-6 text-right text-danger">
                    <p>Kuota Terbatas</p>
                </div>
              </div>
                
            </CardText>
          
        </CardBody>
      </Card>
    </div>
  );
};

export default Cards;