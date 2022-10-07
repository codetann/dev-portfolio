import { Transition } from "react-transition-group";
import { useRef } from "react";

interface FadeProps {
  in: boolean;
  timeout: number;
  children: JSX.Element | JSX.Element[];
}

export default function Fade({ in: inProp, timeout, children }: FadeProps) {
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
            transition: `opacity ${timeout}ms ease-in-out`,
            opacity: state === "exited" || state === "exiting" ? 0 : 1,
          }}
        >
          {children}
        </div>
      )}
    </Transition>
  );
}
