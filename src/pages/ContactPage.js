import { Component } from "react";

import '../styles/ContactPage.css';

class ContactPage extends Component {
    state = {
        value: ""
    }

    handleChange = (e) => {
        this.setState({
            value: e.target.value
        })
    }
    handleSubmmit = (e) => {
        e.preventDefault();
        this.setState({
            value: ""
        });
    }
    render() {
          return (
            <div className="contact">
                <form onSubmit={this.handleSubmmit}>
                    <h3>Nappisz do nas</h3>
                    <textarea 
                        value={this.state.value} 
                        onChange={this.handleChange}
                        placeholder="Wpisz wiadomość..."
                    />
                    <button>Wyślij</button>
                </form>
            </div>
        );  
    }

};

export default ContactPage;