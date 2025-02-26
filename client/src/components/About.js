import React from "react";

function About() {
  return (
    <div className="container mx-auto p-8 font-montserrat max-w-3xl">
      <h1 className="text-4xl font-extrabold mb-6 text-gray-900">About Us</h1>
      <div className="text-gray-700 leading-relaxed">
        <p className="mb-6 border-l-4 border-indigo-500 pl-4 italic text-gray-600">
          “Changing the African Narrative”
        </p>
        <p className="mb-6">
          According to those who hear this statement, there are two interpretations. One, the Afro-pessimist
          narrative, which typically portrays the continent as a place of poverty and disease. And two, the
          Afro-optimist narrative that shows Africa as a place of creativity, agency, and pride.
        </p>
        <p className="mb-6">
          Well, much as we hate to admit, some of the pessimistic remarks about Africa are true. Take Kenya for
          example, a great country, but at the mercy of corrupt leaders. Take Congo, such a rich and
          resource-filled country, but at war. Take Zimbabwe, grappling with hyperinflation, take South Africa
          and xenophobia. The list goes on and on.
        </p>
        <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-800">But, a great BUT</h3>
        <p className="mb-6">
          It is also a continent of 54 countries, none looking like the other. Our diversity has to be the greatest asset we own. 
          The languages, the music, the food, the colors, the traditions are simply divine. Kenya with its landscape and wildlife, 
          Congo with its resources, South Africa with its music, Nigeria with its vibrant culture. The list goes on and on.
        </p>
        <p className="mb-6">
          As a Journalist and a storyteller, I have made it my goal to tell the stories of Africa. I’m not here to offer a quick fix—no one can.
          Instead of categorizing our stories as negative or positive, how about I just tell the truth about Africa?
        </p>
        <h3 className="text-2xl font-bold mt-8 text-indigo-700">Welcome to Africa through my lens, my voice, and my perspective.</h3>
      </div>
    </div>
  );
}

export default About;
