const StudentList = () => {
  
  const students = ['Ridoy', 'Nafees', 'Alok', 'Surya', 'Neeraj', 'Ashish', 'Gurpreet', 'Yousuf']

  return <ol>
    {
      students.map((student) => <li>{student}</li>)
    }
  </ol>;
}

export default StudentList;