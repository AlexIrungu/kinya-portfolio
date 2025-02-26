import React from "react";

function Blog() {
  return (
    <div className="container mx-auto px-4 py-12 font-montserrat">
      <h1 className="text-5xl font-extrabold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        Blogs
      </h1>

      {/* Article 1 */}
      <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-2xl mb-12 border border-gray-100">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">
          TECH WILL REPLACE PEOPLE WHO DON’T KNOW HOW TO USE IT
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          Young people are living in constant pressure of being on the right career path, and the
          emergence of new technologies every day does not help ease the dilemma. In a recent webinar
          I attended, the Secretary-General of the Commonwealth H.E Patricia Scotland, emphasized on
          the need for young people to educate themselves in the tech field in order to leverage
          opportunities and funding in the tech industry.
        </p>
        <ul className="space-y-8">
          {[
            {
              title: "Data Science and Analytics",
              description:
                "In Kenya and across Africa, the demand for professionals in data science and analytics is on the rise...",
            },
            {
              title: "Cybersecurity Specialists",
              description:
                "With the increasing reliance on digital technologies, the need for cybersecurity experts is more critical than ever...",
            },
            {
              title: "Mobile App Development",
              description:
                "The proliferation of smartphones has led to a surge in the demand for mobile applications...",
            },
            {
              title: "Blockchain and Cryptocurrency Experts",
              description:
                "Blockchain technology has the potential to revolutionize various industries...",
            },
            {
              title: "Pivoting into Tech and Seizing Opportunities",
              description:
                "As the tech landscape evolves, individuals seeking to pivot into tech or capitalize on emerging opportunities should focus on acquiring relevant skills...",
            },
          ].map((item, index) => (
            <li key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">{item.title}</h2>
              <p className="text-gray-700">{item.description}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Article 2 */}
      <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-2xl mb-12 border border-gray-100">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">
          THE RIPPLE EFFECT: IMPACT OF A DEVALUED CURRENCY ON SMALL BUSINESSES
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          Kenya, a vibrant hub of economic activity in East Africa, has long been home to a diverse
          array of small businesses that form the backbone of its economy...
        </p>
        <ul className="space-y-8">
          {[
            {
              title: "What is Currency Devaluation?",
              description:
                "Currency devaluation occurs when a country's currency loses value in comparison to other currencies...",
            },
            {
              title: "The Cost of Imported Goods and Services",
              description:
                "One of the immediate and direct consequences is the increased cost of imported goods and services...",
            },
            {
              title: "Impact on Operational Costs",
              description:
                "Beyond the cost of imports, the devaluation of the Kenyan currency also impacts the operational costs of small businesses...",
            },
            {
              title: "Challenges in Access to Credit",
              description:
                "Small businesses in Kenya often rely on loans and credit facilities to fund their operations and expansion plans...",
            },
            {
              title: "Effects on Consumer Behavior",
              description:
                "As small businesses grapple with rising costs, consumers are forced to reconsider their spending habits...",
            },
            {
              title: "How can Small Businesses Navigate Currency Devaluation?",
              description: (
                <ol className="list-decimal pl-6 space-y-2">
                  <li>Diversification of Revenue Streams</li>
                  <li>Risk Management and Hedging</li>
                  <li>Collaboration and Networking</li>
                  <li>Focus on Local Sourcing</li>
                  <li>Technology Adoption</li>
                </ol>
              ),
            },
          ].map((item, index) => (
            <li key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">{item.title}</h2>
              <p className="text-gray-700">{item.description}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Article 3 */}
      <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-2xl mb-12 border border-gray-100">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">
          OPPORTUNITIES FOR YOUNG PEOPLE IN THE UK POST COVID AND POST BREXIT
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          Since the 90’s, most economies in Sub-Saharan Africa have seen some level of growth...
        </p>
        <div className="space-y-8">
          <h3 className="text-3xl font-bold mb-6 text-gray-900">Key Takeaways from Each Guest:</h3>
          <ul className="space-y-8">
            {[
              {
                name: "RT HON PATRICIA SCOTLAND KC, THE SECRETARY GENERAL, COMMONWEALTH",
                quote:
                  "Young people need to start earning skills in Artificial Intelligence, Machine Learning, and Blockchain...",
              },
              {
                name: "H.E. MANOAH ESIPISU, HIGH COMMISSIONER UNITED KINGDOM",
                quote:
                  "When it comes to gaining scholarship opportunities, you have to do thorough research...",
              },
              {
                name: "H.E. LEIGH STUBBERFIELD, DEPUTY HIGH COMMISSIONER BRITISH HIGH COMMISSION",
                quote:
                  "Gaining the requisite skills and experience in your field will give you an upper hand...",
              },
              {
                name: "AMBASSADOR AMINA MOHAMED",
                quote:
                  "There's a huge gap between our education system and the job market...",
              },
            ].map((item, index) => (
              <li key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold mb-2 text-gray-900">{item.name}</h4>
                <p className="text-gray-700">{item.quote}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Article 4 */}
      <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-2xl mb-12 border border-gray-100">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">
          FINTECH REVOLUTION IN KENYA: A FOCUS ON KENYA
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          In recent years, Africa has witnessed a financial revolution powered by technology...
        </p>
        <div className="space-y-8">
          <h3 className="text-3xl font-bold mb-6 text-gray-900">The Fintech Boom in Africa</h3>
          <p className="text-gray-700">
            Africa, long recognized for its leapfrogging of traditional infrastructure, has seen a
            remarkable surge in fintech adoption...
          </p>
          <h3 className="text-3xl font-bold my-6 text-gray-900">Kenya's Pioneering Role</h3>
          <p className="text-gray-700">
            Kenya has emerged as a trailblazer, setting the stage for innovation and growth...
          </p>
          <h3 className="text-3xl font-bold mb-6 text-gray-900">
            Highlight of Recent Developments in African Fintech
          </h3>
          <ul className="space-y-8">
            {[
              {
                title: "Digital Lending Platforms",
                description:
                  "Digital lending has gained significant traction across Africa, offering quick and accessible loans...",
              },
              {
                title: "Blockchain and Cryptocurrency",
                description:
                  "Blockchain technology and cryptocurrencies are gaining momentum in Africa...",
              },
              {
                title: "Insurtech Innovations",
                description:
                  "Insurtech is reshaping the insurance landscape in Africa by leveraging technology...",
              },
              {
                title: "Regulatory Advancements",
                description:
                  "Governments in Africa are recognizing the importance of fintech in driving economic growth...",
              },
            ].map((item, index) => (
              <li key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-bold mb-4 text-gray-900">{item.title}</h4>
                <p className="text-gray-700">{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Blog;