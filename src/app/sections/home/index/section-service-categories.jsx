import { serviceCategories } from "../../../../globals/constants";

function SectionServiceCategories() {
  return (
    <>
      <div className="section-full p-t110 p-b80 sx-bg-white">
        <div className="container">
          {/* TITLE START */}
          <div className="section-head center">
            <div className="sx-head-s-title">What We Offer</div>
            <div className="sx-head-l-title">
              <h2 className="sx-title">Enterprise &amp; Business Services</h2>
            </div>
          </div>
          {/* TITLE END */}
          <div className="section-content">
            <div className="row justify-content-center">
              {serviceCategories.map((category) => (
                <div
                  key={category.heading}
                  className="col-lg-6 col-md-6 m-b30 wow fadeInDown"
                  data-wow-duration="1000ms"
                >
                  <div className="service-category-card">
                    <div className="service-category-head">
                      <span className="service-category-icon">
                        <i className={category.icon} />
                      </span>
                      <h4 className="sx-tilte">{category.heading}</h4>
                    </div>
                    <p>{category.description}</p>
                    <ul className="service-category-list">
                      {category.services.map((service) => (
                        <li key={service.name}>
                          <strong>{service.name}</strong>
                          <span>{service.description}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SectionServiceCategories;
