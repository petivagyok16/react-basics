import React from 'react';

export class User extends React.Component {
  user = this.props.user;

  render() {
    return (
      <div className="">
        <div className="panel panel-success">
          <div className="panel-body">
            { this.user.name }
          </div>
          <div className="panel-footer">
            { this.user.age } years old.<br/>
            Hobbies: { 
              this.user.hobbies.map( (hobby) => 
                <span key={ hobby.id }>{ hobby.value }{ this.user.hobbies[this.user.hobbies.length-1] === hobby ? null : ", " }</span>)
            }
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