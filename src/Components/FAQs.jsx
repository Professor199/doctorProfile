import React, { useState } from "react";
import { Accordion, Icon } from "semantic-ui-react";

const AccordionExampleStandard = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const newIndex = activeIndex === index ? -1 : index;
    setActiveIndex(newIndex);
  };

  return (
    <div className="faqs" id="faqs">
      <Accordion>
        <Accordion.Title
          active={activeIndex === 0}
          index={0}
          onClick={handleClick}
          style={{ color: "white" }}
        >
          <Icon name="dropdown" />
          What conditions can homeopathy treat?
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>
          <p>
            Homeopathy can help manage chronic and acute conditions such as
            allergies, skin problems, digestive issues, respiratory disorders,
            hormonal imbalance, stress, and immunity-related concerns.
          </p>
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 1}
          index={1}
          onClick={handleClick}
          style={{ color: "white" }}
        >
          <Icon name="dropdown" />
          Is homeopathic treatment safe?
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 1}>
          <p>
            Yes, homeopathic medicines are generally safe, non-toxic, and have
            no known side effects when prescribed by a qualified homeopathy
            doctor.
          </p>
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 2}
          index={2}
          onClick={handleClick}
          style={{ color: "white" }}
        >
          <Icon name="dropdown" />
          How long does homeopathic treatment take to show results?
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 2}>
          <p>
            The duration depends on the nature and severity of the condition.
            Acute problems may improve quickly, while chronic conditions may
            take longer with gradual improvement.
          </p>
        </Accordion.Content>
        <Accordion.Title
          active={activeIndex === 3}
          index={3}
          onClick={handleClick}
          style={{ color: "white" }}
        >
          <Icon name="dropdown" />
          Can homeopathy be taken along with allopathic medicines?
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 3}>
          <p>
            Yes, homeopathy can usually be taken alongside conventional
            medicines, but it’s best to inform your doctor about any ongoing
            treatments.
          </p>
        </Accordion.Content>
        <Accordion.Title
          active={activeIndex === 4}
          index={4}
          onClick={handleClick}
          style={{ color: "white" }}
        >
          <Icon name="dropdown" />
          Is homeopathy suitable for children and elderly patients?
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 4}>
          <p>
            Yes, homeopathy is gentle and suitable for people of all age groups,
            including infants, children, and elderly patients.
          </p>
        </Accordion.Content>
      </Accordion>
    </div>
  );
};

export default AccordionExampleStandard;
