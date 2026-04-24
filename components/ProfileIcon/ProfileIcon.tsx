'use client';

import { useEffect, useRef, useState } from "react";
import { PIprops } from "./PI.props";
import {
	OuterSpace,
	ProfilePopUp,
	Ring,
	UserImg
} from "./_components";

export const ProfileIcon = ({
	src,
	size = "middle",
	isActive = true
}: PIprops)=> {
	const [isOpen, setOpen] = useState(false);
	const triggerRef = useRef<HTMLDivElement | null>(null);
	const popupRef = useRef<HTMLDivElement | null>(null);

	useEffect(()=>{
		if (!isOpen) return;

		const handleMouseClick = (e: MouseEvent)=> {
			const target = e.target as Node;

			if (
				triggerRef.current?.contains(target) ||
				popupRef.current?.contains(target)
			) {
				return;
			}

			setOpen(false);
		};

		const handleKeyDown = (e: KeyboardEvent)=> {
			if (e.key === 'Escape') {
				setOpen(false);
			}
		};

		document.addEventListener('keydown', handleKeyDown);
		document.addEventListener('mousedown', handleMouseClick);

		return ()=> {
			document.removeEventListener('keydown', handleKeyDown);
			document.removeEventListener('mousedown', handleMouseClick);
		}

	}, [isOpen]);

	return (
		<OuterSpace
			size={size}
			isActive={isActive}
		>
			<Ring
				size={size}
				onClick={()=> setOpen(p => !p)}
				ref={triggerRef}
			>
				<UserImg
					src={src}
					size={size}
				/>
			</Ring>
			{isOpen && <ProfilePopUp ref={popupRef} />}
		</OuterSpace>
	)
}