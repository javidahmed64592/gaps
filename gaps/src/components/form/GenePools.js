import { useDispatch, useSelector } from "react-redux";
import { Stack } from "@mui/system";
import { Typography } from "@mui/material";
import StyledCheckbox from "./StyledCheckbox";
import {
  toggleLowerLetters,
  toggleUpperLetters,
  toggleNumbers,
  togglePunctuation,
  getLowerLetters,
  getUpperLetters,
  getNumbers,
  getPunctuation,
} from "../../state/FormSlice";
import { getColours } from "../../state/ColourSlice";

export default function GenePools() {
  const dispatch = useDispatch();
  const colours = useSelector((state) => getColours(state));

  const lowerLetters = useSelector((state) => getLowerLetters(state));
  const upperLetters = useSelector((state) => getUpperLetters(state));
  const numbers = useSelector((state) => getNumbers(state));
  const punctuation = useSelector((state) => getPunctuation(state));
  const toggleGenePool = (toggle) => dispatch(toggle);

  const genePools = [
    {
      label: lowerLetters.label,
      checked: lowerLetters.checked,
      onChange: () => toggleGenePool(toggleLowerLetters()),
    },
    {
      label: upperLetters.label,
      checked: upperLetters.checked,
      onChange: () => toggleGenePool(toggleUpperLetters()),
    },
    {
      label: numbers.label,
      checked: numbers.checked,
      onChange: () => toggleGenePool(toggleNumbers()),
    },
    {
      label: punctuation.label,
      checked: punctuation.checked,
      onChange: () => toggleGenePool(togglePunctuation()),
    },
  ];

  return (
    <Stack direction="column" justifyContent="center" alignItems="center">
      <Typography
        style={{
          color: colours.primary,
          fontSize: "24px",
        }}
      >
        Gene Pools
      </Typography>
      <Stack direction="column" justifyContent="center" alignItems="flex-start">
        {genePools.map((pool) => {
          return (
            <StyledCheckbox
              label={pool.label}
              checked={pool.checked}
              onChange={pool.onChange}
            />
          );
        })}
      </Stack>
    </Stack>
  );
}
