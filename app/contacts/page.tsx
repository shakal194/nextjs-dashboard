import Header from '@/app/ui/_components/Header';
import Footer from '@/app/ui/footer';
import { ChevronRightIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

const Contact = () => {
  return (
    <main className="flex min-h-screen flex-col p-6">
      {/*<Header />*/}
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
                <Link
                  href="#popup-form"
                  className="b2b_link js-popup-open group flex items-center text-blue-600 hover:text-blue-800"
                >
                  Contact BD Team
                  <ChevronRightIcon className="ml-2 h-4 w-4 transform transition-transform duration-300 ease-in-out group-hover:translate-x-2" />
                </Link>
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
