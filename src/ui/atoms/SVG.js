import React from 'react';

export const icons = {
    bell: "bell"
};

export const SVG = (props) => {
        const  {icon} = props;
    return (
        <>
            {icon === "bell" && (
                <svg
                    viewBox="0 0 28 26"
                    xmlns="http://www.w3.org/2000/svg"
                >
                        <path d="M27.3333 10.32L17.7467 9.49329L14 0.666626L10.2533 9.50663L0.666672 10.32L7.94667 16.6266L5.76 26L14 21.0266L22.24 26L20.0667 16.6266L27.3333 10.32ZM14 18.5333L8.98667 21.56L10.32 15.8533L5.89334 12.0133L11.7333 11.5066L14 6.13329L16.28 11.52L22.12 12.0266L17.6933 15.8666L19.0267 21.5733L14 18.5333Z" />
                </svg>
            )}
        </>
    )
};

export default SVG;
