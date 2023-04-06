import { Rating } from "@/models";
import { Rating as MuiRating, RatingProps, Tooltip, Typography } from "@mui/material";

export interface RatingStatProps extends Pick<RatingProps, "size"> {
  rating: Rating;
}

export function RatingStat({ rating, size }: RatingStatProps) {
  if (rating.average === null) {
    return <Typography>No ratings</Typography>;
  }
  return (
    <Tooltip title={`${rating.average}/10`}>
      <span>
        <MuiRating
          defaultValue={0}
          value={rating.average}
          precision={0.1}
          max={10}
          readOnly
          size={size}
        />
      </span>
    </Tooltip>
  );
}
