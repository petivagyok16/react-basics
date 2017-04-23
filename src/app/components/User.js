import React from 'react';

export class User extends React.Component {

  constructor(props) {
    super();
    this.state = { ...props.user, mounted: true }; // destructure user object into state object
  }

  makeOlder() {
    this.setState({
      age: Number.parseInt(this.state.age) + 1 // age comes with string type
    });
  }

  changeGreeter() {
    this.props.changeGreeter(this.state.name); // This triggers parent component's onChangeGreeter method with the params from the child.
  }

  onNameChange(event) {
    this.setState({
      name: event.target.value
    });
  }

  onHeaderChange() {
    this.setState({
      mounted: !this.state.mounted
    })
  }

  render() {
    /**
     * We can store whole html blocks in a variable and than using that after in render()
     */
    let userHeader = '';
    if (this.state.mounted) {
      userHeader = (
        <div className="panel-body">
          { this.state.name }
          <input className="pull-right" type="text" value={ this.state.name } onChange={ (event) => this.onNameChange(event) }/>
        </div> )
    }
    return (
      <div>
        <div className="panel panel-success">
          { userHeader }
          <div className="panel-footer">
            { this.state.age } years old.<br/>
            Hobbies: {
              this.state.hobbies.map( (hobby) =>
                <span key={ hobby.id }>{ hobby.value }{ this.state.hobbies[this.state.hobbies.length-1] === hobby ? null : ", " }</span>)
            }
            <button className="pull-right" onClick={ this.makeOlder.bind(this) /* () => this.makeOlder() */ } >Make me older!</button>
            <button className="pull-right" onClick={ this.changeGreeter.bind(this) }>Greet!</button>
            <button className="pull-right" onClick={ this.onHeaderChange.bind(this) }>(Un)mount header</button>
          </div>
        </div>
      </div>
    );
  }

  // Component Lifecycles:

  componentWillMount() {
    console.info(`[UserCmp][WillMount]`);
  }

  componentDidMount() {
    console.info(`[UserCmp][DidMount]`);
  }

  componentWillReceiveProps(nextProps) {
    console.info(`[UserCmp][WillRecieveProps]`, nextProps);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.info(`[UserCmp][ShouldUpdate]`);
    return true;
    // return false if update is not necessary
  }

  componentWillUpdate(nextProps, nextState) {
    console.info(`[UserCmp][WillUpdate]`);
  }

  componentDidUpdate(nextProps, nextState) {
    console.info(`[UserCmp][DidUpdate]`, nextState);
  }

  componentWillUnmount() {
    console.info(`[UserCmp][WillUnmount]`);
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