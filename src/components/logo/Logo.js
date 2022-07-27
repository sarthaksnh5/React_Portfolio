import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  svgHover: {
    fill: theme.palette.foreground.default,
    "&:hover": {
        fill: theme.palette.primary.main,
    },
    transition: "all 0.5s ease",
  },
}));

export const Logo = () => {
    const classes = useStyles();

    return (
      <svg 
        xmlns="http://www.w3.org/2000/svg"
        viewBox="-35 -10 220 220"
        className={classes.svgHover}
      >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_5" data-name="Layer 5">
            <rect className="cls-1" x="2.5" y="25" width="133.85" height="9.9" rx="3.75"/>            
            <rect className="cls-1" x="30.39" y="21.71" width="9.9" height="150.54" rx="3.75" transform="translate(-28.83 48.21) rotate(-60)"/>
            <rect className="cls-1" x="125.6" y="100" width="9.9" height="150.44" transform="translate(175 -60) rotate(65)" />
            <rect className="cls-1" x="125.6" y="100" width="9.9" height="150.44" transform="translate(175 -40) rotate(65)" />
            <rect className="cls-1" x="2.55" y="180" width="133" height="9.9" transform="" />
            {/* <rect className="cls-1" x="78.17" y="39.68" width="9.9" height="201.55" rx="3.75" transform="translate(96.28 -22.22) rotate(35.24)"/> */}
          </g>
        </g>
      </svg>
    );
};
