import { useSelector } from "react-redux";
import { Stack } from "@mui/system";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import StyledTextField from "./StyledTextField";
import StyledNumberField from "./StyledNumberField";
import GenePools from "./GenePools";
import StyledTextIconButton from "../buttons/StyledTextIconButton";
import { startAlgorithm } from "../../routers/GARouters";
import {
  setPhrase,
  setMutationRate,
  setPopulationSize,
  incrementPopulationSize,
  decrementPopulationSize,
  incrementMutationRate,
  decrementMutationRate,
  getPhrase,
  getMutationRate,
  getPopulationSize,
  getPools,
} from "../../state/FormSlice";

export default function GAForm() {
  const phrase = useSelector((state) => getPhrase(state));
  const mutationRate = useSelector((state) => getMutationRate(state));
  const populationSize = useSelector((state) => getPopulationSize(state));
  const genePools = useSelector((state) => getPools(state));

  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={2}
      margin={2}
    >
      <StyledTextField
        label="Phrase"
        value={phrase}
        onChangeValue={setPhrase}
      />
      <StyledNumberField
        label="Population Size"
        value={populationSize}
        onChangeValue={setPopulationSize}
        onDecrementValue={decrementPopulationSize}
        onIncrementValue={incrementPopulationSize}
      />
      <StyledNumberField
        label="Mutation Rate"
        value={mutationRate}
        onChangeValue={setMutationRate}
        onDecrementValue={decrementMutationRate}
        onIncrementValue={incrementMutationRate}
      />
      <GenePools />
      <StyledTextIconButton
        variant="outlined"
        startIcon={<PlayArrowIcon />}
        onClick={() =>
          startAlgorithm(phrase, genePools, populationSize, mutationRate)
        }
        label={"Start"}
      />
    </Stack>
  );
}
