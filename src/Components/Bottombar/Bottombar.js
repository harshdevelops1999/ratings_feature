import Search from "../Search/Search";
import cross from "../../Assets/cross.svg";
import "./Bottombar.css";
import Userlist from "../Userlist/Userlist";
function Bottombar(props) {
  console.log(props.renderData);
  return (
    <>
      {props.isEcoc ? (
        <>
          <div className={props.showSlider ? "slider" : "hideSlider"}>
            <div className="header">
              <div className="ecocDetails">
                <div className="ecocCount">
                  {props.renderData.ethicalCodeYesCount}
                </div>
                <div className="ecocText">say has ethical code of condu...</div>
              </div>
              <div
                className="crossIcon"
                onClick={() => props.hideSliderMethod()}
              >
                <img src={cross} width="30px" height="auto" alt="cross " />
              </div>
            </div>
            <Search />
            <div className="userList">
              <Userlist renderData={props.renderData} />
            </div>
          </div>
        </>
      ) : (
        <>
          <div className={props.showSlider ? "slider" : "hideSlider"}>
            <div className="header">
              <div className="ecocDetails">
                <div className="ecocCount">
                  {props.renderData.virtuallyMetYesCount}
                </div>
                <div className="ecocText">have met In real life/video call</div>
              </div>
              <div
                className="crossIcon"
                onClick={() => props.hideSliderMethod()}
              >
                <img src={cross} width="30px" height="auto" alt="cross " />
              </div>
            </div>
            <Search />
            <div className="userList">
              <Userlist renderData={props.renderData} />
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Bottombar;
