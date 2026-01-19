import SectionTitle from "../atoms/SectionTitle";
import EventCard from "../molecules/EventCard";

const events = [
  { image: "/event1.jpeg", title: "PKKMB UNS 2025" },
  { image: "/event2.jpeg", title: "Workshop Bisnis" },
  { image: "/event3.jpeg", title: "Seminar Entrepreneur" },
  { image: "/event4.jpeg", title: "Seminar Entrepreneur" },
  { image: "/event5.jpeg", title: "Seminar Entrepreneur" },
  { image: "/event6.jpeg", title: "Seminar Entrepreneur" },
  { image: "/event3.jpeg", title: "Seminar Entrepreneur" },
];

const NewsSection = () => (
  <section className="bg-black py-14">
    <SectionTitle title="Berita & Informasi" />
    <div className="overflow-x-auto hide-scrollbar mt-6">
      <div className="flex gap-6 px-6 w-max">
        {events.map((e, i) => (
          <EventCard key={i} {...e} />
        ))}
      </div>
    </div>
  </section>
);

export default NewsSection;
