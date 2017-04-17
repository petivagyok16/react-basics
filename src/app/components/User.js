import React from 'react';

export class User extends React.Component {

  constructor(props) {
    super();
    this.state = {...props.user}; // destructure user object into state object
  }

  makeOlder() {
    this.setState({
      age: Number.parseInt(this.state.age) + 1 // age comes with string type
    });
  }

  render() {
    return (
      <div>
        <div className="panel panel-success">
          <div className="panel-body">
            { this.state.name }
          </div>
          <div className="panel-footer">
            { this.state.age } years old.<br/>
            Hobbies: { 
              this.state.hobbies.map( (hobby) => 
                <span key={ hobby.id }>{ hobby.value }{ this.state.hobbies[this.state.hobbies.length-1] === hobby ? null : ", " }</span>)
            }
            <button className="pull-right" onClick={ this.makeOlder.bind(this) } >Make me older!</button>
          </div>
        </div>
      </div>
    );
  }
}
/**
 * WARNING THIS ISDEPRECATED. Use prop-types npm package instead.
/*
User.propTypes = {
  id: React.PropTypes.number, 
  name: React.PropTypes.string, 
  age: React.PropTypes.string, 
  hobbies: React.PropTypes.object,
}*/