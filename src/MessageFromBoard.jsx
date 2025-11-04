import "./message-board.css";
import chair from "./assets/board1.jpg";
import principal from "./assets/board2.jpg";

export default function MessageFromBoard() {
  const items = [
    {
      name: "Mr. Amit Mishra",
      role: "Director",
      photo: chair,
      message: [
        "This school is more than an institution—it is a mission. A mission to build strong minds, kind hearts, and responsible citizens. At AIS, we combine academic excellence with holistic development, empowering students to think critically, act ethically, and lead meaningfully. The journey here is not just about learning, but about becoming."
      ],
    },
    {
      name: "Mrs. Rakhi Mishra",
      role: "Chairperson",
      photo: principal,
      message: [
        "At Arwachin India School for Holistic Learning, we believe education is not just about academic success—it's about nurturing goodness, purpose, and confidence in every child. Our aim is to create an environment where children feel seen, supported, and inspired to become the best version of themselves—not just for their future, but for the world’s future."
      ],
    },
  ];

  return (
    <section className="mb" id="board-message" aria-labelledby="mb-title">
      <div className="mb__head">
        <span className="mb__pill">Leadership Note</span>
        <h2 id="mb-title" className="mb__title">Message from the Board</h2>
        <p className="mb__sub">Words of vision and encouragement from our leadership.</p>
      </div>

      <div className="mb__grid">
        {items.map((it, i) => (
          <article className="mb__card" key={i}>
            <div className="mb__media">
              <img className="mb__img" src={it.photo} alt={`${it.name} portrait`} />
              <div className="mb__badge">
                <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
                  <path fill="currentColor" d="M12 2l3 6 7 1-5 4 1 7-6-3-6 3 1-7-5-4 7-1 3-6z"/>
                </svg>
                Board
              </div>
            </div>

            <div className="mb__body">
              <header className="mb__meta">
                <h3 className="mb__name">{it.name}</h3>
                <span className="mb__role">{it.role}</span>
              </header>

              <span className="mb__quote" aria-hidden="true">“</span>

              <div className="mb__text" role="region" aria-label={`${it.role} message`}>
                {it.message.map((p, k) => <p key={k}>{p}</p>)}
              </div>

              <div className="mb__sign">
                <div className="mb__line" />
                <span>{it.name}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
