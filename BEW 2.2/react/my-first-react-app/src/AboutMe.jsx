const name = "Nicholas";

const element = (
  <div className="myDiv" style={{ paddingTop: 10 }}>
    <h1 id="my-heading">My first XML</h1>

    <h2>Hi {name}</h2>
  </div>
);

//aml element like html, but i fyou want to use multiline , u need to use() braket
//id can be declared as per HTML, but others are different
// class -> className , style -> style={{styleKey: value}}
// above is an example
// you can also add variables into your XMl by just using { } curly braket

// Another reason why we use XML , is because we can recycle the elements

const secondElemet = <div>{element}</div>;

const AboutMe = () => {
  return (
    <div>
      <h2>About me </h2>
      <p>Hello! My name is {name} and I'm a web developer</p>
    </div>
  );
};

export default AboutMe;
