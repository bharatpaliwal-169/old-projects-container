
// import { Media } from 'reactstrap';


// class Menu extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {
// //data access from an array of data.....
//             dishes: [
//                 {
//                   id: 0,
//                   name:'Uthappizza',
//                   image: 'assets/images/uthappizza.png',
//                   category: 'mains',
//                   label:'Hot',
//                   price:'4.99',
//                   description:'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.'                        },
//                {
//                   id: 1,
//                   name:'Zucchipakoda',
//                   image: 'assets/images/zucchipakoda.png',
//                   category: 'appetizer',
//                   label:'',
//                   price:'1.99',
//                   description:'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce'                        },
//                {
//                   id: 2,
//                   name:'Vadonut',
//                   image: 'assets/images/vadonut.png',
//                   category: 'appetizer',
//                   label:'New',
//                   price:'1.99',
//                   description:'A quintessential ConFusion experience, is it a vada or is it a donut?'                        },
//                {
//                   id: 3,
//                   name:'ElaiCheese Cake',
//                   image: 'assets/images/elaicheesecake.png',
//                   category: 'dessert',
//                   label:'',
//                   price:'2.99',
//                   description:'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms'                        }
//                ],
//         };
//     }

//     render() {
        
//         const menu = this.state.dishes.map((dish) => {
//             return (
//               <div key={dish.id} className="col-12 mt-5">
//                 <Media tag="li">
//                   <Media left middle>
//                       <Media object src={dish.image} alt={dish.name} />
//                   </Media>
//                   <Media body className="ml-5">
//                     <Media heading>{dish.name}</Media>
//                     <p>{dish.description}</p>
//                   </Media>
//                 </Media>
//               </div>
//             );
//         });


//         return (
//           <div className="container">
//             <div className="row">
//               <Media list>
//                   {menu}
//               </Media>
//             </div>
//           </div>
//         );
//     }
// }

// export default Menu;

//the working is as follows 
// menu object is created ...mapping into array ....
//....see media class on reactrap site ..
//menu object have 5 elements ..each will show up with ...img and name
//along side with its description & name.....



// import { Card, CardImg, CardImgOverlay, CardText, CardBody,
//     CardTitle } from 'reactstrap';

// class Menu extends Component {

//     constructor(props) {
//         super(props);

//         this.state = {
//             selectedDish: null
//         }
//     }

//     onDishSelect(dish) {
//         this.setState({ 
//             selectedDish: dish
//         });
//     }

//     renderDish(dish) {
//         if (dish != null)
//             return(
        
//                 <Card>
//                     <CardImg top src={dish.image} alt={dish.name} />
//                     <CardBody>
//                       <CardTitle>{dish.name}</CardTitle>
//                       <CardText>{dish.description}</CardText>
//                     </CardBody>
//                 </Card>
//             );
//         else
//             return(
//                 <div></div>
//             );
//     }


//     render() {
//         const menu = this.props.dishes.map((dish) => {
//             return (
//               <div  className="col-12 col-md-5 m-1">

//                 <Card key={dish.id}
//                   onClick={() => this.onDishSelect(dish)}>
//                   <CardImg width="100%" src={dish.image} alt={dish.name} />
//                   <CardImgOverlay>
//                       <CardTitle>{dish.name}</CardTitle>
//                   </CardImgOverlay>
//                 </Card>
//               </div>
//             );
//         });

//         return (
//             <div className="container">
//                 <div className="row">
//                     {menu}
//                 </div>
//                 <div className="row">
//                   <div  className="col-12 col-md-5 m-1">
//                     {this.renderDish(this.state.selectedDish)}
//                   </div>
//                 </div>
//             </div>
//         );
//     }
// }

 
// export default Menu;






import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import DishDetail from './DishdetailComponent';

class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedDish: null
    }
  }

  onDishSelect(dish) {
    this.setState({
      selectedDish: dish
    });
  }

  renderDish(dish) {
    if (dish != null) {
      return(
        <DishDetail dish={dish}/>
      );
    } else {
      return(
        <div></div>
      );
    }
  }

  render() {
    const menu = this.props.dishes.map((dish) => {
      return(
        <div key={dish.id} className="col-12 col-md-5 m-1">
          <Card onClick={() => this.onDishSelect(dish)}>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardImgOverlay>
              <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
      );
    });

    return(
      <div className="container">
        <div className="row">
          {menu}
        </div>
        <div className="row">
          {this.renderDish(this.state.selectedDish)}
        </div>
      </div>
    );
  }
}

export default Menu;




// import React, { Component } from 'react';
// import { Navbar, NavbarBrand } from 'reactstrap';
// import Menu from './MenuComponent';
// import DishDetail from './DishdetailComponent';
// import { DISHES } from '../shared/dishes';

// class Main extends Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//         dishes: DISHES,
//         selectedDish: null
//     };
//   }

//   onDishSelect(dishId) {
//     this.setState({ selectedDish: dishId});
//   }

//   render() {
//     return (
//       <div>
//         <Navbar dark color="primary">
//           <div className="container">
//             <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
//           </div>
//         </Navbar>
//         <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
//         <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
//       </div>
//     );
//   }
// }

// export default Main;
