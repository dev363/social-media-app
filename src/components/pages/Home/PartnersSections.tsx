import Image from "next/image";

const PartnerSection = () => {
  return (
    <section id="clients" className="clients section-bg">
      <div className="container">
        <div className="row" data-aos="zoom-in">
          <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
            <Image
              width={300}
              height={300}
              src="/img/clients/client-1.png"
              className="img-fluid"
              alt=""
            />
          </div>

          <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
            <Image
              width={300}
              height={300}
              src="/img/clients/client-2.png"
              className="img-fluid"
              alt=""
            />
          </div>

          <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
            <Image
              width={300}
              height={300}
              src="/img/clients/client-3.png"
              className="img-fluid"
              alt=""
            />
          </div>

          <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
            <Image
              width={300}
              height={300}
              src="/img/clients/client-4.png"
              className="img-fluid"
              alt=""
            />
          </div>

          <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
            <Image
              width={300}
              height={300}
              src="/img/clients/client-5.png"
              className="img-fluid"
              alt=""
            />
          </div>

          <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
            <Image
              width={300}
              height={300}
              src="/img/clients/client-6.png"
              className="img-fluid"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default PartnerSection;
