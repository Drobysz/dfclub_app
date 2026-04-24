'use client';

import { SiteContext } from "@/app/[locale]/(site)/context/site.context";
import { 
    ProjBtn,
    ProfileIcon
} from "@/components";
import { useTranslations } from "next-intl";
import { useContext } from "react";

export const Profile = ()=> {
    const { session } = useContext(SiteContext);
    const t = useTranslations('header');

    return (
        <>
            {session === null && (
                <ProjBtn
                    size="small"
                    colorSet="gr_lgt"
                    className="shrink-0"
                >
                    {t('enter')}
                </ProjBtn>
            )}

			{session !== null && (
				<ProfileIcon
					src={session.img_url ?? undefined}
					size="middle"
				/>
			)}
        </>
    );
};