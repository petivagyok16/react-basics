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

  changeGreeter() {
    this.props.changeGreeter(this.state.name); // This triggers parent component's onChangeGreeter method with the params from the child.
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
            <button className="pull-right" onClick={ this.makeOlder.bind(this) /* () => this.makeOlder() */ } >Make me older!</button>
            <button className="pull-right" onClick={ this.changeGreeter.bind(this) }>Greet!</button>
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