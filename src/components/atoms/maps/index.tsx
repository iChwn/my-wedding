/* eslint-disable jsx-a11y/iframe-has-title */

const MapsEmbed = () => {
  return (
    <div className="w-full rounded-md overflow-hidden shadow-md">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.8086540638224!2d107.68762451429758!3d-6.913467595004678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68dd470bbbb673%3A0x7a4a3e87704a8c6a!2sPT%20Indah%20Karya%20(Persero)!5e0!3m2!1sen!2sid!4v1657903616493!5m2!1sen!2sid"
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