import { useSelector } from "react-redux";
import { Stack } from "@mui/system";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import StyledTextField from "./StyledTextField";
import StyledNumberField from "./StyledNumberField";
import StyledTextIconButton from "../buttons/StyledTextIconButton";
import { startAlgorithm } from "../../routers/GARouters";
import {
  setGenes,
  setPhrase,
  setMutationRate,
  setPopulationSize,
  incrementPopulationSize,
  decrementPopulationSize,
  incrementMutationRate,
  decrementMutationRate,
  getGenes,
  getPhrase,
  getMutationRate,
  getPopulationSize,
} from "../../state/FormSlice";

export default function GAForm() {
  const genes = useSelector((state) => getGenes(state));
  const phrase = useSelector((state) => getPhrase(state));
  const mutationRate = useSelector((state) => getMutationRate(state));
  const populationSize = useSelector((state) => getPopulationSize(state));

  return (
    <Stack
      direction="column"
      justifyContent="flex-start"
      alignItems="center"
      overflow="auto"
      spacing={2}
      margin={2}
    >
      <StyledTextField
        label="Phrase"
        value={phrase}
        onChangeValue={setPhrase}
      />
      <StyledTextField label="Genes" value={genes} onChangeValue={setGenes} />
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
      <StyledTextIconButton
        variant="outlined"
        startIcon={<PlayArrowIcon />}
        onClick={() =>
          startAlgorithm(phrase, genes, populationSize, mutationRate)
        }
        label={"Start"}
      />
    </Stack>
  );
}
