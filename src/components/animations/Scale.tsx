import { Transition } from "react-transition-group";
import type { TransitionProps } from "react-transition-group/Transition";
import { useRef } from "react";

interface FadeProps {
  in: boolean;
  timeout: number;
  children: JSX.Element | JSX.Element[];
}

const defaultStyles: any = {
  background: "red",
  width: "100%",
  position: "absolute",
  zIndex: 900,
};

const transitionStyles: any = {
  entering: { opacity: 0, transform: "scale(0.96)" },
  entered: { opacity: 1, transform: "scale(1)" },
  exiting: { opacity: 0, transform: "scale(0.96)" },
  exited: { opacity: 0, transform: "scale(0.96)" },
};

export default function Scale({ in: inProp, timeout, children }: FadeProps) {
  const nodeRef = useRef(null);

  return (
    <Transition
      in={inProp}
      timeout={timeout}
      nodeRef={nodeRef}
      unmountOnExit
      appear
    >
      {(state) => (
        <div
          ref={nodeRef}
          style={{
            ...transitionStyles[state],
            ...defaultStyles,
            transition: `all ${timeout}ms ease-in-out`,
          }}
        >
          {children}
        </div>
      )}
    </Transition>
  );
}
