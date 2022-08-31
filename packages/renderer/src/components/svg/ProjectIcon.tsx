import * as React from "react"
import {SVGProps} from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
		<svg
				className="svgIcon"
				viewBox="0 0 1024 1024"
				xmlns="http://www.w3.org/2000/svg"
				width={200}
				height={200}
				{...props}
		>
			<path d="M410.67 544H133.33A69.33 69.33 0 0 0 64 613.33v277.34A69.33 69.33 0 0 0 133.33 960h277.34A69.33 69.33 0 0 0 480 890.67V613.33A69.33 69.33 0 0 0 410.67 544zM402 842a40 40 0 0 1-40 40H182a40 40 0 0 1-40-40V662a40 40 0 0 1 40-40h180a40 40 0 0 1 40 40zm488.67-298H613.33A69.33 69.33 0 0 0 544 613.33v277.34A69.33 69.33 0 0 0 613.33 960h277.34A69.33 69.33 0 0 0 960 890.67V613.33A69.33 69.33 0 0 0 890.67 544zM882 842a40 40 0 0 1-40 40H662a40 40 0 0 1-40-40V662a40 40 0 0 1 40-40h180a40 40 0 0 1 40 40zM410.67 64H133.33A69.33 69.33 0 0 0 64 133.33v277.34A69.33 69.33 0 0 0 133.33 480h277.34A69.33 69.33 0 0 0 480 410.67V133.33A69.33 69.33 0 0 0 410.67 64zM402 362a40 40 0 0 1-40 40H182a40 40 0 0 1-40-40V182a40 40 0 0 1 40-40h180a40 40 0 0 1 40 40zm292.49 94.18a81.35 81.35 0 0 0 115 0l126.69-126.67a81.35 81.35 0 0 0 0-115L809.51 87.82a81.35 81.35 0 0 0-115 0L567.82 214.49a81.35 81.35 0 0 0 0 115z" />
		</svg>
)

export default SvgComponent
