import React from "react";
import { useState } from "react";
import instruments from "../instruments.json";
import Card from "../components/Card";
import '../style/Products.css';

export default function InstrumentsPage() {
  return (
    <div className="App">
      <InstrumentsList initialInstruments={instruments} />
    </div>
  );
}

function InstrumentsList({ initialInstruments }) {
  var [filterText, setFilterText] = useState("");
  var [instruments, setInstruments] = useState(initialInstruments);

  const handleFilterChange = (e) => {
    let newFilterText = e.target.value;
    setFilterText(newFilterText);

    let newFilteredInstruments = initialInstruments.filter((instruments) =>
    instruments.name.toLowerCase().includes(newFilterText.toLowerCase())
    );

    setInstruments(newFilteredInstruments);
  };

  return (
    <div>
        <label>Filter:</label>
      <input className="filter" onChange={handleFilterChange} value={filterText} />
       <h1>Instruments </h1>
       <h3>MIDI is a technical standard that describes a communications protocol, digital interface, and electrical connectors that connect a wide variety of electronic musical instruments, computers, and related audio devices for playing, editing and recording music</h3>
      {instruments.length > 0 ? (
        instruments.map((instruments) => (
          <div key={instruments.id}>
            <Card {...instruments} />
          </div>
        ))
      ) : (
        <p>No Instruments match search</p>
      )}
    </div>
  );
}


//           img='https://images-na.ssl-images-amazon.com/images/I/515GOroVPGL._AC_SX425_.jpg'
//           title='The X1 S Studio Bundle'
//           price='$179.00'
//           description="If you're recording in a non-acoustically-treated space (bedrooms, closets, etc.), a Reflexion Filter® helps keep your signal clean without the sound of your room around it" />

//         <Card
//           img='https://images-na.ssl-images-amazon.com/images/I/61FMKHtM45L._AC_SX425_.jpg'
//           title='8 Piece Electronic Drum Kit'
//           price=' $269.99'
//           description="Electric drum set that uses mesh head technology to provide a realistic and responsive organic drum kit experience. This electronic drum set features one eight-inch mesh snare drum and three mesh toms. The brain of these electronic drums has over 30 authentic drumset voices to suit all styles of music." />

//         <Card
//           img='https://www.bhphotovideo.com/images/images2500x2500/arturia_230512_microlab_25_key_mini_keyboard_1502413.jpg'
//           title='MicroLab'
//           price='$89'
//           description="Unlike other mini-key controllers, you’ll actually enjoy playing MicroLab. It features the same keybed as our award-winning KeyStep, it’s responsive, and velocity-sensitive." />

//         <Card
//           img='https://images-na.ssl-images-amazon.com/images/I/71vwVV6Rk1L._AC_SX425_.jpg'
//           title='Launchpad Mini'
//           price='$109.99'
//           description="Launchpad Mini is our most compact and portable 64 RGB pad MIDI grid controller. It gives you everything you need to start performing in Ableton Live - and it'll fit in your bag. Start making and performing tracks with Ableton Live wherever you are, using the huge array of sounds in the box to get you started" />
//         <Card
//           img='https://images-na.ssl-images-amazon.com/images/I/81ujDbJmg6L._AC_SX425_.jpg'
//           title='MIXTRACK PRO 3 DJ controller'
//           price='$229.99'
//           description="From Numark the world’s leading innovator of DJ equipment and technologies, comes the incredible MIXTRACK PRO 3 DJ controller, designed with the skilled, professionally-aspiring DJ in mind. It’s the latest addition to the Numark family of industry-leading DJ solutions.This controller offers a whole host of features and performance that sets it way above conventional DJ controllers, yet it offers great bang-for-the-buck and it’s a snap to take anywhere" />
//         <Card
//           img='https://images-na.ssl-images-amazon.com/images/I/71CsNirCl2L._AC_SL1500_.jpg'
//           title='Polyend Tracker'
//           price='$599 '
//           description="Polyend Tracker is slick, light and portable. It's also easy on the energy consumption so you can use it with any USB power source. Its sturdy and compact form factor makes it a great companion for music creation wherever and whenever you feel like it. No matter if you’re in your studio, on the run, or at the gig." />
//         <Card
//           img='https://static.bhphoto.com/images/images2500x2500/1582278336_1540279.jpg'
//           title='ROLI Studio'
//           price='$419 '
//           description="Shape your sound through touch, craft your track in minutes, and create your personalized kit. Powerful and portable, BLOCKS Studio Editions are the most versatile MPE controllers for producers." />

//         <Card
//           img='https://images.samash.com/sa/SQC/SQCHORD-P.fpx?cvt=jpg'
//           title=' Suzuki QChord'
//           price='$349.99 '
//           description="If you love music, now you can become a member of the band quickly and easily with the Suzuki QChord, an exciting digital audio instrument that strums like a guitar, plays melody like a keyboard, plays chords like a piano, and has over 100 MIDI voices and rhythms onboard. Anyone-musician or not-can sound like a pro at the touch of a button. You can't make a mistake! And like a video game, QChord has multiple skill levels. Learn to play in seconds, then add features as you get better. New QCards are always being added!" />


//       </div>
//     );
//   }
// }

// export default InstrumentsPage;
