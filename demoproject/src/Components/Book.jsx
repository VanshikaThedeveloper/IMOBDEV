"use client";
import React, { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import partner1 from "../assets/partner1.jpg";
import partner2 from "../assets/partner2.jpg";
import partner3 from "../assets/unknownPartner.jpg";
import logo from "../assets/logo2.png";

const Book = () => {
  const arr = [
    {
      id: 1,
      desc: "iMOBDEV works remarkably as they have accomplished my numerous problematic projects on time by giving fast & suitable outcomes! I feel it’s an excellent organization to get involved with.",
      img: partner1,
      name: "Dale Dangleben",
      deg: "Founder",
    },
    {
      id: 2,
      desc: "Our experience with iMOBDEV Technologies was overwhelmingly positive.",
      img: partner3,
      name: "Anoop Ahmed",
      deg: "Head of HR Recruitment, IMCC Investment L.L.C",
    },
    {
      id: 3,
      desc: "I was impressed by their desire to work with us and produce the right final output.",
      img: partner3,
      name: "Saranjit Arora",
      deg: "Founder, Milan Digital",
    },
    {
      id: 4,
      desc: "The development team's contribution has been remarkably invaluable.",
      img: partner3,
      name: "Salar Golestanian",
      deg: "Founder, Salaro",
    },
    {
      id: 5,
      desc: "They worked untiringly to meet my goals for App development. I noticed a rapid boost in my business through the app. Highly Recommended!.",
      img: partner2,
      name: "Louis Lombardi",
      deg: "Founder",
    },
    {
      id: 6,
      desc: "With a strong focus on app security and thorough testing, they provided a stable and bug-free application.",
      img: partner3,
      name: "Shyam Soni",
      deg: "Co-Founder, Mooze Design",
    },
    {
      id: 7,
      desc: "We were impressed with their ability to overcome development challenges.",
      img: partner3,
      name: "Aelia Yousaf",
      deg: "CEO, 48 Cubes",
    },
    
    // {
    //   id: 8,
    //   desc: "Would highly recommend...",
    //   img: partner3,
    //   name: "8 Chen",
    //   deg: "Founder",
    // },
    // {
    //   id: 9,
    //   desc: "Would highly recommend...",
    //   img: partner3,
    //   name: "9 Chen",
    //   deg: "Founder",
    // },
    // {
    //   id: 10,
    //   desc: "Would highly recommend...",
    //   img: partner3,
    //   name: "10 Chen",
    //   deg: "Founder",
    // },
  ];

  const pagesRef = useRef([]);
  const bookRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageStates, setPageStates] = useState({}); // { [pageIndex]: true (flipped) | false (closed) }

  const totalPages = Math.ceil(arr.length / 2) + 1; // +1 for cover

  // Keep DOM transforms in sync with pageStates (so z-index + visual state stay consistent)
  useEffect(() => {
    pagesRef.current.forEach((el, i) => {
      if (!el) return;
      const flipped = !!pageStates[i];
      gsap.set(el, { rotateY: flipped ? -180 : 0 });
    });
  }, [pageStates]);

  const openPage = () => {
    if (currentPage >= totalPages) return;

    if (currentPage === 0 && bookRef.current) {
      gsap.to(bookRef.current, {
        width: "800px",
        duration: 1,
        ease: "power2.out",
      });
    }

    const page = pagesRef.current[currentPage];
    if (!page) return;

    // already flipped? just move pointer forward
    if (pageStates[currentPage]) {
      setCurrentPage((p) => p + 1);
      return;
    }

    gsap.to(page, {
      rotateY: -180,
      duration: 0.9,
      ease: "power2.inOut",
      onComplete: () => {
        // mark flipped -> will auto lower z-index via render
        setPageStates((prev) => ({ ...prev, [currentPage]: true }));
        setCurrentPage((prev) => prev + 1);
      },
    });
  };

  const closePage = () => {
    if (currentPage <= 0) return;

    const idx = currentPage - 1;
    const page = pagesRef.current[idx];
    if (!page) return;

    // already closed? just move pointer back
    if (!pageStates[idx]) {
      setCurrentPage((p) => p - 1);
      return;
    }

    gsap.to(page, {
      rotateY: 0,
      duration: 0.9,
      ease: "power2.inOut",
      onComplete: () => {
        // mark unflipped -> will raise z-index via render
        setPageStates((prev) => ({ ...prev, [idx]: false }));
        setCurrentPage((prev) => prev - 1);

        if (currentPage === 1 && bookRef.current) {
          gsap.to(bookRef.current, {
            width: "400px",
            duration: 1,
            ease: "power2.out",
          });
        }
      },
    });
  };

  // Build spreads: cover + pairs
  const bookPages = [{ cover: true, id: "cover" }];
  for (let i = 0; i < arr.length; i += 2) {
    bookPages.push({
      leftPage: arr[i],
      rightPage: arr[i + 1] || null,
      id: `spread-${i}`, // unique id per spread (prevents React key reuse issues)
    });
  }

  return (
    <div className="flex justify-center items-center mt-10">
      <div
        ref={bookRef}
        className="relative h-[500px] bg-gray-200 shadow-2xl rounded-lg overflow-hidden"
        style={{ perspective: "2000px", width: "400px" }}
      >
        {bookPages.map((page, i) => {
          const flipped = !!pageStates[i];

          // 🔑 Z-INDEX RULE:
          // - Not flipped: keep high zIndex so it sits on top (can flip next)
          // - Flipped: send it behind newer pages so its back (e.g., Alex) doesn't block later spreads
          const zIndex = flipped ? i : totalPages - i;

          return (
            <div
              key={page.id}
              ref={(el) => (pagesRef.current[i] = el)}
              className={`absolute right-0 top-0 h-full ${
                page.cover ? "w-full" : "w-1/2"
              } origin-left`}
              style={{
                zIndex,
                transformStyle: "preserve-3d",
                // transform set by GSAP in useEffect/open/close; no inline transform needed
              }}
            >
              {/* FRONT */}
              <div
                className="absolute inset-0 flex flex-col items-center justify-center p-4 bg-gray-900 text-white"
                style={{ backfaceVisibility: "hidden" }}
              >
                {page.cover ? (
                  <div className="flex flex-col items-center justify-center gap-10">
                     <img src={logo} alt="logo" className="w-40" />
                    <h1 className="text-5xl font-bold">Our Partners</h1>
                 
                  </div>
                  
                ) : (
                  <>
                    <img
                      src={page.leftPage.img}
                      alt={page.leftPage.name}
                      className="w-24 h-24 rounded-full object-cover mb-4 shadow"
                    />
                    <p className="text-sm text-center italic mb-2">{page.leftPage.desc}</p>
                    <h3 className="text-lg font-bold">{page.leftPage.name}</h3>
                    <p className="text-gray-400 text-sm">{page.leftPage.deg}</p>
                  </>
                )}
              </div>

              {/* BACK */}
              {!page.cover && (
                <div
                  className="absolute inset-0 flex flex-col items-center justify-center p-4 bg-gray-700 text-white"
                  style={{
                    transform: "rotateY(180deg)",
                    backfaceVisibility: "hidden",
                  }}
                >
                  {page.rightPage ? (
                    <>
                      <img
                        src={page.rightPage.img}
                        alt={page.rightPage.name}
                        className="w-24 h-24 rounded-full object-cover mb-4 shadow"
                      />
                      <p className=" text-center text-sm italic mb-2">
                        {page.rightPage.desc}
                      </p>
                      <h3 className="text-lg font-bold">
                        {page.rightPage.name}
                      </h3>
                      <p className="text-gray-400 text-sm">
                        {page.rightPage.deg}
                      </p>
                    </>
                  ) : (
                    <img src={logo} alt="logo" className="w-28" />
                  )}
                </div>
              )}
            </div>
          );
        })}

        {/* BUTTONS */}
        <div className="absolute bottom-4 right-6 flex gap-3 z-50">
          <button
            onClick={closePage}
            className="px-4 py-2 bg-gray-100 text-gray-700 rounded shadow hover:bg-gray-200"
          >
            ◀ Back
          </button>
          <button
            onClick={openPage}
            className="px-4 py-2 bg-gray-100 text-gray-700 rounded shadow hover:bg-gray-200"
          >
            Next ▶
          </button>
        </div>
      </div>
    </div>
  );
};

export default Book;
