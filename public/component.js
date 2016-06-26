
var Headings = React.createClass({
  render: function () {
    var headings = this.props.headings.map(function (heading) {
      return React.createElement(Heading, { heading: heading });
    });
    return React.createElement(
      "thead",
      null,
      React.createElement(
        "tr",
        null,
        headings
      )
    );
  }
});

var Heading = React.createClass({
  render: function () {
    return React.createElement(
      "th",
      { "data-field": "name" },
      this.props.heading
    );
  }
});

var Rows = React.createClass({
  render: function () {
    var rows = this.props.rows.map(function (row) {
      return React.createElement(Row, { changeSet: row });
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

var Row = React.createClass({
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

var Grid = React.createClass({
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
        "table",
        { className: "highlight" },
        React.createElement(Headings, { headings: this.props.headings }),
        React.createElement(Rows, { rows: this.props.rows })
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