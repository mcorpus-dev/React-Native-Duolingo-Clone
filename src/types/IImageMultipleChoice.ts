interface IImageMultipleChoiceOption {
  id: number;
  image: string;
  text: string;
  isCorrect: boolean;
}

export default interface IImageMultipleChoice {
  id: number;
  type: string;
  question: string;
  options: IImageMultipleChoiceOption[];
}
