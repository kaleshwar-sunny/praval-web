export const metadata = {
  title: "Contact Us",
  description: "Get in touch with PRAVAL TECH.",
};

export default function Contact() {
  return (
    <section className="py-16 max-w-xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
      <form className="space-y-4">
        <input className="w-full border p-3" placeholder="Name" />
        <input className="w-full border p-3" placeholder="Email" />
        <textarea className="w-full border p-3" placeholder="Message" />
        <button className="bg-black text-white px-6 py-3">
          Send Message
        </button>
      </form>
    </section>
  );
}
