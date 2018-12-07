import styled from "styled-components";
import GroupedSelectionRow from "./GroupedSelectionRow";
import GroupedSelectionItem from "./GroupedSelectionItem";

export default styled.div`
  ${props => {
    const width = props.width || "472px";

    return `
      width: ${width};

      @media (max-width: ${width}) {
        display: flex;
        flex-direction: column;
        width: 100%;
        
        ${GroupedSelectionRow} {
          flex-direction: column;
          height: 100%;
          padding-bottom: 0;

          ${GroupedSelectionItem} {
            border-radius: 5px;
            margin-bottom: 5px;
          }
        }
      }
  `;
  }}
`;
