import { useState } from "react";
import styles from "./Colors.module.css";
import DisplayColors from "../DisplayColors/DisplayColors";
import SmallBox from "../SmallBox/SmallBox";
import { colorName, defaultColor } from "./Color";

const Colors = () => {
  const [color, setColor] = useState("");
  const [name, setName] = useState("");

  const colorClickHandler = (clrName) => {
    //console.log("color", clrName);
    setColor(clrName);
  };
  const [colors1, setColors1] = useState(defaultColor);

  const deleteHandler = (clrIndex) => {
    //console.log("delete", clrIndex);
    const colorId = [...colors1];
    colorId.splice(clrIndex, 1);
    setColors1(colorId);
  };

  const smallColorBox = colors1.map((shade, index) => {
    return (
      <SmallBox
        key={index}
        clr={shade}
        clrIndex={index}
        colorClickHandler={colorClickHandler}
        deleteHandler={deleteHandler}
      />
    );
  });

  const buttonClickHandler = () => {
    const name1 = name.trim();
    const name2 = name1.toLocaleLowerCase();
    if (name2.length === 0) {
      alert("Enter valid color name");
      setName("");
    } else if (colorName.includes(name2) === false) {
      alert("This color is not supported");
      setName("");
    } else if (colors1.includes(name2) === true) {
      alert("Color already exit");
      setName("");
    } else {
      setColors1((current) => [...current, name2]);
      setName("");
    }
  };
  return (
    <>
      <div className={styles.head} style={{ color: color }}>
        Your Color is :{color}
      </div>

      <div className={styles.addColor}>
        Add your color :
        <input
          type="text"
          placeholder="Enter color name"
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={name}
        />
        <button onClick={buttonClickHandler}>Add Color</button>
      </div>

      <div>
        <DisplayColors style={{ backgroundColor: color }} />
      </div>
      <div className={styles.align}>{smallColorBox}</div>

      <div className={styles.supported}>
        <h3>Supported Colors:</h3>
        <p>
          AliceBlue, Aqua, Aquamarine, Azure, Beige, Bisque, Black
          ,Blanchedalmond, Blue, Blueviolet, Brown, BurlyWood ,BadetBlue,
          Bhartreuse, Chocolate ,Coral, CornflowerBlue ,Cornsilk ,Crimson, Cyan,
          darkBlue ,DarkCyan, DarkGoldenRod, DarkOrange ,DarkOrchid ,DarkRed,
          DarkSalmon ,DarkSeaGreen, DarkSlateBlue, DarkSlateGray, DarkSlateGrey,
          DarkTurquoise, DarkViolet, DeepPink, DeepSkyBlue ,DimGray ,DimGrey,
          DodgerBlue, FireBrick, FloralWhite, ForestGreen, Fuchsia ,Gainsboro,
          GhostWhite ,Gold ,GoldenRod ,Gray, Grey, Green ,GreenYellow, HoneyDew
          ,HotPink, IndianRed, Indigo ,Ivory, Khaki, Lavender ,LavenderBlush
          ,LawnGreen ,LemonChiffon ,LightBlue, LightCoral, LightCyan
          ,LightGoldenRodYellow ,LightGray, LightGrey ,LightGreen, LightPink,
          LightSalmon ,LightSeaGreen, LightSkyBlue ,LightSlateGray,
          LightSlateGrey ,LightSteelBlue, LightYellow ,Lime ,LimeGreen ,Linen,
          Magenta, Maroon, MediumAquaMarine, MediumBlue ,MediumOrchid
          ,MediumPurple, MediumSeaGreen ,MediumSlateBlue, MediumSpringGreen
          ,MediumTurquoise, MediumVioletRed, MidnightBlue, MintCream ,MistyRose
          ,Moccasin, NavajoWhite ,Navy, OldLace, Olive ,OliveDrab, Orange
          ,OrangeRed, Orchid, PaleGoldenRod, PaleGreen, PowderBlue, Purple,
          RebeccaPurple ,Red, RosyBrown ,RoyalBlue ,SaddleBrown ,Salmon,
          SandyBrown, SeaGreen, SeaShell, Sienna, Silver, SkyBlue, SlateBlue
          ,SlateGray, SlateGrey, Snow, SpringGreen, SteelBlue ,Tan, Teal
          ,Thistle ,Tomato ,Turquoise, Violet Wheat, White, WhiteSmoke ,Yellow,
          YellowGreen.
        </p>
      </div>
    </>
  );
};

export default Colors;
