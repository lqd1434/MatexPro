import * as React from "react"
import {SvgType} from "/@cmp/svg/svg";

const NetworkIcon = (props: SvgType) => (
		<svg
				className="svgIcon"
				width={22}
				height={22}
				// style={{fill:props.fill}}
				viewBox="0 0 1024 1024"
				xmlns="http://www.w3.org/2000/svg"
				{...props}
		>
			<path d="M510.755 0C228.691 0 0 228.69 0 510.755s228.69 510.755 510.755 510.755 510.755-228.69 510.755-510.755S792.82 0 510.755 0zm352.804 361.55c-5.235-4.213-9.577-7.47-10.917-8.81-3.576-3.575-37.158-14.365-40.733-13.088-3.575 1.213-26.368 11.939-26.368 15.514s3.576 23.878 7.215 38.307c3.575 14.365-8.3 63.461-14.365 65.823-5.938 2.363-21.516 26.368-26.304 26.368-2.426 0-4.98-4.405-7.087-8.746 4.852-14.749 7.79-28.603 4.15-39.52-12.833-38.69-48.905-59.312-51.586-67.037-2.618-7.725-36.072-18.004-43.861 0-7.662 18.004-7.662 28.22-36.009 28.22s15.45-33.519 28.347-69.463c12.833-35.945 23.176-10.47 15.45-28.539s10.28-20.621 15.451-30.964c5.108-10.28 20.622 2.554 28.347 0 7.725-2.618 28.347-7.662 28.347-28.028 0-20.302 5.171-10.726 15.45-26.176.575-.894 2.043-1.15 3.128-1.66 48.203 39.264 86.765 89.893 111.345 147.8zM127.69 510.756c0-177.934 122.134-327.522 286.916-370.361.128.127.32.191.447.319 40.158 23.24 78.848-5.108 40.158 23.24-38.625 28.282-49.287 28.282-40.158 38.69 9.194 10.278 11.045 7.66 19.154 15.45 8.172 7.725 13.343 15.45 18.45 28.346 5.108 12.96-60.907 59.312 18.516 18.132 79.422-41.307 81.976-38.69 94.872-43.861 12.96-5.235 31.029 60.588 31.029 60.588l-36.136 109.557h-63.78s-10.982-51.586-13.6 0c-2.553 51.587-5.107 51.587-2.553 77.316 2.553 25.857-2.554 9.449-41.244 49.862-38.626 40.414-64.483 45.585-72.208 45.585s-36.072-10.215-25.793 25.857c10.279 36.072-33.518 56.694 10.279 59.248 43.861 2.617 77.38-20.622 77.38-20.622s28.346-4.788 12.832 20.813c-15.45 25.602-23.175 7.534-41.243 35.945-18.132 28.347-46.415 67.292-85.105 34.923-38.69-32.433-49.032-45.266-56.758-58.163-1.979-3.447-4.98-8.172-8.746-12.832a1.987 1.987 0 0 1-.256-.383c-1.085-1.341-2.17-2.682-3.32-3.959-6.895-8.3-21.387-25.793-21.387-25.793s14.3-14.684 12.64-20.047c-1.723-5.427-13.79-32.37-12.513-36.391 1.34-4.023 6.512-1.341-.064-13.535-6.64-12.067-13.662-32.37 0-48.522 13.6-16.217 3.193-28.41-7.789-12.194s-15.067 19.791-17.748 30.198c-2.746 10.279-1.341 14.365-8.109 18.451-6.767 4.022-16.216 2.681-13.535 10.79s29.688-1.341 9.45 43.095c-20.24 44.563-16.473 50.118-20.176 55.48-3.766 5.427-14.492-10.023-6.512 12.514-.51 1.596-.893 3.448-1.34 5.171-20.494-46.925-32.05-98.575-32.05-152.907z" />
		</svg>
)

export default NetworkIcon
