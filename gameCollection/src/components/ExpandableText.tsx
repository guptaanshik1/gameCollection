import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface IProps {
  children: string | undefined;
}

const limit: number = 300;

const ExpandableText = ({ children }: IProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  if (!children) return null;

  if (children?.length <= limit) return <Text>{children}</Text>;

  const summary = isExpanded ? children : `${children.substring(0, limit)}....`;

  return (
    <Text>
      {summary}
      <Button ml={1} size="xs" onClick={() => setIsExpanded((prev) => !prev)}>
        {isExpanded ? "Show Less" : "Read More"}
      </Button>
    </Text>
  );
};

export default ExpandableText;
