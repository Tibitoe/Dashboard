import HelpLayout from "../routing/HelpLayout";

function AboutPage() {
  return (
    <section className="p-6 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-200">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-gray-200 dark:bg-gray-800 p-4 rounded-2xl max-w-4xl m-auto">
        <div className="flex justify-center">
          <img
            src="/bitcoinbros.webp"
            alt="Picture of the Bitcoin Bros"
            className="rounded-lg shadow-lg max-w-full max-h-100"
          />
        </div>

        <div className="flex flex-col justify-center rounded-2xl dark:bg-gray-800 dark:text-gray-200">
          <h2 className="font-bold text-3xl mb-4">About Us</h2>
          <p className="text-lg leading-relaxed">
            Welcome to <strong>Bitcoin Bros</strong>, your go-to platform for
            crypto enthusiasts! We are a team of passionate individuals
            dedicated to exploring the world of cryptocurrency, sharing
            insights, and making financial freedom accessible for everyone.
            Whether you are a seasoned investor or just getting started, we're
            here to help you navigate the ever-evolving digital economy.
          </p>
        </div>
      </div>

      <HelpLayout />
    </section>
  );
}

export default AboutPage;
