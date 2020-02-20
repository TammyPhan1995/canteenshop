import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import renderField from "components/FormInputs/renderField";



// const validate = values => {
//     const errors = {};
//     const appUserErrors = {};
//     console.log("Date: ==== " + values.abc)
//     if (values.appUser) {
//         console.log(values.appUser.username)
//         if (!values.appUser.username) {
//             appUserErrors.username = 'Username is required';
//         }
//         else if (values.appUser.username.length < 6 || values.appUser.username.length > 50) {
//             appUserErrors.username = 'Username from 6 - 50 characters ';
//         }
//         if (!values.appUser.firstName) {
//             appUserErrors.firstName = 'FirstName is required';
//         }
//         else if (values.appUser.firstName.length < 1 || values.appUser.firstName.length > 100) {
//             appUserErrors.firstName = 'FirstName from 1 - 100 characters ';
//         }
//         if (!values.appUser.lastName) {
//             appUserErrors.lastName = 'LastName is required';
//         }
//         else if (values.appUser.lastName.length < 1 || values.appUser.lastName.length > 50) {
//             appUserErrors.lastName = 'LastName from 1 - 50 characters ';
//         }
//         if (!values.appUser.phone) {
//             appUserErrors.phone = 'Phone is required';
//         }
//         else if (!/^[0-9]{10}$/i.test(values.appUser.phone)) {
//             appUserErrors.phone = 'Phone must contain 10 numbers';
//         }
//         if (!values.appUser.gender) {
//             appUserErrors.gender = 'Gender is required';

//         }
//         if (!values.appUser.email) {
//             appUserErrors.email = 'Email is required';
//         } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.appUser.email)) {
//             appUserErrors.email = 'Invalid email address'
//         }
//         if (!values.appUser.password) {
//             appUserErrors.password = 'Password is required';
//         } else if (values.appUser.password.length < 3) {
//             appUserErrors.password = 'Must be 3 characters or more';
//         }
//         return appUserErrors;
//     }
//     //staff

//     if (!values.address) {
//         errors.address = 'Address is required';
//     }
//     else if (values.address.length < 1 || values.address.length > 500) {
//         errors.address = 'Address from 1 - 500 characters ';
//     }

//     if (!values.socialId) {
//         errors.socialId = 'Social IDis required';
//     }
//     else if (!/^[0-9]{12}$/i.test(values.socialId)) {
//         errors.socialId = 'Social ID must contain 12 numbers';
//     }
//     if (!values.dob) {
//         errors.dob = 'Date of birth is required';
//     }
//     //todo
//     else if (!values.dob) {
//         console.log("THIS IS DOB")
//     }
//     console.log(values.dob);
//     //===========

//     if (appUserErrors) {
//         errors.appUser = appUserErrors;
//     }
//     console.log("appUser:  " + appUserErrors)

//     console.log("error:  " + errors)
//     return errors;
// };

/*
    Validation 
*/
const required = value => value ? undefined : 'Required'

const maxLength = max => value =>
    value && value.length > max ? `Must be ${max} characters or less` : undefined
const maxLength500 = maxLength(500)
const maxLength100 = maxLength(100)
const maxLength50 = maxLength(50)

const number = value => value && isNaN(Number(value)) ? 'Must be a number' : undefined

const minValue = min => value =>
    value && value < min ? `Must be ${min} characters or more` : undefined
const minValue1 = minValue(1)
const minValue6 = minValue(6)
const minValue3 = minValue(3)

const equalValue = equal => value =>
    value && value == equal ? `Must be ${equal} characters` : undefined
const equalValue10 = equalValue(10)
const equalValue12 = equalValue(12)

const email = value =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
        'Invalid email address' : undefined

const tooOld = value =>
    value && value > 65 ? 'You might be too old for this' : undefined

const aol = value =>
    value && /.+@aol\.com/.test(value) ?
        'Really? You still use AOL for your email?' : undefined
/**============================================================== */


const StaffForm = ({
    handleSubmit,
    handleCancel,
    date
}) => (
        <div className="card">
            <div className="content">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <div>
                            <label className="control-label">First Name</label>
                            <div>
                                <Field
                                    name="appUser.firstName"
                                    component={renderField}
                                    type="text"
                                    placeholder="Enter first name"
                                    validate={[minValue1, maxLength100, required]}
                                />
                            </div>
                        </div>
                        <div>
                            <label className="control-label">Last Name</label>
                            <div>
                                <Field
                                    name="appUser.lastName"
                                    component={renderField}
                                    type="text"
                                    placeholder="Enter last Name"
                                    validate={[minValue1, maxLength50, required]}
                                />
                            </div>
                        </div>
                        <div>
                            <label className="control-label">Username</label>
                            <div>
                                <Field
                                    name="appUser.username"
                                    component={renderField}
                                    type="text"
                                    placeholder="Enter username"
                                    validate={[minValue6, maxLength50, required]}
                                />
                            </div>
                        </div>
                        <div>
                            <label className="control-label">Password</label>
                            <div>
                                <Field
                                    name="appUser.password"
                                    component={renderField}
                                    type="password"
                                    placeholder="Enter password"
                                    validate={[minValue3, maxLength100, required]}
                                />
                            </div>
                        </div>
                        <div>
                            <label className="control-label">Email</label>
                            <div>
                                <Field
                                    name="appUser.email"
                                    component={renderField}
                                    type="email"
                                    placeholder="Email"
                                    validate={[email, required]}
                                />
                            </div>
                        </div>
                        <div>
                            <label className="control-label">Phone</label>
                            <div>
                                <Field
                                    name="appUser.phone"
                                    component={renderField}
                                    type="text"
                                    placeholder="Enter phone number"
                                    validate={[number, required, equalValue10]}
                                />
                            </div>
                        </div>
                        <div>
                            <label className="control-label">Address</label>
                            <div>
                                <Field
                                    name="address"
                                    component={renderField}
                                    type="text"
                                    placeholder="Enter address"
                                    validate={[required, minValue3, maxLength500]}
                                />
                            </div>
                        </div>
                        <div>
                            <label className="control-label">Date of birth</label>
                            <div>
                                <Field
                                    name="dob"
                                    component="input"
                                    type="date"
                                />
                            </div>

                        </div>
                        <div>
                            <label className="control-label">Scoial ID</label>
                            <div>
                                <Field
                                    name="socialId"
                                    component={renderField}
                                    type="text"
                                    placeholder="Enter social ID"
                                    validate={[required, number, equalValue12]}
                                />
                            </div>
                        </div>
                        <div>
                            <label className="control-label">Gender</label>
                            <div>

                                <Field name="appUser.gender" component={renderField}
                                    type="radio" value="M"
                                    label='Male'

                                />

                                <br />

                                <Field name="appUser.gender" component={renderField} label='Female'
                                    type="radio" value="F"
                                />

                            </div>
                        </div>
                    </div>
                    <button onClick={handleCancel} type="button" className="btn btn-wd btn-default" >
                        <span className="btn-label">
                        </span> Cancel
                        </button>
                    &nbsp;&nbsp;
                    <button type="submit" className="btn btn-wd btn-success" id="btnValidate">
                        <span className="btn-label">
                        </span> Save
                        </button>
                </form>
            </div>
        </div>
    );

export default reduxForm({
    form: 'staffForm'
})(StaffForm)
