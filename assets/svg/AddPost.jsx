import * as React from "react";
import Svg, { G, Path, Defs, ClipPath, Rect } from "react-native-svg";
const AddPost = (props) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#clip0_1_50)">
      <Path
        d="M2 12V15.45C2 18.299 2.698 19.455 3.606 20.394C4.546 21.303 5.704 22.002 8.552 22.002H15.448C18.296 22.002 19.454 21.302 20.394 20.394C21.302 19.455 22 18.3 22 15.45V8.552C22 5.703 21.302 4.546 20.394 3.607C19.454 2.7 18.296 2 15.448 2H8.552C5.704 2 4.546 2.699 3.606 3.607C2.698 4.547 2 5.703 2 8.552V12Z"
        stroke="#262626"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.54501 12.001H17.455"
        stroke="#262626"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.003 6.545V17.455"
        stroke="#262626"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_1_50">
        <Rect width={24} height={24} fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default AddPost;
