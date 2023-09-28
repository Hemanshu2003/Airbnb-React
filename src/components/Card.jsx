import img1 from '../assets/katie-zaferes.png';
import img2 from '../assets/wedding-photography.png';
import img3 from '../assets/mountain-bike.png';
import star from '../assets/star.png';

export default function Card(props) {
  const imgArr = [img1, img2, img3, img1, img3];

  let badgeText;
  if (props.openSpots === 0) {
    badgeText = 'SOLD OUT';
  } else if (props.location === 'Online') {
    badgeText = 'ONLINE';
  }

  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img src={imgArr[props.id - 1]} className="card--image" />
      <div className="card--stats">
        <img src={star} className="card--star" />
        <span>{props.stats.rating}</span>
        <span className="gray">({props.stats.reviewCount}) • </span>
        <span className="gray">{props.location}</span>
      </div>
      <p className="card--title">{props.title}</p>
      <p className="card--price">
        <span className="bold">From ${props.price}</span> / person
      </p>
    </div>
  );
}
