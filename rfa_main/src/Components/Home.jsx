import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <section
        id="hero"
        class="d-flex align-items-center justify-content-center"
      >
        <div class="container" data-aos="fade-up">
          <div
            class="row justify-content-center"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            <div class="col-xl-6 col-lg-8">
              <h1>
                Welcome to <br /> <span>Rare Find Auction</span>
              </h1>
              <h2>We are team of talented digital marketers</h2>
            </div>
          </div>

          <div
            class="row gy-4 mt-5 justify-content-center"
            data-aos="zoom-in"
            data-aos-delay="250"
          >
            <div class="col-xl-2 col-md-4">
              <div class="icon-box">
                <i class="ri-store-line"></i>
                <h3>
                  <a href="">Rare Products</a>
                </h3>
              </div>
            </div>
            <div class="col-xl-2 col-md-4">
              <div class="icon-box">
                <i class="ri-bar-chart-box-line"></i>
                <h3>
                  <a href="">High</a>
                </h3>
                <h3>
                  <a href="">Security</a>
                </h3>
              </div>
            </div>
            <div class="col-xl-2 col-md-4">
              <div class="icon-box">
                <i class="ri-calendar-todo-line"></i>
                <h3>
                  <a href="">Fast customer care</a>
                </h3>
              </div>
            </div>
            <div class="col-xl-2 col-md-4">
              <div class="icon-box">
                <i class="ri-database-2-line"></i>
                <h3>
                  <a href="">No</a>
                </h3>
                <h3>
                  <a href="">return</a>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <main id="main">
        <section id="features" class="features">
          <div class="container" data-aos="fade-up">
            <div class="row">
              <div
                class="image col-lg-6"
                style={{ backgroundImage: "url('assets/img/haraji.jpg')" }}
                data-aos="fade-right"
              ></div>
              <div class="col-lg-6" data-aos="fade-left" data-aos-delay="100">
                <div
                  class="icon-box mt-5 mt-lg-0"
                  data-aos="zoom-in"
                  data-aos-delay="150"
                >
                  <i class="bx bx-receipt"></i>
                  <h4>Unearth Extraordinary Treasures at Rare Find Auctions</h4>
                  <p>
                    Discover the exceptional at Rare Find Auctions, where unique
                    and rare treasures await your bid. Your journey to
                    extraordinary beginnings starts here!
                  </p>
                </div>
                <div
                  class="icon-box mt-5"
                  data-aos="zoom-in"
                  data-aos-delay="150"
                >
                  <i class="bx bx-cube-alt"></i>
                  <h4>Bid Beyond Boundaries with Rare Find Auctions</h4>
                  <p>
                    Break free from the ordinary and explore a world of rare
                    collectibles and one-of-a-kind finds. Rare Find Auctions —
                    where bids open doors to the extraordinary.
                  </p>
                </div>
                <div
                  class="icon-box mt-5"
                  data-aos="zoom-in"
                  data-aos-delay="150"
                >
                  <i class="bx bx-images"></i>
                  <h4>Exceptional Finds Await: Rare Find Auctions Unveiled</h4>
                  <p>
                    Embark on a bidding adventure like no other. Rare Find
                    Auctions reveals a curated collection of exceptional items,
                    inviting you to bid on the truly extraordinary.
                  </p>
                </div>
                <div
                  class="icon-box mt-5"
                  data-aos="zoom-in"
                  data-aos-delay="150"
                >
                  <i class="bx bx-shield"></i>
                  <h4>A World of Rarity: Rare Find Auctions Beckons</h4>
                  <p>
                    Step into a realm of rare discoveries at Rare Find Auctions.
                    Your bids unlock access to a world where the extraordinary
                    is just a click away.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="cta" class="cta">
          <div class="container" data-aos="zoom-in">
            <div class="text-center">
              <h3>Rare Finds, Unforgettable Bids: Welcome to RFA!</h3>
              <p>
                {" "}
                At Rare Find Auctions, every bid is a journey into the rare and
                extraordinary. Join us in the excitement of discovering and
                acquiring treasures that redefine unique.
              </p>
              <Link class="cta-btn" to="/Product">
                Bid Now
              </Link>
            </div>
          </div>
        </section>

        <section id="counts" class="counts">
          <div class="container" data-aos="fade-up">
            <div class="row no-gutters">
              <div
                class="image col-xl-5 d-flex align-items-stretch justify-content-center justify-content-lg-start"
                data-aos="fade-right"
                data-aos-delay="100"
              ></div>
              <div
                class="col-xl-7 ps-4 ps-lg-5 pe-4 pe-lg-1 d-flex align-items-stretch"
                data-aos="fade-left"
                data-aos-delay="100"
              >
                <div class="content d-flex flex-column justify-content-center">
                  <h3>Unearth the Extraordinary at Rare Find Auctions</h3>
                  <p>
                    Rare Find Auctions invites you to explore a realm where
                    happy customers celebrate unique treasures. With years of
                    expertise in crafting exceptional auction experiences, our
                    platform has been honored with prestigious awards. Join us
                    on this extraordinary journey, where every bid opens doors
                    to rare discoveries and unparalleled satisfaction.
                  </p>
                  <div class="row">
                    <div class="col-md-6 d-md-flex align-items-md-stretch">
                      <div class="count-box">
                        <i class="bi bi-emoji-smile"></i>
                        <span
                          data-purecounter-start="0"
                          data-purecounter-end="65"
                          data-purecounter-duration="2"
                          class="purecounter"
                        ></span>
                        <p>
                          <strong>Happy customer</strong> Elevating smiles
                          through exceptional finds – where delighted bidders
                          define the joy at Rare Find Auctions.
                        </p>
                      </div>
                    </div>

                    <div class="col-md-6 d-md-flex align-items-md-stretch">
                      <div class="count-box">
                        <i class="bi bi-journal-richtext"></i>
                        <span
                          data-purecounter-start="0"
                          data-purecounter-end="85"
                          data-purecounter-duration="2"
                          class="purecounter"
                        ></span>
                        <p>
                          <strong>Products</strong> Unveiling rare treasures,
                          each bid secures a piece of unparalleled uniqueness at
                          Rare Find Auctions.
                        </p>
                      </div>
                    </div>

                    <div class="col-md-6 d-md-flex align-items-md-stretch">
                      <div class="count-box">
                        <i class="bi bi-clock"></i>
                        <span
                          data-purecounter-start="0"
                          data-purecounter-end="35"
                          data-purecounter-duration="4"
                          class="purecounter"
                        ></span>
                        <p>
                          <strong>Years of working</strong> Decades of
                          expertise, a legacy of trust – Rare Find Auctions,
                          where time-tested excellence meets the art of
                          auctioning.
                        </p>
                      </div>
                    </div>

                    <div class="col-md-6 d-md-flex align-items-md-stretch">
                      <div class="count-box">
                        <i class="bi bi-award"></i>
                        <span
                          data-purecounter-start="0"
                          data-purecounter-end="20"
                          data-purecounter-duration="4"
                          class="purecounter"
                        ></span>
                        <p>
                          <strong>Awards</strong> Celebrating accolades, each
                          award a testament to the commitment of delivering
                          extraordinary auction experiences at Rare Find
                          Auctions.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials" class="testimonials">
          <div class="container" data-aos="zoom-in">
            <div
              class="testimonials-slider swiper"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <div class="testimonial-item">
                    <h3>KK</h3>
                    <h4>Ceo &amp; Founder</h4>
                    <p>
                      <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                      Meet KK, the dynamic force behind Rare Find Auctions and a
                      fourth-semester BCA student at SSCCS. With an unwavering
                      commitment to excellence, KK seamlessly blends academic
                      prowess with entrepreneurial spirit, crafting a platform
                      where rare treasures meet enthusiastic bidders in the
                      world of auctions.
                      <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
