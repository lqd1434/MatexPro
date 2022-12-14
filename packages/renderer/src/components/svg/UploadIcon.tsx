import * as React from "react"
import { SVGProps } from "react"

const UploadIcon = (props: SVGProps<SVGSVGElement>) => (
		<svg
				className="svgIcon"
				viewBox="0 0 1024 1024"
				xmlns="http://www.w3.org/2000/svg"
				width={200}
				height={200}
				{...props}
		>
			<path
					d="M896 608a32 32 0 0 1 31.85 28.928L928 640v96c0 115.947-93.312 210.133-209.45 213.248l-5.91.085H311.36c-116.885 0-212.139-92.288-215.275-207.466L96 736v-96a32 32 0 0 1 63.85-3.072L160 640v96c0 80.704 64.96 146.603 146.261 149.248l5.12.085H712.64c81.963 0 148.587-64.234 151.275-144.298L864 736v-96a32 32 0 0 1 32-32zM503.979 123.37a32 32 0 0 1 34.752-1.706l2.624 1.707 266.666 192a32 32 0 0 1-34.794 53.61l-2.582-1.685-247.978-178.539-247.979 178.56a32 32 0 0 1-42.73-4.864l-1.92-2.432a32 32 0 0 1 4.842-42.73l2.432-1.92 266.667-192z"
			/>
			<path
					d="M522.667 704a32 32 0 0 1-32-32V181.333a32 32 0 0 1 64 0V672a32 32 0 0 1-32 32z"
			/>
		</svg>
)

export default UploadIcon
