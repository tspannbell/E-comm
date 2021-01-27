import React from "react";
import Card from "../components/Card";


class DAWSPage extends React.Component {
  render() {
    return (
      <div className='cards'>
        <h1>Digital Workstation </h1>
        
        <h3>A digital audio workstation (DAW) is an electronic device or application software used for recording, editing and producing audio files. DAWs come in a wide variety of configurations from a single software program on a laptop, to an integrated stand-alone unit, all the way to a highly complex configuration of numerous components controlled by a central computer. Regardless of configuration, modern DAWs have a central interface that allows the user to alter and mix multiple recordings and tracks into a final produced piece.</h3>
        <Card
          img='https://i.redd.it/meg6nawssnb01.jpg'
          title='Ableton'
          price='$99.99'
          paragraph='Live 10 comes in three editions: Intro, Standard and Suite. They share common features, but Standard and Suite have additional features, instruments, Packs, and effects'
          alt=''
        />


        <Card
          img='data:image/png;base64,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'
          title='Adobe Audtion'
          price='599.88'
          paragraph='Audition is a comprehensive toolset that includes multitrack, waveform, and spectral display for creating, mixing, editing, and restoring audio content. This powerful audio workstation is designed to accelerate video production workflows and audio finishing — and deliver a polished mix with pristine sound.'
          alt=''
        />

        <Card
          img='https://audacity.onl/wp-content/uploads/2019/03/Audacity-Logo.jpg'
          alt=''
          title='Audacity'
          price='Free'
          paragraph='Audacity is an easy-to-use, multi-track audio editor and recorder for Windows, macOS, GNU/Linux and other operating systems. Developed by a group of volunteers as open source' />

        <Card
          img='https://p.kindpng.com/picc/s/718-7180335_fl-studio-logo-fl-studio-logo-transparent-hd.png'
          alt=''
          title='FL Studio'
          price='$99.99'
          paragraph='The DAW powering the world’s best music Celebrating Lifetime Free Updates for over 20 years' />

        <Card
          img='https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/108058472/original/98024f5ce0702091bc1796b0e44f08388d2fb090/provide-cheap-logic-pro-x-download.jpg'
          alt=''
          title='Logic Pro X'
          price='$199.99'
          paragraph='As your song develops, Logic Pro X helps organize all your ideas and select the best ones. Group related tracks, audition alternate versions, and consolidate multiple tracks. Lightning-fast click-and-drag comping helps you build your best performance from multiple takes.' />

        <Card
          alt=''
          img='https://rahim-soft.com/wp-content/uploads/2017/06/MAGIX-Music-Maker-2017-Premium-Logo-1200x1200.jpg'
          title='MAGIX'
          price='Free'
          paragraph="Welcome to the MAGIX world of music and audio. Whether a budding musician or a professional producer, everything needed for making music can be found here. From composition and production of full songs to audio editing, mastering and sound design, you'll find the right software for any audio task at MAGIX." />

        <Card
          alt=''
          img='https://itecaudio.com/home/wp-content/uploads/2018/01/PRO.jpg'
          title='Pro Tools'
          price='$299.00'
          paragraph='Your talent and artistry know no bounds. Take your sound further with software and hardware that let you focus on what you do best. Meet Pro Tools' />

        <Card
          alt=''
          img='https://cdn.mos.cms.futurecdn.net/XVTTr5xRMduSFNLbk7bzd9.jpg'
          title='Reason'
          price='$99.99'
          paragraph='From your first beat to your next album, Reason is the music production software that helps you nail those ideas when inspiration strikes. Easy to get started with, yet as deep as you want it to be, Reason’s intuitive music making gadgets and professional production tools will get you off the ground and keep you occupied for a long time to come.' />
      </div>
    );
  }
}

export default DAWSPage;
