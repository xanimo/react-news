const React = require("react");

const Query = React.createClass({

  getInitialState: function() {
    return {
      topic: "",
      startYear: "",
      endYear: ""
    };
  },

  _handleSubmit: function(event) {
    event.preventDefault();
    this.props._setSearchFeilds(this.state.topic, this.state.startYear, this.state.endYear);
  },

  _handleTopicChange: function(e) {
    this.setState({topic: e.target.value});
  },

  _handleStartYearChange: function(e) {
    this.setState({startYear: e.target.value});
  },

  _handleEndYearChange: function(e) {
    this.setState({endYear: e.target.value});
  },

  render: function() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title text-center" style={ {fontSize: "20px"} }><i><b>Search</b></i></h3>
        </div>
        <div className="panel-body text-center">
          <form role="form" onSubmit={this._handleSubmit}>
            <div className="form-group col-md-offset-3 col-md-6">
              <label htmlFor="topic" className="text-center">Topic</label>
              <input type="text" className="form-control text-center" id="topic" onChange={this._handleTopicChange} />
            </div>
            <br />
            <div className="form-group col-md-offset-3 col-md-6">
              <label htmlFor="startYear">Start Year</label>
              <input type="text" className="form-control text-center" id="startYear" placeholder="2017" onChange={this._handleStartYearChange} />
            </div>
            <br />
            <div className="form-group col-md-offset-3 col-md-6">
              <label htmlFor="endYear">End Year</label>
              <input type="text" className="form-control text-center" id="endYear" placeholder="2018" onChange={this._handleEndYearChange} />
            </div>
            <br />
            <button type="submit" className="btn btn-info col-md-offset-5 col-md-2" id="searchBtn">Search</button>
          </form>
        </div>
      </div>
    );
  }
});

module.exports = Query;