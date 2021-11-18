import { useState } from "react";

const isValidTabChildren = (panel) => {
  if (!panel) {
    return false;
  }

  if (!panel['$$typeof'] || panel['$$typeof'].toString() != 'Symbol(react.element)') {
    return false;
  }

  if (!panel.props) {
    return false;
  }

  if (!panel.props.title) {
    return false;
  }

  return true;
}

export function Tab({ children }) {
  let panels = [];

  if (!Array.isArray(children)) {
    panels.push(children);
  }

  panels = children.filter(isValidTabChildren);
  if (panels.length < 1) {
    return <></>;
  }

  const activeChildren = panels.filter(i => i.props.active == 'true')[0] || panels[0];
  const [activeTab, setActiveTab] = useState(activeChildren.props.title);

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
