var Filter = React.createClass ({
  
  displayName: 'Filter',

  propTypes: {
    words: React.PropTypes.arrayOf(
      React.PropTypes.string.isRequired
    ) 
  },

  getInitialState: function() {
    return {
      wordsState: this.props.words,
      checkBoxState: false,
      sortState: ''
    }
  },

  checked: function(EO){
    this.setState({
      checkBoxState: EO.target.checked
    }, this.sortAndFilter)
  },

  sortWords: function(EO){
    this.setState({
      sortState: EO.target.value 
    }, this.sortAndFilter)
  },

  sortAndFilter: function(){
    var wordsArr = this.props.words.slice();
    if (this.state.checkBoxState){
      wordsArr = wordsArr.sort();
    }
    if (this.state.sortState != '') {
      wordsArr = wordsArr.filter(item =>
        item.indexOf(this.state.sortState) != -1
      );
    }
    this.setState({
      wordsState: wordsArr
    })
  },  

  render: function() {
    var wordList = this.state.wordsState.map((item, i)=>
      React.DOM.div({key: i}, item)
    );
    return React.DOM.div({},
      React.DOM.input({type: 'checkbox', 
        onChange: this.checked 
      }, ),
      React.DOM.input({type: 'search',
        onChange: this.sortWords
      }, ), 
      React.DOM.div({className: 'words_container'}, wordList),
    ) 
  }, 

})
