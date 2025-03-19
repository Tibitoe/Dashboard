function FormComponent() {
  return (
    <form>
      <div className="mb-3">
        <label htmlFor="Email" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="messageText" className="form-label">
          Message
        </label>
        <textarea
          className="form-control"
          id="messageText"
          placeholder="Your message"
          required
          rows="3"
        ></textarea>
      </div>
      <button
        style={{ borderRadius: "8px" }}
        className="text-white bg-gray-800 p-2 hover:bg-gray-700 border-2 hover:border-amber-300"
      >
        Submit
      </button>
    </form>
  );
}

export default FormComponent;
