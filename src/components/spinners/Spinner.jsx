import {Transition} from 'react-transition-group';
import {useRef} from 'react';

export default function Spinner() {
    const duration = 500;
    const nodeRef = useRef(null);
    const transitionStyles = {
        entered: {opacity: 1},
        entering: {opacity: 1},
        exiting: {opacity: 0},
        exited: {opacity: 0},
    };
    const defaultStyles = {
        transition: `opacity ${duration}ms ease-in-out`,
    };
    return (
        <Transition timeout={duration} in={true} nodeRef={nodeRef}>
            {status => {
                return (<div style={{...defaultStyles, ...transitionStyles[status]}} ref={nodeRef}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="10em" height="10em" viewBox="0 0 24 24">
                            <g>
                                <rect width="2" height="5" x="11" y="1" fill="#9f0013" opacity="0.14"/>
                                <rect width="2" height="5" x="11" y="1" fill="#9f0013" opacity="0.29"
                                      transform="rotate(30 12 12)"/>
                                <rect width="2" height="5" x="11" y="1" fill="#9f0013" opacity="0.43"
                                      transform="rotate(60 12 12)"/>
                                <rect width="2" height="5" x="11" y="1" fill="#9f0013" opacity="0.57"
                                      transform="rotate(90 12 12)"/>
                                <rect width="2" height="5" x="11" y="1" fill="#9f0013" opacity="0.71"
                                      transform="rotate(120 12 12)"/>
                                <rect width="2" height="5" x="11" y="1" fill="#9f0013" opacity="0.86"
                                      transform="rotate(150 12 12)"/>
                                <rect width="2" height="5" x="11" y="1" fill="#9f0013" transform="rotate(180 12 12)"/>
                                <animateTransform attributeName="transform" calcMode="discrete" dur="0.75s"
                                                  repeatCount="indefinite"
                                                  type="rotate"
                                                  values="0 12 12;30 12 12;60 12 12;90 12 12;120 12 12;150 12 12;180 12 12;210 12 12;240 12 12;270 12 12;300 12 12;330 12 12;360 12 12"/>
                            </g>
                        </svg>
                    </div>

                );
            }}


        </Transition>

    );
}