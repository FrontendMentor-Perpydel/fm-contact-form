import { useReducer, useState } from 'react';

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  queryType: '',
  message: '',
  consent: false,
  valid: true,
  errorMessage: {
    firstName: '',
    lastName: '',
    email: '',
    queryType: '',
    message: '',
    consent: '',
  },
};

function reducer(state, action) {
  switch (action.type) {
    case 'success':
      return {
        ...state,
        [action.field]: action.value,
        errorMessage: {
          ...state.errorMessage,
          [action.field]: '',
        },
      };
    case 'failed':
      return {
        ...state,
        errorMessage: {
          ...state.errorMessage,
          [action.field]: action.errorMessage,
        },
      };
    case 'reset':
      return initialState;
    default:
      return state;
  }
}

const FormComponent = () => {
  // const [formValid, setFormValid] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [
    { email, firstName, lastName, queryType, message, consent, errorMessage },
    dispatch,
  ] = useReducer(reducer, initialState);

  const validate = () => {
    let valid = true;
    const errors = {};

    if (!firstName) {
      errors.firstName = 'First name is required';
      valid = false;
    }
    if (!lastName) {
      errors.lastName = 'Last name is required';
      valid = false;
    }
    if (!email) {
      errors.email = 'Email is required';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email is invalid';
      valid = false;
    }
    if (!queryType) {
      errors.queryType = 'Please select a query type';
      valid = false;
    }
    if (!message) {
      errors.message = 'Message is required';
      valid = false;
    }
    if (!consent) {
      errors.termsAgreed = 'You must agree to the terms and conditions';
      valid = false;
    }

    Object.keys(errors).forEach((field) => {
      dispatch({ type: 'failed', field, errorMessage: errors[field] });
    });

    return valid;
  };

  function handleSubmitForm(e) {
    e.preventDefault();

    if (validate()) {
      setIsLoading(false);
      const formDetails = {
        email,
        firstName,
        lastName,
        queryType,
        message,
        consent,
      };
      localStorage.setItem('userDetails', JSON.stringify(formDetails));
      dispatch({ type: 'reset' });
    }

  }

  return (
    <div className="bg-primary w-[50%] rounded-xl p-6 mb-10">
      <h1 className="font-bold text-xl text-neutral pb-6">Contact Us</h1>

      {/* Form */}
      <form className="text-neutral" onSubmit={handleSubmitForm}>
        {/* Name Section */}
        <section className="flex gap-5 pb-5">
          {/* First Name */}
          <div className="flex flex-col w-full">
            <label htmlFor="firstName" className="pb-1 font-medium">
              First Name *
            </label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={e =>
                dispatch({
                  type: 'success',
                  field: 'firstName',
                  value: e.target.value,
                })
              }
              className={`bg-primary ${errorMessage.firstName ? "border border-error" : "border border-accent"} rounded-md p-2`}
            />
            {errorMessage.firstName && (
              <span className="label-text-alt text-error pt-2">
                {errorMessage.firstName}
              </span>
            )}
          </div>

          {/* Last Name */}
          <div className="flex flex-col w-full">
            <label htmlFor="lastName" className="pb-1 font-medium">
              Last Name *
            </label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={e =>
                dispatch({
                  type: 'success',
                  field: 'lastName',
                  value: e.target.value,
                })
              }
              className={`bg-primary ${errorMessage.firstName ? "border border-error" : "border border-accent"} rounded-md p-2`}
            />
            {errorMessage.lastName && (
              <span className="label-text-alt text-error pt-2">
                {errorMessage.lastName}
              </span>
            )}
          </div>
        </section>

        {/* Email */}
        <div className="flex flex-col w-full pb-5">
          <label htmlFor="email" className="pb-1 font-medium">
            Email Address *
          </label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={e =>
              dispatch({
                type: 'success',
                field: 'email',
                value: e.target.value,
              })
            }
            className={`bg-primary ${errorMessage.firstName ? "border border-error" : "border border-accent"} rounded-md p-2`}
          />
          {errorMessage.email && (
            <span className="label-text-alt text-error pt-2">
              {errorMessage.email}
            </span>
          )}
        </div>

        {/* Query */}
        <h3 className="pb-1 font-medium">Query Type *</h3>
        <section className="flex gap-5 pb-2">
          <div className={`flex gap-2 pl-4 items-center p-2 border border-accent rounded-md w-full ${queryType === 'generalEnquiry' ? "bg-secondary/10" : ""}`}>
            <input
              type="radio"
              id="general-enquiry"
              name="queryType"
              value="generalEnquiry"
              checked={queryType === 'generalEnquiry'}
              onChange={(e) =>
                dispatch({
                  type: 'success',
                  field: 'queryType',
                  value: e.target.value,
                })
              }
              className="radio radio-secondary"
            />
            <label htmlFor="general-enquiry">General Enquiry</label>
          </div>
          <div className={`flex gap-2 pl-4 items-center p-2 border border-accent rounded-md w-full ${queryType === 'supportRequest' ? "bg-secondary/10" : ""}`}>
            <input
              type="radio"
              id="support-request"
              name="queryType"
              value="supportRequest"
              checked={queryType === 'supportRequest'}
              onChange={(e) =>
                dispatch({
                  type: 'success',
                  field: 'queryType',
                  value: e.target.value,
                })
              }
              className="radio radio-secondary"
            />
            <label htmlFor="support-request">Support Request</label>
          </div>
        </section>
        {errorMessage.queryType && (
          <span className="label-text-alt text-error">
            {errorMessage.queryType}
          </span>
        )}

        {/* Message */}
        <div className="flex flex-col pb-7 pt-5">
          <label htmlFor="message" className="pb-1 font-medium">
            Message *
          </label>
          <textarea
            name="message"
            id="message"
            className={`bg-primary ${errorMessage.firstName ? "border border-error" : "border border-accent"} rounded-md p-2`}
            rows={3}
            value={message}
            onChange={e =>
              dispatch({
                type: 'success',
                field: 'message',
                value: e.target.value,
              })
            }
          ></textarea>
          {errorMessage.message && (
            <span className="label-text-alt text-error pt-2">
              {errorMessage.message}
            </span>
          )}
        </div>

        {/* Consent checkbox */}
        <div className="flex gap-3 items-center">
          <input
            type="checkbox"
            id="consent"
            name="consent"
            checked={consent}
            onChange={e =>
              dispatch({
                type: 'success',
                field: 'consent',
                value: e.target.value,
              })
            }
            className="checkbox checkbox-sm rounded-md checkbox-secondary"
          />
          <label htmlFor="consent" className="font-medium">
            I consent to being contacted by the team *
          </label>
        </div>
        {errorMessage.consent && (
          <span className="label-text-alt text-error">
            {errorMessage.consent}
          </span>
        )}

        {/* Submit button */}
        <button type="submit" className="btn w-full btn-secondary text-lg mt-7">
          {isLoading ? (
            <span className="loading loading-spinner text-warning loading-lg"></span>
          ) : (
            'Submit'
          )}
        </button>
      </form>
    </div>
  );
};

export default FormComponent;
