
var RecentChangesTable = React.createClass({
  render: function() {
    return (<table className='highlight'>
             {this.props.children}
           </table>);
  } 
});

RecentChangesTable.Headings = React.createClass({
  render: function() {
    var headings = this.props.headings.map(function(heading) {
      return (<RecentChangesTable.Heading heading={heading}/>);
    }); 
    return (<thead> <tr>
      {headings} 
    </tr> </thead>);
  }
});

RecentChangesTable.Heading = React.createClass({
  render: function() {
    return (<th data-field="name">{this.props.heading}</th>);
  }
});

RecentChangesTable.Rows = React.createClass({
  render: function() {
    var rows = this.props.rows.map(function(row){
      return (<RecentChangesTable.Row changeSet={row}/>);
    });
    return (<tbody> {rows} </tbody>);
  }
});

RecentChangesTable.Row = React.createClass({
  render: function() {
    return (<tr>
      <td>{this.props.changeSet.when}</td>
      <td>{this.props.changeSet.who}</td>
      <td>{this.props.changeSet.description}</td>
    </tr>);
  }
});

var App = React.createClass({
  render: function(){
    return (<div>
        <h1>{this.props.title}</h1>
        <RecentChangesTable> 
          <RecentChangesTable.Headings headings = {this.props.headings}/>
          <RecentChangesTable.Rows rows = {this.props.rows}/>
        </RecentChangesTable>
        <a className="btn-floating btn-large waves-effect waves-light red"><i className="material-icons">add</i></a>
    </div>);
  }
});

