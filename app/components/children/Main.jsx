const React = require("react");
const Query = require("./Query.jsx");
const Search = require("./Search.jsx");
const Saved = require("./Saved.jsx");
const helpers = require("../utils/helpers.js");

const Main = React.createClass({

  getInitialState: function() {
    return {
      apiResults: [],
      mongoResults: [],
      searchTerms: ["","",""]
    };
  },

  _setSearchFeilds: function(topic, start, end) {
    this.setState({ searchTerms: [topic, start, end] });
  },

  _resetMongoResults: function(newData){
    this.setState({ mongoResults: newData} );
  },

  componentDidMount: function() {
    helpers.apiGet().then(function(query){
      this.setState({mongoResults: query.data});
    }.bind(this));
  },

  componentDidUpdate: function(prevProps, prevState) {
    if(this.state.searchTerms != prevState.searchTerms){
      helpers.articleQuery(this.state.searchTerms[0], this.state.searchTerms[1], this.state.searchTerms[2]).then(function(data) {
        this.setState({ apiResults: data });
      }.bind(this));
    }
  },

  render: function() {
    return (
      <div className="container" style={ {backgroundColor: "white", borderStyle: "solid", borderWidth: "1px"} }>
        <div className="page-header">
          <h1 className="text-center">New York Times Article Search</h1>
        </div>
        <Query _setSearchFeilds={this._setSearchFeilds} />
        <Search apiResults={this.state.apiResults} _resetMongoResults={this._resetMongoResults} />
        <Saved mongoResults={this.state.mongoResults} _resetMongoResults={this._resetMongoResults} />
      </div>

    );
  }
});

module.exports = Main;
