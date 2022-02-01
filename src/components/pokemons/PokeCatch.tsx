import { lazy, useState } from "react";

import { Box } from "../commons/Box";
import PlainButton from "../commons/Button/PlainButton";
import { PokeCatchProps } from "./types";
import styled from "@emotion/styled";

const PokeModal = lazy(
  () => import(/* webpackChunkName: "poke-modal" */ "./PokeModal")
);


export default function PokeCatch({ name, image }: PokeCatchProps) {
  const [result, setResult] = useState<boolean | null>(null);

  const handleGatcha = () => {
    setResult(Math.random() < 0.5);
  };

  return (
      <Box>
        {result !== null && (
          <PokeModal
            result={result}
            handleClose={() => {
              setResult(null);
            }}
            pokemon={{ name, image }}
          />
        )}
        {result === null && (
            <Box
            sx={{
                  position: "fixed",
                  bottom: "1rem",
                  left: "calc(50vw - 75px)",
                }}
              >
               <PlainButton
                  onClick={handleGatcha}
                >
                  <CatchText
                  >
                    Catch
                  </CatchText>
                </PlainButton>
            </Box>
        )}
      </Box>
  );
}


const CatchText = styled.div`
  background-color: #fff;
  border: 1px solid #d5d9d9;
  border-radius: 8px;
  box-shadow: rgba(213, 217, 217, .5) 0 2px 5px 0;
  box-sizing: border-box;
  color: #0f1111;
  display: inline-block;
  font-size: 13px;
  line-height: 50px;
  padding: 0 10px 0 11px;
  right:0;
  margin-right:20px
  position: relative;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: middle;
  width: 150px;
  
`;

// <!-- HTML !-->
// <button class="button-13" role="button">Button 13</button>

// /* CSS */
// .button-13 {
//   background-color: #fff;
//   border: 1px solid #d5d9d9;
//   border-radius: 8px;
//   box-shadow: rgba(213, 217, 217, .5) 0 2px 5px 0;
//   box-sizing: border-box;
//   color: #0f1111;
//   cursor: pointer;
//   display: inline-block;
//   font-family: "Amazon Ember",sans-serif;
//   font-size: 13px;
//   line-height: 29px;
//   padding: 0 10px 0 11px;
//   position: relative;
//   text-align: center;
//   text-decoration: none;
//   user-select: none;
//   -webkit-user-select: none;
//   touch-action: manipulation;
//   vertical-align: middle;
//   width: 100px;
// }

// .button-13:hover {
//   background-color: #f7fafa;
// }

// .button-13:focus {
//   border-color: #008296;
//   box-shadow: rgba(213, 217, 217, .5) 0 2px 5px 0;
//   outline: 0;
// }