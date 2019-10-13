import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends React.Component {
    renderError = ({ error, touched  }) => {
     
           if (touched && error) {
               return (
                    <div className="ui error message">
                        <div className="header">{error}</div>
                    </div>
               )
            return null;
                
           }
        
    }
    renderInput = ({ input, label, meta }) => {
        const className = `field ${meta.touched && meta.error ? 'error' : ''}`;
        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} />
                {this.renderError(meta)}
            </div>
        )
    }
    onSubmit = (formValues) => {
        console.log(formValues);
    }
    render () {
        return (
            <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <Field name="title"
                component={this.renderInput}
                label="Enter title"
                />
                <Field name="description"
                component={this.renderInput}
                label="Enter description"
                />
                <button className="ui button primary">Submit</button>
            </form>
        )
    }
   
}
const validate = (formValues) => {
    const errors = {};
    if (!formValues.title) {
        errors.title = 'You must enter the title';
    }
    if (!formValues.description) {
        errors.description = 'You must enter the description';
    }
    return errors;
}
export default reduxForm({
    form: 'streamCreate',
    validate,
})(StreamCreate);