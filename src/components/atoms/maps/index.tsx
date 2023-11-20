/* eslint-disable jsx-a11y/iframe-has-title */

const MapsEmbed = () => {
  return (
    <div className="w-full rounded-md overflow-hidden shadow-md">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3960.922192603257!2d107.6401553!3d-6.8999089!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e7bdf3d4cf63%3A0xbdffdbfcfc24163f!2sGraha%20Sangga%20Buana!5e0!3m2!1sid!2sid!4v1700274067280!5m2!1sid!2sid"
        width="100%"
        height="450"
        frameBorder="0"
        aria-hidden="false"
        tabIndex={0}
      >
        Your browser does not support iframe
      </iframe>
    </div>
  );
};

export default MapsEmbed;