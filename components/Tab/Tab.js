import { useState } from "react";

export function Tab({ tabs, initalTab }) {
  const [activeTab, setActiveTab] = useState(initalTab);

  return (
    <>
      <section className="triade" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="0">
        {tabs.map(t => <h2 key={t.title} onClick={() => setActiveTab(t.title)} className={"title-border-left " + (activeTab != t.title ? 'disable__item' : '')}>{t.title}</h2>
        )}
        {tabs.map(t => {
          const Body = () => t.body;

          <div key={t.title} className={"triade__item " + (activeTab != t.title ? 'd-none' : '')}>
            <Body />
          </div>;
        })}
      </section>
    </>
  );
}
