const Hobbies = () => {
  const hobbies = ["Volleyball", "Football", "Basketball"];
  const hobbiesXML = (
    <ul>
      <li>{hobbies[0]}</li>
      <li>{hobbies[1]}</li>
      <li>{hobbies[2]}</li>
    </ul>
  );

  const Prohobbies = (
    <ul>
      {hobbies.map((hobby, index) => (
        <li key={index}>{hobby}</li>
      ))}
    </ul>
  );

  return Prohobbies;
};
export default Hobbies;
