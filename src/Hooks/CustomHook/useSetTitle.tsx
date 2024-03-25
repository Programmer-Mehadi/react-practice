interface ITitle {
  title: string
}

const useSetTitle = ({ title = "" }: ITitle) => {
  document.title = title
}

export default useSetTitle
