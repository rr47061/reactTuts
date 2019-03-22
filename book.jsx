import React, { Component } from 'react';
import './book.css';
class Book extends Component
{
constructor(props)
{
    super(props);
    this.state={
        count: 0,
    }
    this.handleClick = this.handleClick.bind(this); // for 1st way
}
// 1st way (ES6)
handleClick()
{
    console.log("hello");
    console.log(this.state.count);
}

// 2nd way (ES6)

    // handleClick = () => {
    //     console.log("hello");
    //     console.log(this.state.count);
    // };
    render()
    {
        const {img,title,author}  = this.props.info;
        return(
            <div className="book">
                <img src={img} alt=""/>
                <div>
                <h6>Title: {title}</h6>
                <h6>Author : {author}</h6>
                <button onClick={this.handleClick}>click me</button>
            </div>
            </div>

        );
    }

}

export default Book;
