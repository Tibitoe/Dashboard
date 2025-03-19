import { useState } from "react";
import { Loader2 } from "lucide-react";

function FormComponent() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Valideringsfunktion
  const validateForm = () => {
    let newErrors = {};

    if (!email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Invalid email address.";
    }

    if (!message.trim()) {
      newErrors.message = "Message cannot be empty.";
    } else if (message.length < 10) {
      newErrors.message = "Message must be at least 10 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Hantera formulärskick
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);

    // Simulera API-anrop (t.ex. 2 sekunder)
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);

      // Återställ formulär
      setEmail("");
      setMessage("");

      // Återställ bekräftelse efter 3 sekunder
      setTimeout(() => setSubmitted(false), 3000);
    }, 2000);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto p-6 bg-gray-200 dark:bg-gray-800 shadow-lg rounded-2xl border border-gray-200 dark:border-gray-700 space-y-4"
    >
      <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 text-center mb-4">
        Contact Us
      </h3>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
        >
          Email address
        </label>
        <input
          placeholder="example@example.com"
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:outline-none bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white ${
            errors.email
              ? "border-red-500 focus:ring-red-300"
              : "border-gray-300 dark:border-gray-600 focus:ring-amber-300"
          }`}
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email}</p>
        )}
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
        >
          Message
        </label>
        <textarea
          placeholder="Your message"
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows="3"
          className={`w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:outline-none bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white ${
            errors.message
              ? "border-red-500 focus:ring-red-300"
              : "border-gray-300 dark:border-gray-600 focus:ring-amber-300"
          }`}
        ></textarea>
        {errors.message && (
          <p className="text-red-500 text-sm mt-1">{errors.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className="w-full flex items-center justify-center text-white bg-gray-800 dark:bg-gray-700 p-3 rounded-lg font-semibold hover:bg-gray-700 dark:hover:bg-gray-600 transition-all border-2 border-transparent hover:border-amber-300 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? <Loader2 className="animate-spin w-5 h-5" /> : "Submit"}
      </button>

      {/* Confirmation Message */}
      {submitted && (
        <p className="text-center text-green-600 dark:text-green-400 text-sm mt-2">
          ✅ Message sent successfully!
        </p>
      )}
    </form>
  );
}

export default FormComponent;
