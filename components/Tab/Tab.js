import { useState } from "react";

export function Tab({ children }) {

  let panels = [];
  let active;
  if (!Array.isArray(children)) {
    if (children.type.name !== 'TabPanel') {
      return <></>;
    }

    panels.push(children);
    active = children;
  }
  else {
    panels = children.filter(i => i.type.name === 'TabPanel');
    active = panels.filter(i => i.props.active)[0] || panels[0];
  }

  const [activeTab, setActiveTab] = useState(active.props.title);

  return (
    <>
      <section className="triade" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="0">
        {
          panels.map(t =>
            <h2
              key={t.props.title}
              onClick={() => setActiveTab(t.props.title)}
              className={"title-border-left " + (activeTab != t.props.title ? 'disable__item' : '')}
            >
              {t.props.title}
            </h2>
          )
        }
        {
          panels.map(t =>
            <div key={t.props.title} className={"triade__item " + (activeTab != t.props.title ? 'd-none' : '')}>
              {t}
            </div>
          )
        }
      </section>
    </>
  );
}
