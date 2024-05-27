const FormComponent = () => {
  return (
    <div className="bg-primary w-[50%] rounded-xl p-6">
      <h1 className="font-bold text-xl text-neutral pb-6">Contact Us</h1>

      {/* Form */}
      <form className="text-neutral">
        {/* Name Section */}
        <section className="flex gap-5 pb-5">
          {/* First Name */}
          <div className="flex flex-col w-full">
            <label htmlFor="firstName" className="pb-1 font-medium">First Name *</label>
            <input type="text" id="firstName" className="bg-primary border border-accent rounded-md p-2" />
          </div>

          {/* Last Name */}
          <div className="flex flex-col w-full">
            <label htmlFor="lastName" className="pb-1 font-medium">Last Name *</label>
            <input type="text" id="lastName" className="bg-primary border border-accent rounded-md p-2" />
          </div>
        </section>

        {/* Email */}
        <div className="flex flex-col w-full pb-5">
          <label htmlFor="email" className="pb-1 font-medium">Email Address *</label>
          <input type="text" id="email" className="bg-primary border border-accent rounded-md p-2" />
        </div>

        {/* Query */}
        <h3 className="pb-1 font-medium">Query Type *</h3>
        <section className="flex gap-5 pb-5">
          <div className="flex gap-2 pl-4 items-center p-2 border border-accent rounded-md w-full ">
            <input
              type="radio"
              id="general-enquiry"
              name="query"
              value="generalEnquiry"
              className="radio radio-secondary"
            />
            <label htmlFor="general-enquiry">General Enquiry</label>
          </div>
          <div className="flex gap-2 pl-4 items-center p-2 border border-accent rounded-md w-full">
            <input
              type="radio"
              id="support-request"
              name="query"
              value="supportRequest"
              className="radio radio-secondary"
            />
            <label htmlFor="support-request">Support Request</label>
          </div>
        </section>

        {/* Message */}
        <div className="flex flex-col pb-7">
          <label htmlFor="message" className="pb-1 font-medium">Message *</label>
          <textarea name="message" id="message" className="bg-primary border border-accent rounded-md p-2" rows={3}></textarea>
        </div>

        {/* Consent checkbox */}
        <div className="flex gap-3 items-center pb-7">
          <input type="checkbox" id="consent" name="consent" value="consent" className="checkbox checkbox-sm rounded-md checkbox-secondary" />
          <label htmlFor="consent" className="font-medium">
            I consent to being contacted by the team *
          </label>
        </div>

        {/* Submit button */}
        <button type="submit" className="btn w-full btn-secondary text-lg">Submit</button>
      </form>
    </div>
  );
};

export default FormComponent;
