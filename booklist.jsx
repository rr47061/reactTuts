import React, { Component } from 'react';
import Book from './book';
import alldata from './data';

class Booklist extends Component {

    constructor(props)
    {
        super(props);
        this.state={
            bookdata:alldata
        }
    }
    render(){
        return (
            <div>
                <h4>Top Seeling Books</h4>
                {this.state.bookdata.map(item => (
                    <Book key={item.id} info={item}/>
                    ))}
            </div>
        );
        }
}

export default Booklist;
