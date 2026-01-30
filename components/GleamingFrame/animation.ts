import { Direction } from "./GC.props";

const lightStaticData = "hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%";
export const highlight =
	"radial-gradient(75% 181.15942028985506% at 50% 50%, #3275F8 0%, rgba(255, 255, 255, 0) 100%)";

export const movingMap: Record<Direction, string> = {
	[Direction.top]: `radial-gradient(20.7% 50% at 50% 0%, ${lightStaticData}`,
	[Direction.rightTop]:
	  `radial-gradient(16.2% 41.199999999999996% at 100% 0%, ${lightStaticData}`,
	[Direction.rightCenter]:
	  `radial-gradient(16.2% 41.199999999999996% at 100% 50%, ${lightStaticData}`,
	[Direction.rightBottom]:
	  `radial-gradient(16.2% 41.199999999999996% at 100% 100%, ${lightStaticData}`,
	[Direction.bottom]:
	  `radial-gradient(20.7% 50% at 50% 100%, ${lightStaticData}`,
	[Direction.leftTop]:    `radial-gradient(16.6% 43.1% at 0% 100%, ${lightStaticData})`,
	[Direction.leftCenter]: `radial-gradient(16.6% 43.1% at 0% 50%, ${lightStaticData})`,
	[Direction.leftBottom]: `radial-gradient(16.6% 43.1% at 0% 0%, ${lightStaticData})`,
  };