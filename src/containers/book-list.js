//Container componet that has direct access to state managed by redux
import React, {Component} from 'react';
import { connect } from 'react-redux';

class BookList extends Component {

  renderList() {
    return this.props.books.map((book) => {
      return (
        <li key={book.title} className="list-group-item">{book.title}</li>
      );
    });
  }
  
  render(){
    return (
      <ul className="list-group col-sm-4">
       {this.renderList()}
      </ul>
    );
  }
}

function mapStateToProps(state){
  //Data retuned will show up as props inside of book list
  return {
    books: state.books
  };

}

//return container
export default connect(mapStateToProps)(BookList);