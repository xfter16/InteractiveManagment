class UserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: ""};

    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  onChange(e) {
    var val = e.target.value;
    this.setState({name: val});
  }
  
  handleSubmit(e) {
    e.preventDefault();
    alert("Имя: " + this.state.name);
  }

  render() {
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
          <div>
            <label>Имя:</label><br />
            <input type="text" value={this.state.name} onChange={this.onChange}/>
          </div>
          <div>
            <label>Фамилия:</label><br />
            <input type="text" value={this.state.name} onChange={this.onChange}/>
          </div>
          <div>
            <label>E-mail:</label><br />
            <input type="text" value={this.state.name} onChange={this.onChange}/>
          </div>
        <input type="submit" value="Отправить" />
      </form>
      </div>
      );
  }
}
ReactDOM.render(
  <UserForm />,
  document.getElementById("container")
  )