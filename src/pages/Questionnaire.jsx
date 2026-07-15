import React, { useState } from "react";
import { PageHero } from "../components/PageHero.jsx";
import { SectionHeading } from "../components/SectionHeading.jsx";
import { Input } from "../components/Input.jsx";
import { Button } from "../components/Button.jsx";
import { Footer } from "../components/Footer.jsx";
import { PHOTOS } from "../data/content.js";

/* Questionnaire (/questionnaire) — a warm, personal intake form. The
   COMMUNICATE → HARVEST framework introduces the process, followed by the
   full 11-question intake. Submissions are addressed to gardensofeatin@gmail.com.
   NOTE: static hosting has no form backend, so submit builds a mailto: with a
   clear subject line. Swap in a form service (Formspree, etc.) for production. */

const FRAMEWORK = [
  { label: "Communicate", copy: "Fill this out before your consultation. It helps us pull topography maps and property lines in advance and means we can hit the ground running together on site." },
  { label: "Observe", copy: "We walk your property together, discussing potentials and possibilities, identifying zones and priorities." },
  { label: "Imagine", copy: "Your designer develops a set of objectives, an estimate, and a timeline for the first design draft." },
  { label: "Prepare", copy: "We gather site information, maps, and any existing plans to inform the design process." },
  { label: "Gather", copy: "A detailed, itemized estimate covering up to a year of seasonally appropriate projects." },
  { label: "Create", copy: "Installation by our dedicated team of specialists who bring passion and expertise to every project." },
  { label: "Harvest", copy: "Your gardens grow. We help you learn to maintain, harvest, and steward your land for generations." },
];

const GOAL_OPTIONS = [
  "Raised Veggie Beds",
  "Culinary and Medicinal Herbs",
  "Floral Cutting Gardens",
  "Pollinator Paradise",
  "Ponds and Water Features",
  "Agro-Forestry Food and Forage",
  "Happy Healthy Chickens",
  "Mushroom Logs",
  "Home Orchard",
  "Evergreen Privacy Screen",
  "Magical Fairy Nook",
  "Children's Playspace",
  "Micro-Farm",
  "Moss Patch",
  "Native Plant Guilds",
  "No-Mow and Edible Lawn",
];

const WORK_OPTIONS = [
  "I would like Gardens of Eatin to install my gardens",
  "I would like to install my own gardens based on the plan",
  "I would like Gardens of Eatin to consult on particular projects",
  "I would like to establish regular maintenance schedules",
  "I would like a combination of services as needed",
];

const BLANK = {
  names: "",
  pets: "",
  address: "",
  phone: "",
  email: "",
  lotSize: "",
  vision: "",
  goals: [],
  goalsOther: "",
  barriers: "",
  desired: "",
  notDesired: "",
  sectors: "",
  likes: "",
  workStyle: "",
  budget: "",
  timing: "",
  favorites: "",
  anythingElse: "",
};

