import React ,{Component} from 'react';
import {Card, CardImg , CardImgOverlay , CardText , CardBody , CardTitle } from 'reactstrap';
import { render } from '@testing-library/react';
import DishDetail from './DishdetailComponent';
class Menu extends Component{
    constructor(props){
        super(props);
        this.state={
            seletedDish:null
            
        }
    }
    onDishSelect(dish){
        this.setState({seletedDish:dish});
    }
   
    
    render(){
        const menu=this.props.dishes.map((dish)=>{
            return(
                <div key={dish.id} className="col-12 col-md-5 mt-5">
                     <Card onClick={()=>this.onDishSelect(dish)}>
                         
                             <CardImg width="100%" object src={dish.image} alt={dish.name}/>
                         
                         <CardImgOverlay>
                             <CardTitle>{dish.name}</CardTitle>
                                
                         </CardImgOverlay>
                     </Card>
                </div>
            );
        });
        return (
            <div className="container">
                <div className="row">
                
                    {menu}
                
                </div>
            <DishDetail seletedDish={this.state.seletedDish}/>
            </div>
        );
    }
}
export default Menu;