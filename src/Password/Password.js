import React, {Component} from 'react';
import {connect} from "react-redux";
import './Password.css';

class Password extends Component {
    render() {
        const numbers = ['1','2','3','4','5','6','7','8','9','0'];
        return (
            <div className="Password">
                <input type="password"
                       disabled
                       defaultValue={this.props.password}
                       style={{fontSize: '20px'}}
                       className={this.props.colorDisplay}
                />
                {numbers.map(number => {
                    return <button
                                key={number}
                                onClick={() => this.props.pushButton(number)}
                                className="btn">{number}</button>
                })}
                <button className="btn" onClick={this.props.enterPassword}>E</button>
                <button className="btn" onClick={this.props.deleteNumber}>&lt;</button>
                <h1 className={this.props.colorDisplay}>{this.props.status}</h1>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        password: state.password,
        colorDisplay: state.colorDisplay,
        status: state.status,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        pushButton: number => dispatch({type: "PUSH_BUTTON", value: number}),
        enterPassword: () => dispatch({type: 'ENTER'}),
        deleteNumber: () => dispatch({type: 'DELETE'}),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Password);