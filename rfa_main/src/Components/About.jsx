import React from "react";

export default function About() {
  return (
    <main id="main" style={{ marginTop: "50px" }}>
      <section id="about" class="about">
        <div class="container" data-aos="fade-up">
          <div class="row">
            <div
              class="col-lg-6 order-1 order-lg-2"
              data-aos="fade-left"
              data-aos-delay="100"
            >
              <img src="assets/img/product.jpg" class="img-fluid" alt="" />
            </div>
            <div
              class="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <h3>
                Welcome to Rare Find Auctions, where passion meets rarity, and
                every bid is a journey of discovery.
              </h3>
              <p class="fst-italic">
                Founded with a commitment to excellence and a vision for
                redefining the auction experience, Rare Find Auctions is your
                premier destination for acquiring exceptional treasures.
              </p>
              <ul>
                <li>
                  <i class="ri-check-double-line"></i> Your security is our top
                  priority. Our robust security measures ensure a safe and
                  secure bidding environment, allowing you to explore and bid
                  with peace of mind.
                </li>
                <li>
                  <i class="ri-check-double-line"></i> We understand the value
                  of time. With Rare Find Auctions, experience lightning-fast
                  response times, whether you're placing a bid, seeking
                  assistance, or exploring our diverse collection.
                </li>
                <li>
                  <i class="ri-check-double-line"></i> Our dedicated customer
                  care team is here to assist you every step of the way. From
                  answering inquiries to resolving concerns, we are committed to
                  providing unparalleled customer support.
                </li>
              </ul>
              <p>
                Rare Find Auctions is more than an auction platform; it's an
                experience. Whether you're a seasoned collector or a first-time
                bidder, our platform invites you to embark on a journey of
                discovery, where each bid tells a story and every treasure has a
                unique history. Join us at Rare Find Auctions and redefine the
                way you experience auctions – where rarity meets satisfaction,
                and every bid is an opportunity to unearth the extraordinary.
                Happy bidding!
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
