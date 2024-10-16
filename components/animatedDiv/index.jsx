import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import styled from "styled-components";

const StyledMotionDiv = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const AnimatedDiv = ({
  children,
  initial,
  animate,
  transition,
  threshold = 0.2,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold });

  return (
    <StyledMotionDiv
      ref={ref}
      initial={initial}
      animate={isInView ? animate : {}}
      transition={transition}
    >
      {children}
    </StyledMotionDiv>
  );
};

export default AnimatedDiv;
