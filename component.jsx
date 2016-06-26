
var Headings = React.createClass({
  render: function() {
    var headings = this.props.headings.map(function(heading) {
      return (<Heading heading={heading}/>);
    }); 
    return (<thead> <tr>
      {headings} 
    </tr> </thead>);
  }
});

var Heading = React.createClass({
  render: function() {
    return (<th data-field="name">{this.props.heading}</th>);
  }
});

var Rows = React.createClass({
  render: function() {
    var rows = this.props.rows.map(function(row){
      return (<Row changeSet={row}/>);
    });
    return (<tbody> {rows} </tbody>);
  }
});

var Row = React.createClass({
  render: function() {
    return (<tr>
      <td>{this.props.changeSet.when}</td>
      <td>{this.props.changeSet.who}</td>
      <td>{this.props.changeSet.description}</td>
    </tr>);
  }
});

var Grid = React.createClass({
  render: function(){
    return (<div>
        <h1>{this.props.title}</h1>
        <table className='highlight'>
          <Headings headings = {this.props.headings}/>
          <Rows rows = {this.props.rows}/>
        </table>
        <a className="btn-floating btn-large waves-effect waves-light red"><i className="material-icons">add</i></a>
    </div>);
  }
});

