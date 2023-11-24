import * as React from "react";
import Svg, { G, Path, Defs, ClipPath, Rect } from "react-native-svg";
const SendIcon = (props) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#clip0_1_76)">
      <Path
        d="M22 3L9.21802 10.083"
        stroke="#262626"
        strokeWidth={2}
        strokeLinejoin="round"
      />
      <Path
        d="M11.698 20.334L22 3.001H2L9.218 10.084L11.698 20.334Z"
        stroke="#262626"
        strokeWidth={2}
        strokeLinejoin="round"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_1_76">
        <Rect width={24} height={24} fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SendIcon;
