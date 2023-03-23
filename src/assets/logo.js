import React from "react";

function Logo({color}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="45.957"
      height="14.481"
      version="1.1"
      viewBox="0 0 12.16 3.831"
    >
      <defs>
        <path d="M103.613 12.001H134.938V33.592999999999996H103.613z"></path>
        <path d="M100.211 12.993H132.575V34.112H100.211z"></path>
        <path id="rect835" d="M25.702 48.381H164.797V125.488H25.702z"></path>
      </defs>
      <g fill={color||"#000"} transform="translate(-78.808 -16.66)">
        <text
          fillOpacity="1"
          stroke="none"
          strokeDasharray="none"
          strokeMiterlimit="4"
          strokeWidth="0.6"
          fontFamily="sans-serif"
          fontSize="10.583"
          fontStyle="normal"
          fontWeight="normal"
          letterSpacing="0"
          xmlSpace="preserve"
          style={{ lineHeight: "1.25", whiteSpace: "pre" }}
        >
          <tspan x="25.703" y="58.976">
            <tspan style={{}} fontFamily="Impact" fontStretch="condensed">
              FAUXFLIX
            </tspan>
          </tspan>
        </text>
        <text
          xmlSpace="preserve"
          style={{ lineHeight: "1.25" }}
          x="27.261"
          y="36.349"
          fillOpacity="1"
          stroke="none"
          strokeWidth="0.265"
          fontFamily="sans-serif"
          fontSize="10.583"
          fontStyle="normal"
          fontWeight="normal"
        ></text>
        <ellipse
          cx="33.977"
          cy="25.725"
          fillOpacity="0"
          stroke="none"
          strokeDasharray="none"
          strokeMiterlimit="4"
          strokeOpacity="1"
          strokeWidth="1"
          rx="8.653"
          ry="7.884"
        ></ellipse>
        <ellipse
          cx="29.968"
          cy="30.201"
          fillOpacity="0"
          stroke="none"
          strokeDasharray="none"
          strokeMiterlimit="4"
          strokeOpacity="1"
          strokeWidth="1"
          rx="10.724"
          ry="8.419"
        ></ellipse>
        <ellipse
          cx="39.99"
          cy="33.476"
          fillOpacity="0"
          stroke="none"
          strokeDasharray="none"
          strokeMiterlimit="4"
          strokeOpacity="1"
          strokeWidth="1"
          rx="9.521"
          ry="9.622"
        ></ellipse>
        <g
          fillOpacity="1"
          stroke="#fff"
          strokeDasharray="none"
          strokeMiterlimit="4"
          strokeOpacity="1"
          strokeWidth="0.113"
          ariaLabel="FAUXFLIX"
          fontFamily="Impact"
          fontSize="3.994"
          fontStretch="normal"
          fontStyle="normal"
          fontVariant="normal"
          transform="scale(.88316 1.1323)"
          style={{ lineHeight: "1.25" }}
          fontWeight="normal"
        >
          <path
            d="M89.29 14.77h1.391v.632h-.57v.599h.508v.6h-.507v1.233l-.795.188z"
            style={{ InkscapeFontSpecification: "Impact" }}
          ></path>
          <path
            d="M92.218 14.77l.377 2.668-.747.094-.041-.307h-.295l-.049.348-.877.199.444-3.002zm-.435 1.895c-.041-.358-.083-.663-.125-1.189-.083.604-.135.91-.156 1.189z"
            style={{ InkscapeFontSpecification: "Impact" }}
          ></path>
          <path
            d="M94.695 14.77l-.027 1.453c-.004.24-.007.408-.023.506a.69.69 0 01-.138.298.728.728 0 01-.305.232 1.147 1.147 0 01-.442.078c-.189 0-.355-.031-.5-.094a.751.751 0 01-.324-.243.675.675 0 01-.126-.316c-.013-.112.007.311.007-.045V14.77h.821l-.027 1.71a.898.898 0 00.022.266c.015.038.046.057.091.057.052 0 .086-.021.1-.063.015-.043.02-.143.023-.3l.027-1.67z"
            style={{ InkscapeFontSpecification: "Impact" }}
          ></path>
          <path
            d="M96.677 14.77l-.287 1.021.26 1.448h-.681c-.091-.314-.08-.384-.156-.835-.021.199-.05.41-.086.634l-.065.212h-.786l.27-1.459-.297-1.02h.794c.014.086.043.231.086.434.034.155.062.297.084.425l.175-.86z"
            style={{ InkscapeFontSpecification: "Impact" }}
          ></path>
          <path
            d="M96.94 14.77h1.39v.632h-.569v.38h.507v.6h-.507l-.013.878h-.808z"
            style={{ InkscapeFontSpecification: "Impact" }}
          ></path>
          <path
            d="M99.35 14.77l.041 2.015.5.052v.611l-1.321-.125-.04-2.553z"
            style={{ InkscapeFontSpecification: "Impact" }}
          ></path>
          <path
            d="M100.87 14.77l-.053 2.814-.755-.125-.013-2.689z"
            style={{ InkscapeFontSpecification: "Impact" }}
          ></path>
          <path
            d="M102.864 14.77l-.287 1.397.353 1.855-.694-.167a9.023 9.023 0 01-.236-1.076c-.021.2-.05.41-.086.634l-.078.338-.68-.105.176-1.48-.296-1.396h.794c.014.087.043.232.086.435.033.155.061.297.084.425l.175-.86z"
            style={{ InkscapeFontSpecification: "Impact" }}
          ></path>
        </g>
      </g>
    </svg>
  );
}

export default Logo;
