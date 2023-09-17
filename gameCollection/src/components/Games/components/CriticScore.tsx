import { Badge } from "@chakra-ui/react";

interface IProps {
  score: number;
}

const CriticScore = ({ score }: IProps) => {
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
