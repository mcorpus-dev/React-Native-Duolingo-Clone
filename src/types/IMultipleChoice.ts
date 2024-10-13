import IMultipleChoiceOption from "./IMultipleChoiceOption";

export default interface IMultipleChoice {
  id: number;
  type: string;
  question: string;
  options: IMultipleChoiceOption[];
}