export default function Questionnaire() {
  const [form, setForm] = useState(BLANK);
  const [sent, setSent] = useState(false);

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));
  const toggleGoal = (goal) => (e) =>
    setForm((f) => ({
      ...f,
      goals: e.target.checked ? [...f.goals, goal] : f.goals.filter((g) => g !== goal),
    }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const lines = [
      `Name(s) and ages: ${form.names}`,
      `Pets and livestock: ${form.pets}`,
      `Property address: ${form.address}`,
      `Phone: ${form.phone}`,
      `Email: ${form.email}`,
      `Lot size: ${form.lotSize}`,
      "",
      `1. Vision / dream for the property:\n${form.vision}`,
      `2. Goals for this land: ${[...form.goals, form.goalsOther].filter(Boolean).join(", ")}`,
      `3. Barriers / biggest challenge:\n${form.barriers}`,
      `4. Desired elements:\n${form.desired}`,
      `   Not desired:\n${form.notDesired}`,
      `5. Noise / smell / view sectors to mitigate:\n${form.sectors}`,
      `6. What you already like:\n${form.likes}`,
      `7. How you'd like to work with GOE: ${form.workStyle}`,
      `8. Budget and time period:\n${form.budget}`,
      `9. Overall timing and phasing:\n${form.timing}`,
      `10. Favorite plants, flowers, and foods:\n${form.favorites}`,
      `11. Anything else:\n${form.anythingElse}`,
    ];
    const mailto = `mailto:gardensofeatin@gmail.com?subject=${encodeURIComponent(
      "Design Questionnaire Submission"
    )}&body=${encodeURIComponent(lines.join("\n"))}`;
    // Open the visitor's mail client with the pre-filled submission.
    window.location.href = mailto;
    setSent(true);
  };

  return (
    <div>
      <PageHero
        image={PHOTOS.coleus}
        eyebrow="Design Questionnaire"
        title="Tell Us About Your Land"
        lede="The more you share, the more we can create together."
      />

      {/* Process framework */}
      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Our Process" title="From First Note To Harvest" />
          <div className="framework-grid">
            {FRAMEWORK.map((phase) => (
              <div key={phase.label}>
                <div className="framework__label">{phase.label}</div>
                <p className="framework__copy">{phase.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The form */}
      <section className="section section--sunken">
        <div className="container" style={{ maxWidth: "760px" }}>
          {sent ? (
            <div style={{ textAlign: "center" }}>
              <h2 className="display-md" style={{ marginBottom: "var(--space-sm)" }}>
                Thank you.
              </h2>
              <p className="lede" style={{ margin: "0 auto" }}>
                We will be in touch before your consultation to confirm details and next steps.
              </p>
            </div>
          ) : (
            <form className="qform" onSubmit={handleSubmit}>
              {/* Basic information */}
              <div className="qform__group">
                <div className="qform__legend">Basic Information</div>
                <div className="field-2">
                  <Input label="Name(s) and ages" value={form.names} onChange={set("names")} />
                  <Input label="Pets and livestock" value={form.pets} onChange={set("pets")} />
                </div>
                <div className="field-2">
                  <Input label="Property address" value={form.address} onChange={set("address")} />
                  <Input label="Lot size" value={form.lotSize} onChange={set("lotSize")} />
                </div>
                <div className="field-2">
                  <Input label="Phone number" type="tel" value={form.phone} onChange={set("phone")} />
                  <Input label="Email" type="email" value={form.email} onChange={set("email")} />
                </div>
              </div>

              {/* Q1 */}
              <div className="qform__group">
                <label className="input">
                  <span className="qform__question">
                    1. What is your ultimate vision or dream for your property? What do you want to
                    see here in 5–10 years? How would your ideal gardens make you feel?
                  </span>
                  <textarea className="input__field" rows={6} value={form.vision} onChange={set("vision")} />
                </label>
              </div>

              {/* Q2 */}
              <div className="qform__group">
                <p className="qform__question">2. What particular goals do you have for this land?</p>
                <div className="check-grid">
                  {GOAL_OPTIONS.map((goal) => (
                    <label key={goal} className="check">
                      <input type="checkbox" checked={form.goals.includes(goal)} onChange={toggleGoal(goal)} />
                      <span>{goal}</span>
                    </label>
                  ))}
                </div>
                <Input label="What else?" value={form.goalsOther} onChange={set("goalsOther")} />
              </div>

              {/* Q3 */}
              <div className="qform__group">
                <label className="input">
                  <span className="qform__question">
                    3. What are some of the barriers or challenges you are experiencing in attaining
                    your vision? Which is the biggest challenge?
                  </span>
                  <textarea className="input__field" rows={4} value={form.barriers} onChange={set("barriers")} />
                </label>
              </div>

              {/* Q4 */}
              <div className="qform__group">
                <p className="qform__question">
                  4. What objects or elements do you want on your property? Any elements you
                  definitely do not want?
                </p>
                <div className="field-2">
                  <label className="input">
                    <span className="input__label">Desired</span>
                    <textarea className="input__field" rows={4} value={form.desired} onChange={set("desired")} />
                  </label>
                  <label className="input">
                    <span className="input__label">Not Desired</span>
                    <textarea className="input__field" rows={4} value={form.notDesired} onChange={set("notDesired")} />
                  </label>
                </div>
              </div>

              {/* Q5 */}
              <div className="qform__group">
                <label className="input">
                  <span className="qform__question">
                    5. Are there any noise, smell, or view sectors on neighboring properties you
                    would like to block or mitigate?
                  </span>
                  <textarea className="input__field" rows={4} value={form.sectors} onChange={set("sectors")} />
                </label>
              </div>

              {/* Q6 */}
              <div className="qform__group">
                <label className="input">
                  <span className="qform__question">6. What things about your property do you already like?</span>
                  <textarea className="input__field" rows={4} value={form.likes} onChange={set("likes")} />
                </label>
              </div>

              {/* Q7 */}
              <div className="qform__group">
                <p className="qform__question">7. How would you like to work with Gardens of Eatin?</p>
                <div className="radio-list">
                  {WORK_OPTIONS.map((opt) => (
                    <label key={opt} className="radio">
                      <input
                        type="radio"
                        name="workStyle"
                        value={opt}
                        checked={form.workStyle === opt}
                        onChange={set("workStyle")}
                      />
                      <span>{opt}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Q8 */}
              <div className="qform__group">
                <label className="input">
                  <span className="qform__question">8. What is your financial budget and over what time period?</span>
                  <textarea className="input__field" rows={4} value={form.budget} onChange={set("budget")} />
                </label>
              </div>

              {/* Q9 */}
              <div className="qform__group">
                <label className="input">
                  <span className="qform__question">9. What is the overall timing and phasing you are hoping for?</span>
                  <textarea className="input__field" rows={4} value={form.timing} onChange={set("timing")} />
                </label>
              </div>

              {/* Q10 */}
              <div className="qform__group">
                <label className="input">
                  <span className="qform__question">10. What are some of your favorite plants, flowers, and foods?</span>
                  <textarea className="input__field" rows={4} value={form.favorites} onChange={set("favorites")} />
                </label>
              </div>

              {/* Q11 */}
              <div className="qform__group">
                <label className="input">
                  <span className="qform__question">
                    11. Is there anything else you would like us to know about yourself or your
                    property?
                  </span>
                  <textarea className="input__field" rows={6} value={form.anythingElse} onChange={set("anythingElse")} />
                </label>
              </div>

              <div>
                <Button variant="primary" size="lg" type="submit">
                  Send My Questionnaire
                </Button>
              </div>
            </form>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
