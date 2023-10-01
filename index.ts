const language: string = "Typescript";
console.log(language);

// using function

interface Props {
  language: string;
}

function SelectLanguage({ language }: Props) {
  console.log(language);
}

SelectLanguage({ language });