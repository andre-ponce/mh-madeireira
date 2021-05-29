import React from 'react';

function Filter({ filters }) {
  return (
    <section className="main__filters col-12 col-lg-3 pl-0" data-aos="fade-right" data-aos-duration="1000" data-aos-offset="300">

      <button className="navbar-toggler mb-4 filters__title" type="button" data-toggle="collapse" data-target="#filtros" aria-controls="filtros" aria-expanded="false" aria-label="Toggle navigation">
        FILTRAR POR
        <i className="fas fa-filter" />
      </button>

      <div className="collapse navbar-collapse show" id="filtros">
        {filters.map((filter) => (
          <div className="filters__filter mt-2">

            <button className="navbar-toggler mb-3" type="button" data-toggle="collapse" data-target={`#navbarNav${filter.id}`} aria-controls={`navbarNav${filter.id}`} aria-expanded="false" aria-label="Toggle navigation">
              {filter.name}
              <i className="fas fa-chevron-down" />
            </button>

            <div className="collapse navbar-collapse show" id={`navbarNav${filter.id}`}>
              <div className="navbar-nav">
                {filter.filters.map((item) => (
                  <div className="custom-control custom-checkbox mb-1">
                    <input type="checkbox" className="custom-control-input" id={`customCheck${item.id}`} />
                    <label className="custom-control-label" htmlFor={`customCheck${item.id}`}>{item.description}</label>
                  </div>
                ))}
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}

export default Filter;
