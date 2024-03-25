import { useMemo, useState } from "react"

const UseMemo = () => {
  const [count, setCount] = useState(1)
  const [allSubjects, setAllSubjects] = useState([
    {
      id: 1,
      mark: (Math.random() * 100).toFixed(2).split(".")[0],
    },
    {
      id: 2,
      mark: (Math.random() * 100).toFixed(2).split(".")[0],
    },
    {
      id: 3,
      mark: (Math.random() * 100).toFixed(2).split(".")[0],
    },
    {
      id: 4,
      mark: (Math.random() * 100).toFixed(2).split(".")[0],
    },
  ])
  const totalMarks = useMemo(() => {
    return calculateTotalMarks(allSubjects)
  }, [allSubjects])

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <p>Total Marks: {totalMarks}</p>
      <button
        onClick={() =>
          setAllSubjects([
            ...allSubjects,
            {
              id: allSubjects.length + 1,
              mark: (Math.random() * 100).toFixed(2).split(".")[0],
            },
          ])
        }
      >
        Add Subject
      </button>
    </div>
  )
}
const calculateTotalMarks = (allSubjects: any) => {
  console.log("calculateTotalMarks")
  return allSubjects.reduce(
    (total: any, subject: any) => total + Number(subject.mark),
    0
  )
}
export default UseMemo
