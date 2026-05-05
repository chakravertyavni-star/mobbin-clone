import "./TestimonialsSection.css";

const testimonials = [
  { name: "Sebastian Speier", company: "Shop", avatar: "/profiles/profile1.webp", text: "Mobbin is a great resource and it always comes in handy to see what the best practices or standards are for mobile patterns in our current landscape." },
  { name: "Meng To", company: "DesignCode", avatar: "/profiles/profile2.webp", text: "Mobbin is a game-changer for designers looking to step up their understanding of UX and UI design patterns. It’s so massive, meticulously organized, has deep user flows and even a figma plugin! It’s indispensable in the modern designer’s toolbox." },
  { name: "Marco Cornacchia", company: "Figma", avatar: "/profiles/profile3.webp", text: "Mobbin is one of my favorite resources for product design and ui inspo. I love having access to a ton of “real world examples” to see how different apps and companies handle specific UI patterns and flows." },
  { name: "Daryl Ginn", company: "Endless", avatar: "/profiles/profile4.webp", text: "Mobbin has quickly become our favourite inspiration resource for designing mobile apps at endless.design, their advanced filtering is unmatched in the inspiration space." },
  { name: "Taha Hossain", company: "Daybreak", avatar: "/profiles/profile5.webp", text: "We can’t imagine a product design process without Mobbin. The quality, clarity and precision it provides make it just as valuable as it is intuitive." },
  { name: "Haerin Song", company: "Visa", avatar: "/profiles/profile6.webp", text: "By using the Mobbin app, I save both my research time and space in my photo galleries filled with random screenshots. I love how easy it is to search for different patterns and copy and paste flows into Figma. It is a wonderful design tool you cannot live without!" },
  { name: "John Bai", company: "Plaid", avatar: "/profiles/profile7.webp", text: "All my homies love Mobbin. I mean that. I finally deleted that folder of 1,866 unorganized screenshots and haven’t looked back since. Shoutout to Jiho and the team for doing God’s work." },
  { name: "Axel Lindmarker", company: "Light", avatar:"/profiles/profile7.webp",  text:"Mobbin is one of my main tools for finding flows to gain UX and UI insights from. Going there saves me a lot of time from having to do it myself." },
  { name: "Bobby Giangersuo", company: "", avatar: "/profiles/profile9.webp", text: "Mobbin is one of the best ways to stay on top of the latest patterns, modalities, and visual trends in mobile product design... it’s an essential resource for my team." },
  { name: "Rachel", company: "Heart Hands, Inc", avatar: "/profiles/profile10.webp", text: "Mobbin is one of those tabs I never close. It’s the largest up-to-date library of app screens." }
];

function TestimonialsSection() {
  return (
    <section className="testimonials-section">
      <h2 className="testimonials-heading">
        What our users are saying.
      </h2>

      <div className="testimonials-grid">
        {testimonials.map((t, i) => (
          <div key={i} className="testimonial-card">

            <div className="testimonial-header">
              <img
                src={t.avatar}
                alt={t.name}
                className="avatar"
                loading="lazy"
              />

              <div className="user-info">
                <h4>{t.name}</h4>
                <span>{t.company}</span>
              </div>
            </div>

            <p>{t.text}</p>

          </div>
        ))}
      </div>

      <div className="fade-bottom"></div>
    </section>
  );
}

export default TestimonialsSection;