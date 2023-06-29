import { useMediaQuery } from "utility/helper";
import "./custom.scss"

const ShootingStar = () => {
  const smQuery = useMediaQuery("only screen and (min-width: 700px)");

  return (
    <div className="night">
      <div className="shooting_star"></div>
      <div className="shooting_star"></div>
      <div className="shooting_star"></div>
      <div className="shooting_star"></div>
      <div className="shooting_star"></div>
      <div className="shooting_star"></div>
      <div className="shooting_star"></div>
      <div className="shooting_star"></div>
      <div className="shooting_star"></div>
      <div className="shooting_star"></div>
      <div className="shooting_star"></div>
      <div className="shooting_star"></div>
      {smQuery && (
        <>
          <div className="shooting_star"></div>
          <div className="shooting_star"></div>
          <div className="shooting_star"></div>
          <div className="shooting_star"></div>
          <div className="shooting_star"></div>
          <div className="shooting_star"></div>
          <div className="shooting_star"></div>
          <div className="shooting_star"></div>
        </>
      )}
    </div>
  )
}

export default ShootingStar