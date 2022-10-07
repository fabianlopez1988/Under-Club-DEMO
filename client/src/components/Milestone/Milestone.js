import "./Milestone.css";
import tresornight from "../../assets/tresornight.png";
import Bassiani from "../../assets/Bassiani.png";

import tierra from "../../assets/tierra.png";

const Milestone = () => {
  return (
    <div className="milestone-container">
      <div className="grid-milestone">
        <div className="img-milestone-container">
          <img className="tresor-img" src={tresornight} />
        </div>
        <div className="parrafo-container">
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate
            velit esse molestie consequat, vel illum dolore eu feugiat nulla
            facilisis at vero eros et accumsan et iusto odio dignissim qui (4)
          </p>
        </div>
      </div>

      <div className="grid-line">
        <div></div>
        <div className="line"></div>
        <div></div>
      </div>

      <div className="grid-line">
        <div></div>
        <div className="line-one"></div>
        <div></div>
      </div>

      <div className="grid-milestone inversa">
      <div className="parrafo-container">
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate
            velit esse molestie consequat, vel illum dolore eu feugiat nulla
            facilisis at vero eros et accumsan et iusto odio dignissim qui (4)
          </p>
        </div>
        <div className="img-milestone-container-bassiani">
          <img className="bassiani-img" src={Bassiani} />
        </div>
      </div>

      <div className="grid-line">
        <div></div>
        <div className="line-center"></div>
        <div></div>
      </div>

      <div className="grid-line">
        <div></div>
        <div className="line-two"></div>
        <div></div>
      </div>

      <div className="grid-milestone">
      <div className="img-milestone-container">
          <img className="tresor-img" src={tresornight} />
        </div>
        <div className="parrafo-container">
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate
            velit esse molestie consequat, vel illum dolore eu feugiat nulla
            facilisis at vero eros et accumsan et iusto odio dignissim qui (4)
          </p>
        </div>
      </div>

      <div className="grid-line">
        <div></div>
        <div className="line"></div>
        <div></div>
      </div>

      <div className="grid-line">
        <div></div>
        <div className="line-three"></div>
        <div></div>
      </div>

      <div className="grid-milestone inversa">
      <div className="parrafo-container">
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate
            velit esse molestie consequat, vel illum dolore eu feugiat nulla
            facilisis at vero eros et accumsan et iusto odio dignissim qui (4)
          </p>
        </div>
        <div className="img-milestone-container tierras">
          <img className="tierra-img" src={tierra} />
        </div>
      </div>
    </div>
  );
};

export default Milestone;
