import "./rewards.css";
import Image from "next/image";
import Leafs from "./leafs-img";
import rewardTitle from "/public/Images/rewards/reward.png";
import Lingotes from "./lingo";
const Rewards = () => {
  return (
    <div className="rewards-container" id="rewards">
      <div className="rewards-leaf-container">
        {Leafs.map(({ id, src, alt }) => (
          <Image
            key={id}
            src={src}
            alt={alt}
            className={`rewards-leaf-image image${id}`}
          />
        ))}
      </div>
      <div className="rewards-title-contaier">
        <Image src={rewardTitle} alt="rewardTitle" className="rewards-title" />
      </div>
      <div className="rewards-lingotes-container-outer">
        <div className="rewards-lingotes-container">
          {Lingotes.map(({ id, src, alt, g }) => (
            <div key={id} className="rewards-lingotes-images">
              <Image src={src} alt={alt} />
              <h2>{g}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rewards;
