import { listOfObjects } from "./datas";
import { listOfObjects2 } from "./datas";
import Desc from "./components/Desc";
import Title from "./components/Title";
import Image from "./components/Image";
import Usestateex from "./components/Usestateex";
import Use2 from "./components/Use2";
import Use3 from "./components/Use3";
import Api from "./components/Api";
import Axos from "./components/Axos";

const abjakt = {
  age: 77,
  tsayi: "dauda",
  childre: "sani sabo",
};

const Link = () => {
  return (
    <div>
      <Axos />
      <Api />
      <Use3 />
      <Usestateex />
      <h3 onClick={console.log("Clickerd")}>Click me</h3>
      <Title book="ruwan bagaja" />
      <Title book="suda" />
      <Use2 />

      <Image></Image>
      <Desc
        age={abjakt.age}
        tsayi={abjakt.tsayi}
        children={abjakt.childre}
      ></Desc>

      <section>
        {listOfObjects.map((obj) => {
          return (
            <div key={obj.id}>
              <Ican
                key={obj.id}
                suna={obj.suna}
                lamba={obj.laba}
                gari={obj.gari}
              />
            </div>
          );
        })}
      </section>

      <section>
        {listOfObjects2.map((obj) => {
          return (
            <div key={obj.id}>
              <Desc2 key={obj.id} {...obj} />
            </div>
          );
        })}
      </section>
    </div>
  );
};
const Ican = (props) => (
  <div>
    <h2>Reusable component</h2>
    <p>{props.suna}</p>
    <p>{props.lamba}</p>
    <p>{props.gari}</p>
  </div>
);

function Desc2(props) {
  const cliker = () => {
    console.log(id);
  };
  const cliker2 = (a) => {
    console.log(a);
  };
  const { suna, laba, gari, id } = props;
  return (
    <div className="r2">
      <h2 className="header2">Reusable component 2</h2>
      <p>{suna}</p>
      <p>{laba}</p>
      <p>{gari}</p>
      <button type="button" onClick={cliker()} className="App-link">
        clik
      </button>{" "}
      <button type="button" onClick={() => cliker2(suna)} className="App-link">
        clik2 console
      </button>
    </div>
  );
}
export default Link;
