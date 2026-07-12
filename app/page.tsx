const trustItems = [
  { value: "2", label: "guest dogs maximum" },
  { value: "2×", label: "daily photo updates" },
  { value: "24/7", label: "care in our home" },
  { value: "1st", label: "meet-and-greet included" },
];

const included = [
  "Comfortable indoor sleeping",
  "Two daily walks, tailored to your dog",
  "Secure garden breaks and supervised play",
  "Feeding to your usual routine",
  "Oral medication by prior agreement",
  "Two photo or video updates each day",
  "Separate mealtimes when needed",
  "Cuddles, enrichment, and quiet time",
];

const reviews = [
  {
    quote: "Bruno settled in almost immediately. The daily pictures made us smile, and he came home relaxed and happy.",
    owner: "Rhea & Bruno",
    detail: "Golden Retriever · 5-night stay",
  },
  {
    quote: "It felt like leaving Maple with trusted friends. She loved the garden, the walks, and all the attention.",
    owner: "Kabir & Maple",
    detail: "Labrador · weekend stay",
  },
  {
    quote: "They understood Oscar's routine perfectly. This was the first trip where we genuinely did not worry.",
    owner: "Ananya & Oscar",
    detail: "Senior dog · trial night + stay",
  },
];

const faqs = [
  {
    question: "What should I bring?",
    answer: "Please bring your dog's regular food, lead and harness, any medication, vaccination records, and one familiar blanket or toy. Keeping food and small comforts familiar helps dogs settle more easily.",
  },
  {
    question: "Where will my dog sleep?",
    answer: "Dogs sleep indoors in a comfortable setup suited to their normal routine. We agree the sleeping arrangement during the meet-and-greet, and you are welcome to bring their usual bed.",
  },
  {
    question: "Do you accept puppies or senior dogs?",
    answer: "Yes, after an individual care assessment. Tell us about toilet routines, mobility, medication, sleep, and any extra support so we can decide together whether our home is the right fit.",
  },
  {
    question: "Is a meet-and-greet required?",
    answer: "Yes. A complimentary meet-and-greet lets your dog explore the home, meet us, and helps everyone feel confident before a stay is confirmed.",
  },
  {
    question: "What are your health requirements?",
    answer: "Guest dogs should be up to date with vaccinations and flea and tick treatment. We review health, temperament, emergency contacts, and veterinary details before arrival.",
  },
  {
    question: "What happens in an emergency?",
    answer: "We contact you or your nominated emergency person immediately and seek veterinary care according to the written authorisation collected at check-in. Final emergency procedures should be confirmed before launch.",
  },
];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>

      <div className="demo-bar">
        <span>Website preview</span>
        <p>Rates, reviews, and policies are sample content to confirm with the hosts.</p>
      </div>

      <header className="site-header">
        <div className="nav-shell">
          <a className="brand" href="#top" aria-label="Tales of Us Home Boarding, home">
            <span className="brand-sun" aria-hidden="true"><i /></span>
            <span className="brand-copy">
              <strong>Tales of Us</strong>
              <small>Home Boarding</small>
            </span>
          </a>

          <nav className="desktop-nav" aria-label="Primary navigation">
            <a href="#stay">The stay</a>
            <a href="#day">A day here</a>
            <a href="#hosts">Your hosts</a>
            <a href="#reviews">Reviews</a>
            <a href="#faq">FAQ</a>
          </nav>

          <a className="button button-small header-cta" href="#contact">Check dates <span aria-hidden="true">↗</span></a>

          <details className="mobile-nav">
            <summary aria-label="Open navigation menu"><span /><span /><span /></summary>
            <nav aria-label="Mobile navigation">
              <a href="#stay">The stay</a>
              <a href="#day">A day here</a>
              <a href="#hosts">Your hosts</a>
              <a href="#reviews">Reviews</a>
              <a href="#faq">FAQ</a>
              <a href="#contact">Check dates</a>
            </nav>
          </details>
        </div>
      </header>

      <main id="main-content">
        <section className="hero" id="top" aria-labelledby="hero-title">
          <div className="hero-shell">
            <div className="hero-copy">
              <p className="eyebrow"><span /> Small-group dog boarding · Bengaluru</p>
              <h1 id="hero-title">A holiday for them. <em>Peace of mind for you.</em></h1>
              <p className="hero-lead">Warm, attentive boarding in a real home—cosy naps, happy walks, supervised play, and plenty of affection from a dog-loving couple.</p>
              <div className="hero-actions">
                <a className="button" href="#contact">Check available dates <span aria-hidden="true">↗</span></a>
                <a className="text-link" href="#hosts">Meet Tanbir & Rishika <span aria-hidden="true">↓</span></a>
              </div>
              <div className="hero-note">
                <span className="avatar-pair" aria-hidden="true"><i>T</i><i>R</i></span>
                <p><strong>Care from the same two people, every day.</strong><br />No hand-offs. No crowded kennel rows.</p>
              </div>
            </div>

            <figure className="hero-figure">
              <img
                src="/golden-hour-hero.png"
                alt="A Golden Retriever and chocolate Labrador running through a secure garden toward their smiling hosts"
                width="1717"
                height="916"
                fetchPriority="high"
              />
              <figcaption><strong>Only two guest dogs</strong><span>at any one time</span></figcaption>
            </figure>
          </div>
        </section>

        <section className="trust-strip" aria-label="Key facts">
          <div className="section-shell trust-grid">
            {trustItems.map((item) => (
              <div className="trust-item" key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="section intro-section" id="stay" aria-labelledby="stay-title">
          <div className="section-shell">
            <div className="split-heading">
              <div>
                <p className="eyebrow"><span /> Home, not a kennel</p>
                <h2 id="stay-title">Their routine.<br /><em>Our home.</em></h2>
              </div>
              <div className="lead-copy">
                <p>Your dog is family, and that is exactly how they will be treated here. Tales of Us is a calm, homelike alternative to busy kennels, with familiar rhythms and thoughtful care tailored to each guest.</p>
                <a className="text-link" href="#included">See what every stay includes <span aria-hidden="true">↓</span></a>
              </div>
            </div>

            <div className="promise-grid">
              <article className="promise-card">
                <span className="card-number">01</span>
                <h3>A calm, cosy home</h3>
                <p>Comfortable indoor spaces to play, nap, and settle—plus a secure garden for supervised outdoor time.</p>
              </article>
              <article className="promise-card featured">
                <span className="card-number">02</span>
                <h3>Care that follows their cues</h3>
                <p>Walks, meals, medication, sleep, and quiet time shaped around the routine your dog already knows.</p>
              </article>
              <article className="promise-card">
                <span className="card-number">03</span>
                <h3>Updates that feel honest</h3>
                <p>Two photo or video check-ins a day, so you can see the happy face behind every “doing great.”</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section day-section" id="day" aria-labelledby="day-title">
          <div className="section-shell">
            <div className="day-heading">
              <div>
                <p className="eyebrow light"><span /> A day at Tales of Us</p>
                <h2 id="day-title">Easy days. <em>Happy dogs.</em></h2>
              </div>
              <p>We follow your dog's usual routine and adjust each stay to their energy, comfort, and personality.</p>
            </div>

            <div className="day-points">
              <article>
                <span aria-hidden="true" />
                <h3>Walk, play, rest</h3>
                <p>A comfortable balance shaped around your dog's age, energy, and favourite way to spend the day.</p>
              </article>
              <article>
                <span aria-hidden="true" />
                <h3>Familiar routines</h3>
                <p>Meals, medication, sleep, and quiet time follow the instructions and comforts they know from home.</p>
              </article>
              <article>
                <span aria-hidden="true" />
                <h3>You stay close</h3>
                <p>Photo and video updates let you see that they are relaxed, cared for, and enjoying their stay.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section included-section" id="included" aria-labelledby="included-title">
          <div className="section-shell included-grid">
            <div className="rate-panel">
              <p className="eyebrow light"><span /> Overnight boarding</p>
              <h2 id="included-title">One simple stay.<br /><em>Everything included.</em></h2>
              <div className="price"><span>from</span><strong>₹1,500</strong><span>/ night</span></div>
              <p className="rate-note">Sample rate · final price confirmed after your meet-and-greet. Owners provide their dog's usual food.</p>
              <a className="button button-light" href="#contact">Ask about your dates <span aria-hidden="true">↗</span></a>
            </div>

            <div className="inclusions">
              <p className="eyebrow"><span /> Every overnight stay</p>
              <ul>
                {included.map((item) => <li key={item}><span aria-hidden="true">✓</span>{item}</li>)}
              </ul>
              <div className="mini-rates">
                <div><span>Doggy daycare</span><strong>₹900 / day</strong></div>
                <div><span>Trial night</span><strong>₹1,200</strong></div>
                <div><span>7+ nights</span><strong>from ₹1,350</strong></div>
              </div>
              <p className="micro-copy">All rates shown are illustrative and should be replaced with the business's confirmed pricing.</p>
            </div>
          </div>
        </section>

        <section className="section hosts-section" id="hosts" aria-labelledby="hosts-title">
          <div className="section-shell hosts-grid">
            <figure className="hosts-figure">
              <img
                src="/golden-hour-hosts.png"
                alt="Tanbir and Rishika sitting at dog level in their living room with a relaxed Golden Retriever and chocolate Labrador"
                width="1448"
                height="1086"
                loading="lazy"
              />
              <figcaption>“We want you to recognise your dog's happy face in every update.”</figcaption>
            </figure>

            <div className="hosts-copy">
              <p className="eyebrow"><span /> Your hosts</p>
              <h2 id="hosts-title">Two hosts. Two guests. <em>Plenty of attention.</em></h2>
              <p className="section-lead">Hi, we are Tanbir and Rishika. Tales of Us began with a simple idea: dogs should feel safe, loved, and completely at home while their people are away.</p>
              <p>We manage every stay personally—from the first morning walk to the last bedtime cuddle. Our guest list stays intentionally small, giving each dog the time and space to settle.</p>

              <div className="host-roles">
                <article>
                  <span>T</span>
                  <div><h3>Tanbir</h3><p>Walks, enrichment, garden games, and champion sofa-nap supervision.</p></div>
                </article>
                <article>
                  <span>R</span>
                  <div><h3>Rishika</h3><p>Meals, medication, settle-in plans, and expert ear scratches.</p></div>
                </article>
              </div>

              <aside className="sample-notice"><strong>Hosted personally:</strong> Every enquiry and stay is handled directly by Tanbir and Rishika.</aside>
            </div>
          </div>
        </section>

        <section className="section reviews-section" id="reviews" aria-labelledby="reviews-title">
          <div className="section-shell">
            <div className="reviews-heading">
              <div>
                <p className="eyebrow"><span /> Notes from the humans</p>
                <h2 id="reviews-title">Happy guests.<br /><em>Happier reunions.</em></h2>
              </div>
              <p>Illustrative review cards are shown below to demonstrate the finished layout. Replace every quote with a genuine, approved customer review.</p>
            </div>

            <div className="review-grid">
              {reviews.map((review, index) => (
                <article className={index === 1 ? "review-card review-card-accent" : "review-card"} key={review.owner}>
                  <div className="review-stars" aria-label="Five star rating">★★★★★</div>
                  <blockquote>“{review.quote}”</blockquote>
                  <footer><strong>{review.owner}</strong><span>{review.detail}</span></footer>
                  <small>Sample testimonial</small>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section process-section" aria-labelledby="process-title">
          <div className="section-shell">
            <div className="process-heading">
              <p className="eyebrow"><span /> A thoughtful first step</p>
              <h2 id="process-title">From hello to <em>home away from home.</em></h2>
            </div>
            <ol className="process-grid">
              <li><span>1</span><h3>Tell us about your dog</h3><p>Share your dates, routine, temperament, health needs, and favourite things.</p></li>
              <li><span>2</span><h3>Meet & sniff</h3><p>Visit the home, meet us, and let your dog explore at their own pace.</p></li>
              <li><span>3</span><h3>Confirm the stay</h3><p>Once everyone feels comfortable, reserve the dates and receive a packing list.</p></li>
              <li><span>4</span><h3>Enjoy the updates</h3><p>Relax while your dog enjoys their own holiday and you stay close through photos.</p></li>
            </ol>
            <div className="center-action"><a className="button" href="#contact">Start a friendly conversation <span aria-hidden="true">↗</span></a></div>
          </div>
        </section>

        <section className="section faq-section" id="faq" aria-labelledby="faq-title">
          <div className="section-shell faq-layout">
            <div className="faq-intro">
              <p className="eyebrow"><span /> Good to know</p>
              <h2 id="faq-title">Questions, answered <em>before the tail wags.</em></h2>
              <p>Every first stay begins with a conversation. These answers cover the basics; care details are always agreed dog by dog.</p>
              <a className="text-link" href="#contact">Ask another question <span aria-hidden="true">↗</span></a>
            </div>
            <div className="faq-list">
              {faqs.map((faq) => (
                <details key={faq.question}>
                  <summary>{faq.question}<span aria-hidden="true">+</span></summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="section contact-section" id="contact" aria-labelledby="contact-title">
          <div className="section-shell contact-shell">
            <div className="contact-copy">
              <p className="eyebrow light"><span /> Check available dates</p>
              <h2 id="contact-title">Ready to plan their <em>staycation?</em></h2>
              <p>Tell us your travel dates and a little about your dog. The first step is simply a friendly, no-pressure conversation.</p>

              <div className="contact-card">
                <div><span className="contact-label">Your hosts</span><strong>Tanbir & Rishika</strong></div>
                <div><span className="contact-label">Address</span><strong>Carmel Rose Vista 1317B, 15th Main Rd, AECS Layout – A Block, Singasandra, Bengaluru, Karnataka 560068</strong></div>
                <div><span className="contact-label">Email</span><strong><a href="mailto:tanbir.kashyap879@gmail.com">tanbir.kashyap879@gmail.com</a></strong></div>
                <div><span className="contact-label">Enquiry hours</span><strong>Monday–Saturday · 9:00–19:00</strong></div>
              </div>

              <p className="demo-contact-note">The address and enquiry email are provided by the hosts. Rates and service policies should be confirmed before booking.</p>
            </div>

            <form className="inquiry-form" action="mailto:tanbir.kashyap879@gmail.com?subject=Tales%20of%20Us%20booking%20enquiry" method="post" encType="text/plain">
              <div className="form-heading"><span>Booking enquiry</span><small>Opens your email app</small></div>
              <div className="form-row">
                <label> Your name<input type="text" name="Owner name" autoComplete="name" required /></label>
                <label> Phone or email<input type="text" name="Contact" autoComplete="email" required /></label>
              </div>
              <div className="form-row">
                <label> Dog's name<input type="text" name="Dog name" required /></label>
                <label> Breed & age<input type="text" name="Breed and age" required /></label>
              </div>
              <div className="form-row">
                <label> Drop-off date<input type="date" name="Drop-off date" required /></label>
                <label> Pick-up date<input type="date" name="Pick-up date" required /></label>
              </div>
              <label> Tell us about your dog<textarea name="Care notes" rows={5} placeholder="Routine, temperament, medications, favourite things…" required /></label>
              <label className="consent"><input type="checkbox" required /><span>I understand my email app will open and no booking is confirmed until the hosts reply.</span></label>
              <button className="button button-submit" type="submit">Create enquiry email <span aria-hidden="true">↗</span></button>
              <p className="form-footnote">No commitment—your first step is simply a friendly conversation.</p>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="section-shell footer-grid">
          <a className="brand brand-light" href="#top" aria-label="Tales of Us Home Boarding, back to top">
            <span className="brand-sun" aria-hidden="true"><i /></span>
            <span className="brand-copy"><strong>Tales of Us</strong><small>Home Boarding</small></span>
          </a>
          <p>Small-group home boarding, with someone home day and night.</p>
          <div className="footer-links"><a href="#stay">The stay</a><a href="#hosts">Your hosts</a><a href="#faq">FAQ</a><a href="#contact">Contact</a></div>
          <small>© 2026 Tales of Us Home Boarding · Hosted by Tanbir and Rishika · Sample pricing and policies.</small>
        </div>
      </footer>

      <nav className="mobile-action-bar" aria-label="Quick contact">
        <a href="#contact">Contact</a>
        <a href="mailto:tanbir.kashyap879@gmail.com?subject=Tales%20of%20Us%20booking%20enquiry">Email</a>
        <a className="primary" href="#contact">Check dates</a>
      </nav>
    </>
  );
}
