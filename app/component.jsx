import React from 'react';

var App = React.createClass({
  getDefaultProps: function() {
    return { headings: ['When happened ', 'Who did it', 'What they change'] };
  },
  
  // propTypes: {
  //   headings: function(props, propName, componentName) {
  //     if(!Array.isArray(props[propName])) 
  //       return Error('Failed Validation');
  //   },
  //   rows: React.PropTypes.array, 
  //   title: React.PropTypes.string.isRequired
  // },
  render: function() {
    return (<div>
        <h1>{this.props.title}</h1>
        <RecentChangesTable> 
          <RecentChangesTable.Headings headings = {this.props.headings}/>
          <RecentChangesTable.Rows rows = {this.props.rows}/>
        </RecentChangesTable>
    </div>);
  }
});

var RecentChangesTable = React.createClass({
  render: function() {
    return (<table >
             {this.props.children}
           </table>);
  } 
});

RecentChangesTable.Headings = React.createClass({
  render: function() {
    var headings = this.props.headings.map(function(heading, index) {
      return (<RecentChangesTable.Heading key={index} heading={heading}/>);
    }); 
    return (<thead> <tr>
      {headings} 
    </tr> </thead>);
  }
});

RecentChangesTable.Heading = React.createClass({
  render: function() {
    var headingStyle = {backgroundColor: 'FloralWhite', fontSize: '19px'};
    return (<td style= {headingStyle}>{this.props.heading}</td>);
  }
});

RecentChangesTable.Rows = React.createClass({
  render: function() {
    var rows = this.props.rows.map(function(row, index){
      return (<RecentChangesTable.Row  key={index} changeSet={row}/>);
    });
    return (<tbody> {rows} </tbody>);
  }
});

RecentChangesTable.Row = React.createClass({
  render: function() {
    var trStyle = {backgroundColor: 'aliceblue',};
    return (<tr style={trStyle}>
      <td>{this.props.changeSet.when}</td>
      <td>{this.props.changeSet.who}</td>
      <td>{this.props.changeSet.description}</td>
    </tr>);
  }
});

export default App; 

