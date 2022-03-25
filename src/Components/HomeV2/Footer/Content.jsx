import React from "react";
import AnchorTag from "../../Helpers/AnchorTag";

export default function Content({
  heading,
  icon1,
  icon2,
  icon3,
  title1,
  title2,
  title3,
  link1,
  link2,
  link3,
}) {
  return (
    <section className="footer_content">
      <h3>{heading}</h3>

      <aside>
        <p>
          <AnchorTag link={link1} icon={icon1} title={title1} />
        </p>
        <p>
          <AnchorTag link={link2} icon={icon2} title={title2} />
        </p>
        <p>
          <AnchorTag link={link3} icon={icon3} title={title3} />
        </p>

        
      </aside>
    </section>
  );
}
