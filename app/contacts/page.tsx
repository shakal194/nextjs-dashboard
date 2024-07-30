import Header from '@/app/ui/_components/Header';
import Footer from '@/app/ui/footer';

const Contact = () => {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <Header />
      <section className="block_contact_us py-40">
        <div className="container mx-auto px-4">
          <div className="block_contact_us__inner flex flex-wrap justify-between gap-y-9 md:flex-row">
            <div className="block_contact_us__inner__left mb-8 md:mb-0 md:w-1/2">
              <h1 className="mb-4 text-2xl font-semibold md:text-4xl">
                Have specific questions, or&nbsp;want a&nbsp;guided tour of our
                services?
              </h1>
              <p className="text-lg">Contact us for more information.</p>
            </div>
            <div className="block_contact_us__inner__right flex gap-4 md:w-1/3">
              <div className="block_contact_us__inner__right__box mb-8">
                <p className="mb-2 text-lg">Reach out through</p>
                <a
                  href="mailto:sales@Coinsfish.com"
                  className="mb-2 block text-gray-600"
                >
                  sales@Coinsfish.com
                </a>
                <a href="tel:+442045388142" className="block text-gray-600">
                  +44 204 538 8142
                </a>
              </div>
              <div className="block_contact_us__inner__right__box">
                <p className="mb-2 text-lg">Or fill the form</p>
                <a
                  href="#popup-form"
                  className="b2b_link js-popup-open flex items-center text-blue-600"
                >
                  Contact BD Team
                  <svg
                    width="7"
                    height="14"
                    viewBox="0 0 7 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-2"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M6.84184 8.6457C7.21027 8.25936 7.21027 7.65176 6.84184 7.26542L2.44465 2.65456C2.05814 2.24927 1.41134 2.24927 1.02484 2.65456C0.663702 3.03324 0.663377 3.62872 1.0241 4.0078L4.78072 7.95556L1.0241 11.9033C0.663378 12.2824 0.663702 12.8779 1.02484 13.2566C1.41134 13.6618 2.05814 13.6618 2.44465 13.2566L6.84184 8.6457Z"
                      fill="#204BDB"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Contact;
