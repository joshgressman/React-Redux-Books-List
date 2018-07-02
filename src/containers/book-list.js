//Container componet that has direct access to state managed by redux
import React, {Component} from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {

  renderList() {
    return this.props.books.map((book) => {
      return (
        <li 
          onClick={() => this.props.selectBook(book)}
          key={book.title} 
          className="list-group-item">
          {book.title}
          </li>
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

//Return object with state links React to Redux
//Books reducer returns the data
function mapStateToProps(state){
  //Data retuned will show up as props inside of book list
  return {
    books: state.books
  };
}

//Anything retunred in function will end up as props in the book list container
function mapDispatchToProps(dispatch){
  //select book is the action creator
  //When selectBook is called, the result is passed to all the reducers
  return bindActionCreators({ selectBook: selectBook}, dispatch);
}

//return container
export default connect(mapStateToProps, mapDispatchToProps)(BookList);