const language: string = 'Typescript'
console.log(language)

interface Props {
  language: string
}

function SelectLanguage({ language }: Props) {
  console.log(language)
}

SelectLanguage({ language })
