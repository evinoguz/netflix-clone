import { baseImgUrl } from "../constants";

const ActorCard = ({ actor }) => {
  return (
    <div className="w-[160px] line-clamp-1">
      <img className="h-[175px]" src={baseImgUrl + actor.profile_path} alt={actor.name} />
      <h2>{actor.original_name}</h2>
      <h2>{actor.character}</h2>
    </div>
  );
};

export default ActorCard;
