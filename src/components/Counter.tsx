import VisibilitySensor from "react-visibility-sensor";
import React, { useState } from "react";
import CountUp from "react-countup";

const Counter = ({ ...rest }: any) => {
	const [viewPortEntered, setViewPortEntered] = useState(false);

	return (
		<CountUp
			{...rest}
			start={viewPortEntered ? null : 0}
			end={rest?.endNo}
			duration={2.5}
			suffix={rest.suffix}
		>
			{({ countUpRef }) => {
				return (
					<VisibilitySensor
						active={!viewPortEntered}
						onChange={(isVisible: boolean) => {
							if (isVisible) {
								setViewPortEntered(true);
							}
						}}
						delayedCall
					>
						<span ref={countUpRef} />
					</VisibilitySensor>
				);
			}}
		</CountUp>
	);
};

export default Counter;
