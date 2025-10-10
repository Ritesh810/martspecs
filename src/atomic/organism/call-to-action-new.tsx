import React, { CSSProperties, ReactNode, memo } from "react";
import _ from "@/i18n/locale";
import ButtonApple from "@/atomic/atom/button-apple";
import ImageI18N from "@/atomic/atom/img-i18n";

interface CallToActionProps {
    /** Main title text (required) */
    title: string;
    /** Optional subtitle text */
    subtitle?: string;
    /** List of items to display */
    textList?: readonly ReactNode[];
    /** Title for the text list */
    textListTitle?: string;
    /** Custom button component */
    button?: ReactNode;
    /** Background color */
    bgColor?: CSSProperties["color"];
    /** Apple App Store app ID */
    appId?: number;
    /** Download button title */
    appDownloadTitle?: string;
    /** Image source URL */
    imgSrc?: string;
    /** Image alt text */
    imgAlt?: string;
    /** Image width */
    imgW?: number;
    /** Image height */
    imgH?: number;
    /** Image position relative to content */
    imgPosition?: "left" | "right";
}

const CallToAction = memo(function CallToAction(props: CallToActionProps): React.ReactElement {
    const { 
        title, 
        subtitle, 
        textList, 
        textListTitle, 
        button, 
        bgColor = "#FFFFFF",
        imgSrc, 
        imgAlt, 
        imgW = 590, 
        imgH = 585, 
        imgPosition = "right",
        appId, 
        appDownloadTitle 
    } = props;

    // Determine column order based on image position
    const isImageLeft = imgPosition === "left";
    const contentOrderClass = isImageLeft ? "order-lg-2" : "order-lg-1";
    const imageOrderClass = isImageLeft ? "order-lg-1" : "order-lg-2";

    return (
        <section 
            className="container my-4" 
            style={{ backgroundColor: bgColor }}
            aria-labelledby="cta-title"
        >
            <div className="row align-items-center justify-content-center">
                <div className={`col-12 text-start col-lg-6 text-lg-start ${contentOrderClass}`}>
                    <h2 
                        id="cta-title" 
                        className="fs-1 fw-medium mb-3"
                    >
                        {_(title)}
                    </h2>

                    {subtitle && (
                        <p className="fs-5 mb-4">{_(subtitle)}</p>
                    )}

                    {textListTitle && (
                        <h3 className="fs-4 mb-3">{_(textListTitle)}</h3>
                    )}

                    {textList && textList.length > 0 && (
                        <ul className="list-unstyled" role="list">
                            {textList.map((item, index) => (
                                <li key={index} className="mb-2" role="listitem">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    )}

                    {appId && appDownloadTitle && (
                        <div className="mb-3 d-flex justify-content-start">
                            <ButtonApple appId={appId} appDownloadTitle={appDownloadTitle} />
                        </div>
                    )}

                    {button && <div className="mt-3">{button}</div>}
                </div>

                {imgSrc && (
                    <div className={`col-12 col-lg-6 mt-4 mt-lg-0 text-center ${imageOrderClass}`}>
                        <ImageI18N
                            src={imgSrc}
                            h={imgH}
                            w={imgW}
                            cls="img-fluid mx-auto d-block"
                            alt={imgAlt || _("Image for") + " " + _(title)}
                        />
                    </div>
                )}
            </div>
        </section>
    );
});

export default CallToAction;
