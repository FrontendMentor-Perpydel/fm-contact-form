function App() {
  return (
    <div>
      <h1>Contact Us</h1>

      {/* Form */}
      <form>
        {/* Name Section */}
        <section>
          {/* First Name */}
          <div>
            <label htmlFor="firstName">First Name *</label>
            <input type="text" id="firstName" />
          </div>

          {/* Last Name */}
          <div>
            <label htmlFor="lastName">Last Name *</label>
            <input type="text" id="lastName" />
          </div>
        </section>

        {/* Email */}
        <div>
          <label htmlFor="email">Email Address *</label>
          <input type="text" id="email" />
        </div>

        {/* Query */}
        <section>
          <div>
            <input
              type="radio"
              id="general-enquiry"
              name="query"
              value="generalEnquiry"
            />
            <label htmlFor="general-enquiry">General Enquiry</label>
          </div>
          <div>
            <input
              type="radio"
              id="support-request"
              name="query"
              value="supportRequest"
            />
            <label htmlFor="support-request">Support Request</label>
          </div>
        </section>

        {/* Message */}
        <div>
          <label htmlFor="message">Message *</label>
          <textarea name="message" id="message"></textarea>
        </div>

        {/* Consent checkbox */}
        <div>
          <input type="checkbox" id="consent" name="consent" value="consent" />
          <label htmlFor="consent">
            I consent to being contacted by the team *
          </label>
        </div>

        {/* Submit button */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
