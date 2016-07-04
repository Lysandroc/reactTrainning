
var RecentChangesTable = React.createClass({
  render: function () {
    return React.createElement(
      "table",
      { className: "highlight" },
      this.props.children
    );
  }
});

RecentChangesTable.Headings = React.createClass({
  render: function () {
    var headings = this.props.headings.map(function (heading) {
      return React.createElement(RecentChangesTable.Heading, { heading: heading });
    });
    return React.createElement(
      "thead",
      null,
      " ",
      React.createElement(
        "tr",
        null,
        headings
      ),
      " "
    );
  }
});

RecentChangesTable.Heading = React.createClass({
  render: function () {
    return React.createElement(
      "th",
      { "data-field": "name" },
      this.props.heading
    );
  }
});

RecentChangesTable.Rows = React.createClass({
  render: function () {
    var rows = this.props.rows.map(function (row) {
      return React.createElement(RecentChangesTable.Row, { changeSet: row });
    });
    return React.createElement(
      "tbody",
      null,
      " ",
      rows,
      " "
    );
  }
});

RecentChangesTable.Row = React.createClass({
  render: function () {
    return React.createElement(
      "tr",
      null,
      React.createElement(
        "td",
        null,
        this.props.changeSet.when
      ),
      React.createElement(
        "td",
        null,
        this.props.changeSet.who
      ),
      React.createElement(
        "td",
        null,
        this.props.changeSet.description
      )
    );
  }
});

var App = React.createClass({
  render: function () {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "h1",
        null,
        this.props.title
      ),
      React.createElement(
        RecentChangesTable,
        null,
        "//An array of children, by default react creates properties called \"children\"",
        React.createElement(RecentChangesTable.Headings, { headings: this.props.headings }),
        React.createElement(RecentChangesTable.Rows, { rows: this.props.rows })
      ),
      React.createElement(
        "a",
        { className: "btn-floating btn-large waves-effect waves-light red" },
        React.createElement(
          "i",
          { className: "material-icons" },
          "add"
        )
      )
    );
  }
});