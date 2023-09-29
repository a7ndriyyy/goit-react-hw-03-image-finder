import { Component } from 'react';
import css from './Button.module.css';


class Button extends Component{
    render(){
        return (
            <Button onClick={this.props.getMoreImage} className={css.Button}>
                Load More
            </Button>
        );
  }
}

export default Button;