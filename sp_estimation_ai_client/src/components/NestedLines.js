import React from "react";

const nestedLinesStyles = {
  table: {
    borderCollapse: "collapse",
    width: "100%",
  },
  td: {
    border: "1px solid black",
    padding: "10px",
    position: "relative",
  },
  before: {
    content: "o",
    height: "100%",
    position: "absolute",
    top: "20px",
    left: "-20px",
    borderLeft: "1px solid black",
    width: "20px",
  },
};

function NestedLines() {
  return (
    <table style={nestedLinesStyles.table}>
      <tr>
        <td style={nestedLinesStyles.td}>
          <div style={nestedLinesStyles.before} />
          Row 1
        </td>
        <td style={nestedLinesStyles.td}>Data 1</td>
      </tr>
      <tr>
        <td style={nestedLinesStyles.td}>
          <div style={nestedLinesStyles.before} />
          Row 2
        </td>
        <td style={nestedLinesStyles.td}>Data 2</td>
      </tr>
    </table>
  );
}

export default NestedLines;
