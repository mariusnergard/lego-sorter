import styled from 'styled-components';

const StyledFlowContainer = styled.div`
  height: 100%;
  width: 98%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: minmax(40px, 1fr);
  align-items: start;
  
  .title {
    width: calc(100% - 20px);
    padding: 10px;
    border-bottom: solid var(--lightGrey) 1px;
  }
  
  .container {
    width: calc(100% - 20px);
    padding: 10px;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    grid-auto-rows: auto;
    grid-gap: 15px;
    
    .grouped {
      margin-top: -10px;
    } 
  }
  
  .summaryContainer {
    width: calc(100% - 20px);
    padding: 10px;
    display: grid;
    grid-template-columns: max-content max-content;
    grid-template-rows: auto;
    grid-auto-rows: auto;
    grid-gap: 15px;
    justify-items: start;
    align-items: center;
    
    .header {
      grid-column: span 2;
      margin-top: 15px;
    }
    
    .label {
      justify-self: end;
    }
  }

  .container > * {
    margin-top: 10px;
  }
   
  .buttons {
    width: calc(100% - 20px);
    padding: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    
    .next {
      align-self: end;
    }
  }
`;
export default StyledFlowContainer;
