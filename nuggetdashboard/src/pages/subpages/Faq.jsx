import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react"; // Ikoner för toggling

function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question:
        "I invested my lifesavings in cryptocurrencies, now it's all gone! What can I do?",
      answer: "Just git gud.",
    },
    {
      question:
        "I have too much money now after investing in crypto, how do I even spend all this money?",
      answer: "You buy more cryptocurrencies.",
    },
    {
      question: "How do I even?",
      answer: "Yes.",
    },
    {
      question: "I am unable to can?",
      answer: "Can you even?",
    },
    {
      question: "How do I can if I am unable to even?",
      answer: "Most certainly!",
    },
  ];

  return (
    <div className="max-w-2xl mx-auto mt-4 mb-4 p-6 bg-gray-200 dark:bg-gray-800 shadow-lg rounded-2xl border border-gray-200 dark:border-gray-700">
      <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 text-center">
        FAQ - Bitcoin Bros
      </h3>

      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="border-b border-gray-300 dark:border-gray-600"
          >
            <button
              className="w-full text-left flex justify-between items-center py-4 text-xl font-semibold text-gray-800 dark:text-gray-200 focus:outline-2 p-1"
              onClick={() => toggleQuestion(index)}
            >
              {item.question}
              {openIndex === index ? (
                <ChevronUp size={24} />
              ) : (
                <ChevronDown size={24} />
              )}
            </button>
            <div
              className={`transition-max-height duration-300 ease-in-out overflow-hidden ${
                openIndex === index ? "max-h-40" : "max-h-0"
              }`}
            >
              <p className="text-gray-600 dark:text-gray-400 p-4">
                {item.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faq;
