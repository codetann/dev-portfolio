import { Transition } from "react-transition-group";
import { useRef } from "react";

interface FadeProps {
  in: boolean;
  timeout: number;
  children: JSX.Element | JSX.Element[];
}

const styles: any = {
  entering: { opacity: 0, backdropFilter: "blur(0px)" },
  entered: { opacity: 1, backdropFilter: "blur(5px)" },
  exiting: { opacity: 0, backdropFilter: "blur(0px)" },
  exited: { opacity: 0, backdropFilter: "blur(0px)" },
};

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
            transition: `all ${timeout}ms ease-in-out`,
            position: "absolute",
            height: "100vh",
            width: "100%",
            zIndex: 200,
            background: "red",
            ...styles[state],
          }}
        >
          {children}
        </div>
      )}
    </Transition>
  );
}
