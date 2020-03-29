import React from 'react';

class SearchBar extends React.Component{
    state={term:''};
    
    onFormSubmit=(e)=>{
        
        e.preventDefault();
        this.props.onSubmit(this.state.term);

    }
    

    render(){
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label >Image Search</label>
                        <input  value={this.state.term} type="text" placeholder="Search..." 
                                onChange={e=>this.setState({term:e.target.value})}
                        />
                        
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;

/**
 * <div class="ui icon input">
  <input type="text" placeholder="Search...">
  <i class="circular search link icon"></i>
</div>
 */

 

 