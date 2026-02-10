import { ReactNode } from "react";
import styles from "./lg.module.scss";
import cn from "classnames";
import { Filter } from "./_components/Filter";

export const LiquidGlass = ({
  children,
  className
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
    	className={cn(
			styles.liquidGlass_wrapper,
			"rounded-4xl px-2"
	)}>
    	<Filter />

		<div className={styles.liquidGlass_effect} />
		<div className={styles.liquidGlass_tint} />
		<div className={styles.liquidGlass_shine} />

    	<div className={cn(
			className,
			styles.liquidGlass_content
		)}>
			{children}
		</div>
    </div>
  );
};