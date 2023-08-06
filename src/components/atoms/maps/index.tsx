/* eslint-disable jsx-a11y/iframe-has-title */

const MapsEmbed = () => {
  return (
    <div className="w-full rounded-md overflow-hidden shadow-md">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d7921.860176477794!2d107.63101814129041!3d-6.898965022400957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sypkp!5e0!3m2!1sid!2sid!4v1691319650411!5m2!1sid!2sid"
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