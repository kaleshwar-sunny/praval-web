"use client";

export default function GenAISection() {
  const sections = [
    {
      title: "What is generative AI?",
      description:
        "Generative AI is a groundbreaking form of artificial intelligence that swiftly creates content in response to prompts.",
    },
    {
      title: "What you need to know",
      description:
        "As artificial intelligence (AI) continues to capture global attention, new forms are rapidly emerging, leaving organizations in a constant race to keep up. Among the most impactful and disruptive advancements is generative AI. By providing a simple—or even complex—prompt, generative AI can produce instant responses that mirror human thinking, with outputs that can be further refined through additional input. Models like ChatGPT and DALL·E highlight this capability, demonstrating the flexibility and creativity of generative AI. As these systems evolve, they continuously improve their outputs, becoming more accurate, sophisticated, and innovative over time.",
    },
    {
      title: "What powers the magic of generative AI?",
      description:
        "Generative AI leverages technologies like natural language processing (NLP), machine learning (ML), and image recognition to respond to prompts autonomously. By mimicking human cognitive abilities, it can solve problems while continuously learning and improving over time. This advanced technology can instantly create entirely new content, producing multi-modal outputs such as text, images, or audio based on patterns learned from vast datasets—where richer and more diverse data leads to more accurate and creative results.",
    },
    {
      title: "What are the challenges and limitations?",
      description:
        "Complexities surrounding the ownership of AI-generated content and the use of training data also require careful consultation with legal experts. Security remains a critical concern—even minor breaches can lead to significant consequences—highlighting the importance of strong security measures across both development and deployment. Prioritizing ethical design and adhering to regulatory standards are essential for minimizing business risks and fostering trust among consumers, employees, and society as a whole.",
    },
    {
      title: "Why is generative AI generating so much buzz?",
      description:
        "The excitement around generative AI stems from its ability to unlock new possibilities in creativity, problem-solving, and productivity. Research indicates that organizations are achieving up to 5x greater annual productivity gains through generative AI–driven transformation. By autonomously generating content, generative AI enables businesses to go beyond traditional data analysis and apply AI to a wider range of tasks. This drives innovation across content creation, automation, and decision-making, ultimately boosting performance while saving valuable time. As organizations continue to embrace data-driven strategies, generative AI emerges as a powerful tool for maintaining competitiveness and fostering innovation in the digital era.",
    },
  ];

  return (
    <section className="bg-white text-primaryText px-5 md:px-12 lg:px-24 py-8 md:py-4 md:pb-12">
      
      {/* Top Section */}
      <div className="max-w-5xl mb-12">
        <h1 className="text-3xl md:text-4xl font-semibold mb-4">
          Transform Responsibly
        </h1>
        <p className="text-sm md:text-base leading-relaxed text-primaryText">
          The moment to embrace rapid, transformative, AI-driven innovation is now. Praval GenAI has evolved into something even more powerful. Introducing Praval Predictable AI agents—where the capabilities of AI agents combine with the reliability of workflows. With these agents, AI and automation handle the heavy lifting, enabling you to boost efficiency and unlock the full potential of your workflows—all with enterprise-ready governance built in.
        </p>
      </div>

      {/* Sections */}
      <div className="max-w-5xl space-y-10">
        {sections.map((section, index) => (
          <div key={index}>
            <h2 className="text-2xl md:text-3xl font-semibold mb-3">
              {section.title}
            </h2>
            <p className="text-sm md:text-base text-primaryText leading-relaxed">
              {section.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}