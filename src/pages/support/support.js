import Header from "../../components/header";
import Footer from "../../components/Footer";
import ContactForm from "../../components/ContactForm";

function Subscription() {
  return (
    <div className="bg-gray-50 ">
      <Header />
      
      <div className="w-full bg-gray-50">
    <div className="mx-auto flex w-full max-w-7xl flex-col py-10 px-5 md:flex-row xl:py-14 xl:px-8 2xl:px-14">
      {/* sidebar */}
      <div className="order-2 md:order-1 w-full shrink-0 bg-white p-5  md:w-72 lg:w-96">
        <div className="mb-8 flex w-full items-center justify-center overflow-hidden">
          <img
            src="https://res.cloudinary.com/die5mkbau/image/upload/v1682967507/Contact_us-rafiki_x4us2b.svg"
            alt="contact"
            className="w-full h-56"
          />
        </div>

        <div className="mb-8 flex flex-col">
          <span className="mb-3 font-semibold text-heading">
            Address
          </span>
          <span className="text-sm text-body">
          NY, United States
          </span>
        </div>

        <div className="mb-8 flex flex-col">
          <span className="mb-3 font-semibold text-heading">
            Phone
          </span>
          <span className="text-sm text-body">
          +129290122122
          </span>
        </div>
          <div className="mb-8 flex flex-col">
            <span className="mb-3 font-semibold text-heading">
             Website
            </span>
            <div className="flex items-center justify-between">
              <span className="text-sm text-body">
              hamzajaani143@gmail.com
              </span>
              <a
                href="mailto:hamzajaani143@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="text-sm text-gray-800
                 font-semibold text-accent
                  hover:text-accent-hover
                 focus:text-blue-500 focus:outline-none"
              >
             Email Here
              </a>
            </div>
          </div>

        {/* <div className="mb-8 flex flex-col">
          <span className="mb-4 font-semibold text-heading">
            {t('text-follow-us')}
          </span>
          <div className="flex items-center justify-start">
            {settings?.contactDetails?.socials?.map(
              (item: any, index: number) => (
                <a
                  key={index}
                  href={item?.url}
                  target="_blank"
                  rel="noreferrer"
                  className={`text-muted transition-colors duration-300 focus:outline-none ltr:mr-8 ltr:last:mr-0 rtl:ml-8 rtl:last:ml-0 hover:${item.hoverClass}`}
                >
                  {getIcon({
                    iconList: socialIcons,
                    iconName: item?.icon,
                    className: 'w-4 h-4',
                  })}
                </a>
              )
            )}
          </div>
        </div> */}
      </div>

      {/* Contact form */}
      <div className="order-1 md:order-2 mb-8 w-full bg-white p-5 md:mb-0 md:p-8 md:ml-7 md:mr-7 lg:ml-9 lg:mr-9">
        <h1 className="mb-7 font-body text-xl font-bold text-heading md:text-2xl">
        Questions, Comments, Or Concerns?
        </h1>
        <ContactForm />
      </div>
    </div>
  </div>
     
      <Footer />
    </div>
  );
}
export default Subscription;
