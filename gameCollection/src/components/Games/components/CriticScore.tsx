import { Badge } from "@chakra-ui/react";
import { isNullOrUndefined } from "../../../utils/isNullorUndefined";

interface IProps {
  score: number | undefined;
}

const CriticScore = ({ score }: IProps) => {
  if (!score) return null;

  const getScoreColor = () => {
    if (score >= 75) return "green";
    else if (score >= 60 && score < 75) return "yellow";
    else return "";
  };

  return (
    <Badge colorScheme={getScoreColor()} px={"8px"} borderRadius={"4px"}>
      {score}
    </Badge>
  );
};

export default CriticScore;
