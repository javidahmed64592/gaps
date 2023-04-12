import { useSelector } from "react-redux";
import { Stack } from "@mui/system";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import FormField from "./FormField";
import StyledTextIconButton from "../buttons/StyledTextIconButton";
import { startAlgorithm } from "../../routers/GARouters";
import {
  setGenes,
  setPhrase,
  setMutationRate,
  setPopulationSize,
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
      <FormField label="Phrase" value={phrase} onChangeValue={setPhrase} />
      <FormField label="Genes" value={genes} onChangeValue={setGenes} />
      <FormField
        label="Population Size"
        value={populationSize}
        onChangeValue={setPopulationSize}
      />
      <FormField
        label="Mutation Rate"
        value={mutationRate}
        onChangeValue={setMutationRate}
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
